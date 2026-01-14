import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DareBox from "@/components/DareBox";

const DareBoxPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <Navigation />
      
      <main className="pt-32 pb-section">
        <PageHeader 
          tag="Optional Challenge"
          title="The Dare Box"
          description="A playful nudge to rethink your approach. Take one if you dare—but once locked, there's no going back."
        />
        <DareBox />
      </main>
      
      <Footer />
    </div>
  );
};

export default DareBoxPage;
