'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface MarqueeProps {
    children: React.ReactNode;
    speed?: number;
    reverse?: boolean;
    className?: string;
}

export default function Marquee({ children, speed = 20, reverse = false, className = "" }: MarqueeProps) {
    return (
        <div className={`flex overflow-hidden select-none gap-8 ${className}`}>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0" }}
                animate={{ x: reverse ? "0" : "-100%" }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex shrink-0 gap-8 min-w-full"
            >
                {children}
            </motion.div>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0" }}
                animate={{ x: reverse ? "0" : "-100%" }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex shrink-0 gap-8 min-w-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
