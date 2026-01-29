
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight, User, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient"; // 1. IMPORT SUPABASE
import { toast } from "sonner"; // 2. IMPORT TOAST FOR FEEDBACK

const prompts = [
  "Listening to the Ocean",
  "Noticing Before It’s Too Late", 
  "Trust Under Constant Attack",
  "CyberSecurity & Digital Trust",
  "Education — AI Concept Studio",
  "Mining & Metallurgy Sustainability",
  "Trusting the Vote",
  "Open Innovation"
];

const Submit = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // 3. ADD LOADING STATE
  const [formData, setFormData] = useState({
    teamName: "",
    projectName: "",
    promptChosen: "",
    demoLink: "", // This will be sent to linkedin_link in DB
    reflection: "",
  });

  // 4. UPDATED SUBMIT LOGIC
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('submissions') // Ensure table name is exactly 'submissions'
        .insert([
          {
            team_name: formData.teamName,
            project_name: formData.projectName,
            linkedin_link: formData.demoLink, // Sending URL to the LinkedIn column
            prompt_chosen: formData.promptChosen,
            reflection: formData.reflection,
          }
        ]);

      if (error) throw error;

      setSubmitted(true);
      toast.success("DATA_UPLOAD_SUCCESSFUL");
    } catch (error: any) {
      toast.error("TRANSMISSION_FAILED: " + error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <div className="w-20 h-20 mb-8 rounded-full border border-accent-cyan bg-accent-cyan/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.2)]">
          <Check className="w-10 h-10 text-accent-cyan" />
        </div>
        <h2 className="text-3xl font-bold tracking-tighter text-white uppercase italic mb-4">
          Payload_Received
        </h2>
        <p className="font-mono text-sm text-accent-cyan/60">
          Transmission successful. Your prototype has been logged into the BF_OS database.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <User className="w-12 h-12 text-accent-cyan mb-4 opacity-80" />
        <h3 className="font-mono text-lg font-bold tracking-[0.4em] text-white uppercase italic">
          Identify_Team
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
              01_Team_Name
            </label>
            <Input
              placeholder="ENTER_TEAM_NAME..."
              value={formData.teamName}
              onChange={(e) => handleChange("teamName", e.target.value)}
              className="h-12 bg-black/40 border-accent-cyan/30 text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm transition-all"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
              02_Project_Title
            </label>
            <Input
              placeholder="PROJECT_CODENAME..."
              value={formData.projectName}
              onChange={(e) => handleChange("projectName", e.target.value)}
              className="h-12 bg-black/40 border-accent-cyan/30 text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm transition-all"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
            03_Selected_Prompt
          </label>
          <select
            value={formData.promptChosen}
            onChange={(e) => handleChange("promptChosen", e.target.value)}
            className="w-full h-12 px-4 bg-black/40 border border-accent-cyan/30 text-accent-cyan focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm transition-all appearance-none cursor-pointer"
            required
            disabled={loading}
          >
            <option value="" className="bg-[#0a0f1e]">SELECT_PROMPT</option>
            {prompts.map((prompt) => (
              <option key={prompt} value={prompt} className="bg-[#0a0f1e]">
                {prompt.toUpperCase().replace(/\s+/g, '_')}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
            04_LinkedIn_URL
          </label>
          <Input
            placeholder="HTTPS://LINKEDIN_URL"
            type="url"
            value={formData.demoLink}
            onChange={(e) => handleChange("demoLink", e.target.value)}
            className="h-12 bg-black/40 border-accent-cyan/30 text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm transition-all"
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
            05_Post_Mortem_Logs (Optional)
          </label>
          <Textarea
            placeholder="WHAT_DID_YOU_LEAVE_BEHIND?..."
            value={formData.reflection}
            onChange={(e) => handleChange("reflection", e.target.value)}
            className="min-h-[120px] bg-black/40 border-accent-cyan/30 text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm resize-none transition-all"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 bg-accent-cyan text-[#020617] font-bold font-mono text-sm uppercase skew-x-[-12deg] transition-all hover:skew-x-0 hover:scale-[1.02] shadow-[5px_5px_0px_rgba(0,242,255,0.2)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="skew-x-[12deg] flex items-center gap-2">
            {loading ? (
              <>TRANSMITTING... <Loader2 className="w-4 h-4 animate-spin" /></>
            ) : (
              <>Execute_Submission <ArrowRight className="w-4 h-4" /></>
            )}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Submit;
