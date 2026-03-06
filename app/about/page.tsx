"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Users, Shield, Target, Award } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Cases Resolved", value: "5,000+" },
    { label: "Success Rate", value: "99%" },
    { label: "Countries Served", value: "45+" },
];

const values = [
    {
        icon: Shield,
        title: "Confidentiality First",
        description: "We employ strict NDAs and bank-level security to protect our clients' sensitive information at all times.",
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "We don't do vanity metrics. Our goal is permanent removal or suppression of harmful content—guaranteed.",
    },
    {
        icon: Users,
        title: "Dedicated Experts",
        description: "Working with us means having a dedicated team of legal and technical SEO experts on your side.",
    },
    {
        icon: Award,
        title: "Industry Leaders",
        description: "Ranked among the Top 5 ORM agencies in Asia, recognized for our ethical and effective strategies.",
    },
];

export default function About() {
    return (
        <main className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-sm font-semibold text-primary mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                            About Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
                            Defenders of Your <span className="text-gradient-primary">Digital Identity</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We are a premier Online Reputation Management agency dedicated to helping individuals and businesses reclaim control over their search results and public perception.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                                In today's digital age, your online reputation is your most valuable asset. A single negative article, false review, or defamatory post can cause irreversible personal and financial damage.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Our mission is to level the playing field. We believe that everyone deserves a fair and accurate representation online. Combining legal expertise, technical SEO, and proprietary suppression technology, we aggressively remove harmful content and fortify your digital footprint against future attacks.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] text-center">
                                    <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            The principles that guide our strategy and client relationships.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 text-accent">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
