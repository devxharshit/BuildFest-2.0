import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ROUTES } from "@/config/routes";

const BinaryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillStyle = Math.random() > 0.9 ? "#fff" : "#00f2ff"; 
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#020617] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #00f2ff 1px, transparent 1px), 
                            linear-gradient(to bottom, #00f2ff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)',
          transform: 'perspective(800px) rotateX(65deg) translateY(-50px) scale(2.5)',
          transformOrigin: 'top',
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20 sm:pt-32">
      <BinaryBackground />

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-5xl mx-auto relative z-10"
      >
        {/* Connection Status Header - Adjusted text size for small screens */}
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-10 px-3 sm:px-5 py-2 border border-accent-cyan/40 bg-black/80 backdrop-blur-md">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <p className="font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] text-accent-cyan uppercase">
            CONNECTION: SECURE // PORT: 192.169.001
          </p>
        </div>
        
        {/* Main Title - Responsive fluid typography and line height */}
        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 sm:mb-10 text-white uppercase italic leading-[0.9] break-words">
          BUILDFEST <span className="text-accent-cyan underline decoration-2 sm:decoration-4 underline-offset-[8px] sm:underline-offset-[12px]">2.0</span>
        </h1>
        
        {/* Command Line Terminal Box - Fixed overflow and added mobile padding */}
        <motion.div 
          className="bg-black/10 border-l-4 border-accent-cyan/40 p-4 sm:p-6 mb-8 sm:mb-12 max-w-2xl mx-auto text-left backdrop-blur-md shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 -z-1"></div>
          <p className="font-mono text-xs sm:text-base text-accent-cyan/90 leading-relaxed italic whitespace-normal sm:whitespace-nowrap">
            <span className="text-white/40">{">"}</span> Accessing hackathon_v02.exe...<br className="sm:hidden" />
            <span className="text-white/40">{">"}</span> Not a hackathon. An overnight build odyssey.<br className="hidden sm:block" />
            <span className="text-white/40">{">"}</span> No problem statements. Only pure imagination.
          </p>
        </motion.div>

        {/* CTA Buttons - Full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link 
            to={ROUTES.PROMPTS}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center h-12 sm:h-14 px-8 sm:px-12 bg-accent-cyan text-[#020617] font-bold font-mono text-xs sm:text-sm uppercase skew-x-[-12deg] transition-all hover:skew-x-0 hover:scale-105 shadow-[4px_4px_0px_#ef4444] sm:shadow-[6px_6px_0px_#ef4444]"
          >
            Explore Prompts
          </Link>
          <Link 
            to={ROUTES.RULEBOOK}
            className="w-full sm:w-auto group inline-flex items-center justify-center h-12 sm:h-14 px-8 sm:px-10 border border-white/20 text-white font-mono text-xs sm:text-sm uppercase skew-x-[-12deg] transition-all hover:bg-white/10 hover:skew-x-0"
          >
            Rulebook
          </Link>
        </div>

        {/* Global Metadata Tracker - Smaller gap and hidden overflow for narrow phones */}
        <div className="mt-16 sm:mt-24 mb-2 flex justify-center gap-6 sm:gap-16 font-mono text-[8px] sm:text-[10px] text-muted-foreground/30 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          <div className="space-y-1 sm:space-y-2"> <p className="text-accent-pink">01</p> <p className="hidden xs:block">all_night.log</p> </div>
          <div className="space-y-1 sm:space-y-2"> <p className="text-accent-cyan">02</p> <p className="hidden xs:block">zero_limits.sys</p> </div>
          <div className="space-y-1 sm:space-y-2"> <p className="text-white/60">03</p> <p className="hidden xs:block">build_fest.pkg</p> </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;