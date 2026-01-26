import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, Plus, Minus, Clock, Lock, Upload, FileCheck, ShieldCheck, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QRCodeSVG } from 'qrcode.react';

const menuItems = [
  { id: "coffee", name: "Hot Coffee", price: 40, description: "System fuel: caffeine(80mg)", category: "Drinks", image: "☕" },
  { id: "energy", name: "Energy Drink", price: 60, description: "Instant neural overclocking.", category: "Drinks", image: "⚡" },
  { id: "pizza", name: "Pizza Slice", price: 120, description: "Standard pepperoni module.", category: "Meals", image: "🍕" },
  { id: "noodles", name: "Ramen Cup", price: 80, description: "Dev-ops late-night nutrient.", category: "Meals", image: "🍜" },
  { id: "chips", name: "Potato Chips", price: 30, description: "Compressed sodium snacks.", category: "Snacks", image: "🥔" },
  { id: "water", name: "Mineral Water", price: 20, description: "Pure H2O hydration.", category: "Drinks", image: "💧" },
];

const FoodOrder = () => {
  const [cart, setCart] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [utrId, setUtrId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toast } = useToast();

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      setCurrentTime(now);
      const hour = now.getHours();
      const min = now.getMinutes();
      // Adjust this window as per your local testing needs
      const isWindowOpen = (hour === 23 && min >= 1 && min < 59); 
      setIsOpen(isWindowOpen);
    };
    const timer = setInterval(checkTime, 1000);
    checkTime();
    return () => clearInterval(timer);
  }, []);

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

  
const handleCheckout = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Use the supabase client you imported from @supabase/supabase-js
  const { error } = await supabase
    .from('food_orders')
    .insert([
      { 
        team_name: teamName,
        table_number: tableNumber,
        utr_id: utrId,
        -- This saves the entire cart (all items, quantities, and prices)
        order_manifest: cart, 
        total_price: totalPrice
      }
    ]);

  if (error) {
    if (error.code === '23505') {
      toast({ title: "DUPLICATE_UTR", description: "This payment has already been logged.", variant: "destructive" });
    } else {
      toast({ title: "TRANSMISSION_ERROR", description: error.message, variant: "destructive" });
    }
  } else {
    toast({ title: "FUEL_LOCKED", description: "Your order is in the system!" });
    setCart([]); // Clear cart after success
  }
};


  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const upiId = "harshitindia2005@okicici";
  const upiLink = `upi://pay?pa=${upiId}&pn=Harshit+Raj+Singh&am=${totalPrice}&cu=INR&tn=BuildFest_Order_${teamName}`;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!teamName || !tableNumber || !utrId || !screenshot || cart.length === 0) {
      toast({ title: "INVALID_SEQUENCE", description: "Missing required data nodes.", variant: "destructive" });
      return;
    }
    toast({ title: "PAYLOAD_SENT", description: "Order logged. Checking transaction status..." });
    setCart([]); setTeamName(""); setTableNumber(""); setUtrId(""); setScreenshot(null);
  };

  if (!isOpen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] font-mono p-6">
        <div className="p-12 border-2 border-red-500/20 bg-red-500/5 backdrop-blur-xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50 animate-pulse" />
          <Lock className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-white mb-2 tracking-tighter italic uppercase">System_Locked</h2>
          <p className="text-red-500/60 text-[10px] mb-6 uppercase tracking-[0.3em]">Fuel station is currently offline.</p>
          <div className="text-white text-3xl font-black italic">{currentTime.toLocaleTimeString()}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-8 font-mono relative z-10">
      <div className="flex-1 space-y-10">
        <header className="border-b border-white/10 pb-6">
          <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">Fuel_Station</h1>
          <div className="flex items-center gap-4 text-accent-cyan text-[10px] tracking-widest mt-2 font-bold">
            <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> STATUS: LINK_ACTIVE</span>
            <span className="opacity-30">|</span>
            <span className="flex items-center gap-1 text-white/40"><Clock className="w-3 h-3" /> WINDOW_CLOSE_STAMP: 23:59</span>
          </div>
        </header>

        {["Drinks", "Meals", "Snacks"].map((cat) => (
          <section key={cat} className="space-y-4">
            <h2 className="text-xs font-black text-accent-cyan uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-cyan inline-block shadow-[0_0_8px_#00f2ff]" />
              {cat}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.filter(i => i.category === cat).map((item) => (
                <div key={item.id} onClick={() => addToCart(item)} className="bg-white/5 border border-white/10 p-5 flex gap-5 group hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all cursor-pointer relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-accent-cyan/0 group-hover:bg-accent-cyan transition-all" />
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.image}</div>
                  <div className="flex-1">
                    <div className="flex justify-between font-black text-sm">
                      <span className="text-white uppercase tracking-tighter">{item.name}</span>
                      <span className="text-accent-cyan">₹{item.price}</span>
                    </div>
                    <p className="text-[10px] text-white/30 mt-1 uppercase tracking-tight line-clamp-1">{item.description}</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-black text-accent-cyan uppercase tracking-widest">
                      + Add_to_payload
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className="w-full lg:w-[400px]">
        <div className="bg-[#020617] border-2 border-white/10 p-6 sticky top-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
               <ShoppingCart className="w-4 h-4 text-accent-cyan" /> Order_Manifest
             </h2>
             <span className="text-[10px] text-white/20 font-mono">v2.0.42</span>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/5 bg-white/[0.02]">
               <p className="text-white/20 text-xs italic tracking-widest font-black uppercase">Awaiting_Data_Input...</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-accent-cyan/20">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-xs group">
                    <div className="flex flex-col">
                      <span className="text-white/80 font-black uppercase tracking-tighter">{item.name}</span>
                      <span className="text-accent-cyan/60 text-[10px]">₹{item.price} x {item.qty}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex bg-white/5 border border-white/10 p-1">
                        <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:text-accent-cyan text-white/40"><Minus size={12}/></button>
                        <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:text-accent-cyan text-white/40"><Plus size={12}/></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-white/10 hover:text-red-500 transition-colors"><Trash2 size={14}/></button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-end">
                   <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Total_Cost</span>
                   <span className="text-2xl font-black text-accent-cyan italic leading-none">₹{totalPrice}</span>
                </div>

                {/* --- PRESENTABLE QR CODE SECTION --- */}
                <div className="relative group p-4 border border-accent-cyan/20 bg-accent-cyan/[0.03] overflow-hidden">
                   {/* Scanning animation line */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-accent-cyan/20 animate-scan z-10" />
                   
                   <div className="bg-white p-3 mx-auto max-w-[180px] shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                     <QRCodeSVG 
                        value={upiLink} 
                        size={156} 
                        bgColor={"#ffffff"}
                        fgColor={"#020617"}
                        level={"H"}
                        includeMargin={false}
                     />
                   </div>
                   <div className="mt-4 text-center space-y-1">
                      <p className="text-[9px] font-black text-accent-cyan uppercase tracking-widest">Protocol: UPI_Transfer</p>
                      <p className="text-[8px] text-white/30 uppercase tracking-tighter font-bold">{upiId}</p>
                   </div>
                </div>
                
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div className="space-y-2">
                    <Input placeholder="TEAM_DESIGNATION" value={teamName} onChange={e => setTeamName(e.target.value)} className="bg-white/[0.03] border-white/10 rounded-none h-11 text-xs text-white placeholder:text-white/20 focus:border-accent-cyan transition-all" />
                    <Input placeholder="TABLE_COORDINATES" value={tableNumber} onChange={e => setTableNumber(e.target.value)} className="bg-white/[0.03] border-white/10 rounded-none h-11 text-xs text-white placeholder:text-white/20 focus:border-accent-cyan transition-all" />
                    <Input placeholder="UTR_HASH_ID" value={utrId} onChange={e => setUtrId(e.target.value)} className="bg-white/[0.03] border-accent-cyan/30 rounded-none h-11 text-xs text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan transition-all" />
                  </div>
                  
                  {/* TERMINAL UPLOAD AREA */}
                  <div className="relative group overflow-hidden">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                    <div className={`border-2 border-dashed p-5 flex flex-col items-center justify-center transition-all duration-500 ${screenshot ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 bg-white/5 group-hover:border-accent-cyan/40'}`}>
                      {screenshot ? (
                        <div className="flex items-center gap-3">
                          <FileCheck className="w-5 h-5 text-green-400" />
                          <div className="text-left">
                            <span className="text-[9px] text-green-400 font-black uppercase block tracking-widest">Success: Data_Attached</span>
                            <span className="text-[8px] text-white/30 uppercase line-clamp-1">{screenshot.name}</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-white/20 mb-2 group-hover:text-accent-cyan group-hover:scale-110 transition-all" />
                          <span className="text-[9px] text-white/40 uppercase font-black tracking-widest group-hover:text-white">Upload_Payment_Receipt</span>
                        </>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-accent-cyan hover:bg-white text-[#020617] font-black uppercase text-xs rounded-none h-14 shadow-[0_10px_20px_rgba(0,242,255,0.15)] group relative overflow-hidden transition-all">
                    <span className="relative z-10 flex items-center gap-2">Execute_Order_Sequence <Terminal size={14} /></span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out;
        }
      `}} />
    </div>
  );
};

export default FoodOrder;
