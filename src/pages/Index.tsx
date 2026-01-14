import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LaserPillars from "@/components/LaserPillars";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Laser pillar animation background */}
      <LaserPillars />
      
      {/* Gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
