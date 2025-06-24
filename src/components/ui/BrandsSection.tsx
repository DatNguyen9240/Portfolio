import { useRef, useState } from 'react';
import { brands as brandsData } from '../../data/brands';

function MarqueeRow({ brands, reverse = false }: { brands: typeof brandsData; reverse?: boolean }) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Xử lý sự kiện dừng/chạy marquee
  const handlePause = () => setPaused(true);
  const handleResume = () => setPaused(false);

  return (
    <div
      className="overflow-hidden w-full"
      onMouseDown={handlePause}
      onMouseUp={handleResume}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
      onTouchCancel={handleResume}
    >
      <div
        ref={marqueeRef}
        className={`flex gap-12 animate-marquee whitespace-nowrap ${reverse ? 'flex-row-reverse animate-marquee-reverse' : ''}${paused ? ' paused-marquee' : ''}`}
      >
        {[...brands, ...brands].map((brand, idx) => (
          <div
            key={brand.name + idx}
            className="flex flex-col items-center justify-center min-w-[220px] px-4"
          >
            <img src={brand.logo} alt={brand.name} className="h-20 object-contain mb-3" />
            <span className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-semibold text-center">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandsSection() {
  // Split brands into two halves
  const half = Math.ceil(brandsData.length / 2);
  const topBrands = brandsData.slice(0, half);
  const bottomBrands = brandsData.slice(half);

  return (
    <section className="section-bg py-24 sm:py-32 relative w-full">
      <div className="text-center mb-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end dark:from-blue-400 dark:to-purple-500">
            Leading Brands
          </span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto dark:text-gray-300 text-gray-600">
          Join thousands of companies already using our AI-powered solutions
        </p>
      </div>
      <div className="space-y-16 w-full">
        <div className="w-full overflow-x-hidden">
          <MarqueeRow brands={topBrands} />
        </div>
        <div className="w-full overflow-x-hidden">
          <MarqueeRow brands={bottomBrands} reverse />
        </div>
      </div>
    </section>
  );
}
