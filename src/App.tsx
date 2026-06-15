import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NewsPage from "./pages/News.tsx";
import AwardsPage from "./pages/Awards.tsx";
import PublicationsPage from "./pages/Publications.tsx";
import PresentationsPage from "./pages/Presentations.tsx";
import NotFound from "./pages/NotFound.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/mai-lab/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="awards" element={<AwardsPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="presentations" element={<PresentationsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
