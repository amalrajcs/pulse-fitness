'use client';

import { useState, useEffect } from "react";
import HeroNeon from "@/components/HeroNeon";
import ServicesSection from "@/components/ServicesSection";
import TransformationSection from "@/components/TransformationSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import CinematicLoader from "@/components/CinematicLoader";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling during load
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <main className="relative min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <CinematicLoader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ScrollProgress />
        <Navbar />
        <HeroNeon />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="transformation">
          <TransformationSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="community">
          <TestimonialsSection />
        </div>
        <Footer />
      </motion.div>
    </main>
  );
}
