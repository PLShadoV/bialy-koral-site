import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import Rezerwacja from "./pages/Rezerwacja";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppHashRouter = () => {
  console.log("AppHashRouter component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/cennik" element={<Cennik />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/rezerwacja" element={<Rezerwacja />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppHashRouter;