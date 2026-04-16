import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Maruf transformed our outdated site into a modern powerhouse. His attention to UX details is unparalleled.",
    author: "James Donovan",
    role: "CEO, TechFlow",
    initials: "JD",
    color: "bg-primary/20 text-primary"
  },
  {
    text: "One of the best React developers I've worked with. He delivers clean, scalable code every single time.",
    author: "Sarah Adams",
    role: "Product Manager, Nexus",
    initials: "SA",
    color: "bg-secondary/20 text-secondary"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-low px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-10 opacity-5 select-none pointer-events-none">
        <span className="text-[15rem] font-bold font-headline leading-none">TRUST</span>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-12">Client Feedbacks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.author}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 rounded-2xl relative"
                >
                  <Quote className="absolute top-4 right-4 text-primary/10" size={48} />
                  <p className="text-white/70 italic mb-8 leading-relaxed relative z-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${t.color}`}>
                      {t.initials}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{t.author}</h5>
                      <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl border-primary/20 text-center"
          >
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-6">Global Reach</h4>
            <div className="text-6xl font-black font-headline tracking-tighter text-gradient mb-2">12,345</div>
            <p className="text-white/60 text-sm">Total Page Visitors</p>
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-2 h-2 rounded-full bg-primary/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
