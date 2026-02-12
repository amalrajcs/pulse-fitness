'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
    {
        url: "https://images.pexels.com/photos/13122468/pexels-photo-13122468.jpeg",
        title: "KINETIC",
        subtitle: "NEURAL MASTERY",
        size: "row-span-2 col-span-2"
    },
    {
        url: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1000&auto=format&fit=crop",
        title: "VOID",
        subtitle: "ZERO-G STATE",
        size: "row-span-1 col-span-1"
    },
    {
        url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
        title: "FOCUS",
        subtitle: "BIOMETRIC ACCURACY",
        size: "row-span-1 col-span-1"
    },
    {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
        title: "POWER",
        subtitle: "HIGH-IMPACT FORCE",
        size: "row-span-1 col-span-2"
    },
    {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
        title: "CORE",
        subtitle: "PHYSICAL ANATOMY",
        size: "row-span-1 col-span-1"
    },
    {
        url: "https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "STEEL",
        subtitle: "BRUSHED TEXTURE",
        size: "row-span-1 col-span-1"
    },
    {
        url: "https://images.unsplash.com/photo-1625151936268-e1ffba534f20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "IRON CORE",
        subtitle: "FORGED PERFORMANCE",
        size: "row-span-1 col-span-2"
    }
];

export default function GallerySection() {
    return (
        <section id="gallery" className="bg-black relative overflow-hidden border-b border-white/10">
            <div className="max-w-[1800px] mx-auto border-x border-white/10">
                {/* Header Information */}
                <div className="p-12 md:p-20 border-b border-white/10 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-neon-primary" />
                            <span className="text-neon-primary font-black tracking-[0.4em] text-xs uppercase">Visual Documentation</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter">
                            THE <span className="text-outline">GALLERY</span>
                        </h2>
                    </div>
                </div>

                {/* Imagery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[400px]">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={`relative overflow-hidden group border border-white/5 ${img.size}`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-out"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <motion.div
                                    initial={{ y: 20 }}
                                    whileHover={{ y: 0 }}
                                    className="flex flex-col gap-2"
                                >
                                    <span className="text-neon-primary font-black tracking-[0.3em] text-[10px] uppercase">{img.subtitle}</span>
                                    <h4 className="text-4xl font-black text-white leading-none tracking-tighter uppercase">{img.title}</h4>
                                </motion.div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 border-t-2 border-r-2 border-neon-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
