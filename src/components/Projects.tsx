import { ArrowUpRight, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { caseStudyHighlights, projects } from "@/data/projects";
import cicdPreview from "@/assets/cicd-1.png";

const Projects = () => {
  const navigate = useNavigate();

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in items-stretch auto-rows-fr">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="glass-sage rounded-2xl p-6 block h-full min-h-[430px] transition-transform duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
              onClick={() => navigate(`/projects/${project.slug}`)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(`/projects/${project.slug}`);
                }
              }}
              role="link"
              tabIndex={0}
            >
              {project.slug === "custom-cicd-runner" ? (
                <>
                  <img
                    src={cicdPreview}
                    alt="CI/CD runner preview"
                    className="w-full h-40 object-cover rounded-xl border border-border/40 mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                </>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">{project.subtitle}</p>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                </>
              )}
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex items-center justify-between gap-3 mt-auto">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View Key Details
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="text-primary hover:text-foreground transition-colors"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 glass-sage rounded-2xl p-8 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Case Study</p>
          <h3 className="text-2xl font-bold mb-3">RUNXR CI/CD Runner for Automated Build &amp; Deployment</h3>
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
