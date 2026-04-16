import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-headline mb-8 leading-tight">
              Let's build <br />something <span className="text-gradient">epic</span>.
            </h2>
            <p className="text-white/50 text-lg mb-12 max-w-md">
              I'm currently available for freelance projects and remote full-time opportunities. Drop a message and let's start the conversation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white/80 mb-1">Email Me</h5>
                  <p className="text-white/40">marufimran434@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white/80 mb-1">Location</h5>
                  <p className="text-white/40">Remote / Digital Nomad</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Github, href: 'https://github.com/marufimransarkar1' },
                { icon: Twitter, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/30">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/10"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/30">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/10"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/30">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/10 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-primary text-background py-5 rounded-xl font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.3)] hover:scale-[1.02] active:scale-95"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
