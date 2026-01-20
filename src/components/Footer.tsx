const Footer = () => {
  return (
    <footer className="py-12 border-t border-accent-cyan/20 bg-[#020617] relative">
      {/* Laser line effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 font-mono">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm tracking-[0.2em] text-accent-cyan uppercase">
              BuildFest // The Vibathon
            </p>
            <p className="text-[10px] text-muted-foreground mt-2 uppercase opacity-60">
              $ build --force --all-night
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] text-muted-foreground/40 uppercase tracking-widest">
            <span>Intention_Set: True</span>
            <span className="text-accent-cyan/20">|</span>
            <span>System_Time: 2024</span>
            <span className="text-accent-cyan/20">|</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-accent-cyan animate-pulse" />
              <div className="w-1 h-1 bg-accent-cyan animate-pulse delay-75" />
              <div className="w-1 h-1 bg-accent-cyan animate-pulse delay-150" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;