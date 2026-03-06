"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";

const caseStudies = [
    {
        title: "Executive Reputation Restored in 60 Days",
        category: "Search Engine Suppression",
        icon: TrendingUp,
        description: "Successfully suppressed 12 negative news articles from page 1 to page 4+, replacing them with high-quality, truthful content.",
        metric: "Removed 12 negative search results",
        timeframe: "60 Days",
        resultBefore: "Multiple negative news articles ranking on page 1.",
        resultAfter: "Clean page 1 with 100% positive and neutral assets.",
    },
    {
        title: "Defamatory Blog Posts Suppressed",
        category: "Content Removal",
        icon: ShieldCheck,
        description: "Identified and legally removed anonymous defamatory blog posts severely impacting a local business owner's revenue.",
        metric: "100% of defamatory content removed",
        timeframe: "45 Days",
        resultBefore: "A targeted smear campaign causing massive client loss.",
        resultAfter: "Complete eradication of defamatory content from Google.",
    },
    {
        title: "Fake Brand Reviews Eradicated",
        category: "Review Management",
        icon: CheckCircle2,
        description: "Successfully appealed and removed a coordinated attack of 1-star fake reviews on Google My Business and Trustpilot.",
        metric: "Removed 50+ fake reviews",
        timeframe: "30 Days",
        resultBefore: "Brand rating dropped from 4.8 to 2.1 stars overnight.",
        resultAfter: "Rating restored to 4.9 stars, protecting local reputation.",
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] rounded-full bg-secondary/20 blur-[120px]"></div>
                <div className="absolute -bottom-[300px] -left-[300px] w-[800px] h-[800px] rounded-full bg-accent/20 blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                        >
                            Proven Reputation <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-light">Recovery</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-400"
                        >
                            Real results for real clients. See how we've helped individuals and businesses overcome digital crises.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                    >
                        <a href="#contact" className="inline-flex items-center text-accent hover:text-white font-semibold transition-colors duration-300 group">
                            Start Your Recovery Case
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => {
                        const Icon = study.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-white/20 backdrop-blur-sm"
                            >
                                {/* Category Badge */}
                                <span className="inline-block px-3 py-1 bg-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md mb-6">
                                    {study.category}
                                </span>

                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-accent-light transition-colors">
                                    {study.title}
                                </h3>

                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    {study.description}
                                </p>

                                {/* Highlight Metric Box */}
                                <div className="bg-slate-800/50 rounded-xl p-5 mb-8 border border-slate-700/50 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg">{study.metric}</p>
                                        <p className="text-slate-400 text-sm">Timeline: {study.timeframe}</p>
                                    </div>
                                </div>

                                {/* Before / After */}
                                <div className="space-y-4">
                                    <div className="relative pl-6 border-l-2 border-red-500/50">
                                        <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-red-500"></span>
                                        <p className="text-xs uppercase text-slate-500 font-bold mb-1">Before</p>
                                        <p className="text-slate-300 text-sm line-clamp-2">{study.resultBefore}</p>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-accent/50">
                                        <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent"></span>
                                        <p className="text-xs uppercase text-slate-500 font-bold mb-1">After</p>
                                        <p className="text-white text-sm font-medium">{study.resultAfter}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
