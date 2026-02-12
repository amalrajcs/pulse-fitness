'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const links = [
    { name: 'Infrastructure', href: '#services' },
    { name: 'Recode', href: '#transformation' },
    { name: 'Access', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Squad', href: '#community' },
    { name: 'Terminal', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black border-white/10' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-[1800px] mx-auto px-6 h-24 flex items-center justify-between border-x border-white/10">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <div className="w-10 h-10 bg-neon-primary flex items-center justify-center">
                        <Zap className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">PULSE.</span>
                </motion.div>

                {/* desktop Links */}
                <div className="hidden lg:flex items-center gap-12">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-neon-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-neon-primary hover:text-white transition-all"
                    >
                        INITIALIZE
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-24 bg-black z-40 lg:hidden px-6 py-12 flex flex-col gap-8 border-t border-white/10"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-black uppercase tracking-tighter text-white hover:text-neon-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-auto pb-12">
                            <button
                                onClick={() => {
                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                    setMobileMenuOpen(false);
                                }}
                                className="w-full py-8 bg-white text-black font-black text-xl uppercase tracking-widest"
                            >
                                INITIALIZE
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
