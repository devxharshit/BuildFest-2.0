import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Utensils, Zap, Coffee, Droplet } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: "snack" | "drink" | "meal";
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { id: "coffee", name: "COFFEE", description: "SYSTEM_FUEL_HOT", category: "drink", icon: <Coffee className="w-5 h-5" /> },
  { id: "energy", name: "ENERGY_DRINK", description: "OVERCLOCK_MODE", category: "drink", icon: <Zap className="w-5 h-5" /> },
  { id: "water", name: "H2O_LIQUID", description: "STABLE_HYDRATION", category: "drink", icon: <Droplet className="w-5 h-5" /> },
  { id: "pizza", name: "PIZZA_SLICE", description: "SECTOR_A_FUEL", category: "meal", icon: "🍕" },
  { id: "noodles", name: "NOODLE_PACK", description: "CORE_PROCESS_MEAL", category: "meal", icon: "🍜" },
  { id: "chips", name: "CRUNCH_DATA", description: "PACKET_SNACK", category: "snack", icon: "🥔" },
];

const FoodOrder = () => {
  const [teamName, setTeamName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !tableNumber || selectedItems.length === 0) {
      toast({
        title: "AUTH_ERROR",
        description: "Missing Team_ID, Table_Loc, or Payload_Items.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "ORDER_DEPLOYED",
      description: "Fuel is in transit to your coordinates.",
    });
    setTeamName(""); setTableNumber(""); setSelectedItems([]); setSpecialRequests(""); setIsSubmitting(false);
  };

  const categories = [
    { key: "drink", label: "01_LIQUIDS", items: menuItems.filter(i => i.category === "drink") },
    { key: "meal", label: "02_SOLID_FUEL", items: menuItems.filter(i => i.category === "meal") },
    { key: "snack", label: "03_SNACK_PACKETS", items: menuItems.filter(i => i.category === "snack") },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 font-mono text-sm">
      <form onSubmit={handleSubmit} className="space-y-12">
        
        {/* TEAM & LOCATION DATA */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-[0.3em] text-accent-cyan/60 ml-1">Team_Identifier</Label>
            <Input
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="ENTER_TEAM_ID"
              className="bg-black/40 border-accent-cyan/30 text-accent-cyan rounded-none h-12 placeholder:text-accent-cyan/20 focus:border-accent-cyan"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-[0.3em] text-accent-cyan/60 ml-1">Table_Coordinates</Label>
            <Input
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="TABLE_05_ZONE_B"
              className="bg-black/40 border-accent-cyan/30 text-accent-cyan rounded-none h-12 placeholder:text-accent-cyan/20 focus:border-accent-cyan"
            />
          </div>
        </div>

        {/* MENU CATEGORIES */}
        {categories.map(({ key, label, items }) => (
          <div key={key} className="space-y-6">
            <div className="flex items-center gap-4 border-b border-white/5 pb-2">
              <h3 className="text-xs font-bold text-white tracking-[0.4em] uppercase italic">
                {label}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`
                    relative p-4 border transition-all cursor-pointer flex items-center gap-4
                    ${selectedItems.includes(item.id) 
                      ? 'border-accent-cyan bg-accent-cyan/10 shadow-[0_0_15px_rgba(0,242,255,0.1)]' 
                      : 'border-white/10 bg-[#0a0f1e] hover:border-accent-cyan/40'}
                  `}
                >
                  <div className={`text-2xl ${selectedItems.includes(item.id) ? 'text-accent-cyan' : 'text-white/40'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs font-bold ${selectedItems.includes(item.id) ? 'text-accent-cyan' : 'text-white/80'}`}>
                      {item.name}
                    </p>
                    <p className="text-[10px] text-white/30 tracking-tight mt-0.5">{item.description}</p>
                  </div>
                  {selectedItems.includes(item.id) && (
                    <div className="w-1.5 h-1.5 bg-accent-cyan animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* SPECIAL REQUESTS */}
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.3em] text-accent-cyan/60 ml-1">Dietary_Exceptions</Label>
          <Input
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="NULL // NONE"
            className="bg-black/40 border-accent-cyan/30 text-accent-cyan rounded-none h-12 placeholder:text-accent-cyan/20"
          />
        </div>

        {/* SUBMIT PROTOCOL */}
        <div className="flex flex-col items-center gap-6 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-16 h-14 bg-accent-cyan text-[#020617] font-bold uppercase italic skew-x-[-12deg] transition-all hover:skew-x-0 hover:scale-[1.02] disabled:opacity-50"
          >
            <span className="skew-x-[12deg] flex items-center gap-3">
              {isSubmitting ? "TRANSMITTING..." : `REQUEST_FUEL_${selectedItems.length}_UNITS`}
            </span>
          </button>
          <p className="text-[10px] tracking-widest text-white/20 uppercase">
            Estimated_ETA: 10_to_15_Minutes
          </p>
        </div>
      </form>
    </section>
  );
};

export default FoodOrder;