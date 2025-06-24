import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Logo() {
  const controls = useAnimation();
  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div animate={controls} transition={{ type: 'spring', stiffness: 80, damping: 30 }}>
      <img
        src={isDark ? '/assets/logos/logo3.png' : '/assets/logos/logo1.png'}
        alt="Voya Logo"
        className="h-12"
      />
    </motion.div>
  );
}
