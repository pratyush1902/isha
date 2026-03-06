"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export interface BlogPost {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    image: string;
    slug: string;
}

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="h-48 w-full relative overflow-hidden">
                                {post.image && post.image.startsWith('bg-') ? (
                                    <div className={`absolute inset-0 ${post.image}`}></div>
                                ) : (
                                    <img
                                        src={post.image || '/images/blog/blog-feature.png'}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                                    <Tag className="w-3 h-3" />
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                </div>

                                <Link href={`/blog/${post.slug}`} className="block group-hover:text-accent transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-secondary group-hover:text-accent transition-colors">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center text-slate-500 py-12">
                        No articles found. Please check back later!
                    </div>
                )}

                {posts.length > 0 && (
                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-secondary hover:text-secondary transition-colors">
                            Load More Articles
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
