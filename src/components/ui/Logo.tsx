import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function Logo() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 20) {
        controls.start({ scale: 1 });
      } else {
        controls.start({ scale: 0.85 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div animate={controls} transition={{ type: 'spring', stiffness: 80, damping: 30 }}>
      <img src="/assets/logos/logo1.png" alt="Voya Logo" className="h-32" />
    </motion.div>
  );
}
