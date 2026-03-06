"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import {
    ShieldCheck,
    Activity,
    FileMinus,
    MessageSquareX,
    Layers,
    Scale,
    ServerCrash
} from "lucide-react";

const expertiseAreas = [
    {
        icon: ShieldCheck,
        title: "Reputation Management",
        description: "Comprehensive strategies designed to repair, build, and maintain a positive digital footprint for individuals and brands.",
    },
    {
        icon: Activity,
        title: "Reputation Monitoring",
        description: "24/7 proactive tracking of your brand mentions across the web to catch and neutralize threats before they escalate.",
    },
    {
        icon: FileMinus,
        title: "Content Removal",
        description: "Aggressive legal and technical takedowns of defamatory articles, unauthorized images, and false blog posts from the source.",
    },
    {
        icon: MessageSquareX,
        title: "Review Removal",
        description: "Contesting and removing illegitimate, fake, or policy-violating 1-star reviews from Google, Trustpilot, Glassdoor, and others.",
    },
    {
        icon: Layers,
        title: "Suppression / Temporary Removal",
        description: "Pushing negative content off the first pages of search results by engineering highly authoritative positive content.",
    },
    {
        icon: Scale,
        title: "Court Record Removal",
        description: "Specialized de-indexing and removal of old arrest records, mugshots, and court documents that misrepresent your current character.",
    },
    {
        icon: ServerCrash,
        title: "Complaint Sites Removal",
        description: "Targeted removal strategies tailored for notorious complaint aggregator websites and anonymous forums.",
    },
];

export default function Expertise() {
    return (
        <main className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-semibold mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                            Our Expertise
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Specialized <span className="text-accent">Reputation Recovery</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            We don't just do basic SEO. Our team tackles the most complex and stubborn reputation crises on the internet.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Expertise Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertiseAreas.map((area, idx) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {area.description}
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
