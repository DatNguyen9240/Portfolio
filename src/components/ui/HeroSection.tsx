import { CTAButtons } from './CTAButtons';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center px-6 py-20 lg:py-32 text-center"
      style={{
        perspective: 2000,
        transformOrigin: '20% center',
        transformStyle: 'preserve-3d',
      }}
      initial={{
        rotateY: -90,
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        rotateY: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 20,
        duration: 1,
      }}
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-6xl">
        WELCOME TO
        <br />
        THE FUTURE OF
        <br />
        COMPANIONSHIP
      </h1>

      <p className="text-gray-300 text-lg md:text-xl mt-8 mb-12 max-w-2xl">
        Powered by Artificial Intelligence and Human Emotion
      </p>

      <CTAButtons />
    </motion.main>
  );
}
