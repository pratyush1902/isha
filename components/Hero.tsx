"use client";

import { motion } from 'framer-motion';
import { Search, ShieldAlert, ShieldCheck, ArrowRight } from 'lucide-react';

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

                    {/* Animated Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative lg:h-[600px] w-full flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-lg glass-dark rounded-2xl p-6 shadow-2xl border border-white/10">
                            {/* Fake Chrome Top */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="bg-white/5 rounded flex-1 mx-4 h-6 px-3 flex items-center">
                                    <span className="text-xs text-slate-400 font-mono">google.com/search</span>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="bg-white rounded-full flex items-center px-4 py-3 shadow-sm mb-8">
                                <Search className="h-5 w-5 text-slate-400 mr-3" />
                                <div className="flex-1 bg-slate-100 h-2 rounded animate-pulse"></div>
                            </div>

                            {/* Search Results */}
                            <div className="space-y-6">
                                {/* Result 1 - Being Removed */}
                                <motion.div
                                    initial={{ opacity: 1, x: 0 }}
                                    animate={{ opacity: 0, x: 100 }}
                                    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatDelay: 5 }}
                                    className="bg-red-50/10 rounded-lg p-4 border border-red-500/20 relative overflow-hidden"
                                >
                                    <div className="absolute top-2 right-2 flex items-center text-red-400 text-xs font-semibold">
                                        <ShieldAlert className="w-4 h-4 mr-1" />
                                        Removing...
                                    </div>
                                    <div className="w-48 h-3 bg-slate-600 rounded mb-2"></div>
                                    <div className="w-3/4 h-2 bg-slate-500 rounded mb-2"></div>
                                    <div className="w-2/3 h-2 bg-slate-500 rounded"></div>
                                </motion.div>

                                {/* Result 2 - Positive */}
                                <motion.div
                                    initial={{ y: 0 }}
                                    animate={{ y: -88 }}
                                    transition={{ delay: 3, duration: 0.5, repeat: Infinity, repeatDelay: 5.5 }}
                                    className="bg-white/5 rounded-lg p-4 border border-white/10 relative"
                                >
                                    <div className="absolute top-2 right-2 flex items-center text-accent text-xs font-semibold">
                                        <ShieldCheck className="w-4 h-4 mr-1" />
                                        Protected
                                    </div>
                                    <div className="w-56 h-3 bg-secondary-light rounded mb-2"></div>
                                    <div className="w-full h-2 bg-slate-400 rounded mb-2"></div>
                                    <div className="w-4/5 h-2 bg-slate-400 rounded"></div>
                                </motion.div>

                                {/* Result 3 - New Positive Appearing */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: -88 }}
                                    transition={{ delay: 3.5, duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
                                    className="bg-white/5 rounded-lg p-4 border border-white/10 relative"
                                >
                                    <div className="absolute top-2 right-2 flex items-center text-accent text-xs font-semibold">
                                        <ShieldCheck className="w-4 h-4 mr-1" />
                                        Verified
                                    </div>
                                    <div className="w-52 h-3 bg-accent rounded mb-2"></div>
                                    <div className="w-11/12 h-2 bg-slate-400 rounded mb-2"></div>
                                    <div className="w-full h-2 bg-slate-400 rounded"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
