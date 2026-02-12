'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AntiGravityWrapperProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export default function AntiGravityWrapper({ children, className = "", intensity = 30 }: AntiGravityWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const springConfig = { stiffness: 100, damping: 20 };
    const translateX = useSpring(0, springConfig);
    const translateY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const elementCenterX = left + width / 2;
            const elementCenterY = top + height / 2;

            const distanceX = e.clientX - elementCenterX;
            const distanceY = e.clientY - elementCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // Elements float AWAY from cursor
            if (distance < 300) {
                const power = (300 - distance) / 300;
                const moveX = -(distanceX / distance) * power * intensity;
                const moveY = -(distanceY / distance) * power * intensity;
                translateX.set(moveX);
                translateY.set(moveY);
            } else {
                translateX.set(0);
                translateY.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [intensity, translateX, translateY]);

    return (
        <motion.div
            ref={ref}
            style={{ x: translateX, y: translateY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
