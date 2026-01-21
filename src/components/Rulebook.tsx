import { motion } from "framer-motion";

const Rulebook = () => {
  const weCareAbout = [
    "Building from prompts, not problem statements",
    "Clarity over complexity",
    "Honest decisions and trade-offs",
    "Human-centered thinking",
    "Respect for people, time, and space",
  ];

  const weDontCareAbout = [
    "Tech stack choices",
    "Number of features",
    "Buzzwords or hype",
    "Pitch theatrics",
    "Over-polished slides",
  ];

  return (
    <div className="max-w-4xl mx-auto font-mono text-sm">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        
        {/* WE CARE ABOUT */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-accent-cyan border-b border-accent-cyan/20 pb-2">
            <span className="text-[10px] opacity-50">01</span>
            <h3 className="tracking-[0.3em] font-bold uppercase italic">WE_CARE_ABOUT</h3>
          </div>
          <ul className="space-y-4">
            {weCareAbout.map((item, i) => (
              <li key={i} className="flex gap-3 text-white/80 group">
                <span className="text-accent-cyan group-hover:animate-pulse">[+]</span>
                <span className="uppercase tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* WE DON'T CARE ABOUT */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-white/20 border-b border-white/5 pb-2">
            <span className="text-[10px]">02</span>
            <h3 className="tracking-[0.3em] font-bold uppercase italic">DISREGARD_LIST</h3>
          </div>
          <ul className="space-y-4">
            {weDontCareAbout.map((item, i) => (
              <li key={i} className="flex gap-3 text-white/30">
                <span className="text-white/10">[-]</span>
                <span className="uppercase tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* FOOTER NOTE */}
      <div className="border-l-2 border-accent-cyan pl-6 py-4 bg-accent-cyan/5">
        <p className="text-[10px] tracking-[0.4em] text-accent-cyan mb-2 uppercase opacity-60">
          // Evaluation_Protocol
        </p>
        <p className="text-white/70 italic leading-relaxed">
          Evaluation is continuous and silent. We are observing how you <span className="text-accent-cyan">think</span>, not just what you ship.
        </p>
      </div>
    </div>
  );
};

export default Rulebook;