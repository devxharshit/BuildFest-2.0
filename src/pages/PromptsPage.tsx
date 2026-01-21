import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Prompts from "@/components/Prompts";

const PromptsPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative">
      <Navigation />
      
      {/* Reduced padding-top (pt-24) to bring it closer to the Nav Bar */}
      <main className="pt-24 pb-20 relative z-10">
        <PageHeader 
          tag="Optional Challenge"
          title="The Prompts"
          description="A playful nudge to rethink your approach. Take one if you dare—but once locked, there's no going back."
        />

        <div className="container mx-auto px-6 mt-12">
          {/* Main Container using the Dare Box color #0a0f1e */}
          <div className="max-w-4xl mx-auto relative border border-white/5 bg-[#0a0f1e] shadow-2xl">
            {/* Top-Left Cyan Bracket from your image */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-cyan" />
            
            <div className="p-1 md:p-6 lg:p-8">
               <Prompts />
            </div>
          </div>
        </div>

        {/* Minimal Exit Marker */}
        <div className="mt-20 flex justify-center opacity-10">
          <div className="font-mono text-[10px] tracking-[1em]">EOF</div>
        </div>
      </main>
    </div>
  );
};

export default PromptsPage;