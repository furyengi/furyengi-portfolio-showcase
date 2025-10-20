import { Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const Projects = () => {
  const progressSteps = [
    {
      title: "Ideation & Research",
      description: "Market research and concept validation",
      icon: Lightbulb,
      status: "Completed Oct 15, 2025",
      statusType: "completed"
    },
    {
      title: "MVP Development",
      description: "Building the core features and functionality",
      icon: Code,
      status: "in_progress",
      statusType: "in-progress"
    },
    {
      title: "Beta Testing",
      description: "User testing and feedback collection",
      icon: TestTube,
      status: "Starting Soon",
      statusType: "upcoming"
    },
    {
      title: "Launch",
      description: "Official product release and marketing",
      icon: Rocket,
      status: "Q1 2026",
      statusType: "upcoming"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            I am working on something big
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {progressSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                        step.statusType === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        step.statusType === 'in-progress' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                        'bg-muted/50 text-muted-foreground border border-border'
                      }`}>
                        {step.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;