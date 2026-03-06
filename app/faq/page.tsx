"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "How long does it take to remove a negative link?",
        answer: "The timeline depends on the complexity of the case, the platform hosting the content, and the legal approach required. Simple removals (like fake reviews) can take 2-14 days. Complex content suppression or legal takedowns may take 30-90 days to achieve full resolution. We provide a projected timeline during your initial free analysis.",
    },
    {
        question: "Is content removal guaranteed?",
        answer: "While no ethical ORM firm can guarantee the removal of every single digital asset (as third-party platforms have their own policies), we boast a 90% success rate on cases we accept. If we determine we cannot completely remove a link, our guaranteed suppression strategies will bury it off the first page of search results where it is rarely seen.",
    },
    {
        question: "Do you notify the person who posted the negative content?",
        answer: "In most cases, no. Our technical SEO suppression and back-end reporting strategies are completely confidential and do not involve contacting the author of the defamatory content, which often prevents further aggravation. In cases requiring a formal Cease & Desist, our legal team will handle all correspondence.",
    },
    {
        question: "Is my consultation confidential?",
        answer: "Absolutely. We operate under strict Non-Disclosure Agreements (NDAs). Your name, the details of your case, and the fact that you have hired an ORM agency are kept completely confidential. We never share our clients' information.",
    },
    {
        question: "What is the difference between removal and suppression?",
        answer: "Removal (De-indexing/Takedown) means the content is completely deleted from the host website or Google's search index. Suppression involves creating and promoting high-quality, authoritative positive content that ranks above the negative link, effectively pushing the bad content to page 2 or 3 of Google where 95% of users never look.",
    },
    {
        question: "Do you handle specialized cases like Revenge Porn or Mugshots?",
        answer: "Yes. We have specialized legal and technical teams dedicated to handling sensitive cases involving unauthorized private images (DMCA takedowns), mugshots, and arrest records. These cases are treated with the highest priority and discretion.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-sm font-semibold text-primary mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                            Help Center
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
                            Frequently Asked <span className="text-secondary">Questions</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Clear, transparent answers about our reputation management processes, timelines, and guarantees.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-lg ring-1 ring-accent/20' : 'bg-white hover:bg-slate-50'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                                    >
                                        <span className="text-lg font-bold text-primary pr-8">
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-accent/10 text-accent rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-[15px] border-t border-slate-100 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center bg-slate-50 rounded-3xl p-8 border border-slate-100">
                        <h3 className="text-xl font-bold text-primary mb-3">Still have questions?</h3>
                        <p className="text-slate-600 mb-6">We're here to help. Contact our team for a free, confidential consultation.</p>
                        <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
                            Contact Support Team
                        </Link>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
