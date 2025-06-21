import { motion } from 'framer-motion';

const brands = [
  { name: 'Brand 1', logo: '🚀' },
  { name: 'Brand 2', logo: '⚡' },
  { name: 'Brand 3', logo: '🌟' },
  { name: 'Brand 4', logo: '💎' },
  { name: 'Brand 5', logo: '🔥' },
  { name: 'Brand 6', logo: '✨' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function BrandsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: 'spring' as const, stiffness: 300, damping: 10 },
              }}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-transparent"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {brand.logo}
              </div>
              <span className="text-gray-700 text-sm font-semibold">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
