import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-low px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgzbz-ZF2PdFYcFzotxMqsnmfdHbyA7Np95epAT_v8eTuMhFJGXbM5sS3fiYRbAvC9mX75QWnMlpnjZ0w7yrEvYg7gR8taENzSjJ8f9CH5D70Hi4LxYaL4AltgYrooFW3qAE6vSbJNv-92Djkg-hnvTUvMovlPNf8hygZV2iHWj_9nWrs1uGsU641MgM9n6z6NIPZeH-jCG6jsReLmyhMcFw61EgceaD-MFoAsEV0A0dg8pHB2tjJ4OZ-cKjTTUgBspORMfhaWbQ" 
            alt="Workspace"
            className="relative w-full aspect-[4/3] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-4xl text-center md:text-left md:text-5xl font-extrabold font-headline mb-8 leading-tight">
            Crafting Digital <br />
            <span className="text-gradient">Masterpieces</span>
          </h3>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            I am a highly skilled Web Developer with a passion for building high-performance, aesthetically pleasing digital products. With years of experience in the React ecosystem and custom WordPress development, I bridge the gap between complex engineering and elegant design.
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            My philosophy is rooted in "Nocturnal Architecture"—designing interfaces that feel physical, deep, and intuitive. I don't just write code; I design experiences that help brands scale and users thrive.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-medium">Projects Done</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-4xl font-bold text-secondary mb-1">04+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-medium">Years Exp</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
