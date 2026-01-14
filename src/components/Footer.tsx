const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm tracking-wider text-muted-foreground">
              BUILDFEST — THE VIBATHON
            </p>
            <p className="text-sm text-text-subtle mt-1">
              Build something. Anything. That's the only rule.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Made with intention
            </span>
            <span className="text-muted-foreground/50">•</span>
            <span className="font-mono text-xs text-muted-foreground/60">
              2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
