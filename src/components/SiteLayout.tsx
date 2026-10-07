import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./Header";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const Research = lazy(() => import("./sections/Research").then(m => ({ default: m.Research })));
const Team = lazy(() => import("./sections/Team").then(m => ({ default: m.Team })));
const Papers = lazy(() => import("./sections/Papers").then(m => ({ default: m.Papers })));
const Conferences = lazy(() => import("./sections/Conferences").then(m => ({ default: m.Conferences })));
const Teaching = lazy(() => import("./sections/Teaching").then(m => ({ default: m.Teaching })));
const News = lazy(() => import("./sections/News").then(m => ({ default: m.News })));
const Awards = lazy(() => import("./sections/Awards").then(m => ({ default: m.Awards })));
const ProspectiveStudents = lazy(() => import("./sections/ProspectiveStudents").then(m => ({ default: m.ProspectiveStudents })));

const pageTitles: Record<string, string> = {
  "/": "Home", "/research": "Research", "/team": "Team",
  "/publications": "Publications", "/conferences": "Conferences", "/teaching": "Past Courses Taught",
  "/news": "News", "/awards": "Awards and Grants",
  "/prospective-students": "Prospective Students",
};

export function SiteLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = `${pageTitles[pathname] ?? "Page not found"} | Meteorology and AI Lab`;
  }, [pathname]);

  return (
    <div className="min-h-svh bg-slate-50 text-slate-800">
      <a href="#main-content" onClick={event => {
        event.preventDefault();
        document.getElementById("main-content")?.focus();
      }} className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-slate-950 focus:p-3">Skip to content</a>
      <Header />
      <div className="flex min-h-svh flex-col pt-16 md:pt-0 md:pl-64">
        <main id="main-content" tabIndex={-1} className="bg-slate-50 flex-1 min-w-0 outline-none">
          <Suspense fallback={<p role="status" className="p-10 opacity-80">Loading page…</p>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/research" element={<Research />} />
              <Route path="/team" element={<Team />} />
              <Route path="/prospective-students" element={<ProspectiveStudents />} />
              <Route path="/news" element={<News />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/publications" element={<Papers />} />
              <Route path="/conferences" element={<Conferences />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <footer className="border-t border-slate-200 bg-slate-50 px-6 py-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Meteorology and AI Lab. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
