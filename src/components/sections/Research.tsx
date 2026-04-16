import { motion } from "framer-motion";
import { Satellite, Radio, Earth } from "lucide-react";
import { researchAreas } from "@/data/research";

const iconMap: Record<string, React.ReactNode> = {
  satellite: <Satellite className="h-6 w-6 text-primary" />,
  radar: <Radio className="h-6 w-6 text-primary" />,
  planet: <Earth className="h-6 w-6 text-primary" />,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.5, bounce: 0 } },
};

export const Research = () => (
  <section id="research" className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-4">
      <motion.h2
        className="font-medium tracking-[-0.02em] leading-[1.1] text-white mb-12"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
      >
        Research Areas
      </motion.h2>
      <motion.div
        className="divide-y divide-white/10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {researchAreas.map((area) => (
          <motion.div key={area.id} variants={item} className="py-8 first:pt-0 last:pb-0">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">{iconMap[area.icon]}</div>
              <div>
                <h3 className="text-xl font-medium text-white tracking-[-0.02em]">{area.title}</h3>
                <p className="mt-2 text-white/65 leading-relaxed">{area.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
