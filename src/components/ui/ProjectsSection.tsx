import { motion } from 'framer-motion';

const projects = Array.from({ length: 8 }, (_, i) => ({ id: i }));
const row1 = projects.slice(0, 4);
const row2 = projects.slice(4, 8);

const ProjectCard = () => (
  <div className="flex-shrink-0 w-[320px] h-[200px] md:w-[400px] md:h-[220px] rounded-2xl bg-white shadow-lg border border-gray-100" />
);

interface Project {
  id: number;
}

interface MarqueeRowProps {
  projects: Project[];
  direction: 'left' | 'right';
}

const MarqueeRow = ({ projects, direction }: MarqueeRowProps) => {
  const x = direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x }}
        transition={{
          ease: 'linear',
          duration: 40,
          repeat: Infinity,
        }}
      >
        {[...projects, ...projects].map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} />
        ))}
      </motion.div>
    </div>
  );
};

export function ProjectsSection() {
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
          Explore Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end">
            Innovative Projects
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A glimpse into the innovative solutions we've delivered for our clients
        </p>
      </motion.div>

      <div className="space-y-6">
        <MarqueeRow projects={row1} direction="left" />
        <MarqueeRow projects={row2} direction="right" />
      </div>
    </section>
  );
}
