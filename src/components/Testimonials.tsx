import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Quote, Users } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    text: "Maruf transformed our outdated site into a modern powerhouse. His attention to UX details is unparalleled.",
    author: "James Donovan",
    role: "CEO, TechFlow",
    initials: "JD",
    color: "bg-primary/20 text-primary",
  },
  {
    text: "One of the best React developers I've worked with. He delivers clean, scalable code every single time.",
    author: "Sarah Adams",
    role: "Product Manager, Nexus",
    initials: "SA",
    color: "bg-secondary/20 text-secondary",
  },
];

// --- LOGIC CONSTANTS ---
const START_DATE = new Date("2026-01-01T00:00:00");
const BASE_TOTAL = 12345;
const BASE_TODAY = 420;

export default function Testimonials() {
  const totalMotion = useMotionValue(0);
  const todayMotion = useMotionValue(0);

  const displayTotal = useTransform(totalMotion, (v) => Math.round(v).toLocaleString());
  const displayToday = useTransform(todayMotion, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    const minsSinceStart = Math.floor((now.getTime() - START_DATE.getTime()) / 60000);
    const minsSinceMidnight = Math.floor((now.getTime() - startOfToday.getTime()) / 60000);

    let currentTotal = BASE_TOTAL + (minsSinceStart * 2);
    let currentToday = BASE_TODAY + (minsSinceMidnight * 2);

    // Initial load animation
    animate(totalMotion, currentTotal, { duration: 2, ease: "easeOut" });
    animate(todayMotion, currentToday, { duration: 2, ease: "easeOut" });

    // Live update function
    const updateLive = () => {
      const increment = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
      currentTotal += increment;
      currentToday += increment;

      animate(totalMotion, currentTotal, { duration: 1.5 });
      animate(todayMotion, currentToday, { duration: 1.5 });

      const nextDelay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
      timeoutId = setTimeout(updateLive, nextDelay);
    };

    let timeoutId = setTimeout(updateLive, 5000);
    return () => clearTimeout(timeoutId);
  }, [totalMotion, todayMotion]);

  return (
    <section className="py-24 bg-surface-low px-6 md:px-12 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-10 opacity-5 select-none pointer-events-none">
        <span className="text-[15rem] font-bold font-headline leading-none text-white">
          TRUST
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Side: Testimonials (The Feedbacks) */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl text-center md:text-left font-bold font-headline mb-12 text-white">
              Client Feedbacks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.author}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 rounded-2xl relative border border-white/10 bg-white/5 backdrop-blur-md"
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
                      <h5 className="font-bold text-sm text-white">{t.author}</h5>
                      <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Dynamic Counter Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-xl text-center"
          >
            <div className="space-y-10">
              {/* Total Visitors */}
              <div>
                <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Global Reach
                </h4>
                <motion.div className="text-6xl font-black font-headline tracking-tighter text-white mb-2">
                  {displayTotal}
                </motion.div>
                <p className="text-white/60 text-sm">Total Page Visitors</p>
              </div>

              {/* Separator */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              {/* Today's Visitors */}
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users size={14} className="text-primary" />
                  <h4 className="text-primary text-[10px] font-bold uppercase tracking-widest">Active Today</h4>
                </div>
                <motion.div className="text-4xl font-bold font-headline tracking-tight text-white/90">
                  {displayToday}
                </motion.div>
              </div>

              {/* Live Pulse UI */}
              <div className="flex items-center justify-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-green-500 uppercase font-bold tracking-widest animate-pulse">
                  Live Analytics
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}