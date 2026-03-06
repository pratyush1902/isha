import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'content', 'blog');

    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);
    return filenames
        .filter(filename => filename.endsWith('.html'))
        .map(filename => ({
            slug: filename.replace(/\.html$/, ''),
        }));
}

async function getBlogPost(slug: string) {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.html`);

    try {
        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Extract metadata
        const getMeta = (attr: string) => {
            const match = fileContents.match(new RegExp(`data-${attr}="([^"]*)"`));
            return match ? match[1] : '';
        };

        // Remove the meta div from the content to be rendered
        const contentWithoutMeta = fileContents.replace(/<div class="blog-meta"[^>]*><\/div>/, '');

        return {
            title: getMeta('title') || 'Untitled',
            category: getMeta('category') || 'Uncategorized',
            date: getMeta('date') || '',
            author: getMeta('author') || '',
            content: contentWithoutMeta,
        };
    } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error);
        return null;
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getBlogPost(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-accent/30 selection:text-primary pt-24">
            <Navbar />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-10 font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-2 text-sm font-bold text-accent mb-6">
                        <Tag className="w-4 h-4" />
                        {post.category}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-500 pb-8 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                {/* 
                  Using prose class from typical tailwind-typography patterns.
                  We add some custom styling to handle standard HTML elements.
                */}
                <div
                    className="prose prose-lg prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-accent prose-blockquote:border-l-accent prose-blockquote:bg-slate-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:font-medium prose-blockquote:text-slate-700/90"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <CTA />
            <Footer />
        </main>
    );
}
