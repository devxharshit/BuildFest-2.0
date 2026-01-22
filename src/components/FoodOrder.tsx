import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Trash2, Plus, Minus, Clock, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QRCodeSVG } from 'qrcode.react';

const menuItems = [
  { id: "coffee", name: "Hot Coffee", price: 40, description: "Freshly brewed system fuel.", category: "Drinks", image: "☕" },
  { id: "energy", name: "Energy Drink", price: 60, description: "High-caffeine overclocking.", category: "Drinks", image: "⚡" },
  { id: "pizza", name: "Pizza Slice", price: 120, description: "Classic pepperoni or veggie.", category: "Meals", image: "🍕" },
  { id: "noodles", name: "Ramen Cup", price: 80, description: "The developer's late-night choice.", category: "Meals", image: "🍜" },
  { id: "chips", name: "Potato Chips", price: 30, description: "Crunchy salted snacks.", category: "Snacks", image: "🥔" },
  { id: "water", name: "Mineral Water", price: 20, description: "Pure hydration.", category: "Drinks", image: "💧" },
];

const FoodOrder = () => {
  const [cart, setCart] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [utrId, setUtrId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toast } = useToast();

  // --- 1. TIME GATING LOGIC (13:36 to 13:40) ---
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      setCurrentTime(now);
      const hour = now.getHours();
      const min = now.getMinutes();

      // Active only between 13:36 and 13:40
      const isWindowOpen = (hour === 13 && min >= 35 && min < 45);
      setIsOpen(isWindowOpen);
    };

    const timer = setInterval(checkTime, 1000);
    checkTime();
    return () => clearInterval(timer);
  }, []);

  // --- 2. CART ACTIONS ---
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  // --- 3. PAYMENT CALCULATIONS ---
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const upiId = "harshitindia2005@okicici"; // REPLACE WITH YOUR UPI ID
  const upiLink = `upi://pay?pa=${upiId}&pn=Harshit+Raj+Singh&am=${totalPrice}&cu=INR&tn=Order_${teamName}`;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!teamName || !tableNumber || !utrId || cart.length === 0) {
      toast({ title: "Incomplete Data", description: "Team, Table, and UTR are required.", variant: "destructive" });
      return;
    }
    toast({ title: "Verification Pending", description: "Order logged. Checking UTR status..." });
    // Reset
    setCart([]); setTeamName(""); setTableNumber(""); setUtrId("");
  };

  // --- 4. CLOSED STATE UI ---
  if (!isOpen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] font-mono">
        <div className="p-8 border border-red-500/30 bg-red-500/5 text-center">
          <Lock className="w-10 h-10 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">ACCESS_DENIED</h2>
          <p className="text-white/40 text-sm mb-4">Orders only accepted 13:36 - 13:40 IST.</p>
          <div className="text-red-500 text-2xl font-bold">{currentTime.toLocaleTimeString()}</div>
        </div>
      </div>
    );
  }

  // --- 5. ACTIVE MENU UI ---
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-8 font-mono">
      <div className="flex-1 space-y-10">
        <header className="border-b border-white/10 pb-6">
          <h1 className="text-3xl font-bold text-white italic tracking-tighter uppercase">Cafeteria_Terminal</h1>
          <div className="flex items-center gap-4 text-accent-cyan text-[10px] tracking-widest mt-2">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> WINDOW_CLOSES_AT_13:40</span>
          </div>
        </header>

        {["Drinks", "Meals", "Snacks"].map((cat) => (
          <section key={cat} className="space-y-4">
            <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.3em]">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.filter(i => i.category === cat).map((item) => (
                <div key={item.id} className="bg-[#0a0f1e] border border-white/5 p-4 flex gap-4 group hover:border-accent-cyan transition-all">
                  <div className="text-3xl">{item.image}</div>
                  <div className="flex-1">
                    <div className="flex justify-between font-bold text-sm">
                      <span className="text-white uppercase">{item.name}</span>
                      <span className="text-accent-cyan">₹{item.price}</span>
                    </div>
                    <button onClick={() => addToCart(item)} className="mt-2 text-[10px] text-accent-cyan hover:underline flex items-center gap-1">
                      <Plus className="w-3 h-3" /> ADD_TO_CART
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CART & PAYMENT SIDEBAR */}
      <aside className="w-full lg:w-96">
        <div className="bg-[#0a0f1e] border border-accent-cyan/20 p-6 sticky top-24">
          <h2 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-accent-cyan" /> Order_Payload
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-10 text-white/20 text-xs italic">SYSTEM_READY_AWAITING_INPUT</div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-xs">
                    <span className="text-white/60">{item.name} x{item.qty}</span>
                    <div className="flex gap-2">
                      <button onClick={() => updateQty(item.id, -1)} className="text-white/20 hover:text-white"><Minus className="w-3 h-3"/></button>
                      <button onClick={() => updateQty(item.id, 1)} className="text-white/20 hover:text-white"><Plus className="w-3 h-3"/></button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-[10px] text-accent-cyan uppercase mb-2">Payment_Required: ₹{totalPrice}</p>
                <div className="bg-white p-2 inline-block mb-4">
                  <QRCodeSVG value={upiLink} size={140} />
                </div>
                
                <form onSubmit={handleCheckout} className="space-y-3">
                  <Input placeholder="TEAM_ID" value={teamName} onChange={e => setTeamName(e.target.value)} className="bg-black border-white/10 rounded-none h-10 text-xs" />
                  <Input placeholder="TABLE_LOC" value={tableNumber} onChange={e => setTableNumber(e.target.value)} className="bg-black border-white/10 rounded-none h-10 text-xs" />
                  <Input placeholder="TRANSACTION_UTR_ID" value={utrId} onChange={e => setUtrId(e.target.value)} className="bg-black border-accent-cyan/40 rounded-none h-10 text-xs" />
                  <Button className="w-full bg-accent-cyan text-black font-bold uppercase text-xs rounded-none h-12">
                    CONFIRM_PAYMENT_&_SUBMIT
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default FoodOrder;