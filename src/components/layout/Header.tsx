import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backdropFilter = useTransform(scrollY, [300, 400], ['blur(0px)', 'blur(8px)']);

  return (
    <motion.header
      className={`w-full sticky top-0 z-20 backdrop-blur-md 
        ${scrolled ? 'bg-white/50 dark:bg-gray-900/50' : 'bg-[#eef2ff]/80 dark:bg-[#15182e]'}`}
      style={{
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ y: { type: 'tween', duration: 0.7 }, opacity: { duration: 0.7 } }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-lg font-medium transition-colors ${
                location.pathname === item.href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="ml-6 px-8 py-2 text-lg">Contact</Button>
          <ThemeSwitch />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-30">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isMenuOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg pt-24 pb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 px-8 py-2 text-lg">Contact</Button>
              <div className="mt-2">
                <ThemeSwitch />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
