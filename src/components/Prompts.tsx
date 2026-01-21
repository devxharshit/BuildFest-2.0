import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const prompts = [
  {
    id: 1,
    title: "The Invisible Thread",
    content: `Something connects two strangers who will never meet.
    It could be a sound, a number, a moment in time.
    What happens when one of them almost discovers it?
    Build what exists between them—not them.`,
  },
  {
    id: 2,
    title: "Second Language",
    content: `There's a language that only appears at night.
    It's not spoken, not written, not coded.
    But somehow, people understand it anyway.
    Create the interface where this language lives.`,
  },
  {
    id: 3,
    title: "The Last Notification",
    content: `A device sends its final message before going dark forever.
    What does it say? Who receives it?
    The message isn't important—the silence after is.
    Build the moment just before the end.`,
  },
  {
    id: 4,
    title: "Borrowed Time",
    content: `Someone is given exactly 47 minutes they weren't supposed to have.
    They know it. They can feel it slipping.
    What would you build for those 47 minutes?
    Not to save them—to make them matter.`,
  },
  {
    id: 5,
    title: "The Cartographer's Mistake",
    content: `A map shows a place that doesn't exist—until people start going there.
    The mistake becomes real through belief.
    Build something that shouldn't exist,
    but does now, because someone made it.`,
  },
];

const TimelineNode = ({ index, isHovered }: { index: number; isHovered: boolean }) => (
  <div className="absolute left-0 top-10 -translate-x-1/2 flex flex-col items-center z-10">
    {/* Node Square - Hacker Style */}
    <div 
      className={`relative w-3 h-3 border rotate-45 transition-all duration-300 ${
        isHovered 
          ? 'border-accent-cyan bg-accent-cyan shadow-[0_0_15px_#00f2ff]' 
          : 'border-accent-cyan/40 bg-[#020617]'
      }`}
    />
    
    {/* Index Indicator */}
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
        
        {/* Vertical Data Stream Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-cyan/50 via-accent-cyan/10 to-transparent -translate-x-1/2" />
        
        <div className="space-y-12">
          {prompts.map((prompt, index) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(prompt.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              <TimelineNode index={index} isHovered={hoveredId === prompt.id} />

              {/* Connector */}
              <div className={`absolute left-0 top-10 h-[1px] transition-all duration-500 ${
                hoveredId === prompt.id ? 'w-10 bg-accent-cyan' : 'w-4 bg-white/10'
              }`} />

              {/* Sharp Prompt Card */}
              <div
                className={`relative p-6 md:p-8 transition-all duration-500 ml-4 border-l-2 ${
                  hoveredId === prompt.id
                    ? "bg-accent-cyan/5 border-accent-cyan shadow-[20px_0_40px_-20px_rgba(0,242,255,0.1)]"
                    : "bg-[#0a0f1e] border-white/10"
                }`}
              >
                {/* Corner Accent */}
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

                {/* Cyber Scanline Overlay */}
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