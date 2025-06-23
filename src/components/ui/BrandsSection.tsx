import { brands } from '../../data/brands';
import { motion } from 'framer-motion';
import { useRef, useLayoutEffect, useState } from 'react';

// Chia brands thành 2 hàng và cân bằng số lượng
const half = Math.ceil(brands.length / 2);
const topRow = brands.slice(0, half);
const bottomRow = brands.slice(half);
const maxLen = Math.max(topRow.length, bottomRow.length);
while (topRow.length < maxLen) topRow.push({ name: '', logo: '' });
while (bottomRow.length < maxLen) bottomRow.push({ name: '', logo: '' });

const BrandCard = ({ brand }: { brand: { name: string; logo: string } }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useLayoutEffect(() => {
    if (!brand.name && !brand.logo) return;
    const handle = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const viewportCenter = window.innerWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      const maxDistance = window.innerWidth / 2;
      // Ở giữa: scale 1.1, opacity 1; ở rìa: scale 0.85, opacity 0.3
      const newScale = 1.1 - 0.25 * (distance / maxDistance);
      const newOpacity = 1 - 0.7 * (distance / maxDistance);
      setScale(newScale < 0.85 ? 0.85 : newScale);
      setOpacity(newOpacity < 0.3 ? 0.3 : newOpacity);
    };
    handle();
    window.addEventListener('scroll', handle);
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, [brand.name, brand.logo]);

  if (!brand.name && !brand.logo) return <div className="min-w-[180px] max-w-[200px]" />; // giữ chỗ, không hiển thị gì
  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-transparent min-w-[180px] max-w-[200px]"
    >
      <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
        {brand.logo ? (
          <img src={brand.logo} alt={brand.name} className="h-10 mx-auto object-contain" />
        ) : null}
      </div>
      <span className="text-gray-700 text-sm font-semibold text-center">{brand.name}</span>
    </motion.div>
  );
};

const MarqueeRow = ({
  brands,
  direction,
}: {
  brands: { name: string; logo: string }[];
  direction: 'left' | 'right';
}) => {
  const x = direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'];
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-8"
        animate={{ x }}
        transition={{
          ease: 'linear',
          duration: 40,
          repeat: Infinity,
        }}
      >
        {[...brands, ...brands].map((brand, idx) => (
          <BrandCard brand={brand} key={brand.name + brand.logo + idx} />
        ))}
      </motion.div>
    </div>
  );
};

export function BrandsSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-gray-50/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end">
            Leading Brands
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join thousands of companies already using our AI-powered solutions
        </p>
      </motion.div>
      <div className="space-y-6">
        <MarqueeRow brands={topRow} direction="left" />
        <MarqueeRow brands={bottomRow} direction="right" />
      </div>
    </section>
  );
}
