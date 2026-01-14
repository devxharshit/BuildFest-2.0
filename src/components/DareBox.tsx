import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Lock, RotateCcw } from "lucide-react";

const dares = [
  {
    id: 1,
    text: "Build the entire thing without any words on screen.",
  },
  {
    id: 2,
    text: "Your interface can only use one color. Choose wisely.",
  },
  {
    id: 3,
    text: "Nothing can be clicked. Only hovered, swiped, or held.",
  },
  {
    id: 4,
    text: "The experience must feel different at 3 AM than at 3 PM.",
  },
  {
    id: 5,
    text: "Include something that only works once—ever.",
  },
  {
    id: 6,
    text: "Your creation must generate a sound that never repeats.",
  },
  {
    id: 7,
    text: "Make something that requires two people to use at the same time.",
  },
  {
    id: 8,
    text: "The most important feature should be invisible at first glance.",
  },
];

const DareBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDare, setCurrentDare] = useState<typeof dares[0] | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const openDareBox = () => {
    if (isLocked) return;
    
    setIsRevealing(true);
    setIsOpen(true);
    
    let iterations = 0;
    const maxIterations = 10;
    const interval = setInterval(() => {
      const randomDare = dares[Math.floor(Math.random() * dares.length)];
      setCurrentDare(randomDare);
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setIsRevealing(false);
      }
    }, 100);
  };

  const lockDare = () => {
    setIsLocked(true);
  };

  const reshuffleDare = () => {
    if (isLocked) return;
    openDareBox();
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div 
          className={`relative p-10 md:p-14 rounded-3xl border transition-all duration-700 ${
            isOpen 
              ? "border-primary/40 bg-gradient-to-b from-primary/10 to-transparent shadow-[0_0_60px_hsl(var(--primary)/0.15)]" 
              : "border-border bg-card/30"
          }`}
        >
          {!isOpen ? (
            <div className="animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-pulse-glow">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <Button
                variant="glow"
                size="lg"
                onClick={openDareBox}
                className="font-semibold"
              >
                Open the Dare Box
              </Button>
              <p className="mt-6 text-sm text-muted-foreground">
                Maximum one dare per team. Participation is optional.
              </p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className={`mb-8 transition-opacity duration-300 ${isRevealing ? "opacity-50" : "opacity-100"}`}>
                <p className="font-mono text-xs tracking-wider text-primary/60 mb-4">
                  {isLocked ? "LOCKED DARE" : "YOUR DARE"}
                </p>
                <p className="text-title md:text-headline font-medium text-foreground leading-tight">
                  "{currentDare?.text}"
                </p>
              </div>

              {!isLocked ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="glow"
                    size="lg"
                    onClick={lockDare}
                    disabled={isRevealing}
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Lock This Dare
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={reshuffleDare}
                    disabled={isRevealing}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Another
                  </Button>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Dare Locked</span>
                </div>
              )}

              {!isLocked && (
                <p className="mt-6 text-sm text-muted-foreground">
                  Once locked, this dare cannot be changed.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DareBox;
