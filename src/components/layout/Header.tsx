import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Portfolio', href: '#' },
];

const Header = () => {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [300, 400],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.5)']
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
        <nav className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-lg font-medium transition-colors ${item.active ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
            >
              {item.label}
            </a>
          ))}
          <Button className="ml-6 px-8 py-2 text-lg">Contact</Button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
