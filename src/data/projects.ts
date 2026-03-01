export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string | null;
};

export const projects: Project[] = [
  {
    slug: "custom-cicd-runner",
    title: "RUNXR",
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
    slug: "scalable-api-platform",
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
    slug: "automation-platform-toolset",
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
    slug: "cloud-deployment-demo",
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

export const caseStudyHighlights = [
  "Worker-based architecture with Docker job isolation",
  "Queue-driven execution via Celery/RQ for concurrency and retries",
  "Pipeline engine driven by YAML configurations",
  "Cloud-ready deployment model for pxxl.app, AWS, and DigitalOcean",
  "Planned observability via Prometheus and Grafana",
];
