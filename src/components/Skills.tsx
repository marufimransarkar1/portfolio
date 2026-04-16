import { motion } from 'motion/react';

const skills = [
  { name: 'React & Next.js', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Tailwind CSS & Design Systems', level: 98 },
  { name: 'WordPress & Elementor', level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">Abilities</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Technical Proficiency</h2>
        </div>

        <div className="space-y-10">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-white/80">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  className="h-full bg-gradient-primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
