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
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#020617]/98 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto px-6 lg:px-12">
        {/* Increased height to h-24 to accommodate larger elements */}
        <div className="flex items-center justify-between h-24">
          
          {/* BRANDING SECTION: LARGER LOGO & TEXT */}
          <Link to="/" className="flex items-center gap-4 group flex-shrink-0">
            <motion.img 
              src="/Novus_Full_White (1).png" 
              alt="Novus Logo" 
              // Increased height from h-8 to h-12
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
            <div className="h-8 w-[2px] bg-white/20" /> {/* Thicker, taller separator */}
            <span className="font-mono text-xl tracking-tighter text-white font-black italic uppercase">
              BuildFest 2.0
            </span>
          </Link>
          
          {/* NAVIGATION LINKS: MAXIMUM VISIBILITY */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                // Increased to text-xl for high visibility
                className={`font-mono text-xl font-black uppercase tracking-tighter transition-all duration-300 relative py-2 ${
                  location.pathname === item.path 
                    ? "text-accent-cyan" 
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="navUnderline" 
                    // Adjusted underline position for larger height
                    className="absolute -bottom-[31px] left-0 right-0 h-[4px] bg-accent-cyan shadow-[0_0_20px_#00f2ff]" 
                  />
                )}
              </Link>
            ))}

            {/* SUBMIT BUTTON: BOLDER & LARGER */}
            <Link
              to="/submit"
              className="px-8 py-3 border-4 border-accent-cyan bg-accent-cyan/10 text-accent-cyan font-mono text-xl font-black uppercase tracking-tighter italic skew-x-[-12deg] transition-all hover:bg-accent-cyan hover:scale-105 hover:text-[#020617]"
            >
              <span className="inline-block skew-x-[12deg]">SUBMIT</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;