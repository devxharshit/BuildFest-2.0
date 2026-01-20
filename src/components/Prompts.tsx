import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const prompts = [
  {
    id: 1,
    title: "The Invisible Thread",
    category: "CONNECTIVITY",
    content: `Something connects two strangers who will never meet.\nIt could be a sound, a number, a moment in time.\nWhat happens when one of them almost discovers it?\nBuild what exists between them—not them.`,
  },
  {
    id: 2,
    title: "Second Language",
    category: "INTERFACE",
    content: `There's a language that only appears at night.\nIt's not spoken, not written, not coded.\nBut somehow, people understand it anyway.\nCreate the interface where this language lives.`,
  },
  {
    id: 3,
    title: "The Last Notification",
    category: "MESSAGING",
    content: `A device sends its final message before going dark forever.\nWhat does it say? Who receives it?\nThe message isn't important—the silence after is.\nBuild the moment just before the end.`,
  },
  {
    id: 4,
    title: "Borrowed Time",
    category: "TEMPORAL",
    content: `Someone is given exactly 47 minutes they weren't supposed to have.\nThey know it. They can feel it slipping.\nWhat would you build for those 47 minutes?\nNot to save them—to make them matter.`,
  },
  {
    id: 5,
    title: "The Cartographer's Mistake",
    category: "SPATIAL",
    content: `A map shows a place that doesn't exist—until people start going there.\nThe mistake becomes real through belief.\nBuild something that shouldn't exist,\nbut does now, because someone made it.`,
  },
];

const TimelineNode = ({ index, isHovered }) => (
  <div className="absolute left-0 top-10 -translate-x-1/2 flex flex-col items-center z-10">
    {/* Terminal Node Design */}
    <div 
      className={`w-3 h-3 border transition-all duration-300 ${
        isHovered 
          ? 'border-accent-cyan bg-accent-cyan shadow-[0_0_15px_#00f2ff] rotate-45' 
          : 'border-accent-cyan/40 bg-[#020617] rotate-0'
      }`}
    />
    
    {/* Hex Data Tag */}
    <div 
      className={`absolute -left-14 top-0 font-mono text-[9px] transition-all duration-300 ${
        isHovered ? 'text-accent-cyan opacity-100' : 'text-muted-foreground/30 opacity-60'
      }`}
    >
      0x0{index + 1}
    </div>
  </div>
);

const Prompts = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-[#020617] py-24 relative overflow-hidden">
      {/* Background Sync: Grid & Binary Hints */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#00f2ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Area */}
          

          <div className="relative pl-12 md:pl-16">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent-cyan/50 via-accent-cyan/10 to-transparent" />
            
            <div className="space-y-12">
              {prompts.map((prompt, index) => (
                <div
                  key={prompt.id}
                  onMouseEnter={() => setHoveredId(prompt.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative"
                >
                  <TimelineNode index={index} isHovered={hoveredId === prompt.id} />
                  
                  {/* Content Card */}
                  <div
                    className={`relative p-8 transition-all duration-500 ml-4 border ${
                      hoveredId === prompt.id
                        ? "border-accent-cyan/50 bg-accent-cyan/5 shadow-[0_0_30px_rgba(0,242,255,0.05)]"
                        : "border-white/5 bg-transparent"
                    }`}
                  >
                    {/* Corner Accents (Brutalist Style) */}
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent-cyan opacity-40 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-accent-cyan/60 px-2 py-0.5 border border-accent-cyan/20 bg-accent-cyan/5">
                          SEC_{prompt.category}
                        </span>
                        <div className={`h-px flex-1 transition-all duration-700 ${
                          hoveredId === prompt.id ? 'bg-accent-cyan/40' : 'bg-transparent'
                        }`} />
                      </div>

                      <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                        hoveredId === prompt.id ? 'text-accent-cyan' : 'text-white'
                      }`}>
                        {hoveredId === prompt.id ? `> ${prompt.title}` : prompt.title}
                      </h3>

                      <p className={`font-mono text-sm leading-relaxed transition-colors duration-300 ${
                        hoveredId === prompt.id ? 'text-white' : 'text-muted-foreground/70'
                      }`}>
                        {prompt.content}
                      </p>

                      {/* Footer Info for Card */}
                      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-40">
                        <span className="text-[9px] font-mono tracking-widest uppercase">Encryption_Level: AES-256</span>
                        <span className="text-[9px] font-mono text-accent-cyan">STATUS: UNLOCKED</span>
                      </div>
                    </div>

                    {/* Scanning Bar Animation */}
                    <AnimatePresence>
                      {hoveredId === prompt.id && (
                        <motion.div 
                          initial={{ top: 0 }}
                          animate={{ top: '100%' }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-px bg-accent-cyan/40 shadow-[0_0_10px_#00f2ff] pointer-events-none z-20"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Prompts;