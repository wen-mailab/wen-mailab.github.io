import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import labLogo from "@/assets/mai-lab-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Team", to: "/team" },
  { label: "Prospective Students", to: "/prospective-students" },
  { label: "News", to: "/news" },
  { label: "Awards & Grants", to: "/awards" },
  { label: "Publications", to: "/publications" },
  { label: "Conferences", to: "/conferences" },
  { label: "Teaching", to: "/teaching" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <aside className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white md:inset-x-auto md:bottom-0 md:left-0 md:w-64 md:border-b-0 md:border-r md:flex md:flex-col">
      <div className="flex min-h-16 items-center justify-between gap-4 px-5 md:py-8">
        <NavLink to="/" onClick={() => setOpen(false)} aria-label="Meteorology and AI Lab home" className="block shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
          <img src={labLogo} alt="MAI Lab" width={442} height={178} className="h-auto w-28 md:w-52" />
        </NavLink>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation"
          onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-800 hover:bg-slate-100 md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav id="site-navigation" aria-label="Main navigation" className={`${open ? "block" : "hidden"} max-h-[70svh] overflow-y-auto px-3 pb-5 md:block md:flex-1`}>
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} end onClick={() => setOpen(false)}
            className={({ isActive }) => `mb-1 block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isActive ? "bg-blue-50 text-blue-800" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
