import { Lightbulb, Code, TestTube, Rocket, Clock } from "lucide-react";
import comingSoonImage from "@/assets/coming-soon.jpg";

const Projects = () => {
  const progressSteps = [
    {
      title: "Research & Planning",
      description: "Market analysis, user research, and concept validation completed.",
      icon: Lightbulb,
      status: "Completed",
      statusType: "completed",
      date: "Oct 2025",
      progress: 100,
      details: ["Market analysis", "User interviews", "Business model validated"]
    },
    {
      title: "Development",
      description: "Building core features and main functionality.",
      icon: Code,
      status: "In Progress",
      statusType: "in-progress",
      date: "Oct - Dec 2025",
      progress: 65,
      details: ["Frontend 80%", "Backend APIs 60%", "Database ready"]
    },
    {
      title: "Testing",
      description: "Beta testing with select users and iteration.",
      icon: TestTube,
      status: "Upcoming",
      statusType: "upcoming",
      date: "Dec 2025",
      progress: 0,
      details: ["Test group selected", "Feedback system ready"]
    },
    {
      title: "Launch",
      description: "Official release with marketing campaign.",
      icon: Rocket,
      status: "Planned",
      statusType: "upcoming",
      date: "Q1 2026",
      progress: 0,
      details: ["Marketing ready", "Launch materials prepared"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            What's Next
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Something{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Exciting
            </span>{" "}
            is Coming
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm working on a project that I can't wait to share with the world. 
            Here's a peek at the progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 animate-fade-in">
          {/* Left - Image Card */}
          <div className="lg:col-span-2">
            <div className="glass-sage rounded-3xl overflow-hidden h-full">
              <div className="relative h-64 lg:h-full min-h-[300px]">
                <img 
                  src={comingSoonImage} 
                  alt="Coming Soon Project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex flex-col items-center justify-end p-8">
                  <Clock className="w-12 h-12 text-primary-foreground mb-4 opacity-80" />
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center">
                    Coming Soon
                  </h3>
                  <p className="text-primary-foreground/80 text-center mt-2">
                    Stay tuned for updates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Progress Timeline */}
          <div className="lg:col-span-3 space-y-4">
            {progressSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="glass-sage rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        step.statusType === 'completed' ? 'gradient-sage' :
                        step.statusType === 'in-progress' ? 'bg-amber-500/20 border-2 border-amber-500/40' :
                        'bg-muted border-2 border-border'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          step.statusType === 'completed' ? 'text-primary-foreground' :
                          step.statusType === 'in-progress' ? 'text-amber-600' :
                          'text-muted-foreground'
                        }`} />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-bold text-foreground">{step.title}</h3>
                          <p className="text-xs text-muted-foreground">{step.date}</p>
                        </div>
                        <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                          step.statusType === 'completed' ? 'bg-primary/20 text-primary border border-primary/30' :
                          step.statusType === 'in-progress' ? 'bg-amber-500/20 text-amber-600 border border-amber-500/30' :
                          'bg-muted text-muted-foreground border border-border'
                        }`}>
                          {step.status}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 rounded-full ${
                            step.statusType === 'completed' ? 'gradient-sage' :
                            step.statusType === 'in-progress' ? 'bg-amber-500' :
                            'bg-muted-foreground/30'
                          }`}
                          style={{ width: `${step.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
