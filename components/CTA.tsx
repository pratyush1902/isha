"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Deep Gradient Background */}
            <div className="absolute inset-0 bg-primary z-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

                {/* Animated Glow Effects */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-secondary blur-[150px]"
                ></motion.div>

                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[100%] rounded-full bg-accent blur-[150px]"
                ></motion.div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-8"
                >
                    <ShieldCheck className="w-5 h-5 text-accent-light" />
                    <span className="text-white text-sm font-medium tracking-wide">100% Confidential & Secure Process</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight"
                >
                    Take Control of Your <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">Online Reputation Today</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
                >
                    Get a free reputation analysis and discover exactly how we can remove harmful search results, fake reviews, and defamatory content from Google.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <a
                        href="#contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-primary bg-white hover:bg-slate-50 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105"
                    >
                        Start Free Analysis
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </a>

                    <p className="mt-4 sm:mt-0 sm:ml-4 text-sm text-slate-400 font-medium">
                        No obligation. <br className="hidden sm:block" />Strictly confidential.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
