
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, ShieldAlert, Terminal, User, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
// 1. IMPORT SUPABASE CLIENT
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

const dares = [
  { id: 1, text: "Build the entire thing without any words on screen." },
  { id: 2, text: "Your interface can only use one color. Choose wisely." },
  { id: 3, text: "Nothing can be clicked. Only hovered, swiped, or held." },
  { id: 4, text: "The experience must feel different at 3 AM than at 3 PM." },
  { id: 5, text: "Include something that only works once—ever." },
  { id: 6, text: "Your creation must generate a sound that never repeats." },
  { id: 7, text: "Make something that requires two people to use at the same time." },
  { id: 8, text: "The most important feature should be invisible at first glance." },
];

const DareBox = () => {
  const [teamName, setTeamName] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDare, setCurrentDare] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false); // 2. STATE FOR BACKEND SYNC

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamName.trim().length > 2) setIsAuth(true);
  };

  const generateDare = () => {
    if (isLocked || hasGenerated) return;
    
    setIsRevealing(true);
    setIsOpen(true);
    setHasGenerated(true); 
    
    let iterations = 0;
    const maxIterations = 15;
    const interval = setInterval(() => {
      const randomDare = dares[Math.floor(Math.random() * dares.length)];
      setCurrentDare(randomDare);
      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setIsRevealing(false);
      }
    }, 80);
  };

  // 3. BACKEND CONNECTION LOGIC
  const handleAcceptAssignment = async () => {
    if (!currentDare || !teamName) return;
    
    setIsSyncing(true);
    
    try {
      const { error } = await supabase
        .from('team_dares') // Table must be named 'team_dares' in Supabase
        .insert([
          { 
            team_name: teamName, 
            allotted_dare: currentDare.text 
          }
        ]);

      if (error) throw error;

      setIsLocked(true);
      toast.success("SYSTEM_SECURED: Dare logged to BF_OS database.");
    } catch (error: any) {
      toast.error("SYNC_ERROR: " + error.message);
      console.error(error);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className={`relative border transition-all duration-500 overflow-hidden bg-black/40 backdrop-blur-sm ${
            isOpen ? "border-accent-cyan/40 shadow-[0_0_40px_rgba(0,242,255,0.1)]" : "border-white/10"
          }`}
        >
          {/* HUD Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-cyan" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-cyan" />

          <div className="p-8 md:p-12 text-center">
            {!isAuth ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex justify-center mb-4">
                  <User className="w-10 h-10 text-accent-cyan opacity-50" />
                </div>
                <h2 className="text-xl font-bold text-white uppercase italic tracking-tighter">Identify_Team</h2>
                <form onSubmit={handleAuth} className="space-y-4">
                  <input 
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="ENTER_TEAM_NAME..."
                    className="w-full bg-transparent border border-white/10 p-3 font-mono text-sm text-accent-cyan outline-none focus:border-accent-cyan transition-colors text-center uppercase"
                    autoFocus
                  />
                  <button className="w-full bg-accent-cyan/10 border border-accent-cyan text-accent-cyan font-mono text-xs py-3 hover:bg-accent-cyan hover:text-black transition-all font-bold uppercase">
                    Initialize_Session
                  </button>
                </form>
              </motion.div>
            ) : !isOpen ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Terminal className="w-10 h-10 text-accent-cyan mx-auto mb-6 opacity-40" />
                <h2 className="text-xl font-bold text-white mb-2 uppercase italic tracking-tighter">
                  Team: <span className="text-accent-cyan">{teamName}</span>
                </h2>
                <p className="text-[10px] font-mono text-muted-foreground mb-8 opacity-60">
                  // ONE DARE PER UNIT. NO RE-ROLLS PERMITTED.
                </p>
                <Button
                  onClick={generateDare}
                  className="bg-accent-cyan text-black font-mono font-bold uppercase rounded-none px-8 py-6 hover:bg-white shadow-[4px_4px_0px_rgba(0,242,255,0.3)]"
                >
                  Generate_Dare
                </Button>
              </motion.div>
            ) : (
              <div className="font-mono text-left md:text-center">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <span className="text-[10px] text-accent-cyan uppercase">
                    {teamName} // {isLocked ? "LOCKED" : "ASSIGNED"}
                  </span>
                  <span className="text-[10px] text-muted-foreground opacity-40 uppercase">
                    HASH_{teamName.slice(0,3)}
                  </span>
                </div>

                <div className={`mb-10 min-h-[100px] flex items-center justify-center transition-all ${isRevealing ? "opacity-50" : "opacity-100"}`}>
                  <p className="text-xl md:text-2xl font-bold text-white leading-tight italic">
                    {isRevealing ? "> DECRYPTING..." : `"${currentDare?.text}"`}
                  </p>
                </div>

                {!isLocked ? (
                  <div className="flex flex-col items-center gap-4">
                    <button
                      onClick={handleAcceptAssignment} // 4. LINKED TO BACKEND FUNCTION
                      disabled={isRevealing || isSyncing}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 bg-accent-cyan/20 border border-accent-cyan text-accent-cyan text-xs font-bold uppercase hover:bg-accent-cyan hover:text-black transition-all disabled:opacity-30"
                    >
                      {isSyncing ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Lock className="w-3 h-3" />
                      )}
                      {isSyncing ? "SYNCING_TO_DATABASE..." : "Accept_Dare_Assignment"}
                    </button>
                    <p className="text-[9px] text-red-500/60 uppercase tracking-widest">
                      ! Reshuffle sequence prohibited for this team ID
                    </p>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-3 px-8 py-4 border border-red-500/50 bg-red-500/10">
                    <ShieldAlert className="w-4 h-4 text-red-500" />
                    <span className="text-xs text-red-500 font-bold uppercase tracking-widest">
                      Assignment_Permanent
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {isOpen && !isLocked && (
            <motion.div 
              initial={{ top: -10 }} animate={{ top: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-accent-cyan/30 shadow-[0_0_10px_#00f2ff] pointer-events-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DareBox;
