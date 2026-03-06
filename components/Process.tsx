"use client";

import { motion } from "framer-motion";
import { Search, PenTool, ShieldOff, Activity } from "lucide-react";

const steps = [
    {
        title: "Reputation Audit",
        icon: Search,
        description: "We conduct a comprehensive analysis of your digital footprint, identifying negative links, defamatory articles, and fake reviews.",
    },
    {
        title: "Strategy Development",
        icon: PenTool,
        description: "Our experts formulate a customized legal, ethical, and technical SEO action plan targeted at problematic search results.",
    },
    {
        title: "Content Removal / Suppression",
        icon: ShieldOff,
        description: "We execute the strategy—deleting harmful content at the source or suppressing it deep into search engine results pages (SERPs).",
    },
    {
        title: "Continuous Monitoring",
        icon: Activity,
        description: "Post-recovery, our software monitors the web 24/7 to catch and eliminate any new negative content before it ranks.",
    },
];

export default function Process() {
    return (
        <section className="py-16 md:py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
                    >
                        How We <span className="text-gradient-primary">Restore Your Reputation</span>
                    </motion.h2>
                    <p className="text-base md:text-lg text-slate-600">
                        A proven, four-step methodology designed to clean your search results efficiently and permanently.
                    </p>
                </div>

                <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-accent/20 transition-all duration-300 group"
                            >
                                {/* Background Step number */}
                                <div className="text-6xl font-black text-slate-50 absolute right-4 top-4 select-none z-0 transition-colors duration-300 group-hover:text-accent/5">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connecting arrow (hidden on mobile and last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-slate-300 z-20 group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
