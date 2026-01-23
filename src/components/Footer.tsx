import { Link } from "react-router-dom";
import { Phone, Globe, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    /* Removed large mt-12 to close the gap with the landing page */
    <footer className="w-full bg-[#020617] border-t border-white/10 pt-12 pb-8 font-mono relative overflow-hidden">
      
      {/* Subtle scanline effect for a professional terminal feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 items-start">
          
          {/* COLUMN 1: BRANDING */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">
                BuildFest <span className="text-accent-cyan text-glow-cyan">2.0</span>
              </h2>
              <p className="text-[10px] text-accent-cyan font-bold tracking-[0.3em] uppercase mt-2">
                Cyber Space Club
              </p>
            </div>
            <p className="text-[11px] text-white/30 leading-relaxed uppercase border-l-2 border-accent-cyan/20 pl-4">
              The official build-odyssey terminal. <br />
              All systems operational.
            </p>
          </div>

          {/* COLUMN 2: CONTACTS */}
          <div className="space-y-4">
            <h3 className="text-white text-[11px] font-black uppercase tracking-widest opacity-40">
              // Contact_Protocols
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917310937659" className="group flex items-center gap-3 text-white/50 hover:text-accent-cyan transition-all">
                  <div className="p-2 border border-white/5 bg-white/5 group-hover:border-accent-cyan/40">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] text-white/20 uppercase font-bold mb-1">Kuber Chhabra</span>
                    <span className="text-xs font-bold text-white/80 group-hover:text-accent-cyan">+91 73109 37659</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919373842949" className="group flex items-center gap-3 text-white/50 hover:text-accent-cyan transition-all">
                  <div className="p-2 border border-white/5 bg-white/5 group-hover:border-accent-cyan/40">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] text-white/20 uppercase font-bold mb-1">Ganesh Kotwade</span>
                    <span className="text-xs font-bold text-white/80 group-hover:text-accent-cyan">+91 93738 42949</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: UPLINKS */}
          <div className="space-y-4">
            <h3 className="text-white text-[11px] font-black uppercase tracking-widest opacity-40">
              // Uplinks
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://cscmuj.com" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/50 hover:text-white transition-all">
                  <Globe className="w-4 h-4 text-accent-cyan" />
                  <span className="text-[11px] font-bold uppercase tracking-wider border-b border-transparent group-hover:border-accent-cyan">
                    cscmuj.com
                  </span>
                </a>
              </li>
              <li>
                <Link to="/rulebook" className="group flex items-center gap-3 text-white/50 hover:text-white transition-all">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                  <span className="text-[11px] font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white/20">
                    Security_Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SYSTEM STATUS */}
          <div className="lg:col-span-1">
            <div className="bg-black/40 border border-white/10 p-5 backdrop-blur-md relative group hover:border-accent-cyan/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <h3 className="text-accent-cyan text-[10px] font-black uppercase tracking-[0.2em]">
                  Status: Stable
                </h3>
              </div>
              <div className="space-y-2 font-mono text-[10px] font-bold uppercase">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-white/20">Port</span>
                  <span className="text-white/70">8080</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-white/20">Build</span>
                  <span className="text-white/70">v2.0.42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/20">Latency</span>
                  <span className="text-green-500/80">24ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 5: INCREASED SIZE LOGO */}
          <div className="hidden lg:flex justify-end items-center h-full">
            <div className="relative group">
              {/* Intentional glowing backlight for the large logo */}
              <div className="absolute inset-0 bg-orange-600/10 blur-[60px] rounded-full opacity-60 group-hover:opacity-90 transition-opacity" />
              <img 
                src="/CSC LOGO (1)-1.png" 
                alt="Cyber Space Official" 
                className="h-32 w-auto object-contain brightness-125 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]" 
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            © {currentYear} <span className="text-white/40">Cyber Space Club</span> // Data Encryption: Active
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
            <div className="flex items-center gap-2 text-white/30">
              <div className="w-1 h-1 bg-accent-cyan rounded-full shadow-[0_0_5px_#00f2ff]" />
              Verified_Node
            </div>
            <div className="px-4 py-1.5 border border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5 rounded-sm shadow-[0_0_10px_rgba(0,242,255,0.1)]">
              BuildFest_v2.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;