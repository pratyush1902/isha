"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from 'next/dynamic';

// Dynamically import Globe to avoid SSR issues with canvas
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    title: string;
}

const Counter = ({ end, duration = 2, suffix = "", title }: CounterProps) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            controls.start({
                transition: { duration, ease: "easeOut" }
            });

            let startTimestamp: number;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, end, duration, controls]);

    return (
        <div ref={ref} className="text-center p-6 glass rounded-2xl border border-white/20 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <motion.div
                animate={controls}
                className="text-4xl md:text-5xl font-extrabold text-primary mb-2 flex justify-center items-center"
            >
                {count}
                <span className="text-accent ml-1">{suffix}</span>
            </motion.div>
            <p className="text-slate-600 font-medium text-sm md:text-base uppercase tracking-wider">{title}</p>
        </div>
    );
};

// Global coordinates for the markets mentioned
const locations = [
    { lat: 34.0479, lng: 100.6197, name: 'Asia' },
    { lat: 23.4241, lng: 53.8478, name: 'UAE' },
    { lat: -14.2350, lng: -51.9253, name: 'South America' },
    { lat: 51.1657, lng: 10.4515, name: 'Europe' },
];

export default function TrustMetrics() {
    const metrics = [
        { end: 12, suffix: "+", title: "Years Experience" },
        { end: 1000, suffix: "+", title: "Clients Served" },
        { end: 20, suffix: "+", title: "Industries Covered" },
        { end: 99, suffix: "%", title: "Success Rate" },
    ];

    // Setup rotating globe effect
    const globeRef = useRef<any>(null);

    useEffect(() => {
        if (globeRef.current) {
            // Auto-rotate
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 1.5; // Slightly faster rotation
        }
    }, []);

    // Custom HTML marker for the globe
    const markerHtml = `
      <div style="
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#14B8A6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
    `;

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Trusted By Global Brands & Individuals</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {metrics.map((metric, idx) => (
                        <Counter key={idx} {...metric} />
                    ))}
                </div>

                {/* Global Reach Row & Globe */}
                <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center">
                    <p className="text-slate-500 mb-6 font-medium text-center">Serving Clients Across Global Markets</p>
                    <div className="flex flex-wrap justify-center gap-4 text-slate-400 font-semibold text-sm md:text-base cursor-default mb-12">
                        <span className="px-4 py-2 rounded-full glass hover:text-primary transition-colors">Asia</span>
                        <span className="px-4 py-2 rounded-full glass hover:text-primary transition-colors">UAE</span>
                        <span className="px-4 py-2 rounded-full glass hover:text-primary transition-colors">LATAM</span>
                        <span className="px-4 py-2 rounded-full glass hover:text-primary transition-colors">South America</span>
                        <span className="px-4 py-2 rounded-full glass hover:text-primary transition-colors">Europe</span>
                    </div>

                    <div className="relative w-full max-w-lg mx-auto flex justify-center items-center rounded-full bg-slate-50 shadow-inner p-8 cursor-grab active:cursor-grabbing">
                        <div className="opacity-80 mix-blend-multiply">
                            <Globe
                                ref={globeRef}
                                height={350}
                                width={350}
                                backgroundColor="rgba(0,0,0,0)"
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                htmlElementsData={locations}
                                htmlElement={(d) => {
                                    const el = document.createElement('div');
                                    el.innerHTML = markerHtml;
                                    return el;
                                }}
                            />
                        </div>

                        {/* Decorative glow behind globe */}
                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
