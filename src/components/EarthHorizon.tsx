import earthSmall from "@/assets/earth-768.webp";
import earthLarge from "@/assets/earth-1440.webp";

// Static display copies of the original Earth artwork, sized for each screen.
export const EarthHorizon = () => (
  <div aria-hidden="true" className="earth-horizon pointer-events-none relative h-40 w-full overflow-hidden md:h-60">
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-100/50 to-transparent" />
    <img
      src={earthLarge}
      srcSet={`${earthSmall} 768w, ${earthLarge} 1440w`}
      sizes="(min-width: 768px) max(960px, calc(100vw - 256px)), 768px"
      width={1440}
      height={810}
      alt=""
      decoding="async"
      draggable={false}
      className="absolute left-1/2 top-4 h-auto w-[768px] max-w-none -translate-x-1/2 -translate-y-1/2 md:top-6 md:w-full md:min-w-[960px]"
    />
  </div>
);
