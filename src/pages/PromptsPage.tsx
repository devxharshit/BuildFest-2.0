import Navigation from "@/components/Navigation";

import PageHeader from "@/components/PageHeader";
import Prompts from "@/components/Prompts";

const PromptsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <Navigation />
      
      <main className="pt-32 pb-section">
        <PageHeader 
          tag="Choose Your Direction"
          title="The Prompts"
          description="Each prompt is a beginning, not a destination. Interpret freely. There are no wrong answers—only unexplored ones."
        />
        <Prompts />
      </main>
      

    </div>
  );
};

export default PromptsPage;
