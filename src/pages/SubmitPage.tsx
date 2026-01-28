import { ROUTES } from "@/config/routes";
import PageHeader from "@/components/PageHeader";
import Submit from "@/components/Submit";
import { Link } from "react-router-dom";

const SubmitPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative selection:bg-accent-cyan/30">
      {/* Subtle top-down lighting gradient to match reference image */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 50% -10%, #0a0f1e 0%, #020617 80%)`,
        }}
      />
      
      {/* Aligned closer to Nav (pt-24) and centered */}
      <main className="relative z-10 pt-24 pb-20">
        <PageHeader 
          tag="When You're Ready"
          title="Submit Prototype"
          description="Submit what you have. That's enough."
        />

        <div className="container mx-auto px-6 mt-12">
          {/* Main Terminal Shell - Matches #0a0f1e depth from your reference */}
          <div className="max-w-3xl mx-auto relative border border-white/5 bg-[#0a0f1e] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            
            {/* Corner Bracket Detail from Reference */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-cyan" />
            
            {/* Technical Header inside the box */}
            <div className="h-10 w-full bg-black/20 border-b border-white/5 flex items-center px-6">
              <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">
                Secure_Upload_Gateway
              </span>
            </div>

            <div className="p-4 md:p-10">
               <Submit />
            </div>

            {/* Bottom-Right HUD Status */}
            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-accent-cyan/20 uppercase tracking-widest">
              Status: Ready_For_Payload
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="font-mono text-[10px] tracking-[1em] uppercase opacity-10">EOF</div>
          <div className="flex gap-4 text-sm font-mono">
            <Link to={ROUTES.RULEBOOK} className="text-accent-cyan/70 hover:text-accent-cyan transition-colors">← Back</Link>
            <span className="text-white/20">•</span>
            <Link to={ROUTES.HOME} className="text-accent-cyan/70 hover:text-accent-cyan transition-colors">Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmitPage;