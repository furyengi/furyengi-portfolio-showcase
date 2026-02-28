import { Workflow, Server, Cloud, ShieldCheck } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Workflow,
      title: "Pipeline Automation",
      description: "Builds, tests, and deployments with minimal manual effort"
    },
    {
      icon: Server,
      title: "Backend Systems",
      description: "API platforms with async workers, queues, and caching"
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Deployments on AWS, DigitalOcean, and pxxl.app"
    },
    {
      icon: ShieldCheck,
      title: "Reliability Focus",
      description: "Containerized, reproducible, and observable infrastructure"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="animate-fade-in-up">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Building backend platforms that{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                matter
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Backend &amp; DevOps Engineer focused on cloud and platform engineering
                with automation-driven infrastructure. I design systems that make delivery faster,
                safer, and easier to scale.
              </p>
              
              <p>
                Since 2025, I have built self-initiated production-style projects including
                a custom CI/CD runner, a scalable API platform, and internal automation tooling
                for infrastructure and deployments.
              </p>
              
              <p>
                My core stack includes Python, TypeScript, Bash, FastAPI, Django, Node.js,
                Docker, Kubernetes, Terraform, Ansible, PostgreSQL, Redis, and Celery/RabbitMQ.
              </p>
            </div>

            <div className="mt-8 p-5 glass-sage rounded-2xl">
              <p className="text-sm font-semibold text-foreground mb-2">Experience</p>
              <p className="text-sm text-muted-foreground">
                Backend &amp; DevOps Engineer | Self-Initiated Projects (2025 - Present)
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Open Source: In progress | Education: To be added | Certifications: To be added |
                Blogs: To be added | Achievements: To be added
              </p>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="glass-sage rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-sage flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
