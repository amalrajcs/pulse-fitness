'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function TransformationSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [parallaxRange, setParallaxRange] = useState(50);
    useEffect(() => {
        if (window.innerWidth < 768) setParallaxRange(25);
    }, []);

    const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const yParallax = useTransform(scrollYProgress, [0, 1], [-parallaxRange, parallaxRange]);

    return (
        <section ref={containerRef} className="py-48 bg-black relative overflow-hidden border-b border-white/10">
            {/* Background Background Brutalist Text */}
            <div className="absolute inset-0 flex flex-col justify-center gap-12 pointer-events-none opacity-[0.03]">
                <motion.h2 style={{ x: x1 }} className="text-[25vw] font-black text-white whitespace-nowrap leading-none">
                    CALISTHENICS MODALITY
                </motion.h2>
                <motion.h2 style={{ x: x2 }} className="text-[25vw] font-black text-outline whitespace-nowrap leading-none">
                    PHYSICAL MASTERY
                </motion.h2>
            </div>

            <div className="max-w-[1800px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative"
                >
                    <motion.div style={{ y: yParallax }} className="relative aspect-[4/5] bg-white/5 border border-white/10 p-8 overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1646072508263-af94f0218bf0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Transformation"
                            className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-700"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                            <span className="text-neon-primary font-black tracking-[0.5em] text-sm mb-6">EST. 2024</span>
                            <h3 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter">
                                ZERO <br /> <span className="text-outline">G-STATE</span>
                            </h3>
                        </div>
                    </motion.div>
                    {/* Decorative Grid Marker */}
                    <div className="absolute -bottom-12 -left-12 w-24 h-24 border-l-2 border-b-2 border-neon-primary" />
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex flex-col gap-12"
                >
                    <div className="flex items-center gap-6">
                        <span className="text-4xl font-black text-white">01.</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter">
                        RECODE <br /> <span className="text-neon-primary text-outline-red">YOUR BIOLOGY</span>
                    </h2>

                    <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-xl">
                        Strength isn’t just muscle — it’s coordination, timing, and neurological efficiency. Our training systems stress your body in unconventional ways to build faster reactions, stronger contractions, and smarter movement.
                    </p>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                        <div>
                            <span className="text-6xl font-black text-white">127%</span>
                            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mt-2">Neural Efficiency Increase</p>
                        </div>
                        <div>
                            <span className="text-6xl font-black text-white text-outline">0.4s</span>
                            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mt-2">Average Reflex Reduction</p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="self-start mt-8 px-16 py-8 bg-neon-primary text-white font-black text-xl hover:bg-white hover:text-black transition-all tracking-widest uppercase"
                    >
                        VIEW PROTOCOLS
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
