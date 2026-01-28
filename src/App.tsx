import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import Index from "./pages/Index";
import PromptsPage from "./pages/PromptsPage";
import DareBoxPage from "./pages/DareBoxPage";
import SubmitPage from "./pages/SubmitPage";
import RulebookPage from "./pages/RulebookPage";
import FoodOrderPage from "./pages/FoodOrderPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navigation from "@/components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Everything inside BrowserRouter can now use routing hooks */}
        <div className="min-h-screen flex flex-col bg-[#020617]">
          <Navigation />
          
          <main className="flex-grow pt-24"> 
            <Routes>
              <Route path={ROUTES.HOME} element={<Index />} />
              <Route path={ROUTES.PROMPTS} element={<PromptsPage />} />
              <Route path={ROUTES.DARE_BOX} element={<DareBoxPage />} />
              <Route path={ROUTES.SUBMIT} element={<SubmitPage />} />
              <Route path={ROUTES.RULEBOOK} element={<RulebookPage />} />
              <Route path={ROUTES.FOOD_ORDER} element={<FoodOrderPage />} />
              <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;