import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  Clock, 
  Lock, 
  Upload, 
  FileCheck, 
  Terminal, 
  Loader2,
  ShieldCheck,
  Store
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QRCodeSVG } from 'qrcode.react';
import { supabase } from "@/lib/supabaseClient";

// UPDATED MENU GROUPED BY OUTLET
const menuData = [
  {
    outlet: "Stardom",
    items: [
      { id: "s-paneer-roll", name: "Paneer Makhni Roll", price: 140, description: "Creamy makhni gravy paneer unit.", image: "🌯" },
      { id: "s-aloo-roll", name: "Aloo Tikki Roll", price: 90, description: "Spiced tikki with mint chutney unit.", image: "🌯" },
      { id: "s-cold-coffee", name: "Cold Coffee", price: 60, description: "Chilled caffeinated liquid fuel.", image: "🧋" },
    ]
  },
  {
    outlet: "Pizza Bakers",
    items: [
      { id: "p-onion-combo", name: "Onion Pizza Combo", price: 119, description: "Regular Onion Pizza + Beverage link.", image: "🍕" },
      { id: "p-corn-combo", name: "Corn Pizza Combo", price: 139, description: "Regular Corn Pizza + Beverage link.", image: "🍕" },
    ]
  },
  {
    outlet: "Zero Degree",
    items: [
      { id: "z-aloo-burger", name: "Aloo Tikki Burger", price: 50, description: "Classic crispy potato patty unit.", image: "🍔" },
      { id: "z-mexican-burger", name: "Mexican Burger", price: 90, description: "Spiced jalapeno & salsa protocol.", image: "🍔" },
    ]
  }
];

const FoodOrder = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [teamName, setTeamName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [utrId, setUtrId] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toast } = useToast();

  const TAX_FEE = 20;

  // --- 1. YOUR TIME GATING LOGIC ADDED HERE ---
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      setCurrentTime(now);
      const hour = now.getHours();
      const min = now.getMinutes();
      // Logic: 3:00 AM - 3:58 AM
      const isWindowOpen = (hour === 2 && min >= 0 && min < 59); 
      setIsOpen(isWindowOpen);
    };
    const timer = setInterval(checkTime, 1000);
    checkTime();
    return () => clearInterval(timer);
  }, []);

  const addToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)));
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id));

  const subTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const finalTotal = subTotal > 0 ? subTotal + TAX_FEE : 0;
  
  const upiId = "harshitindia2005@okicici";
  const upiLink = `upi://pay?pa=${upiId}&pn=Harshit+Raj+Singh&am=${finalTotal}&cu=INR&tn=BuildFest_Order_${teamName}`;

  
