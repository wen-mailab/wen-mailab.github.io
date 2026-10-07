// Fixed star positions and SVG halos restore the space motif without animation.
const stars = Array.from({ length: 110 }, (_, index) => {
  const random = (salt: number) => {
    const value = Math.sin(index * 12.9898 + salt) * 43758.5453;
    return value - Math.floor(value);
  };
  return {
    x: random(17) * 1200,
    y: random(83) * 800,
    radius: 0.6 + random(39) * 1.4,
    opacity: 0.2 + random(61) * 0.45,
  };
});

export const HeroBackground = () => (
  <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
    style={{ background: "radial-gradient(ellipse at 75% 15%, rgba(147, 197, 253, 0.32), transparent 60%), radial-gradient(ellipse at 15% 55%, rgba(196, 181, 253, 0.22), transparent 60%), linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)" }}>
    <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <radialGradient id="static-star-halo">
          <stop stopColor="#60a5fa" stopOpacity="0.24" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
      </defs>
      {stars.map((star, index) => (
        <g key={index}>
          {index % 7 === 0 && <circle cx={star.x} cy={star.y} r={star.radius * 5} fill="url(#static-star-halo)" />}
          {index % 19 === 0 && <path d={`M${star.x - 4} ${star.y}h8 M${star.x} ${star.y - 4}v8`} stroke="#3b82f6" strokeWidth="0.8" opacity={star.opacity * 0.55} />}
          <circle cx={star.x} cy={star.y} r={star.radius} fill="#3b82f6" opacity={star.opacity * 0.55} />
        </g>
      ))}
    </svg>
  </div>
);
