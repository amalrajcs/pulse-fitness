'use client';

import { motion } from 'framer-motion';
import { Send, Zap, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-black relative overflow-hidden border-t border-white/10 font-sans">
            <div className="max-w-[1800px] mx-auto border-x border-white/10">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side: Branding & Contact Info */}
                    <div className="p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between gap-16">
                        <div>
                            <div className="flex items-center gap-3 mb-16">
                                <div className="w-10 h-10 bg-neon-primary flex items-center justify-center">
                                    <Zap className="text-white w-6 h-6 fill-white" />
                                </div>
                                <span className="text-3xl font-oswald font-bold tracking-tight text-white uppercase italic">PULSE.</span>
                            </div>

                            <h2 className="text-[clamp(4rem,10vw,8rem)] font-oswald font-bold text-white leading-[0.85] tracking-tight mb-20 flex flex-col">
                                <span>READY TO</span>
                                <span className="text-outline">RECODE?</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase font-sans">Neural Link</span>
                                    <a href="mailto:sync@pulse.io" className="text-xl font-mono font-bold text-white hover:text-neon-primary transition-colors tracking-wide">www.pulsefitness.in</a>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase font-sans">Direct Frequency</span>
                                    <a href="tel:+1888ZEROGRAV" className="text-xl font-mono font-medium text-white hover:text-neon-primary transition-colors uppercase tracking-wide">+91 70105-94798</a>
                                </div>
                                <div className="flex flex-col gap-3 md:col-span-2">
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase font-sans">Base Sector</span>
                                    <p className="text-xl font-mono font-bold text-white  tracking-wide">Pulse Fitness Arena, No 24, 3rd Floor, Velachery, Chennai – 600042, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Signals */}
                        <div className="flex flex-wrap gap-8 pt-10 border-t border-white/10">
                            {[
                                { name: 'INSTAGRAM', icon: <Instagram size={18} />, href: 'https://www.instagram.com/ar_amal_raj/' },
                                { name: 'TWITTER', icon: <Twitter size={18} />, href: '#' },
                                { name: 'YOUTUBE', icon: <Youtube size={18} />, href: '#' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target='_blank'
                                    className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-white transition-all group font-sans"
                                >
                                    <span className="group-hover:text-neon-primary transition-colors">{social.icon}</span>
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Terminal / Form */}
                    <div className="p-12 md:p-20 flex flex-col justify-center bg-[#070707]">
                        <div className="max-w-xl w-full">
                            <div className="flex items-center gap-4 mb-16">
                                <div className="h-px w-10 bg-neon-primary" />
                                <span className="text-neon-primary font-bold tracking-[0.3em] text-xs uppercase font-sans">Transmission Interface</span>
                            </div>

                            <form className="flex flex-col gap-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                    <div className="flex flex-col gap-5">
                                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-sans">Identification</label>
                                        <input
                                            type="text"
                                            placeholder="PILOT NAME"
                                            className="bg-transparent border-b border-white/5 py-4 text-2xl font-mono font-bold text-white focus:outline-none focus:border-neon-primary transition-colors placeholder:text-zinc-800 tracking-wide rounded-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-sans">ACCESS CHANNEL</label>
                                        <input
                                            type="email"
                                            placeholder="SECURE EMAIL"
                                            className="bg-transparent border-b border-white/5 py-4 text-2xl font-mono font-bold text-white focus:outline-none focus:border-neon-primary transition-colors placeholder:text-zinc-800 tracking-wide rounded-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-sans">Intentions</label>
                                    <textarea
                                        rows={2}
                                        placeholder="BROADCAST YOUR PROTOCOLS"
                                        className="bg-transparent border-b border-white/5 py-4 text-2xl font-mono font-bold text-white focus:outline-none focus:border-neon-primary transition-colors placeholder:text-zinc-800 resize-none tracking-wide leading-none rounded-none"
                                    />
                                </div>

                                <div className="pt-8">
                                    <button className="px-14 py-7 bg-white text-black font-Poppins font-bold text-lg hover:bg-neon-primary hover:text-white transition-all tracking-[0.1em] uppercase shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-none">
                                        ENGAGE PROTOCOL
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Sub-Footer: Copyright & Legal */}
                <div className="px-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 bg-black">
                    <p className="text-[9px] font-bold text-gray-800 tracking-[0.4em] uppercase font-sans">
                        © 2026 PULSE FITNESS. OPERATIONAL SYSTEMS SECURED.
                    </p>
                    <div className="flex gap-10">
                        {['TERMS of Service', 'PRIVACY Protocol', 'COOKIES'].map((link) => (
                            <a key={link} href="#" className="text-[9px] font-bold text-gray-600 hover:text-white transition-colors uppercase tracking-[0.2em] font-sans">{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
