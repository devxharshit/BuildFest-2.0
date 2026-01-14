const Rulebook = () => {
  const weCareAbout = [
    "Building from prompts, not problem statements",
    "Clarity over complexity",
    "Honest decisions and trade-offs",
    "Human-centered thinking",
    "Respect for people, time, and space",
  ];

  const weDontCareAbout = [
    "Tech stack choices",
    "Number of features",
    "Buzzwords or hype",
    "Pitch theatrics",
    "Over-polished slides",
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-mono text-sm tracking-[0.2em] text-primary mb-4 uppercase">
            The Philosophy
          </p>
          <h2 className="text-headline font-semibold tracking-tight mb-6">
            Rulebook
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            This isn't a list of rules. It's a way of thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* We Care About */}
          <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent animate-fade-in-up">
            <h3 className="text-title font-semibold mb-6 text-foreground">
              We care about
            </h3>
            <ul className="space-y-4">
              {weCareAbout.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-body text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* We Don't Care About */}
          <div className="p-8 rounded-2xl border border-border/50 bg-card/30 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-title font-semibold mb-6 text-foreground">
              We don't care about
            </h3>
            <ul className="space-y-4">
              {weDontCareAbout.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-body text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Evaluation Note */}
        <div className="text-center animate-fade-in">
          <div className="inline-block p-8 rounded-2xl bg-secondary/50 border border-border/50 max-w-xl">
            <p className="font-mono text-xs tracking-wider text-muted-foreground mb-3 uppercase">
              A note on evaluation
            </p>
            <p className="text-body text-foreground leading-relaxed">
              Evaluation is continuous and silent, based on observation rather than checkpoints. 
              We're watching how you think, not what you ship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rulebook;
