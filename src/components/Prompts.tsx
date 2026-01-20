import { useState } from "react";

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
  <div className="absolute left-0 top-8 -translate-x-1/2 flex flex-col items-center z-10">
    {/* Outer glow ring */}
    <div 
      className={`absolute w-8 h-8 rounded-full transition-all duration-500 ${
        isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)',
        filter: 'blur(4px)',
      }}
    />
    
    {/* Main node */}
    <div 
      className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
        isHovered 
          ? 'border-primary bg-primary shadow-[0_0_20px_hsl(var(--primary))]' 
          : 'border-primary/50 bg-background'
      }`}
    >
      {/* Inner pulse */}
      <div 
        className={`absolute inset-1 rounded-full bg-primary animate-pulse ${
          isHovered ? 'opacity-100' : 'opacity-50'
        }`}
      />
    </div>
    
    {/* Data tag */}
    <div 
      className={`absolute -left-16 top-0 font-mono text-[10px] transition-all duration-300 ${
        isHovered ? 'text-primary opacity-100' : 'text-primary/40 opacity-60'
      }`}
    >
      [{String(index + 1).padStart(2, "0")}]
    </div>
  </div>
);

const TimelineLine = () => (
  <div className="absolute left-0 top-0 bottom-0 w-px -translate-x-1/2">
    {/* Base line */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
    
    {/* Animated pulse traveling down */}
    <div 
      className="absolute w-full h-32 animate-timeline-pulse"
      style={{
        background: 'linear-gradient(to bottom, transparent, hsl(var(--primary)), transparent)',
        filter: 'blur(1px)',
      }}
    />
    
    {/* Glow effect */}
    <div 
      className="absolute inset-0 w-4 -translate-x-1/2"
      style={{
        background: 'linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.1), transparent)',
        filter: 'blur(8px)',
      }}
    />
  </div>
);

const Prompts = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        {/* Timeline container */}
        <div className="relative pl-12 md:pl-16">
          {/* Main timeline line */}
          <TimelineLine />
          
          <div className="space-y-8">
            {prompts.map((prompt, index) => (
              <div
                key={prompt.id}
                onMouseEnter={() => setHoveredId(prompt.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline node */}
                <TimelineNode index={index} isHovered={hoveredId === prompt.id} />
                
                {/* Connector line to card */}
                <div 
                  className={`absolute left-0 top-8 h-px transition-all duration-500 ${
                    hoveredId === prompt.id ? 'w-8 md:w-12' : 'w-4 md:w-8'
                  }`}
                  style={{
                    background: hoveredId === prompt.id 
                      ? 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.3))'
                      : 'linear-gradient(to right, hsl(var(--primary) / 0.5), transparent)',
                  }}
                />

                {/* Prompt card */}
                <div
                  className={`relative p-8 md:p-10 rounded-2xl border transition-all duration-500 ml-4 ${
                    hoveredId === prompt.id
                      ? "border-primary/50 bg-card shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                      : "border-border/50 bg-card/50"
                  }`}
                >
                  {/* Tech corner accents */}
                  <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-300 ${
                    hoveredId === prompt.id ? 'border-primary/60' : 'border-primary/20'
                  }`} />
                  <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-2xl transition-all duration-300 ${
                    hoveredId === prompt.id ? 'border-accent-cyan/60' : 'border-accent-cyan/20'
                  }`} />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs text-primary/60 px-2 py-1 bg-primary/10 rounded">
                        PROMPT.{String(prompt.id).padStart(2, "0")}
                      </span>
                      <div className={`h-px flex-1 transition-all duration-500 ${
                        hoveredId === prompt.id ? 'bg-gradient-to-r from-primary/40 to-transparent' : 'bg-transparent'
                      }`} />
                    </div>
                    <h3 className="text-title font-medium mb-4 text-foreground group-hover:text-gradient-accent transition-all duration-300">
                      {prompt.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed whitespace-pre-line">
                      {prompt.content}
                    </p>
                  </div>
                  
                  {/* Scanning line effect on hover */}
                  <div 
                    className={`absolute inset-0 pointer-events-none overflow-hidden rounded-2xl transition-opacity duration-300 ${
                      hoveredId === prompt.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div 
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline end cap */}
          <div className="absolute left-0 bottom-0 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/30" />
        </div>
      </div>
    </div>
  );
};

export default Prompts;
