'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, SpotLight, Text, Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { HighDefinitionDumbbell } from './HeroNeon';
import Lightning from './Lightning';

function RotatingDumbbell({ progress }: { progress: number }) {
    const ref = useRef<THREE.Group>(null);
    const lightRef = useRef<THREE.SpotLight>(null);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();

        const speedMultiplier = 1 + (progress / 100);
        ref.current.rotation.y += 0.02 * speedMultiplier;
        ref.current.rotation.z = Math.sin(t * 0.5) * 0.1;

        if (lightRef.current) {
            lightRef.current.intensity = 2000 + Math.sin(t * 10) * 500 + (progress * 20);
        }
    });

    return (
        <group>
            <group ref={ref}>
                <HighDefinitionDumbbell weight={45} color="#E21D1D" />
            </group>

            <SpotLight
                ref={lightRef}
                position={[5, 5, 5]}
                angle={0.4}
                penumbra={1}
                intensity={2000}
                color="#E21D1D"
                castShadow
            />
            <SpotLight
                position={[-5, 2, 5]}
                angle={0.4}
                penumbra={1}
                intensity={1000}
                color="#ffffff"
            />
        </group>
    );
}

const motivationalTexts = [
    "PUSH LIMITS",
    "NO EXCUSES",
    "ELITE MINDSET",
    "MASTER YOURSELF",
    "FUEL THE FIRE",
    "STRENGTH IN DISCIPLINE"
];

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const startTime = Date.now();
        const minDuration = 2500;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    const elapsed = Date.now() - startTime;
                    if (elapsed >= minDuration) {
                        clearInterval(interval);
                        setIsExiting(true);
                        setTimeout(onComplete, 800);
                        return 100;
                    }
                    return 100;
                }
                const increment = Math.max(0.5, (100 - prev) / 20);
                return Math.min(100, prev + increment);
            });
        }, 30);

        const textInterval = setInterval(() => {
            setStatusIndex((prev) => (prev + 1) % motivationalTexts.length);
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.5,
                        filter: 'blur(20px)',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }}
                    className="fixed inset-0 z-[100] bg-black overflow-hidden flex flex-col items-center justify-center"
                >
                    {/* Background Lightning */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <Lightning hue={0} speed={0.8} intensity={1.2} size={1.5} />
                    </div>

                    {/* Logo/Header */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute top-12 z-20 text-center"
                    >
                        <h2 className="text-4xl font-black tracking-[0.3em] text-white">PULSE</h2>
                        <div className="h-1 w-12 bg-neon-primary mx-auto mt-2" />
                    </motion.div>

                    {/* 3D Central Dumbbell */}
                    <div className="w-full h-[60vh] z-10">
                        <Canvas
                            gl={{ alpha: true, antialias: true }}
                            camera={{ position: [0, 0, 5], fov: 45 }}
                        >
                            <ambientLight intensity={1} />
                            <Suspense fallback={null}>
                                <Environment preset="city" />
                                <RotatingDumbbell progress={progress} />
                            </Suspense>
                            <EffectComposer>
                                <Bloom luminanceThreshold={1.2} intensity={2} radius={0.3} />
                            </EffectComposer>
                        </Canvas>
                    </div>

                    {/* Footer Info */}
                    <div className="absolute bottom-20 z-20 w-full max-w-lg px-8 flex flex-col items-center">
                        <motion.div
                            key={statusIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-neon-primary font-bold tracking-[0.4em] text-xs mb-4 uppercase"
                        >
                            {motivationalTexts[statusIndex]}
                        </motion.div>

                        <div className="w-full h-1 bg-white/5 relative overflow-hidden mb-6">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-neon-primary shadow-[0_0_15px_rgba(226,29,29,0.8)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ type: "spring", bounce: 0, duration: 0.1 }}
                            />
                        </div>

                        <div className="relative">
                            <motion.span
                                className="text-8xl font-black tracking-tighter text-white tabular-nums"
                                style={{
                                    textShadow: progress > 90 ? '2px 0 #E21D1D, -2px 0 #00ffff' : 'none'
                                }}
                            >
                                {Math.round(progress)}
                                <span className="text-2xl ml-1 text-neon-primary">%</span>
                            </motion.span>

                            {progress > 85 && (
                                <motion.div
                                    className="absolute inset-0 bg-neon-primary mix-blend-overlay opacity-20"
                                    animate={{
                                        opacity: [0, 0.2, 0, 0.4, 0],
                                        x: [-2, 2, -1, 3, 0]
                                    }}
                                    transition={{ repeat: Infinity, duration: 0.1 }}
                                />
                            )}
                        </div>

                        <div className="mt-8 text-white/40 text-[10px] tracking-[0.8em] font-bold uppercase">
                            Loading Excellence
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
