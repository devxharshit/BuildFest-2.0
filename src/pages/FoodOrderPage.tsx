import { ROUTES } from "@/config/routes";
import FoodOrder from "@/components/FoodOrder";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const FoodOrderPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <main className="pt-24 pb-20">
        <PageHeader 
          tag="Fuel Station"
          title="Fuel Up"
          description="Order food to keep your creative energy flowing through the night"
        />
        <FoodOrder />

        {/* Navigation Footer */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="font-mono text-[10px] tracking-[1em] uppercase opacity-10">EOF</div>
          <div className="flex gap-4 text-sm font-mono">
            <Link to={ROUTES.DARE_BOX} className="text-accent-cyan/70 hover:text-accent-cyan transition-colors">← Back</Link>
            <span className="text-white/20">•</span>
            <Link to={ROUTES.RULEBOOK} className="text-accent-cyan/70 hover:text-accent-cyan transition-colors">Next →</Link>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default FoodOrderPage;
