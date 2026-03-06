"use client";

import { motion, Variants } from "framer-motion";
import {
    ShieldAlert,
    Search,
    BarChart3,
    Link2Off,
    FileWarning,
    VideoOff,
    StarHalf,
    Eye,
    Building2
} from "lucide-react";

const services = [
    {
        title: "Reputation Repair",
        description: "Restore damaged brand image with strategic content suppression and positive asset creation.",
        icon: ShieldAlert,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Delete Negative Search Results",
        description: "Remove harmful links directly from Google SERPs using legal and technical SEO strategies.",
        icon: Search,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Social Media Monitoring",
        description: "24/7 tracking of brand mentions across all major social platforms to catch issues early.",
        icon: BarChart3,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
    },
    {
        title: "Suppression of Defamatory Links",
        description: "Push negative content off page 1 of search engines out of public view.",
        icon: Link2Off,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
    },
    {
        title: "Negative Content Removal",
        description: "Eradicate false news, defamatory articles, and unauthorized private images online.",
        icon: FileWarning,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        title: "YouTube Video Suppression",
        description: "Handle damaging or copyright-infringing video content affecting your reputation.",
        icon: VideoOff,
        color: "text-red-500",
        bg: "bg-red-500/10",
    },
    {
        title: "Fake Review Removal",
        description: "Contest and remove illegitimate, 1-star reviews from Google Maps, Trustpilot, & Yelp.",
        icon: StarHalf,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
    {
        title: "New Link Monitoring",
        description: "Proactive scanning for newly indexed harmful links before they gain traction.",
        icon: Eye,
        color: "text-slate-500",
        bg: "bg-slate-500/10",
    },
    {
        title: "Competitor Defamation",
        description: "Legal and technical response to smear campaigns launched by business rivals.",
        icon: Building2,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight"
                    >
                        Reputation Management <span className="text-gradient">Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Comprehensive, confidential, and guaranteed solutions to identify, remove, and suppress damaging content across the internet.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white hover:border-accent/30 overflow-hidden"
                            >
                                {/* Hover gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-7 h-7 ${service.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 flex items-center text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                        Learn more <span className="ml-1 leading-none">&rarr;</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
