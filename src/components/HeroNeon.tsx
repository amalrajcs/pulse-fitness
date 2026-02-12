'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, SpotLight, ContactShadows, Environment, Text } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Suspense, useRef, useState, useMemo, ReactNode } from 'react';
import * as THREE from 'three';
import MagneticButton from './MagneticButton';
import Lightning from './Lightning';

const DUMBBELL_WEIGHTS = [5, 10, 25, 45, 100];

export function HighDefinitionDumbbell({ weight = 25, color = "#FFFFFF" }) {
    const scale = 0.5 + (weight / 100) * 0.5;

    return (
        <group scale={scale}>
            {/* Handle - Steel/Chrome with Knurling Detail */}
            <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.045, 0.045, 1.3, 32]} />
                <meshStandardMaterial
                    color="#f0f0f0"
                    metalness={1}
                    roughness={0.02}
                    envMapIntensity={2.5}
                />
            </mesh>

            {/* Rubber Grips on Handle */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.055, 0.055, 0.6, 32]} />
                <meshStandardMaterial
                    color="#111"
                    metalness={0}
                    roughness={1}
                />
            </mesh>

            {/* Weights - High quality metal/rubber hybrid look */}
            <group position={[-0.55, 0, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
                    <cylinderGeometry args={[0.35, 0.35, 0.25, 32]} />
                    <meshStandardMaterial
                        color="#050505"
                        metalness={0.9}
                        roughness={0.1}
                        emissive={color}
                        emissiveIntensity={0.15}
                    />
                </mesh>
                {/* Weight Text Label - Wrapped in individual Suspense to prevent blocking */}
                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Text
                            position={[-0.13, 0, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                            fontSize={0.12}
                            color="white"
                            font="https://fonts.gstatic.com/s/oswald/v49/TK7iWqv9vW7VfP-40oH_Bf6-bAbV_T7F.woff"
                            anchorX="center"
                            anchorY="middle"
                        >
                            {weight}LB
                        </Text>
                    </Float>
                </Suspense>
            </group>

            <group position={[0.55, 0, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
                    <cylinderGeometry args={[0.35, 0.35, 0.25, 32]} />
                    <meshStandardMaterial
                        color="#050505"
                        metalness={0.9}
                        roughness={0.1}
                        emissive={color}
                        emissiveIntensity={0.15}
                    />
                </mesh>
                {/* Weight Text Label */}
                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Text
                            position={[0.13, 0, 0]}
                            rotation={[0, Math.PI / 2, 0]}
                            fontSize={0.12}
                            color="white"
                            font="https://fonts.gstatic.com/s/oswald/v49/TK7iWqv9vW7VfP-40oH_Bf6-bAbV_T7F.woff"
                            anchorX="center"
                            anchorY="middle"
                        >
                            {weight}LB
                        </Text>
                    </Float>
                </Suspense>
            </group>
        </group>
    );
}

function AntiGravityDumbbell({ initialPosition, speed, rotationSpeed, weight, color }: any) {
    const ref = useRef<THREE.Group>(null);
    const [opacity, setOpacity] = useState(0);
    const floatOffset = useRef(Math.random() * Math.PI * 2);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();

        // Slow upward float
        ref.current.position.y += speed;

        // Perlin-like sway
        ref.current.position.x = initialPosition[0] +
            Math.sin(t * 0.5 + floatOffset.current) * 0.4 +
            Math.cos(t * 0.3) * 0.2;

        ref.current.position.z = initialPosition[2] +
            Math.cos(t * 0.4 + floatOffset.current) * 0.3;

        // Rotation
        ref.current.rotation.x += rotationSpeed[0];
        ref.current.rotation.y += rotationSpeed[1];
        ref.current.rotation.z += rotationSpeed[2];

        const range = 10;
        if (ref.current.position.y > range) {
            ref.current.position.y = -range;
            ref.current.position.x = (Math.random() - 0.5) * 16;
            ref.current.position.z = (Math.random() - 0.5) * 12;
        }

        // Fading
        const distFromTop = range - ref.current.position.y;
        const distFromBottom = ref.current.position.y - (-range);
        const currentOpacity = Math.min(1, distFromTop / 3, distFromBottom / 3);
        setOpacity(currentOpacity);
    });

    return (
        <group ref={ref} position={initialPosition}>
            <group scale={opacity} visible={opacity > 0.01}>
                <HighDefinitionDumbbell weight={weight} color={color} />
            </group>
        </group>
    );
}

function StudioField() {
    const count = 10;
    const items = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 18,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 14 - 3
                ],
                speed: 0.001 + Math.random() * 0.002,
                rotationSpeed: [
                    (Math.random() - 0.5) * 0.012,
                    (Math.random() - 0.5) * 0.012,
                    (Math.random() - 0.5) * 0.012
                ],
                weight: DUMBBELL_WEIGHTS[Math.floor(Math.random() * DUMBBELL_WEIGHTS.length)],
                color: Math.random() > 0.8 ? "#E21D1D" : "#FFFFFF"
            });
        }
        return temp;
    }, []);

    return (
        <group>
            {items.map((item, i) => (
                <AntiGravityDumbbell key={i} {...item} initialPosition={item.position} />
            ))}
        </group>
    );
}

