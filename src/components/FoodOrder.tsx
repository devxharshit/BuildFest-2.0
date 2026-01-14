import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: "snack" | "drink" | "meal";
  icon: string;
}

const menuItems: MenuItem[] = [
  { id: "coffee", name: "Coffee", description: "Hot or iced", category: "drink", icon: "☕" },
  { id: "tea", name: "Tea", description: "Green or chai", category: "drink", icon: "🍵" },
  { id: "energy", name: "Energy Drink", description: "Stay wired", category: "drink", icon: "⚡" },
  { id: "water", name: "Water", description: "Stay hydrated", category: "drink", icon: "💧" },
  { id: "pizza", name: "Pizza Slice", description: "Classic fuel", category: "meal", icon: "🍕" },
  { id: "sandwich", name: "Sandwich", description: "Quick bite", category: "meal", icon: "🥪" },
  { id: "noodles", name: "Instant Noodles", description: "Late night classic", category: "meal", icon: "🍜" },
  { id: "chips", name: "Chips", description: "Crunchy snack", category: "snack", icon: "🥔" },
  { id: "cookies", name: "Cookies", description: "Sweet treat", category: "snack", icon: "🍪" },
  { id: "fruit", name: "Fresh Fruit", description: "Healthy option", category: "snack", icon: "🍎" },
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
        title: "Missing information",
        description: "Please fill in your team name, table number, and select at least one item.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Order received! 🎉",
      description: "Your fuel is on its way. Keep building!",
    });
    
    setTeamName("");
    setTableNumber("");
    setSelectedItems([]);
    setSpecialRequests("");
    setIsSubmitting(false);
  };

  const categories = [
    { key: "drink", label: "Drinks", items: menuItems.filter(i => i.category === "drink") },
    { key: "meal", label: "Meals", items: menuItems.filter(i => i.category === "meal") },
    { key: "snack", label: "Snacks", items: menuItems.filter(i => i.category === "snack") },
  ];

  return (
    <section className="px-6 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Team Info */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="teamName" className="text-sm font-medium text-muted-foreground">
              Team Name
            </Label>
            <Input
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Your team name"
              className="bg-card border-border focus:border-primary h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tableNumber" className="text-sm font-medium text-muted-foreground">
              Table / Location
            </Label>
            <Input
              id="tableNumber"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="e.g., Table 5, Zone B"
              className="bg-card border-border focus:border-primary h-12"
            />
          </div>
        </div>

        {/* Menu Categories */}
        {categories.map(({ key, label, items }) => (
          <div key={key} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-accent-cyan" />
              {label}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {items.map((item) => (
                <label
                  key={item.id}
                  className={`
                    relative flex items-center gap-3 p-4 rounded-xl border cursor-pointer
                    transition-all duration-300
                    ${selectedItems.includes(item.id) 
                      ? 'border-primary bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.2)]' 
                      : 'border-border bg-card hover:border-primary/50'}
                  `}
                >
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => toggleItem(item.id)}
                    className="sr-only"
                  />
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                  </div>
                  {selectedItems.includes(item.id) && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Special Requests */}
        <div className="space-y-2">
          <Label htmlFor="specialRequests" className="text-sm font-medium text-muted-foreground">
            Special Requests (Optional)
          </Label>
          <Input
            id="specialRequests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any dietary restrictions or preferences?"
            className="bg-card border-border focus:border-primary h-12"
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-14 px-12 text-base font-semibold bg-gradient-to-r from-primary to-accent-cyan hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            {isSubmitting ? "Sending order..." : `Order ${selectedItems.length} item${selectedItems.length !== 1 ? 's' : ''}`}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Orders typically arrive within 10-15 minutes
          </p>
        </div>
      </form>
    </section>
  );
};

export default FoodOrder;
