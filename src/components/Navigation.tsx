import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/prompts", label: "Prompts" },
    { path: "/dare", label: "Dare Box" },
    { path: "/food", label: "Food" },
    { path: "/rulebook", label: "Rulebook" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#020617]/90 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="flex items-center gap-4 group flex-shrink-0">
            <motion.img 
              src="/Novus_Full_White (1).png" 
              alt="Novus Logo" 
              className="h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-125"
            />
            <div className="hidden lg:block h-5 w-[1px] bg-white/20" />
            <span className="hidden lg:block font-mono text-[9px] tracking-[0.4em] text-white/30 uppercase">
              BuildFest 2.0
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                  location.pathname === item.path ? "text-accent-cyan" : "text-white/40 hover:text-white"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div layoutId="navUnderline" className="absolute -bottom-[29px] left-0 right-0 h-[2px] bg-accent-cyan shadow-[0_0_10px_#00f2ff]" />
                )}
              </Link>
            ))}

            <Link
              to="/submit"
              className="px-6 py-2 border border-accent-cyan text-accent-cyan font-mono text-[11px] uppercase tracking-[0.2em] italic font-bold skew-x-[-12deg] transition-all hover:bg-accent-cyan hover:text-[#020617]"
            >
              <span className="inline-block skew-x-[12deg]">Submit</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;