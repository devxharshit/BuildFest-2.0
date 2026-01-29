import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const prompts = [
  {
    id: 1,
    title: "Listening to the Ocean",
    content: `The ocean produces vast streams of data, yet understanding breaks when signals are fragmented.
    What does meaningful ecological intelligence look like at the moment of decision?
    Imagine an AI-driven experience that helps someone sense marine change as it unfolds.
    Decide who it serves, how insight appears, and what uncertainty you allow.`,
  },
  {
    id: 2,
    title: "Noticing Before It’s Too Late",
    content: `Students rarely disengage suddenly—signals appear quietly and early.
    What does it mean to notice risk without labeling or alarm?
    Imagine an AI-driven experience that helps someone sense when a student is drifting away.
    Decide how and when support should begin.`,
  },
  {
    id: 3,
    title: "Trust Under Constant Attack",
    content: `Banking threats evolve faster than rules, and signals are buried in noise.
    What does real security look like in the moment of risk?
    Imagine an AI-driven experience that senses threats as they unfold and acts across systems.
    Decide whose trust is protected and how much autonomy the system should have.`,
  },
  {
    id: 4,
    title: "CyberSecurity & Digital Trust",
    content: `Digital spaces demand trust when attention is low and decisions are rushed.
    Safety is rarely questioned until something goes wrong.
    What does feeling safe online really mean when information and influence move together?
    Build the interface where credibility and consent are felt, not just displayed.`,
  },
  {
    id: 5,
    title: "Education — AI Concept Studio",
    content: `Meaning hides inside symbols, diagrams, and half-written notes.
    Confusion builds quietly when explanations don’t match how someone thinks.
    What does real understanding look like at the moment confusion appears?
    Build the moment where clarity replaces the pause in learning.`,
  },
  {
    id: 6,
    title: "Mining & Metallurgy Sustainability",
    content: `Industrial decisions shape outcomes long after they are made.
    Environmental impact accumulates across time, materials, and processes.
    What would change if impact were felt while decisions were still being made?
    Make the invisible consequences of routine choices visible and visceral.`,
  },
  {
    id: 7,
    title: "Trusting the Vote",
    content: `Voting relies on trust, yet the process is rarely visible or verifiable.
    What does a vote need in order to feel legitimate—anonymity, transparency, or proof?
    Imagine a digital voting experience where confidence comes from the system itself.
    Decide what remains invisible and how results become unquestionable.`,
  },
  {
    id: 8,
    title: "Open Innovation",
    content: `The ultimate prompt: The one you define yourself.
    When existing frameworks fail to capture a problem, create your own.
    Build a solution for a challenge the world hasn't recognized yet.
    Define the prompt, the user, and the impact.`,
  },
];

const TimelineNode = ({ index, isHovered }: { index: number; isHovered: boolean }) => (
  <div className="absolute left-0 top-10 -translate-x-1/2 flex flex-col items-center z-10">
    <div 
      className={`relative w-3 h-3 border rotate-45 transition-all duration-300 ${
        isHovered 
          ? 'border-accent-cyan bg-accent-cyan shadow-[0_0_15px_#00f2ff]' 
          : 'border-accent-cyan/40 bg-[#020617]'
      }`}
    />
    <div 
      className={`absolute -left-12 top-[-4px] font-mono text-[10px] tracking-tighter transition-all duration-300 ${
        isHovered ? 'text-accent-cyan' : 'text-white/20'
      }`}
    >
      0{index + 1}
    </div>
  </div>
);

const Prompts = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="relative pl-8 md:pl-16">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-cyan/50 via-accent-cyan/10 to-transparent -translate-x-1/2" />
        
        <div className="space-y-12">
          {prompts.map((prompt, index) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(prompt.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              <TimelineNode index={index} isHovered={hoveredId === prompt.id} />

              <div className={`absolute left-0 top-10 h-[1px] transition-all duration-500 ${
                hoveredId === prompt.id ? 'w-10 bg-accent-cyan' : 'w-4 bg-white/10'
              }`} />

              <div
                className={`relative p-6 md:p-8 transition-all duration-500 ml-4 border-l-2 ${
                  hoveredId === prompt.id
                    ? "bg-accent-cyan/5 border-accent-cyan shadow-[20px_0_40px_-20px_rgba(0,242,255,0.1)]"
                    : "bg-[#0a0f1e] border-white/10"
                }`}
              >
                <div className={`absolute top-0 right-0 w-4 h-4 border-t border-r transition-all duration-300 ${
                  hoveredId === prompt.id ? 'border-accent-cyan opacity-100' : 'opacity-0'
                }`} />

                <header className="flex items-center gap-4 mb-6">
                  <span className={`font-mono text-[10px] tracking-[0.3em] uppercase py-1 px-2 border ${
                    hoveredId === prompt.id ? 'border-accent-cyan text-accent-cyan' : 'border-white/10 text-white/30'
                  }`}>
                    Data_Stream.{String(prompt.id).padStart(2, "0")}
                  </span>
                  <div className={`h-[1px] flex-1 ${hoveredId === prompt.id ? 'bg-accent-cyan/20' : 'bg-white/5'}`} />
                </header>

                <h3 className={`text-2xl md:text-3xl font-bold tracking-tighter uppercase italic mb-4 transition-colors duration-300 ${
                  hoveredId === prompt.id ? 'text-white' : 'text-white/60'
                }`}>
                  {prompt.title}
                </h3>

                <p className={`font-mono text-sm leading-relaxed whitespace-pre-line transition-colors duration-300 ${
                  hoveredId === prompt.id ? 'text-accent-cyan/80' : 'text-white/40'
                }`}>
                  {prompt.content}
                </p>

                <AnimatePresence>
                  {hoveredId === prompt.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />
                      <motion.div 
                        animate={{ y: ["0%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-[1px] bg-accent-cyan/30 shadow-[0_0_15px_#00f2ff]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prompts;