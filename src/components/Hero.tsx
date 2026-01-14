const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase">
          The Vibathon
        </p>
        
        <h1 className="text-display font-semibold tracking-tight mb-8">
          <span className="text-gradient-accent">Build</span>Fest
        </h1>
        
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Not a hackathon. An open, creative, overnight build experience.
          <br />
          <span className="text-text-subtle">No problem statements. Only prompts.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#prompts"
            className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
          >
            Explore Prompts
          </a>
          <a 
            href="#rulebook"
            className="inline-flex items-center justify-center h-14 px-10 rounded-xl border border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
          >
            Read the Philosophy
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
