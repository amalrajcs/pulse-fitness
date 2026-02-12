'use client';

import { motion } from 'framer-motion';
import { Zap, Check } from 'lucide-react';
import MagneticButton from './MagneticButton';

const plans = [
    {
        name: "INITIATE",
        price: "150",
        description: "Foundation-level performance development. Build strength, movement control, and structural resilience through disciplined training systems.",
        features: ["3 sessions / week", "Movement & Posture Assessment", "Core Strength Programming", "Progress Tracking Dashboard"],
        popular: false
    },
    {
        name: "ELITE",
        price: "350",
        description: "Advanced performance engineering. Higher training frequency, refined programming, and performance tracking for accelerated progression.",
        features: ["Daily Training Access", "Advanced Strength & Skill Programming", "Recovery Optimization Sessions", "Custom Periodized Plans", "Performance Metrics Tracking"],
        popular: true
    },
    {
        name: "OMEGA",
        price: "850",
        description: "High-performance optimization for serious athletes and executives. Precision coaching, individualized strategy, and full accountability.",
        features: ["Dedicated Performance Coach", "Priority Scheduling & Access", "Personalized Training & Recovery Strategy", "Advanced Body Composition Analysis", "High-Performance Equipment Access"],
        popular: false
    }
];

export default function PricingSection() {
    return (
        <section id="pricing" className="bg-black relative overflow-hidden">
            {/* Header Card */}
            <div className="max-w-[1800px] mx-auto border-x border-white/10">
                <div className="p-12 md:p-20 border-b border-white/10 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-neon-primary" />
                            <span className="text-neon-primary font-black tracking-[0.4em] text-xs uppercase">Investment Layer</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter">
                            THE <span className="text-outline">ACCESS</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-lg max-w-sm font-Poppins font-medium">
                        Access structured systems, advanced protocols, and performance tracking. Choose your module and begin the upgrade.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`p-12 flex flex-col gap-12 border-b md:border-b-0 border-white/10 ${index < 2 ? 'md:border-r' : ''} ${plan.popular ? 'bg-white/5' : ''} group`}
                        >
                            <div className="flex flex-col gap-2">
                                <span className="text-neon-primary font-black tracking-[0.3em] text-[10px] uppercase">
                                    {plan.popular ? 'RECOMMENDED SYSTEM' : 'CORE MODULE'}
                                </span>
                                <h3 className="text-4xl font-black text-white group-hover:text-neon-primary transition-colors uppercase">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-2 mt-4">
                                    <span className="text-7xl font-black text-white text-outline tracking-tighter">${plan.price}</span>
                                    <span className="text-xs font-black text-gray-600 uppercase tracking-widest leading-none">/MONTH</span>
                                </div>
                            </div>

                            <p className="text-gray-400 font-medium leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="flex flex-col gap-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full border border-neon-primary flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-neon-primary rounded-full" />
                                        </div>
                                        <span className="text-xs font-black text-white uppercase tracking-wider">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <MagneticButton className="mt-auto">
                                <button
                                    onClick={() => {
                                        document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`w-full py-8 font-black text-lg uppercase tracking-widest transition-all ${plan.popular ? 'bg-neon-primary text-white' : 'border border-white/10 text-white hover:bg-white hover:text-black'}`}
                                >
                                    INITIALIZE ACCESS
                                </button>
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Grid Line */}
            <div className="w-full h-px bg-white/10" />
        </section>
    );
}
