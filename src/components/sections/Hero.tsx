import { HeroBackground } from "../HeroBackground";
import { EarthHorizon } from "../EarthHorizon";

export const Hero = () => (
  <section className="relative min-h-[calc(100svh-9rem)] md:min-h-[calc(100svh-5rem)] flex flex-col justify-between gap-10 overflow-hidden pt-16 md:pt-24">
    <HeroBackground />
    <div className="relative z-10 my-auto max-w-5xl mx-auto px-6 text-center">
      <h1
        className="font-semibold tracking-[-0.04em] leading-[0.9] text-slate-900"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
      >
        Meteorology and AI Lab
      </h1>
      <p
        className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
      >
        We advance atmospheric analysis through machine learning, geospatial analysis, and high-performance computing.
      </p>
    </div>
    <EarthHorizon />
  </section>
);
