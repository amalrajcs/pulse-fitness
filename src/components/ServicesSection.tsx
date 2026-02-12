'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Apple, BarChart3, Users2 } from 'lucide-react';

const services = [
    {
        icon: <ClipboardList className="w-12 h-12 text-neon-primary" />,
        title: "Specialized Programs",
        description: "Precision-built training systems engineered for fat loss, muscle gain, and athletic performance. Every program is structured, progressive, and results-driven — no random workouts."
    },
    {
        icon: <Apple className="w-12 h-12 text-white" />,
        title: "Nutritional Guidance",
        description: "Strategic fueling protocols designed to accelerate recovery, optimize metabolism, and support peak performance. Your results are built as much in the kitchen as in the gym."
    },
    {
        icon: <BarChart3 className="w-12 h-12 text-gray-400" />,
        title: "Data Driven",
        description: "We track performance metrics, progression patterns, and recovery indicators to refine your training in real time — eliminating guesswork and maximizing measurable growth."
    },
    {
        icon: <Users2 className="w-12 h-12 text-neon-primary" />,
        title: "Expert Trainers",
        description: "Performance coaches who design, correct, and optimize every movement. Technical precision, progressive overload, and accountability — without compromise."
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            className="relative group"
                        >
                            {/* Card Glow Layer */}
                            <div className="absolute inset-0 bg-neon-primary/0 group-hover:bg-neon-primary/5 blur-2xl transition-all duration-500 rounded-xl" />

                            <div className="relative bg-zinc-900/50 backdrop-blur-xl p-10 rounded-xl border border-white/5 group-hover:border-neon-primary/30 flex flex-col items-center text-center transition-all duration-500 h-full">
                                {/* Animated Icon Container */}
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: index * 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-colors duration-300"
                                >
                                    {service.icon}
                                </motion.div>

                                {/* Title with Animated Accent Line */}
                                <div className="flex flex-col items-center gap-4 mb-6">
                                    <h3 className="text-xl font-mono font-bold text-white tracking-wide leading-tight uppercase">
                                        {service.title}
                                    </h3>
                                    <motion.div
                                        initial={{ width: "2rem" }}
                                        whileInView={{ width: "4rem" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-1 bg-neon-primary rounded-full group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
                                    />
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed font-Poppins group-hover:text-gray-200 transition-colors">
                                    {service.description}
                                </p>

                                {/* Animated Border Gradient (Subtle) */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Grid Line for continuity with the Bar & Body theme */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
        </section>
    );
}
