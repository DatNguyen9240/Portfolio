import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  const backgroundColor = useTransform(
    scrollY,
    [300, 400],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)']
  );

  const backdropFilter = useTransform(scrollY, [300, 400], ['blur(0px)', 'blur(8px)']);

  return (
    <motion.header
      className="w-full sticky top-0 z-20"
      style={{
        backgroundColor,
        backdropFilter,
        // For Safari compatibility
        WebkitBackdropFilter: backdropFilter,
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', duration: 0.7 }}
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
                  ? 'text-blue-600'
                  : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="ml-6 px-8 py-2 text-lg">Contact</Button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden z-30">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-gray-800"
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
            className="md:hidden absolute top-0 left-0 w-full bg-white shadow-lg pt-24 pb-8"
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
                      ? 'text-blue-600'
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 px-8 py-2 text-lg">Contact</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