const handleCheckout = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!teamName || !tableNumber || !utrId || !screenshot || cart.length === 0) {
    toast({ title: "INVALID_SEQUENCE", description: "Missing data or screenshot.", variant: "destructive" });
    return;
  }

  setIsSubmitting(true);
  try {
    // 1. GENERATE OUTLET SUMMARY & QUANTITY STRING
    // This creates a string like: "Stardom (Paneer Roll x2), Zero Degree (Burger x1)"
    const outletSummary = cart.map(item => {
      // Find which outlet this item belongs to from your menuData
      const outlet = menuData.find(group => 
        group.items.some(i => i.id === item.id)
      )?.outlet || "Unknown";
      
      return `${outlet}: ${item.name} (x${item.qty})`;
    }).join(", ");

    // 2. CLOUDINARY UPLOAD
    const formData = new FormData();
    formData.append("file", screenshot);
    formData.append("upload_preset", "s5dpknbv"); 

    const res = await fetch(`https://api.cloudinary.com/v1_1/dle2azrsr/image/upload`, { method: "POST", body: formData });
    const cloudData = await res.json();
    
    // 3. SUPABASE INSERT
    const { error } = await supabase.from('food_orders').insert([{ 
      team_name: teamName, 
      table_number: tableNumber, 
      utr_id: utrId,
      // order_manifest saves the full JSON object for developers
      order_manifest: cart, 
      // outlet_summary saves a readable string for the kitchen staff/admin
      outlet_summary: outletSummary,
      total_price: finalTotal, 
      screenshot_url: cloudData.secure_url 
    }]);

    if (error) throw error;

    toast({ title: "FUEL_LOCKED", description: "Order transmitted to central kitchen." });
    setCart([]); setTeamName(""); setTableNumber(""); setUtrId(""); setScreenshot(null);
  } catch (err: any) {
    toast({ title: "SYSTEM_ERROR", description: err.message, variant: "destructive" });
  } finally { 
    setIsSubmitting(false); 
  }
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
          <div className="flex items-center gap-4 text-accent-cyan text-[10px] tracking-widest mt-2 font-bold uppercase">
            <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> STATUS: LINK_ACTIVE</span>
            <span className="opacity-30">|</span>
            <span className="flex items-center gap-1 text-white/40"><Clock className="w-3 h-3" /> WINDOW_CLOSE: 10:59 PM</span>
          </div>
        </header>

        {menuData.map((group) => (
          <section key={group.outlet} className="space-y-4">
            <h2 className="text-xs font-black text-accent-cyan uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
              <Store size={14} /> {group.outlet}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <div key={item.id} onClick={() => addToCart(item)} className="bg-white/5 border border-white/10 p-5 flex gap-5 group hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all cursor-pointer relative overflow-hidden">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.image}</div>
                  <div className="flex-1">
                    <div className="flex justify-between font-black text-sm uppercase">
                      <span className="text-white">{item.name}</span>
                      <span className="text-accent-cyan">₹{item.price}</span>
                    </div>
                    <p className="text-[10px] text-white/30 mt-1 uppercase tracking-tight line-clamp-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className="w-full lg:w-[420px]">
        <div className="bg-[#020617] border-2 border-white/10 p-6 sticky top-24 shadow-2xl">
          <h2 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2 mb-8">
            <ShoppingCart className="w-4 h-4 text-accent-cyan" /> Order_Manifest
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-white/5">
               <p className="text-white/20 text-xs italic tracking-widest font-black uppercase">Awaiting_Input...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-xs">
                    <div className="flex flex-col">
                      <span className="text-white/80 font-black uppercase tracking-tighter">{item.name}</span>
                      <span className="text-accent-cyan/60">₹{item.price} x {item.qty}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex bg-white/5 border border-white/10 p-1">
                        <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:text-accent-cyan text-white/40"><Minus size={12}/></button>
                        <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:text-accent-cyan text-white/40"><Plus size={12}/></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-white/10 hover:text-red-500"><Trash2 size={14}/></button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex justify-between text-[10px] text-white/40 uppercase">
                   <span>Subtotal</span>
                   <span>₹{subTotal}</span>
                </div>
                <div className="flex justify-between text-[10px] text-green-400/80 uppercase font-black bg-green-500/5 p-2">
                   <span className="flex items-center gap-1"><ShieldCheck size={12}/> Protocol Fee (Tax/Del)</span>
                   <span>+ ₹{TAX_FEE}</span>
                </div>
                <div className="flex justify-between items-end">
                   <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Total_Cost</span>
                   <span className="text-2xl font-black text-accent-cyan italic leading-none">₹{finalTotal}</span>
                </div>

                <div className="p-4 border border-accent-cyan/20 bg-accent-cyan/[0.03] text-center">
                   <div className="bg-white p-2 inline-block">
                     <QRCodeSVG value={upiLink} size={150} level={"H"} />
                   </div>
                </div>
                
                <form onSubmit={handleCheckout} className="space-y-3">
                  <Input placeholder="TEAM_NAME" value={teamName} onChange={e => setTeamName(e.target.value)} className="bg-white/5 border-white/10 rounded-none text-xs text-white" />
                  <Input placeholder="TABLE_ROOM_NUMBER" value={tableNumber} onChange={e => setTableNumber(e.target.value)} className="bg-white/5 border-white/10 rounded-none text-xs text-white" />
                  <Input placeholder="TRANSACTION_ID" value={utrId} onChange={e => setUtrId(e.target.value)} className="bg-white/5 border-accent-cyan/30 rounded-none text-xs text-accent-cyan font-bold" />
                  
                  <div className="relative border border-dashed border-white/20 p-4 text-center cursor-pointer">
                    <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && setScreenshot(e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer" />
                    {screenshot ? <span className="text-[10px] text-green-400 font-black"><FileCheck className="inline mr-2" size={14}/> {screenshot.name}</span> : <span className="text-[10px] text-white/40 uppercase font-black">Upload_Payment_Screenshot</span>}
                  </div>

                  <Button disabled={isSubmitting} className="w-full bg-accent-cyan hover:bg-white text-[#020617] rounded-none font-black uppercase text-xs h-12">
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Execute_Order_Sequence"}
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </aside>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 242, 255, 0.2); }
      `}} />
    </div>
  );
};

export default FoodOrder;
