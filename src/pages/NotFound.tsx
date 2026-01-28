import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "@/config/routes";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        {/* Error Code Terminal Style */}
        <div className="mb-8 p-6 border border-white/5 bg-[#0a0f1e]">
          <p className="font-mono text-xs text-white/40 mb-4">ERROR_CODE</p>
          <h1 className="text-9xl font-black text-accent-cyan mb-4">404</h1>
          <p className="font-mono text-sm text-white/60">RESOURCE_NOT_FOUND</p>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wider">
          Page Not Found
        </h2>
        <p className="text-white/60 font-mono mb-8 text-sm">
          The route you're searching for doesn't exist in our system.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ROUTES.HOME}
            className="px-8 py-3 border-2 border-accent-cyan bg-accent-cyan/10 text-accent-cyan font-mono font-bold uppercase skew-x-[-12deg] hover:bg-accent-cyan hover:text-black transition-all"
          >
            <span className="inline-block skew-x-[12deg]">Return Home</span>
          </Link>
          <Link
            to={ROUTES.PROMPTS}
            className="px-8 py-3 border-2 border-white/20 text-white font-mono font-bold uppercase skew-x-[-12deg] hover:border-accent-cyan hover:text-accent-cyan transition-all"
          >
            <span className="inline-block skew-x-[12deg]">Explore</span>
          </Link>
        </div>

        {/* Footer Debug Info */}
        <div className="mt-12 font-mono text-xs text-white/20">
          <p>Path: {location.pathname}</p>
          <p>Status: Connection Failed</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
