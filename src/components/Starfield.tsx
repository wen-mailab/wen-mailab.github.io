import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

/**
 * Full-page starfield canvas. Stars are denser at the top (exosphere)
 * and fade out toward the bottom (troposphere).
 */
export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animId = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    const dpr = window.devicePixelRatio || 1;

    const init = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((w * h) / 4000);
      stars = Array.from({ length: count }, () => {
        // Bias y toward the top: use square root distribution
        const raw = Math.random();
        const y = (1 - raw * raw) * h;
        return {
          x: Math.random() * w,
          y,
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.003 + 0.001,
          twinkleOffset: Math.random() * Math.PI * 2,
        };
      });
    };

    init();
    window.addEventListener("resize", init);

    const draw = (t: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        // Fade based on vertical position (top = bright, bottom = dim)
        const verticalFade = 1 - (s.y / h) * 0.85;
        const twinkle = 0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.opacity * verticalFade * (0.6 + 0.4 * twinkle);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }

      animId.current = requestAnimationFrame(draw);
    };

    animId.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId.current);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
