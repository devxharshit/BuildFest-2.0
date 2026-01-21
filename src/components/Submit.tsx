import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";

const prompts = [
  "The Invisible Thread",
  "Second Language", 
  "The Last Notification",
  "Borrowed Time",
  "The Cartographer's Mistake",
];

const Submit = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    projectName: "",
    promptChosen: "",
    demoLink: "",
    reflection: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      {/* Identify Team Header - Matches Reference Image */}
      <div className="flex flex-col items-center mb-12">
        <User className="w-12 h-12 text-accent-cyan mb-4 opacity-80" />
        <h3 className="font-mono text-lg font-bold tracking-[0.4em] text-white uppercase italic">
          Identify_Team
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Name */}
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
              01_Team_ID
            </label>
            <Input
              placeholder="ENTER_TEAM_NAME..."
              value={formData.teamName}
              onChange={(e) => handleChange("teamName", e.target.value)}
              className="h-12 bg-black/40 border-accent-cyan/30 text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm transition-all"
              required
            />
          </div>

          {/* Project Name */}
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
            />
          </div>
        </div>

        {/* Prompt Selection */}
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
            03_Selected_Challenge
          </label>
          <select
            value={formData.promptChosen}
            onChange={(e) => handleChange("promptChosen", e.target.value)}
            className="w-full h-12 px-4 bg-black/40 border border-accent-cyan/30 text-accent-cyan focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm transition-all appearance-none cursor-pointer"
            required
          >
            <option value="" className="bg-[#0a0f1e]">SELECT_PROMPT</option>
            {prompts.map((prompt) => (
              <option key={prompt} value={prompt} className="bg-[#0a0f1e]">
                {prompt.toUpperCase().replace(/\s+/g, '_')}
              </option>
            ))}
          </select>
        </div>

        {/* Demo Link */}
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
            04_Payload_URL
          </label>
          <Input
            placeholder="HTTPS://DEPLOYMENT_LINK.EXE"
            type="url"
            value={formData.demoLink}
            onChange={(e) => handleChange("demoLink", e.target.value)}
            className="h-12 bg-black/40 border-accent-cyan/30 text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm transition-all"
            required
          />
        </div>

        {/* Reflection */}
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan/50 ml-1">
            05_Post_Mortem_Logs (Optional)
          </label>
          <Textarea
            placeholder="WHAT_DID_YOU_LEAVE_BEHIND?..."
            value={formData.reflection}
            onChange={(e) => handleChange("reflection", e.target.value)}
            className="min-h-[120px] bg-black/40 border-accent-cyan/30 text-accent-cyan placeholder:text-accent-cyan/20 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50 rounded-none font-mono text-sm resize-none transition-all"
          />
        </div>

        {/* Submit Button Styled like your Nav bar CTA */}
        <button
          type="submit"
          className="w-full h-14 bg-accent-cyan text-[#020617] font-bold font-mono text-sm uppercase skew-x-[-12deg] transition-all hover:skew-x-0 hover:scale-[1.02] shadow-[5px_5px_0px_rgba(0,242,255,0.2)] flex items-center justify-center gap-3"
        >
          <span className="skew-x-[12deg] flex items-center gap-2">
            Execute_Submission <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Submit;