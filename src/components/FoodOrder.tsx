import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Trash2, Plus, Minus, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  { id: "coffee", name: "Hot Coffee", price: "Free", description: "Freshly brewed system fuel.", category: "Drinks", image: "☕" },
  { id: "energy", name: "Energy Drink", price: "Free", description: "High-caffeine overclocking.", category: "Drinks", image: "⚡" },
  { id: "pizza", name: "Pizza Slice", price: "Free", description: "Classic pepperoni or veggie.", category: "Meals", image: "🍕" },
  { id: "noodles", name: "Ramen Cup", price: "Free", description: "The developer's late-night choice.", category: "Meals", image: "🍜" },
  { id: "chips", name: "Potato Chips", price: "Free", description: "Crunchy salted snacks.", category: "Snacks", image: "🥔" },
  { id: "water", name: "Mineral Water", price: "Free", description: "Pure hydration.", category: "Drinks", image: "💧" },
];

const FoodOrder = () => {
  const [cart, setCart] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const { toast } = useToast();

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!teamName || !tableNumber || cart.length === 0) {
      toast({ title: "Order Incomplete", description: "Add items and delivery info.", variant: "destructive" });
      return;
    }
    toast({ title: "Order Placed!", description: "Delivery estimated in 15 mins." });
    setCart([]); setTeamName(""); setTableNumber("");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-8">
      
      {/* LEFT: MENU SECTION */}
      <div className="flex-1 space-y-12">
        <header className="border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">BuildFest Cafeteria</h1>
          <div className="flex items-center gap-4 text-accent-cyan text-sm font-mono">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 15 MIN DELIVERY</span>
            <span className="text-white/20">|</span>
            <span>OPEN 24/7 FOR BUILDERS</span>
          </div>
        </header>

        {["Drinks", "Meals", "Snacks"].map((cat) => (
          <section key={cat} className="space-y-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest border-l-4 border-accent-cyan pl-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.filter(i => i.category === cat).map((item) => (
                <div key={item.id} className="bg-[#0a0f1e] border border-white/5 p-4 flex gap-4 hover:border-accent-cyan/30 transition-all group">
                  <div className="w-20 h-20 bg-black/40 flex items-center justify-center text-4xl rounded-lg">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white">{item.name}</h3>
                      <span className="text-accent-cyan font-mono text-xs">{item.price}</span>
                    </div>
                    <p className="text-sm text-white/40 mt-1 line-clamp-2">{item.description}</p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="mt-3 text-[10px] font-bold uppercase tracking-tighter text-accent-cyan flex items-center gap-1 hover:underline"
                    >
                      <Plus className="w-3 h-3" /> Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* RIGHT: CART SIDEBAR */}
      <aside className="w-full lg:w-96">
        <div className="bg-[#0a0f1e] border border-accent-cyan/20 p-6 sticky top-24">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-accent-cyan" /> YOUR CART
            </h2>
            <Badge variant="outline" className="border-accent-cyan text-accent-cyan">{totalItems} ITEMS</Badge>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12 text-white/20 italic text-sm">
              Your cart is empty.<br/>Select fuel to continue.
            </div>
          ) : (
            <div className="space-y-6">
              <div className="max-h-[300px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between group">
                    <div>
                      <p className="text-sm font-bold text-white">{item.name}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <button onClick={() => updateQty(item.id, -1)} className="text-white/40 hover:text-white"><Minus className="w-3 h-3"/></button>
                        <span className="text-xs font-mono text-accent-cyan">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="text-white/40 hover:text-white"><Plus className="w-3 h-3"/></button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="opacity-0 group-hover:opacity-100 text-red-500/50 hover:text-red-500 transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <form onSubmit={handleCheckout} className="space-y-4 pt-6 border-t border-white/10">
                <Input 
                  placeholder="Team Name" 
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="bg-black/40 border-white/10 text-white rounded-none"
                />
                <Input 
                  placeholder="Table / Room Number" 
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="bg-black/40 border-white/10 text-white rounded-none"
                />
                <Button className="w-full bg-accent-cyan text-black font-bold uppercase tracking-widest h-12 hover:bg-white transition-colors rounded-none">
                  PLACE ORDER
                </Button>
              </form>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default FoodOrder;