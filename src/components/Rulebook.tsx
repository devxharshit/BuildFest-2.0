import { motion } from "framer-motion";
import { Terminal, Shield, Zap, Info, Linkedin, Video } from "lucide-react";

const Rulebook = () => {
  const rules = [
    { id: "01", category: "IDEATION", text: "No fixed problem statements. Solutions are generated from open-ended prompts." },
    { id: "02", category: "SELECTION", text: "Teams must choose one official prompt from the website; prompts are purposefully broad." },
    { id: "03", category: "EXECUTION", text: "No predefined outputs, feature requirements, or mandated technologies." },
    { id: "04", category: "AI_POLICY", text: "Responsible use of AI (Gemini, AI Studio, Lovable) is permitted. Teams must take full ownership." },
    { id: "05", category: "DARE_BOX", text: "Optional feature. Once a dare is locked, no changes are permitted." },
    { id: "06", category: "SUPPORT", text: "Mentoring is available throughout; teams must engage respectfully and purposefully." },
    { id: "07", category: "LOGISTICS", text: "Food ordering window: 10:00 PM – 11:30 PM. Collection at central distribution point." },
    { id: "08", category: "CONDUCT", text: "Maintain respect, follow organizer instructions, and avoid any form of misconduct." },
  ];

  return (
    <div className="max-w-5xl mx-auto font-mono text-sm space-y-12 pb-20">
      
      {/* PHASE SYSTEM */}
      <div className="grid md:grid-cols-2 gap-4">
        <section className="p-6 border border-accent-cyan/20 bg-accent-cyan/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={40} className="text-accent-cyan" />
          </div>
          <h3 className="text-accent-cyan font-black tracking-widest mb-4 flex items-center gap-2 uppercase">
            <span className="w-2 h-2 bg-accent-cyan animate-pulse" /> PHASE_01: OPEN_BUILD
          </h3>
          <p className="text-[10px] text-accent-cyan/60 mb-2 uppercase tracking-tighter">12:00 AM – 03:30 AM</p>
          <p className="text-white/70 text-xs leading-relaxed uppercase">
            Free ideation & development. AI support permitted for research and logic. Mentors available.
          </p>
        </section>

        <section className="p-6 border border-white/10 bg-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
            <Terminal size={40} className="text-white" />
          </div>
          <h3 className="text-white font-black tracking-widest mb-4 flex items-center gap-2 uppercase">
             PHASE_02: EXECUTION_ONLY
          </h3>
          <p className="text-white/40 text-[10px] mb-2 uppercase tracking-tighter">03:30 AM – 06:30 AM</p>
          <p className="text-white/60 text-xs leading-relaxed uppercase">
            Focus shifts to execution and refinement. AI usage is permitted. Mentors remain available.
          </p>
        </section>
      </div>

      {/* CORE PROTOCOLS GRID */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {rules.map((rule) => (
          <div key={rule.id} className="flex gap-4 group">
            <span className="text-accent-cyan font-black text-xs opacity-40 group-hover:opacity-100 transition-opacity">
              {rule.id}
            </span>
            <div className="space-y-1">
              <span className="text-[9px] text-accent-cyan font-black tracking-[0.3em] uppercase opacity-60">
                // {rule.category}
              </span>
              <p className="text-white/80 text-[11px] uppercase tracking-tight leading-relaxed">
                {rule.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SUBMISSION BLOCK */}
      <section className="border-2 border-white/10 p-8 bg-white/[0.02] relative">
        <div className="absolute -top-3 left-6 bg-[#020617] px-4 text-white font-black tracking-widest text-xs uppercase italic flex items-center gap-2">
          <Linkedin size={14} className="text-accent-cyan" /> Submission_Protocol
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="p-4 bg-accent-cyan/5 border-l-4 border-accent-cyan">
              <p className="text-white font-black text-xs uppercase flex items-center gap-2 mb-2">
                <Video size={16} className="text-accent-cyan" /> Mandatory: Demo_Pitch
              </p>
              <p className="text-white/70 text-[11px] uppercase leading-relaxed">
                Include a video (max <span className="text-white font-bold underline">2 minutes</span>) explaining your project and what you built.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Required LinkedIn Tags:</p>
              <div className="space-y-1">
                <p className="text-accent-cyan font-black text-sm tracking-tighter uppercase">@Cyber Space Club</p>
                <p className="text-accent-cyan font-black text-sm tracking-tighter uppercase">@DojoWorks</p>
                <p className="text-accent-cyan font-black text-sm tracking-tighter uppercase">@Manipal University Jaipur</p>
              </div>
            </div>
          </div>
          
          <div className="border-l border-white/10 pl-8 space-y-4 h-full">
            <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.5em] italic">Required_Metadata</div>
            <ul className="text-[11px] space-y-3 text-white/80 font-bold uppercase tracking-widest">
              <li className="flex items-center gap-2 group cursor-default">
                <span className="text-accent-cyan group-hover:scale-125 transition-transform">■</span> Team Name
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <span className="text-accent-cyan group-hover:scale-125 transition-transform">■</span> Project Name
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <span className="text-accent-cyan group-hover:scale-125 transition-transform">■</span> Prompt Chosen
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <span className="text-accent-cyan group-hover:scale-125 transition-transform">■</span> LinkedIn Post Link
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER EVALUATION */}
      <div className="border-l-2 border-accent-cyan pl-6 py-4 bg-accent-cyan/5">
        <p className="text-[10px] tracking-[0.4em] text-accent-cyan mb-2 uppercase opacity-60 flex items-center gap-2">
          <Shield size={12} /> Code_of_Conduct
        </p>
        <p className="text-white/70 italic leading-relaxed text-xs uppercase">
          Maintain a respectful and inclusive environment. The organizers reserve the right to make final decisions and disqualify for any misconduct or dishonesty.
        </p>
      </div>
    </div>
  );
};

export default Rulebook;