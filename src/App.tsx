import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { Language } from "./i18n/translations";

const queryClient = new QueryClient();

const App = ({ language, Page }: { language: Language; Page: React.ComponentType }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider language={language}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Page />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
