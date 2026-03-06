"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Basic Plan",
        subtitle: "Basic (300~500USD Per Month)",
        description: "The basic plans are stylish for small companies and individualities who wish to ameliorate how their brand is represented online. It works for erecting a character and also for repairing online problems that are simpler. It's also applicable for medium- sized businesses in numerous cases, but it may take longer to see results.",
        popular: false,
        cta: "Request Quote",
    },
    {
        name: "Business Plan",
        subtitle: "($1000~3000USD Per month)",
        description: "This is our most popular plan. The professional plan is our fast- track plan designed for small to medium- sized companies that want to ameliorate hunt results at a quicker pace. It provides enough activities to break the most common online reputation problems, similar as suppressing certain content, reducing content visibility, and occasionally fully removing web media links, social media links. There are other activities will be performed in this segment will be discussed as per requirement basis.",
        popular: true,
        cta: "Start Free Analysis",
    },
    {
        name: "Entreprise Plan",
        subtitle: "($3000~5000USD Per month)",
        description: "The enterprise level reputation plan is commissioned by medium to large companies, political face or Public Face, and well- known individualities wishing for discreet services. It's designed to deal with issues on a larger stage, similar as public media, viral media, or numerous other types of settled negative results. It's used for further gruelling issues or snappily erecting a brand online in further competitive diligence.Custom plans Custom reputation operation plans are frequently used by larger brands, transnational brand reputation operation or structure reports, political parties, or well- known individualities. We give complex media results by spanning up our number of devoted and technical coffers.",
        popular: false,
        cta: "Contact Us Now",
    },
];

export default function Pricing() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-accent/30 selection:text-primary">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
                            Transparent, <span className="text-gradient-primary">Tailored Pricing</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Every reputation issue is unique. We don't believe in one-size-fits-all packages. Our pricing is customized based on the complexity and severity of your case.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.5 }}
                                className={`relative rounded-3xl p-8 lg:p-10 flex flex-col ${plan.popular
                                    ? "bg-slate-900 text-white shadow-2xl scale-100 md:scale-105 z-10 border-2 border-accent"
                                    : "bg-white text-slate-900 border border-slate-200 shadow-xl"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
                                        Most Recommended
                                    </div>
                                )}

                                <div className="mb-6 flex-grow">
                                    <h3 className={`text-2xl font-bold mb-2 text-center ${plan.popular ? "text-white" : "text-primary"}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm font-semibold mb-6 text-center ${plan.popular ? "text-accent" : "text-accent"}`}>
                                        {plan.subtitle}
                                    </p>
                                    <p className={`text-[15px] leading-relaxed whitespace-pre-line ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${plan.popular
                                    ? "bg-accent hover:bg-teal-400 text-slate-900 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                                    : "bg-slate-100 hover:bg-slate-200 text-primary border border-slate-200"
                                    }`}>
                                    {plan.cta}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto">
                        <p className="text-slate-500 text-sm">
                            * The packages listed above outline our general approach. Because search engine algorithms and legal requirements vary greatly, a complete free analysis is required before we can provide a final, guaranteed quote.
                        </p>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
