import { ROUTES } from "@/config/routes";
import PageHeader from "@/components/PageHeader";
import Rulebook from "@/components/Rulebook";
import { Link } from "react-router-dom";

const RulebookPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative selection:bg-accent-cyan/30">
      {/* Subtle top-down lighting to match the reference image atmosphere */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 50% -10%, #0a0f1e 0%, #020617 80%)`,
        }}
      />
      
      {/* Tight alignment to Nav (pt-24) and centered layout */}
      <main className="relative z-10 pt-24 pb-20">
        <PageHeader 
          tag="The Philosophy"
          title="Rulebook"
          description="This isn't a list of rules. It's a way of thinking."
        />

        <div className="container mx-auto px-6 mt-12">
          {/* Main Content Shell - Using the #0a0f1e depth from your image */}
          <div className="max-w-4xl mx-auto relative border border-white/5 bg-[#0a0f1e] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            
            {/* Top-Left Cyan Bracket Accent from Reference */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-cyan" />
            
            {/* Window Meta Info */}
            <div className="h-10 w-full bg-black/20 border-b border-white/5 flex items-center px-6 justify-between">
              <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">
                Protocol_Documentation
              </span>
              <span className="font-mono text-[8px] text-accent-cyan/40 uppercase">
                ReadOnly_Mode
              </span>
            </div>

            {/* Rulebook Component Container */}
            <div className="p-4 md:p-10 lg:p-12">
               <Rulebook />
            </div>

            {/* Bottom Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-cyan/10 to-transparent" />
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="font-mono text-[10px] tracking-[1em] uppercase opacity-10">EOF</div>
          <div className="flex gap-4 text-sm font-mono">
            <Link to={ROUTES.FOOD_ORDER} className="text-accent-cyan/70 hover:text-accent-cyan transition-colors">← Back</Link>
            <span className="text-white/20">•</span>
            <Link to={ROUTES.SUBMIT} className="text-accent-cyan/70 hover:text-accent-cyan transition-colors">Next →</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RulebookPage;