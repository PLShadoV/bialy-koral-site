import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import Rezerwacja from "./pages/Rezerwacja";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/cennik" element={<Cennik />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/rezerwacja" element={<Rezerwacja />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
