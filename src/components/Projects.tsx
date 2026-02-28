import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Custom CI/CD Runner",
      subtitle: "Flagship Project",
      description:
        "A fully automated CI/CD runner built from scratch to orchestrate builds, tests, and deployments for multiple project stacks.",
      features: [
        "Automatic stack detection (Python / Node.js)",
        "YAML-defined pipelines",
        "Worker queue orchestration with parallel jobs",
        "Dockerized isolation for reproducible builds",
      ],
      stack: ["Python", "Node.js", "Docker", "Celery/RQ", "PostgreSQL", "GitHub Actions", "pxxl.app"],
      github: "[repo link]",
      demo: "[link to runner dashboard if deployed]",
    },
    {
      title: "Scalable API Platform",
      subtitle: "Supporting Backend Project",
      description:
        "A cloud-ready API platform for multi-user SaaS use cases with role-based access and task automation.",
      features: [
        "RESTful / GraphQL APIs",
        "RBAC authentication and permissions",
        "Async background task processing",
        "Caching and database optimization",
      ],
      stack: ["FastAPI / Django", "PostgreSQL", "Redis", "Docker", "pxxl.app", "GitHub Actions"],
      github: "[repo link]",
      demo: "[link if deployed]",
    },
    {
      title: "Automation / Platform Toolset",
      subtitle: "Supporting DevOps Project",
      description:
        "Internal automation tooling for cloud infrastructure operations and deployment workflows.",
      features: [
        "CLI for infrastructure and job orchestration",
        "Automated build/deployment scripts",
        "Backup and restore automation",
        "Logging and monitoring utilities",
      ],
      stack: ["Python", "Bash", "Docker", "Terraform", "Git", "pxxl.app"],
      github: "[repo link]",
      demo: null,
    },
    {
      title: "Cloud Deployment Demo",
      subtitle: "Optional Supporting Project",
      description:
        "A cloud deployment demonstration covering full-stack rollout, observability, and rollback support.",
      features: [
        "Automated deployment pipelines",
        "SSL, backups, and scaling setup",
        "Monitoring and logging integration",
        "Rollback and artifact versioning",
      ],
      stack: ["FastAPI / Next.js", "Docker", "pxxl.app", "GitHub Actions", "PostgreSQL"],
      github: "[repo link]",
      demo: "[link]",
    },
  ];

  const caseStudyHighlights = [
    "Worker-based architecture with Docker job isolation",
    "Queue-driven execution via Celery/RQ for concurrency and retries",
    "Pipeline engine driven by YAML configurations",
    "Cloud-ready deployment model for pxxl.app, AWS, and DigitalOcean",
    "Planned observability via Prometheus and Grafana",
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Platform &amp; Infrastructure{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Backend, cloud, and automation projects focused on reliable deployments, scalable systems,
            and developer productivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 animate-fade-in items-start">
          {projects.map((project) => (
            <article key={project.title} className="glass-sage rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">{project.subtitle}</p>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="mb-5">
                <p className="text-sm font-semibold mb-2">Key Capabilities</p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.demo ? (
                  <Button variant="outline" size="sm" className="rounded-full" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 glass-sage rounded-2xl p-8 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Case Study</p>
          <h3 className="text-2xl font-bold mb-3">Custom CI/CD Runner for Automated Build &amp; Deployment</h3>
          <p className="text-muted-foreground mb-6">
            Built as a self-hosted alternative for flexible multi-project pipelines with containerized execution,
            queue-based orchestration, and cloud deployment integration.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-6">
            {caseStudyHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Impact metrics placeholders: concurrent pipelines (X), average build time (Y), manual deployment reduction (90% expected).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
