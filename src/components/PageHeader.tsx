import { motion } from "framer-motion";

interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

const PageHeader = ({ tag, title, description }: PageHeaderProps) => {
  return (
    <div className="container mx-auto px-6 pt-16 mb-12">
      <div className="max-w-4xl mx-auto border-l border-accent-cyan/30 pl-6 md:pl-8">
        
        {/* Minimal Mono Tag */}
        <p className="font-mono text-[10px] tracking-[0.3em] text-accent-cyan/70 uppercase mb-2">
          {">"} {tag}
        </p>

        {/* Clean, Sharp Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 uppercase italic">
          {title}<span className="text-accent-cyan animate-pulse">_</span>
        </h1>

        {/* Muted Description */}
        <p className="text-sm md:text-base text-muted-foreground font-mono leading-relaxed max-w-2xl opacity-80">
          {description}
        </p>
        
        {/* Subtle Bottom Line Decor */}
        <div className="mt-6 w-24 h-[1px] bg-gradient-to-r from-accent-cyan/40 to-transparent" />
      </div>
    </div>
  );
};

export default PageHeader;