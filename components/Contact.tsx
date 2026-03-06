"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        target: "",
        issue: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message securely
        const text = `*New Reputation Analysis Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Target:* ${formData.target}\n*Issue:* ${formData.issue || "Not provided"}`;
        const encodedMessage = encodeURIComponent(text);

        // A placeholder number with country code, no +, e.g. 91 for India
        const whatsappNumber = "918448691574";

        // Open WhatsApp directly
        window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            target: "",
            issue: "",
        });
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 relative" >
            {/* Decorative blobs */}
            < div className="absolute top-40 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" ></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info & WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:sticky lg:top-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                            Let's Fix Your <br />
                            <span className="text-gradient">Search Results</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-lg">
                            Fill out the form to request a confidential audit. Our experts will analyze your digital footprint and provide a guaranteed removal strategy.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center p-4 glass rounded-xl border border-white">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Direct Line</p>
                                    <p className="text-lg font-bold text-slate-900">+91 84486 91574</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 glass rounded-xl border border-white">
                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                                    <MessageCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">WhatsApp</p>
                                    <a href="#" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors">
                                        Chat with an Expert
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-2">100% Confidentiality</h3>
                            <p className="text-slate-400 text-sm">
                                We understand the sensitive nature of reputation management. All inquiries are protected by strict non-disclosure agreements.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-8">Request Free Analysis</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none bg-slate-50 focus:bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none bg-slate-50 focus:bg-white"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none bg-slate-50 focus:bg-white"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div>
                                <label htmlFor="target" className="block text-sm font-medium text-slate-700 mb-2">Name or Brand to Analyze</label>
                                <input
                                    type="text"
                                    id="target"
                                    name="target"
                                    required
                                    value={formData.target}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none bg-slate-50 focus:bg-white"
                                    placeholder="e.g. John Doe or Acme Corp"
                                />
                            </div>

                            <div>
                                <label htmlFor="issue" className="block text-sm font-medium text-slate-700 mb-2">Describe the Issue (Optional)</label>
                                <textarea
                                    id="issue"
                                    name="issue"
                                    rows={4}
                                    value={formData.issue}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 outline-none bg-slate-50 focus:bg-white resize-none"
                                    placeholder="E.g. I have 3 negative news articles on page 1 of Google..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:-translate-y-1 group"
                            >
                                Submit Request
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-center text-slate-500 mt-4">
                                By submitting this form, you agree to our Privacy Policy regarding the storage of your data.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
