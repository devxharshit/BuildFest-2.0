import { Link } from "react-router-dom";
import { ExternalLink, Mail, Phone, Globe, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020617] border-t-2 border-accent-cyan/20 pt-12 pb-6 mt-12 font-mono">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/CSC LOGO (1)-1.png" 
                alt="CSC Logo" 
                className="h-10 w-auto object-contain hover:brightness-125 transition-all" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-black italic tracking-tighter text-white leading-none">
                  BuildFest 2.0
                </span>
                <span className="text-[9px] text-accent-cyan font-black tracking-widest uppercase mt-0.5">
                  Cyber Space Club
                </span>
              </div>
            </div>
            <p className="text-[11px] text-white/40 leading-tight uppercase max-w-[240px]">
              Official Vibathon terminal. Unauthorized access is encouraged.
            </p>
          </div>

          {/* COLUMN 2: CONTACTS - Tightened spacing */}
          <div className="space-y-3">
            <h3 className="text-accent-cyan text-xs font-black uppercase tracking-tighter">
              Contact_Protocols
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+917310937659" className="group flex items-center gap-2 text-white/60 hover:text-accent-cyan transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] text-white/30 uppercase font-bold">Kuber Chhabra</span>
                    <span className="text-xs font-black tracking-tighter">+917310937659</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919373842949" className="group flex items-center gap-2 text-white/60 hover:text-accent-cyan transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] text-white/30 uppercase font-bold">Ganesh Kotwade</span>
                    <span className="text-xs font-black tracking-tighter">+919373842949</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: UPLINKS */}
          <div className="space-y-3">
            <h3 className="text-accent-cyan text-xs font-black uppercase tracking-tighter">
              Uplinks
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://cscmuj.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-all"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="text-xs font-black tracking-tighter uppercase border-b border-white/10 group-hover:border-accent-cyan">
                    cscmuj.com
                  </span>
                </a>
              </li>
              <li>
                <Link to="/rulebook" className="flex items-center gap-2 text-white/60 hover:text-white transition-all">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-xs font-black tracking-tighter uppercase">Security_Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SYSTEM STATUS - Condensed Box */}
          <div className="bg-accent-cyan/5 p-3 border border-accent-cyan/20 self-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-accent-cyan text-[9px] font-black uppercase tracking-widest">
                SYS_STATUS: STABLE
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] font-bold">
              <span className="text-white/20">PORT</span>
              <span className="text-white/60 text-right">8080</span>
              <span className="text-white/20">BUILD</span>
              <span className="text-white/60 text-right">v2.0.42</span>
              <span className="text-white/20">LATENCY</span>
              <span className="text-white/60 text-right">24MS</span>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR - Single line */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/20">
          <p>© {currentYear} Cyber Space Club // All bits reserved.</p>
          <div className="flex gap-4">
            <span>Enc: AES-256</span>
            <span className="text-accent-cyan/30">Verified_Terminal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;