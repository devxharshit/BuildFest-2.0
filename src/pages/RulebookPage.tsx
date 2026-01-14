import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Rulebook from "@/components/Rulebook";

const RulebookPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <Navigation />
      
      <main className="pt-32 pb-section">
        <PageHeader 
          tag="The Philosophy"
          title="Rulebook"
          description="This isn't a list of rules. It's a way of thinking."
        />
        <Rulebook />
      </main>
      
      <Footer />
    </div>
  );
};

export default RulebookPage;