export default function HeroNeon() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <section
            ref={containerRef}
            className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Lightning Background Effect */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Lightning
                    hue={0}
                    xOffset={0}
                    speed={0.4}
                    intensity={1.2}
                    size={1.5}
                />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-5 opacity-15 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
            />

            {/* 3D Scene */}
            <div className="absolute inset-0 z-10">
                <Canvas
                    dpr={[1, 2]}
                    shadows
                    camera={{ position: [0, 0, 10], fov: 45 }}
                    gl={{ alpha: true, antialias: true }}
                >
                    <fog attach="fog" args={['#000', 10, 26]} />

                    <ambientLight intensity={1} />

                    {/* Cinematic Rim Lighting - High intensity for visibility */}
                    <SpotLight
                        position={[15, 20, 10]}
                        angle={0.3}
                        penumbra={1}
                        intensity={4000}
                        castShadow
                        color="#ffffff"
                    />
                    <SpotLight
                        position={[-15, 10, 5]}
                        angle={0.4}
                        penumbra={1}
                        intensity={2500}
                        color="#E21D1D"
                    />
                    <SpotLight
                        position={[0, -10, -5]}
                        angle={0.6}
                        penumbra={1}
                        intensity={1000}
                        color="#ffffff"
                    />

                    <Suspense fallback={null}>
                        <Environment preset="city" />
                    </Suspense>

                    <StudioField />
                    <ContactShadows position={[0, -12, 0]} opacity={0.5} scale={40} blur={2.5} far={15} />

                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={1}
                            mipmapBlur
                            intensity={1.8}
                            radius={0.3}
                        />
                    </EffectComposer>
                </Canvas>
            </div>

            {/* Content */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-20 text-center px-4 max-w-7xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center">
                        <h1 className="text-[clamp(4rem,20vw,14rem)] font-black tracking-[0.1em] leading-[0.8] mb-0 flex flex-col items-center">
                            <span className="text-white">PULSE</span>
                            <span className="text-outline text-[clamp(2.5rem,12vw,8rem)] -mt-4">FITNESS</span>
                        </h1>

                        <div className="h-2 w-32 bg-neon-primary my-12" />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-sm md:text-lg text-white font-bold tracking-[0.4em] uppercase mb-16 max-w-2xl px-8 border-l-4 border-neon-primary"
                        >
                            Physical Excellence through <br /> <span className="text-neon-primary">Mastery and Discipline</span>
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 border border-white/10">
                            <MagneticButton>
                                <button
                                    onClick={() => {
                                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-16 py-8 bg-white text-black font-black text-xl hover:bg-neon-primary hover:text-white transition-all tracking-widest uppercase border-r border-white/10"
                                >
                                    THE METHOD
                                </button>
                            </MagneticButton>

                            <MagneticButton>
                                <button
                                    onClick={() => {
                                        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-16 py-8 bg-black text-white font-black text-xl hover:bg-white hover:text-black transition-all tracking-widest uppercase"
                                >
                                    JOIN ELITE
                                </button>
                            </MagneticButton>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Section Divider Line (Grid Style) */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
        </section>
    );
}
