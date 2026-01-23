import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { path: "/prompts", label: "Prompts" },
    { path: "/dare", label: "Dare Box" },
    { path: "/food", label: "Food" },
    { path: "/rulebook", label: "Rulebook" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#020617] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* BRANDING */}
          <Link to="/" className="flex items-center gap-4 relative z-[110]">
            <img 
              src="/Novus_Full_White (1).png" 
              alt="Novus Logo" 
              className="h-8 md:h-12 w-auto"
            />
            <div className="h-6 w-[1px] bg-white/20" />
            <span className="font-mono text-lg md:text-xl font-black italic text-white uppercase">
              BuildFest 2.0
            </span>
          </Link>
          
          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-base font-bold uppercase tracking-tighter transition-all ${
                  location.pathname === item.path ? "text-accent-cyan" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/submit"
              className="px-6 py-2 border-2 border-accent-cyan bg-accent-cyan/10 text-accent-cyan font-mono font-black uppercase italic skew-x-[-12deg] hover:bg-accent-cyan hover:text-black transition-all"
            >
              <span className="inline-block skew-x-[12deg]">SUBMIT</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[110] p-2 text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - FIXED OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[105] bg-[#020617] flex flex-col pt-32 px-10 md:hidden"
          >
            {/* Cyber pattern background for the menu */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#00f2ff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="flex flex-col gap-8 relative z-10">
              {navItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-mono text-3xl font-black uppercase tracking-tighter ${
                      location.pathname === item.path ? "text-accent-cyan" : "text-white/40"
                    }`}
                  >
                    <span className="text-xs mr-4 text-accent-cyan opacity-50">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/submit"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-8 py-4 border-2 border-accent-cyan bg-accent-cyan/10 text-accent-cyan font-mono font-black uppercase italic text-center block"
                >
                  [ SUBMIT_PROPOSAL ]
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto pb-12 opacity-20 font-mono text-[10px] uppercase tracking-widest text-white flex justify-between">
              <span>Connection: Secure</span>
              <span>Node: v2.0.42</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;