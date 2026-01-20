import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      ctx.fillStyle = "rgba(2, 6, 23, 0.05)"; // Dark trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillStyle = Math.random() > 0.9 ? "#fff" : "#00f2ff"; // Occasional white flash
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
      {/* 3D Wireframe Grid Floor */}
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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <BinaryBackground />

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        {/* Hacker Status Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-accent-cyan/40 bg-black/80 backdrop-blur-md">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-accent-cyan uppercase">
            Connection: Secure // Port: 8080
          </p>
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white uppercase italic">
          Build<span className="text-accent-cyan underline decoration-red-500/50 underline-offset-8">Fest</span>
        </h1>
        
        <div className="bg-black/40 border-l-4 border-accent-cyan p-4 mb-12 max-w-2xl mx-auto text-left backdrop-blur-sm">
          <p className="font-mono text-sm sm:text-base text-accent-cyan/90 leading-relaxed italic">
            {">"} Accessing hackathon_v02.exe...<br />
            {">"} Not a hackathon. An overnight build odyssey.<br />
            {">"} No problem statements. Only pure imagination.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/prompts"
            className="group relative inline-flex items-center justify-center h-14 px-12 bg-accent-cyan text-[#020617] font-bold font-mono text-sm uppercase skew-x-[-10deg] transition-all hover:skew-x-0 hover:scale-105 shadow-[5px_5px_0px_#ef4444]"
          >
            Explore Prompts
          </Link>
          <Link 
            to="/rulebook"
            className="group inline-flex items-center justify-center h-14 px-10 border border-white/20 text-white font-mono text-sm uppercase skew-x-[-10deg] transition-all hover:bg-white/5 hover:skew-x-0"
          >
            Rulebook
          </Link>
        </div>

        {/* Global Tracker Info */}
        <div className="mt-20 flex justify-center gap-12 font-mono text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
          <div className="space-y-1"> <p className="text-accent-pink opacity-100">01</p> <p>all_night.log</p> </div>
          <div className="space-y-1"> <p className="text-accent-cyan opacity-100">02</p> <p>zero_limits.sys</p> </div>
          <div className="space-y-1"> <p className="text-primary opacity-100">03</p> <p>build_fest.pkg</p> </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;