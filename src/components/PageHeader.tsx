interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

const PageHeader = ({ tag, title, description }: PageHeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center text-center px-6">
      {/* Small Cyan Tag */}
      <div className="flex items-center gap-2 mb-2 font-mono text-[10px] tracking-[0.3em] text-accent-cyan uppercase">
        <span>{">"}</span> {tag}
      </div>

      {/* Main Title - Italic Bold with Cursor */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic mb-4">
        {title}<span className="text-accent-cyan underline decoration-4 underline-offset-8">_</span>
      </h1>

      {/* Description */}
      <p className="text-[#94a3b8] font-mono text-sm max-w-2xl leading-relaxed opacity-70">
        {description}
      </p>
      
      {/* Decorative center line */}
      <div className="mt-8 w-16 h-px bg-white/10" />
    </div>
  );
};

export default PageHeader;