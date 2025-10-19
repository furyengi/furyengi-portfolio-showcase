import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with scheduled posting and engagement metrics.",
      tags: ["Next.js", "TypeScript", "GraphQL", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      tags: ["React", "Tailwind CSS", "Weather API"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Custom content management system for creative professionals to showcase their work and manage clients.",
      tags: ["Next.js", "Supabase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      github: "#",
      demo: "#",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking app with workout plans, progress charts, and nutrition tracking.",
      tags: ["React", "TypeScript", "Chart.js", "PWA"],
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-24 lg:px-12">
      <div className="w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="rounded-full"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;