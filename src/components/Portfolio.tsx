import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { link } from 'fs';

const projects = [
  {
    title: 'Global Kickboxing Ranking',
    category: 'Wordpress Custom',
    image: '/GKR.png',
    color: 'text-primary',
    link: 'https://gkrworldwide.com/'
  },
  {
    title: 'Dealbuzz',
    category: 'E-Commerce',
    image: '/Dealbuzz.png',
    color: 'text-secondary',
    link:'https://www.dealbuzzz.shop/'
  },
  {
    title: 'Marufs POS',
    category: 'Web App',
    image: '/pos.png',
    color: 'text-primary',
    link: 'https://pos-inky-two.vercel.app/'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-surface-low px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h3 className="text-sm text-center md:text-left uppercase tracking-[0.3em] text-secondary mb-4 font-medium">Showcase</h3>
            <h2 className="text-4xl md:text-6xl font-bold font-headline">Selected Works</h2>
          </div>
          <p className="text-white/40 max-w-md md:text-right">
            Explore a curated selection of projects where technical precision meets high-end digital aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-200 transition-all duration-500 flex flex-col justify-end p-8">
                <span className={`${project.color} text-xs font-bold uppercase tracking-widest mb-2`}>
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-4 font-headline">{project.title}</h4>
                <a href={project.link} target='_blank' className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                  View Project <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
