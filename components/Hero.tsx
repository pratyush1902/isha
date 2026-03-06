"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
            {/* Background Animated Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-sm font-semibold text-primary mb-6"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                            Top 5 ORM Agency in Asia
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
                            Remove Negative Articles From Google & <span className="text-gradient">Protect Your Online Reputation</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            12+ Years of Experience helping individuals and businesses remove harmful search results, fake reviews, and defamatory content permanently.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-primary hover:bg-primary-light transition-all duration-300 shadow-[0_4px_14px_0_rgba(10,25,47,0.39)] hover:shadow-[0_6px_20px_rgba(10,25,47,0.23)] hover:-translate-y-0.5"
                            >
                                Get Free Reputation Analysis
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-primary bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                            >
                                Explore Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Comparison Image Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative w-full flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-2xl group">
                            {/* Decorative background glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                            {/* Main Image Container */}
                            <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                                <Image
                                    src="/hero.png"
                                    alt="ORM Comparison: Negative Results vs Positive Results"
                                    width={1200}
                                    height={800}
                                    className="rounded-xl w-full h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 hidden lg:block"
                            >
                                <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-800">100% Guaranteed</p>
                                        <p className="text-[10px] text-slate-500">Legal Removal</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
