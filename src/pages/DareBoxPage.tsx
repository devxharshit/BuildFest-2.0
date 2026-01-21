import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import DareBox from "@/components/DareBox";

const DareBoxPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative selection:bg-accent-cyan/30">
      {/* Subtle top-down glow to match reference image lighting */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 50% -10%, #0a0f1e 0%, #020617 80%)`,
        }}
      />
      
      <Navigation />
      
      {/* Reduced padding-top (pt-24) to align better with the Navbar */}
      <main className="relative z-10 pt-24 pb-20">
        <PageHeader 
          tag="Optional Challenge"
          title="The Dare Box"
          description="A playful nudge to rethink your approach. Take one if you dare—but once locked, there's no going back."
        />

        <div className="container mx-auto px-6 mt-12">
          {/* Main Terminal Shell - Exactly #0a0f1e from reference */}
          <div className="max-w-2xl mx-auto relative border border-white/5 bg-[#0a0f1e] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            
            {/* Top-Left Cyan Bracket Accent */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-cyan" />
            
            {/* Component Padding - Small p-1 to allow the DareBox inner border to shine */}
            <div className="p-1 md:p-4">
               <DareBox />
            </div>

            {/* Bottom-Right HUD Detail */}
            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-white/5 uppercase tracking-[0.2em]">
              Dare_Protocol_v1.0
            </div>
          </div>
        </div>

        {/* Minimal Footer EOF Marker */}
        <div className="mt-32 flex justify-center opacity-10">
          <div className="font-mono text-[10px] tracking-[1em] uppercase">EOF</div>
        </div>
      </main>
    </div>
  );
};

export default DareBoxPage;