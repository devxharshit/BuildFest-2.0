interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

const PageHeader = ({ tag, title, description }: PageHeaderProps) => {
  return (
    <div className="container mx-auto px-6 mb-16">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <p className="font-mono text-sm tracking-[0.2em] text-primary mb-4 uppercase">
          {tag}
        </p>
        <h1 className="text-headline font-semibold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-body text-muted-foreground max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
