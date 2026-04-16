export default function Footer() {
  return (
    <footer className="bg-black/40 w-full py-16 border-t border-white/5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="space-y-6">
          <a href="#home" className="text-2xl font-bold text-white font-headline tracking-tighter">
            Maruf Imran
          </a>
          <p className="text-sm text-white/30 leading-relaxed max-w-xs">
            Architecting high-end digital experiences through code and design. Based globally, working with visionaries.
          </p>
        </div>

        <div className="space-y-6">
          <h6 className="text-white text-xs font-bold uppercase tracking-widest">Quick Links</h6>
          <div className="flex flex-col gap-3">
            {['About Me', 'My Services', 'Work Portfolio'].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase().split(' ').pop()}`} 
                className="text-sm text-white/40 hover:text-white transition-colors w-fit"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h6 className="text-white text-xs font-bold uppercase tracking-widest">Connect</h6>
          <div className="flex gap-6">
            {['LinkedIn', 'Github', 'Twitter'].map((social) => (
              <a 
                key={social}
                href="https://github.com/marufimransarkar1" 
                className="text-sm text-primary/80 hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <div className="pt-8 text-white/20 text-[10px] uppercase tracking-widest">
            © 2024 Maruf Imran. Built with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
