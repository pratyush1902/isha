"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-slate-300 pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6 relative w-64 h-20 lg:w-80 lg:h-28">
                            <Image
                                src="/logo-transparent.png"
                                alt="RNA Logo"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                            />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            The industry-leading online reputation management agency specializing in the permanent removal and suppression of negative search results, articles, and reviews.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/expertise" className="hover:text-accent transition-colors">Our Expertise</Link></li>
                            <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
                            <li><Link href="/blog" className="hover:text-accent transition-colors">Industry Blog</Link></li>
                            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Policies</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Data Processing Addendum</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5" />
                                <a href="mailto:info@removenegativearticles.com" className="hover:text-accent transition-colors">
                                    info@removenegativearticles.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5" />
                                <a href="tel:+18001234567" className="hover:text-accent transition-colors">
                                    +1 (800) 123-4567
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5" />
                                <span className="text-slate-400">
                                    Serving clients globally.<br />
                                    Headquartered in New York, NY.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p className="mb-4 md:mb-0">
                        &copy; {currentYear} removenegativearticles.com. All rights reserved.
                    </p>
                    <p>
                        Designed securely for strict reputation management.
                    </p>
                </div>
            </div>
        </footer>
    );
}
