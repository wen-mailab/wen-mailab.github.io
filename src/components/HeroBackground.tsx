import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
  size: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  hue: number;
  opacity: number;
}

/**
 * Hero background with dense stars, animated meteors/shooting stars,
 * and a mouse-reactive galaxy/nebula effect.
 */
export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animId = useRef(0);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const stars = useRef<Star[]>([]);
  const meteors = useRef<Meteor[]>([]);
  const nebulae = useRef<Nebula[]>([]);

  const handleMouseMove = useCallback(() => {
    return;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const init = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Nebula blobs
      nebulae.current = Array.from({ length: 5 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 200 + 100,
        hue: Math.random() * 60 + 200,
        opacity: Math.random() * 0.06 + 0.02,
      }));
    };

    init();
    window.addEventListener("resize", init);

    const spawnMeteor = (w: number, h: number): Meteor => {
      const angle = Math.random() * 0.4 + 0.3;
      const speed = Math.random() * 4 + 3;
      return {
        x: Math.random() * w * 1.2 - w * 0.1,
        y: Math.random() * (h / 2) + h / 2 - 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 40,
        life: 0,
        maxLife: Math.random() * 60 + 40,
        size: Math.random() * 1.5 + 0.5,
      };
    };

    const draw = (t: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = (mouse.current.x - 0.5) * 2;
      const my = (mouse.current.y - 0.5) * 2;

      for (const n of nebulae.current) {
        const nx = n.x + mx * 30;
        const ny = n.y + my * 20;
        const hueShift = mx * 20;
        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.radius);
        grad.addColorStop(0, `hsla(${n.hue + hueShift}, 80%, 60%, ${n.opacity * 1.5})`);
        grad.addColorStop(0.5, `hsla(${n.hue + hueShift + 30}, 70%, 40%, ${n.opacity * 0.7})`);
        grad.addColorStop(1, `hsla(${n.hue + hueShift}, 60%, 30%, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(nx - n.radius, ny - n.radius, n.radius * 2, n.radius * 2);
      }

      // Spawn meteors randomly
      if (Math.random() < 0.02) {
        meteors.current.push(spawnMeteor(w, h));
      }

      // Draw & update meteors
      meteors.current = meteors.current.filter((m) => {
        m.x += m.vx;
        m.y += m.vy;
        m.life++;

        const progress = m.life / m.maxLife;
        const fadeIn = Math.min(m.life / 10, 1);
        const fadeOut = 1 - Math.max(0, (progress - 0.7) / 0.3);
        const alpha = fadeIn * fadeOut * 0.9;

        // Trail
        const grad = ctx.createLinearGradient(
          m.x, m.y,
          m.x - m.vx * m.length / Math.sqrt(m.vx * m.vx + m.vy * m.vy) * 0.8,
          m.y - m.vy * m.length / Math.sqrt(m.vx * m.vx + m.vy * m.vy) * 0.8
        );
        grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
        grad.addColorStop(1, `rgba(255,255,255,0)`);

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        const speed = Math.sqrt(m.vx * m.vx + m.vy * m.vy);
        ctx.lineTo(
          m.x - (m.vx / speed) * m.length,
          m.y - (m.vy / speed) * m.length
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.size;
        ctx.lineCap = "round";
        ctx.stroke();

        // Bright head
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();

        return m.life < m.maxLife && m.y < h + 50;
      });

      animId.current = requestAnimationFrame(draw);
    };

    animId.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId.current);
      window.removeEventListener("resize", init);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};
