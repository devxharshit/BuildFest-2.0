import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Prompts from "@/components/Prompts";
import DareBox from "@/components/DareBox";
import Submit from "@/components/Submit";
import Rulebook from "@/components/Rulebook";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("prompts");

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        
        <section id="prompts" className="py-section">
          <Prompts />
        </section>
        
        <section id="dare" className="py-section">
          <DareBox />
        </section>
        
        <section id="submit" className="py-section">
          <Submit />
        </section>
        
        <section id="rulebook" className="py-section">
          <Rulebook />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
