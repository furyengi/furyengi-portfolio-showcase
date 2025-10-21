import { Lightbulb, Code, TestTube, Rocket } from "lucide-react";
import comingSoonImage from "@/assets/coming-soon.jpg";

const Projects = () => {
  const progressSteps = [
    {
      title: "Ideation & Research",
      description: "Conducted comprehensive market analysis, competitor research, and validated the core concept through user interviews and surveys.",
      icon: Lightbulb,
      status: "Completed",
      statusType: "completed",
      date: "Oct 15, 2025",
      progress: 100,
      details: [
        "Market analysis completed",
        "User interviews conducted",
        "Business model validated"
      ]
    },
    {
      title: "MVP Development",
      description: "Currently building the core product features, setting up infrastructure, and implementing the main user workflows and functionality.",
      icon: Code,
      status: "In Progress",
      statusType: "in-progress",
      date: "Oct 20 - Dec 15, 2025",
      progress: 65,
      details: [
        "Frontend development 80%",
        "Backend APIs 60%",
        "Database schema finalized"
      ]
    },
    {
      title: "Beta Testing",
      description: "Invite select users to test the product, collect feedback, identify bugs, and iterate on the user experience before public launch.",
      icon: TestTube,
      status: "Starting Soon",
      statusType: "upcoming",
      date: "Dec 20, 2025",
      progress: 0,
      details: [
        "Test group selection pending",
        "Feedback framework ready",
        "Bug tracking system setup"
      ]
    },
    {
      title: "Launch",
      description: "Official product release with marketing campaign, press outreach, and community engagement to drive initial user adoption.",
      icon: Rocket,
      status: "Planned",
      statusType: "upcoming",
      date: "Q1 2026",
      progress: 0,
      details: [
        "Marketing strategy defined",
        "Launch materials prepared",
        "Community outreach planned"
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            I am working on something big
          </h2>
        </div>

        <div className="glass rounded-3xl p-8 lg:p-12 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <img 
                src={comingSoonImage} 
                alt="Coming Soon Project" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl">
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  Coming Soon
                </h3>
              </div>
            </div>

            {/* Right Side - Progress Steps */}
            <div className="space-y-6">
              {progressSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-background/50 backdrop-blur-sm rounded-xl p-5 hover:scale-[1.01] transition-all duration-300 border border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                            <p className="text-xs text-muted-foreground">{step.date}</p>
                          </div>
                          <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                            step.statusType === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            step.statusType === 'in-progress' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                            'bg-muted/50 text-muted-foreground border border-border'
                          }`}>
                            {step.status}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                        
                        {/* Progress Bar */}
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-muted-foreground">Progress</span>
                            <span className="text-xs font-semibold text-foreground">{step.progress}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-500 ${
                                step.statusType === 'completed' ? 'bg-green-500' :
                                step.statusType === 'in-progress' ? 'bg-amber-500' :
                                'bg-muted-foreground/30'
                              }`}
                              style={{ width: `${step.progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Details List */}
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;