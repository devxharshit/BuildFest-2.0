import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowRight } from "lucide-react";

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
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-headline font-semibold tracking-tight mb-4">
            Submitted
          </h2>
          <p className="text-body text-muted-foreground">
            Thank you for building with us. Whatever you created—it's enough.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Team Name
            </label>
            <Input
              placeholder="Your team's name"
              value={formData.teamName}
              onChange={(e) => handleChange("teamName", e.target.value)}
              className="h-12 bg-card border-border/50 focus:border-primary/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Project Name
            </label>
            <Input
              placeholder="What did you build?"
              value={formData.projectName}
              onChange={(e) => handleChange("projectName", e.target.value)}
              className="h-12 bg-card border-border/50 focus:border-primary/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Prompt Chosen
            </label>
            <select
              value={formData.promptChosen}
              onChange={(e) => handleChange("promptChosen", e.target.value)}
              className="w-full h-12 px-4 rounded-lg bg-card border border-border/50 text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              required
            >
              <option value="" className="bg-card">Select a prompt</option>
              {prompts.map((prompt) => (
                <option key={prompt} value={prompt} className="bg-card">
                  {prompt}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Prototype or Demo Link
            </label>
            <Input
              placeholder="https://..."
              type="url"
              value={formData.demoLink}
              onChange={(e) => handleChange("demoLink", e.target.value)}
              className="h-12 bg-card border-border/50 focus:border-primary/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              What didn't you build?{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <Textarea
              placeholder="Reflect on what you left behind, and why..."
              value={formData.reflection}
              onChange={(e) => handleChange("reflection", e.target.value)}
              className="min-h-[120px] bg-card border-border/50 focus:border-primary/50 resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Sometimes what we don't build says more than what we do.
            </p>
          </div>

          <Button
            type="submit"
            variant="glow"
            size="lg"
            className="w-full font-semibold"
          >
            Submit Prototype
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Submit;
