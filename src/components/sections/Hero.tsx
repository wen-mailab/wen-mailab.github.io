import { motion } from "framer-motion";
import { HeroBackground } from "../HeroBackground";

export const Hero = () => (
  <section className="relative min-h-svh flex items-start justify-center pt-[50vh] overflow-hidden">
    <HeroBackground />
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <motion.h1
        className="font-semibold tracking-[-0.04em] leading-[0.9] text-white"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      >
        Meteorology and AI Lab
      </motion.h1>
      <motion.p
        className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.15 }}
      >
        Advancing atmospheric analysis through machine learning, geospatial analysis, and high-performance computing.
      </motion.p>
      <motion.div
        className="mt-10 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a
          href="#team"
          className="px-6 py-3 rounded-full bg-white/15 text-white font-medium text-sm hover:bg-white/25 transition-colors backdrop-blur-sm"
        >
          Meet the Team
        </a>
        <a
          href="#publications"
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Explore Research
        </a>
      </motion.div>
    </div>
  </section>
);
