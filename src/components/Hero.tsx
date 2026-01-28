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
    /* pt-32 ensures content starts below the Navbar */
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-32">
      <BinaryBackground />

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        {/* Connection Status Header */}
        <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 border border-accent-cyan/40 bg-black/80 backdrop-blur-md">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.4em] text-accent-cyan uppercase">
            CONNECTION: SECURE // PORT: 192.169.001
          </p>
        </div>
        
        {/* Main Title Styled as per reference image */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-10 text-white uppercase italic leading-[0.85]">
          BUILDFEST <span className="text-accent-cyan underline decoration-4 underline-offset-[12px]">2.0</span>
        </h1>
        
        {/* Command Line Terminal Box */}

        <motion.div 
        className="bg-black/10 border-l-4 border-accent-cyan/40 p-6 mb-12 max-w-2xl mx-auto text-left backdrop-blur-md shadow-2xl overflow-x-hidden whitespace-nowrap">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-1"></div>
          <p className="font-mono text-sm sm:text-base text-accent-cyan/90 leading-relaxed italic">
            <span className="text-white/40">{">"}</span> Accessing hackathon_v02.exe...<br />
            <span className="text-white/40">{">"}</span> Not a hackathon. An overnight build odyssey.<br />
            <span className="text-white/40">{">"}</span> No problem statements. Only pure imagination.
          </p>
        </motion.div>

        
        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to={ROUTES.PROMPTS}
            className="group relative inline-flex items-center justify-center h-14 px-12 bg-accent-cyan text-[#020617] font-bold font-mono text-sm uppercase skew-x-[-12deg] transition-all hover:skew-x-0 hover:scale-105 shadow-[6px_6px_0px_#ef4444]"
          >
            Explore Prompts
          </Link>
          <Link 
            to={ROUTES.RULEBOOK}
            className="group inline-flex items-center justify-center h-14 px-10 border border-white/20 text-white font-mono text-sm uppercase skew-x-[-12deg] transition-all hover:bg-white/10 hover:skew-x-0"
          >
            Rulebook
          </Link>
        </div>

        {/* Global Metadata Tracker */}
        <div className="mt-24 mb-2 flex justify-center gap-10 md:gap-16 font-mono text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em]">
          <div className="space-y-2"> <p className="text-accent-pink">01</p> <p>all_night.log</p> </div>
          <div className="space-y-2"> <p className="text-accent-cyan">02</p> <p>zero_limits.sys</p> </div>
          <div className="space-y-2"> <p className="text-white/60">03</p> <p>build_fest.pkg</p> </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;