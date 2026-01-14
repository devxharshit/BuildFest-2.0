import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FoodOrder from "@/components/FoodOrder";
import PageHeader from "@/components/PageHeader";

const FoodOrderPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <Navigation />
      
      <main className="pt-24 pb-20">
        <PageHeader 
          tag="Fuel Station"
          title="Fuel Up"
          description="Order food to keep your creative energy flowing through the night"
        />
        <FoodOrder />
      </main>
      
      <Footer />
    </div>
  );
};

export default FoodOrderPage;
