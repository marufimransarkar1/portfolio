import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 order-2 md:order-1"
        >
          <h2 className="text-primary text-sm text-center md:text-left md:text-base font-medium tracking-[0.3em] uppercase mb-4">
            Architecture of the Web
          </h2>
          <h1 className="text-5xl text-center md:text-left lg:text-8xl font-extrabold font-headline leading-[1.1] mb-6 tracking-tight">
            Hello, I'm <br />
            <span className="text-gradient">Maruf Imran</span>
          </h1>
          <p className="text-xl text-center md:text-left md:text-2xl font-light text-white/60 mb-8 max-w-lg">
            Web Developer | React Expert | Wordpress Expert
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#portfolio"
              className="bg-gradient-primary text-background px-8 py-4 rounded-xl font-bold transition-all hover:shadow-[0_0_30px_rgba(143,245,255,0.3)] hover:scale-105 active:scale-95"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="glass-card px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative z-10 w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
              <img
                src="/model.png"
                alt="Maruf Imran"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                fetchPriority="high" // <-- Fixed to camelCase for React/TypeScript
                width="1200"
                height="800"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
