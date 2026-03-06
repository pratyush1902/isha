"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
    const [isVisible, setIsVisible] = useState(false);
    const whatsappNumber = "918448691574"; // Updated number
    const defaultMessage = "Hi, I'm interested in a free reputation analysis.";

    // Show widget after a small delay to not block initial render/animations
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
                >
                    {/* Tooltip bubble */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="bg-white px-4 py-2 rounded-2xl rounded-br-none shadow-lg border border-slate-100 text-sm font-semibold text-slate-700 animate-bounce"
                    >
                        Need Help? Chat with us!
                    </motion.div>

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 group"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />

                        {/* Ping animation effect behind the button */}
                        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping z-[-1]"></div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
