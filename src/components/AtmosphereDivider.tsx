import { motion } from "framer-motion";

interface AtmosphereDividerProps {
  label: string;
  altitude?: string;
}

export const AtmosphereDivider = ({ label, altitude }: AtmosphereDividerProps) => (
  <div className="relative py-4">
    {/* Curved dashed line via SVG */}
    <svg
      viewBox="0 0 1440 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-6"
      preserveAspectRatio="none"
    >
      <path
        d="M0 32 Q360 8 720 12 Q1080 16 1440 32"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        strokeDasharray="8 6"
        fill="none"
      />
    </svg>
    <div className="flex justify-center mt-1">
      <motion.span
        className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {label}
        {altitude && (
          <span className="ml-2 text-white/25 tracking-normal lowercase">
            ~{altitude}
          </span>
        )}
      </motion.span>
    </div>
  </div>
);
