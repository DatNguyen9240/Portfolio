import Masonry from './Masonry';
import { projects } from '../../data/projects';

const MasonrySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Recent Works</h2>
        <div style={{ height: '1200px' }}>
          <Masonry items={projects} animateFrom="bottom" />
        </div>
      </div>
    </section>
  );
};

export default MasonrySection;
