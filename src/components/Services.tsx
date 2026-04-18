import { motion } from 'motion/react';
import { Code2, Globe, Palette, Layers } from 'lucide-react';

const services = [
  {
    title: 'MERN Stack Development',
    description: 'Building lightning-fast single-page applications with modern hooks and state management.',
    icon: Code2,
    color: 'text-primary'
  },
  {
    title: 'WordPress / Elementor',
    description: 'Crafting custom, manageable websites with Elementor Pro and bespoke PHP integration.',
    icon: Globe,
    color: 'text-secondary'
  },
  {
    title: 'Frontend Design',
    description: 'Translating Figma designs into pixel-perfect, responsive HTML/Tailwind CSS code.',
    icon: Palette,
    color: 'text-primary'
  },
  {
    title: 'UI/UX Strategy',
    description: 'User-centric design flows focused on conversion and seamless architectural navigation.',
    icon: Layers,
    color: 'text-secondary'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">Expertise</h3>
          <h2 className="text-4xl md:text-6xl font-bold font-headline">Service Offerings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${service.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                <service.icon size={40} />
              </div>
              <h4 className="text-xl font-bold mb-4 font-headline">{service.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
