import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="text-center max-w-5xl mx-auto animate-fade-in-up relative z-10">
        {/* Glitch effect badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <p className="font-mono text-xs tracking-[0.3em] text-accent-cyan uppercase">
            The Vibathon
          </p>
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
          <span 
            className="inline-block text-transparent bg-clip-text"
            style={{ backgroundImage: 'var(--gradient-cyber)' }}
          >
            Build
          </span>
          <span className="text-foreground text-glow">Fest</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-light">
          Not a hackathon. An open, creative, overnight build experience.
        </p>
        <p className="text-sm text-accent-cyan/70 font-mono tracking-wider mb-12">
          // NO PROBLEM STATEMENTS. ONLY PROMPTS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/prompts"
            className="group relative inline-flex items-center justify-center h-14 px-10 rounded-lg font-semibold transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent-cyan opacity-100 group-hover:opacity-90" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent-cyan opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            <span className="relative text-primary-foreground">Explore Prompts</span>
          </Link>
          <Link 
            to="/rulebook"
            className="group inline-flex items-center justify-center h-14 px-10 rounded-lg border border-primary/50 text-foreground font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
          >
            <span className="mr-2">{'{'}</span>
            Read the Philosophy
            <span className="ml-2">{'}'}</span>
          </Link>
        </div>

        {/* Stats/Info bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-accent-pink">◆</span>
            <span>overnight.build</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-cyan">◆</span>
            <span>explore.create</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">◆</span>
            <span>no.limits</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
