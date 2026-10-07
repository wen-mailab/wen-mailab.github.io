import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Hash URLs support direct links and refreshes on GitHub Pages. */}
      <HashRouter>
        <SiteLayout />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
