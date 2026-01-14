import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PromptsPage from "./pages/PromptsPage";
import DareBoxPage from "./pages/DareBoxPage";
import SubmitPage from "./pages/SubmitPage";
import RulebookPage from "./pages/RulebookPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prompts" element={<PromptsPage />} />
          <Route path="/dare" element={<DareBoxPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/rulebook" element={<RulebookPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
