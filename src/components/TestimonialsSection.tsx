'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
    {
        name: "AMAL RAJ A",
        role: "PROFESSIONAL ATHLETE",
        content: "Pulse rebuilt my strength from the ground up. My recovery improved, my speed increased, and I feel more explosive in competition.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Karan Mehta",
        role: "National Level Athlete",
        content: "The structure, the coaching, the progression — everything is engineered. I’m stronger, faster, and more durable than I’ve ever been.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1613687009630-291df2af2c48?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Raj",
        role: "Founder & CEO",
        content: "The precision in programming and accountability changed how I train. My energy, focus, and physical performance have significantly improved.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export default function TestimonialsSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [parallaxRange, setParallaxRange] = useState(["-20%", "20%"]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setParallaxRange(["-10%", "10%"]);
            } else {
                setParallaxRange(["-20%", "20%"]);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Parallax effect: 50% speed relative to scroll (reduced on mobile)
    const y = useTransform(scrollYProgress, [0, 1], parallaxRange);

    return (
        <section ref={containerRef} id="community" className="bg-black relative overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 top-[-20%] h-[140%] w-full"
                >
                    <div className="absolute inset-0 bg-black/80 z-10" /> {/* Interaction overlay */}
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                </motion.div>
            </div>

            <div className="max-w-[1800px] mx-auto border-x border-white/10 relative z-10">
                {/* Header Section */}
                <div className="p-12 md:p-20 border-b border-white/10 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-neon-primary" />
                            <span className="text-neon-primary font-black tracking-[0.4em] text-xs uppercase">Proof of Force</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter">
                            THE <span className="text-outline">SQUAD</span>
                        </h2>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
                    {/* Featured Testimonial (Large) - Slide In Left */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: true }}
                        className="md:col-span-2 p-12 md:p-20 border-b md:border-r border-white/10 relative overflow-hidden group"
                    >
                        <img
                            src={testimonials[0].image}
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                            alt="ATHLETE"
                        />
                        <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                            <Quote className="w-16 h-16 text-neon-primary opacity-50" />
                            <p className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase max-w-4xl">
                                "{testimonials[0].content}"
                            </p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="text-2xl font-black text-white uppercase">{testimonials[0].name}</h4>
                                    <p className="text-xs font-black text-neon-primary tracking-[0.3em] uppercase mt-2">{testimonials[0].role}</p>
                                </div>
                                <div className="flex gap-2">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller Testimonial 1 - Slide In Right */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="p-12 border-b border-white/10 flex flex-col justify-between gap-12 group"
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 p-4">
                                <Quote className="w-full h-full text-white/20" />
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-neon-primary text-neon-primary" />)}
                            </div>
                        </div>
                        <p className="text-xl font-bold text-gray-300 uppercase leading-relaxed italic">
                            "{testimonials[1].content}"
                        </p>
                        <div className="pt-8 border-t border-white/10">
                            <h4 className="font-black text-white uppercase">{testimonials[1].name}</h4>
                            <p className="text-[10px] font-black text-gray-500 tracking-widest uppercase mt-1">{testimonials[1].role}</p>
                        </div>
                    </motion.div>

                    {/* Small Call to Action / Stat Card - Slide In Left for Balance */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: true }}
                        className="p-12 border-b md:border-r border-white/10 bg-white text-black flex flex-col justify-between gap-12"
                    >
                        <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">BUILT FOR <br /> HIGH STANDARDS </h3>
                        <div>
                            <span className="text-8xl font-black leading-none">1,200+</span>
                            <p className="text-xs font-black tracking-[0.2em] uppercase mt-2">TRANSFORMATIONS</p>
                        </div>
                        <button
                            onClick={() => {
                                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full py-6 bg-black text-white font-black text-sm tracking-widest uppercase hover:bg-neon-primary transition-colors"
                        >
                            CLAIM YOUR SPOT
                        </button>
                    </motion.div>

                    {/* Smaller Testimonial 2 - Slide In Right */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="md:col-span-2 p-12 md:p-20 border-b border-white/10 relative overflow-hidden group"
                    >
                        <img
                            src={testimonials[2].image}
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:opacity-30 transition-opacity duration-700"
                            alt="ATHLETE"
                        />
                        <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                            <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight uppercase max-w-4xl">
                                "{testimonials[2].content}"
                            </p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="text-xl font-black text-white uppercase">{testimonials[2].name}</h4>
                                    <p className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mt-1">{testimonials[2].role}</p>
                                </div>
                                <div className="h-px flex-1 bg-white/10 mx-12 hidden md:block" />
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-neon-primary text-neon-primary" />)}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
