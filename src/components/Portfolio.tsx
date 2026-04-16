import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Lumina Analytics',
    category: 'Fintech SaaS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYRnBxbnrOwpzHLsDV6mqstjKDkPNWBNwqzdjD2I423FF-04ytDQ8YCDhMCzjE0-j21fFGd4sAcAvTMFxdoUmKvDElNOvoQ-QMC0b8_KoXRXqLG0pUHqV6O8nLT6nlg4g6MgcAVm8t3nULGiVFMJGAaWtCBOYb9fO0myRJRZb_vyaM9KJIkZUdqXDr1IG4s9JJkPXpPUSI38l_Uya3kjtvx4Yd0HOZYd4mRPn3CvDfRvDUbZKn6y8m9MOLA5TXM-ccvHWj6nx48g',
    color: 'text-primary'
  },
  {
    title: 'Onyx Retail',
    category: 'E-Commerce',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGKyVIj51wrbjhQsErl7ECIATRgG7tBMkglyWCj0Q3lFleZ1aO70WjNeKDRQzZsrMp0q18KYSJNSS2en9n8a56lIi5ly-vo_kS9Jdxs5R6-A7ypjTsDtFv_Cbvw00At70cE9i97UFBA8GeecZuWkPfIP-NdvXcVe_v0TKCVANeOC1ox_GdDFCEgoWHHdEwv6Ss2p6liA_mFxBS7yeuuQEc6A5ZF61xUbCnoNBmgmpFr0-64Sd40wr1mLpgjenXt9VG4UcA5EXonQ',
    color: 'text-secondary'
  },
  {
    title: 'Haven Estate',
    category: 'Web App',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7vEOi4UuaupQCzvdp2MgQYJVuwJCHZE7X0aI1HpQQeueLgslIcW-G7PMEV8DUGAgBCcH-XNx1I2twEEfHq7Piqh33JQ3ZW5wvsl01msVX_yvRwMrOWneDvyIwILwatDRek9dl1EXVfh9Z9KViWXfyjt05hcsqXE5aIFDWCAbLa6jqfAfKgJCZXB8XZNguago_ZYaf1Id38vQ-3v3KX_cDZCG5dNXu-2ekf6hkzWRzq7llFNB2JoVy3vfSU2lvTSQoCWZsxaf5Xw',
    color: 'text-primary'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-surface-low px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-secondary mb-4 font-medium">Showcase</h3>
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
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className={`${project.color} text-xs font-bold uppercase tracking-widest mb-2`}>
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-4 font-headline">{project.title}</h4>
                <div className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                  View Project <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
