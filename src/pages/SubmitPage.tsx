import Navigation from "@/components/Navigation";

import PageHeader from "@/components/PageHeader";
import Submit from "@/components/Submit";

const SubmitPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <Navigation />
      
      <main className="pt-32 pb-section">
        <PageHeader 
          tag="When You're Ready"
          title="Submit Your Prototype"
          description="Submit what you have. That's enough."
        />
        <Submit />
      </main>
      
    </div>
  );
};

export default SubmitPage;
