"use client";

import { motion } from "framer-motion";
import { Award, Globe2, Lock, Scale, Star } from "lucide-react";

const reasons = [
    {
        title: "12+ Years Experience in ORM",
        description: "A decade of mastering search engine algorithms and legal removal tactics.",
        icon: Star,
    },
    {
        title: "Ranked Among Asia's Top 5 ORM Companies",
        description: "Recognized industry leaders in digital crisis management and brand protection.",
        icon: Award,
    },
    {
        title: "Global Client Base",
        description: "Successfully managing reputations for clients across Asia, UAE, LATAM, South America, and Europe.",
        icon: Globe2,
    },
    {
        title: "Confidential Reputation Recovery Process",
        description: "We operate with strict NDAs. Your privacy and discretion are our highest priority.",
        icon: Lock,
    },
    {
        title: "Ethical SEO & Legal Strategies",
        description: "We employ sustainable, white-hat suppression techniques alongside legitimate legal removal requests.",
        icon: Scale,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0A192F 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                            Why Clients Choose <br />
                            <span className="text-gradient">removenegativearticles<span className="text-secondary">.com</span></span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We don't just push links down; we permanently solve reputation crises using a blend of advanced technology, legal expertise, and unmatched industry experience.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-white bg-primary hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Get Expert Help Today
                        </a>
                    </motion.div>

                    <div className="space-y-6">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                    className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-6 group hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:border-accent/20 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                            {reason.title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
