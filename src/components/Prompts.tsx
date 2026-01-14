import { useState } from "react";

const prompts = [
  {
    id: 1,
    title: "The Invisible Thread",
    content: `Something connects two strangers who will never meet.
    It could be a sound, a number, a moment in time.
    What happens when one of them almost discovers it?
    Build what exists between them—not them.`,
  },
  {
    id: 2,
    title: "Second Language",
    content: `There's a language that only appears at night.
    It's not spoken, not written, not coded.
    But somehow, people understand it anyway.
    Create the interface where this language lives.`,
  },
  {
    id: 3,
    title: "The Last Notification",
    content: `A device sends its final message before going dark forever.
    What does it say? Who receives it?
    The message isn't important—the silence after is.
    Build the moment just before the end.`,
  },
  {
    id: 4,
    title: "Borrowed Time",
    content: `Someone is given exactly 47 minutes they weren't supposed to have.
    They know it. They can feel it slipping.
    What would you build for those 47 minutes?
    Not to save them—to make them matter.`,
  },
  {
    id: 5,
    title: "The Cartographer's Mistake",
    content: `A map shows a place that doesn't exist—until people start going there.
    The mistake becomes real through belief.
    Build something that shouldn't exist,
    but does now, because someone made it.`,
  },
];

const Prompts = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-mono text-sm tracking-[0.2em] text-primary mb-4 uppercase">
            Choose Your Direction
          </p>
          <h2 className="text-headline font-semibold tracking-tight mb-6">
            The Prompts
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            Each prompt is a beginning, not a destination. 
            Interpret freely. There are no wrong answers—only unexplored ones.
          </p>
        </div>

        <div className="space-y-6">
          {prompts.map((prompt, index) => (
            <div
              key={prompt.id}
              onMouseEnter={() => setHoveredId(prompt.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative p-8 md:p-10 rounded-2xl border transition-all duration-500 ${
                  hoveredId === prompt.id
                    ? "border-primary/50 bg-card shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
                    : "border-border/50 bg-card/50"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm text-primary/60 mt-1">
                    {String(prompt.id).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-title font-medium mb-4 text-foreground group-hover:text-gradient-accent transition-all duration-300">
                      {prompt.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed whitespace-pre-line">
                      {prompt.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prompts;
