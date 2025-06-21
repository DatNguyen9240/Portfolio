import { CTAButtons } from './CTAButtons';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function HeroSection() {
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 10,
        size: {
          min: 2,
          max: 40,
          pulse: 0,
        },
        speed: {
          x: {
            min: 0,
            max: 0.8,
          },
          y: {
            min: 0,
            max: 0.2,
          },
        },
        colors: {
          background: '#eef2ff',
          particles: ['#2563eb', '#7c3aed', '#f472b6', '#fb923c', '#34d399'],
        },
        blending: 'screen',
        opacity: {
          center: 1,
          edge: 1,
        },
        skew: 0,
        shapes: ['c', 's', 't'],
      });
    }
  }, []);

  return (
    <motion.main
      className="finisher-header relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-6xl"
        variants={itemVariants}
      >
        WELCOME TO
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end">
          THE FUTURE OF
        </span>
        <br />
        COMPANIONSHIP
      </motion.h1>

      <motion.p
        className="text-gray-600 text-lg md:text-xl mt-8 mb-12 max-w-2xl"
        variants={itemVariants}
      >
        Powered by Artificial Intelligence and Human Emotion
      </motion.p>

      <motion.div variants={itemVariants}>
        <CTAButtons />
      </motion.div>
    </motion.main>
  );
}
