import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import fs from "fs";
import path from "path";
import BlogGrid, { BlogPost } from "@/components/BlogGrid";

async function getBlogPosts(): Promise<BlogPost[]> {
    const postsDirectory = path.join(process.cwd(), 'content', 'blog');

    try {
        if (!fs.existsSync(postsDirectory)) {
            return [];
        }

        const filenames = fs.readdirSync(postsDirectory);

        const posts = filenames
            .filter(filename => filename.endsWith('.html'))
            .map(filename => {
                const filePath = path.join(postsDirectory, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');

                // Extract metadata from the data attributes
                const getMeta = (attr: string) => {
                    const match = fileContents.match(new RegExp(`data-${attr}="([^"]*)"`));
                    return match ? match[1] : '';
                };

                return {
                    slug: filename.replace(/\.html$/, ''),
                    title: getMeta('title') || 'Untitled',
                    excerpt: getMeta('excerpt') || '',
                    category: getMeta('category') || 'Uncategorized',
                    date: getMeta('date') || '',
                    author: getMeta('author') || '',
                    image: getMeta('image') || 'bg-slate-100',
                };
            });

        // Sort posts by date descending (simple sort, assuming standard date string)
        return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    } catch (error) {
        console.error("Error reading blog posts:", error);
        return [];
    }
}

export default async function Blog() {
    const posts = await getBlogPosts();

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-accent/30 selection:text-primary">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-white">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
                            Insights & <span className="text-gradient-primary">Resources</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Expert advice, industry news, and strategic guides on protecting and restoring your online reputation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid Client Component */}
            <BlogGrid posts={posts} />

            <CTA />
            <Footer />
        </main>
    );
}
