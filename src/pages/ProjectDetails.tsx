import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-3xl font-bold mb-3">Project not found</h1>
          <p className="text-muted-foreground">The requested project details are unavailable.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-20 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-primary mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <article className="glass-sage rounded-2xl p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">{project.subtitle}</p>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Key Capabilities</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-full" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            {project.demo ? (
              <Button variant="outline" className="rounded-full" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            ) : null}
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProjectDetails;
