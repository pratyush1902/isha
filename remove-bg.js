const Jimp = require('jimp');

async function processLogo() {
    try {
        const image = await Jimp.read('public/new-logo.jpg');
        // Get background color from the edges
        const bgColor = image.getPixelColor(10, 10);
        const bgRGBA = Jimp.intToRGBA(bgColor);

        console.log(`Detected background color: RGB(${bgRGBA.r}, ${bgRGBA.g}, ${bgRGBA.b})`);

        // Increased tolerance for JPG compression artifacts
        const tolerance = 45;

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // If it's close to the background color, make it transparent
            if (
                Math.abs(r - bgRGBA.r) <= tolerance &&
                Math.abs(g - bgRGBA.g) <= tolerance &&
                Math.abs(b - bgRGBA.b) <= tolerance
            ) {
                // Full transparency
                this.bitmap.data[idx + 3] = 0;
            } else {
                // Simple manual anti-aliasing edge softening
                const dist = Math.sqrt(
                    Math.pow(r - bgRGBA.r, 2) +
                    Math.pow(g - bgRGBA.g, 2) +
                    Math.pow(b - bgRGBA.b, 2)
                );

                if (dist <= tolerance + 20) {
                    // Soften edges that are close but not quite background
                    const alpha = Math.max(0, Math.min(255, Math.floor(((dist - tolerance) / 20) * 255)));
                    this.bitmap.data[idx + 3] = alpha;
                }
            }
        });

        await image.writeAsync('public/logo-transparent.png');
        console.log('Successfully saved transparent logo to public/logo-transparent.png');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

processLogo();
