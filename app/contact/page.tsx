"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary pt-20">
            <Navbar />

            {/* We reuse the existing Contact component but wrap it in a page layout */}
            <div className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
                            Get in <span className="text-accent">Touch</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Our team is ready to analyze your search results and provide a confidential, guaranteed removal strategy.
                        </p>
                    </motion.div>
                </div>

                <ContactForm />
            </div>

            <Footer />
        </main>
    );
}
