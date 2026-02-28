import { Badge } from "@/components/ui/badge";
import {
  Braces,
  Code2,
  TerminalSquare,
  Server,
  Boxes,
  Cloud,
  Container,
  Workflow,
  GitBranch,
  Wrench,
  Database,
  Activity,
} from "lucide-react";

const Skills = () => {
  const primarySkills = [
    { name: "Python", icon: Code2 },
    { name: "TypeScript", icon: Braces },
    { name: "Bash", icon: TerminalSquare },
    { name: "FastAPI / Django", icon: Server },
    { name: "Node.js", icon: Boxes },
    { name: "Cloud (AWS / DO / pxxl.app)", icon: Cloud },
    { name: "Docker / Kubernetes", icon: Container },
    { name: "GitHub Actions", icon: Workflow },
    { name: "Self-Hosted Runners", icon: GitBranch },
    { name: "Terraform / Ansible", icon: Wrench },
    { name: "PostgreSQL / Redis", icon: Database },
    { name: "RabbitMQ / Celery", icon: Activity },
  ];

  const otherSkills = [
    "Prometheus",
    "Grafana",
    "Nginx",
    "Traefik",
    "React",
    "Next.js",
    "React Native",
    "Tailwind",
    "REST APIs",
    "GraphQL",
    "Automation Scripts",
    "CI/CD Pipelines",
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core technologies used to build backend platforms, cloud infrastructure,
            and automation-first delivery pipelines.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in">
          {primarySkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="p-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <Icon
                  className="w-9 h-9 text-primary mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                  strokeWidth={2.75}
                />
                <p className="text-sm font-semibold text-foreground leading-snug">{skill.name}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 glass-sage rounded-2xl p-6 animate-fade-in">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full gradient-sage" />
            Other Skills
          </h3>
          <div className="marquee-mask">
            <div className="marquee-track" aria-label="Scrolling list of additional skills">
              {[...otherSkills, ...otherSkills].map((skill, index) => (
              <Badge
                key={`${skill}-${index}`}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/30 text-primary whitespace-nowrap"
              >
                {skill}
              </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
