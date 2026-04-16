import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Publications", href: "#publications" },
  { label: "Presentations", href: "#presentations" },
  { label: "Teaching", href: "#teaching" },
];

export const Header = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
    <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
      <a href="#" className="font-semibold text-white tracking-tight">
        Meteorology and AI Lab
      </a>
      <nav className="hidden sm:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </div>
  </header>
);
