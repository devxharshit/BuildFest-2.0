import { useEffect, useState } from "react";

interface Pillar {
  id: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  width: number;
  color: string;
}

const LaserPillars = () => {
  const [pillars, setPillars] = useState<Pillar[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--primary))",
      "hsl(var(--accent-cyan))",
      "hsl(var(--accent-pink))",
      "hsl(var(--accent-purple))",
    ];

    const generatedPillars: Pillar[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: (i * 8.5) + Math.random() * 3,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      opacity: 0.15 + Math.random() * 0.25,
      width: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setPillars(generatedPillars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Laser pillars */}
      {pillars.map((pillar) => (
        <div
          key={pillar.id}
          className="absolute bottom-0 animate-laser-pulse"
          style={{
            left: `${pillar.left}%`,
            width: `${pillar.width}px`,
            height: '100%',
            background: `linear-gradient(to top, ${pillar.color}, transparent 70%)`,
            opacity: pillar.opacity,
            animationDelay: `${pillar.delay}s`,
            animationDuration: `${pillar.duration}s`,
            filter: `blur(${pillar.width * 0.5}px)`,
          }}
        />
      ))}

      {/* Horizontal scan lines */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 4px)',
        }}
      />

      {/* Glow orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-cyan) / 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-pink) / 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '2s',
        }}
      />
    </div>
  );
};

export default LaserPillars;
