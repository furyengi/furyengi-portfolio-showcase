import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "WebSockets",
    "Git",
    "Docker",
    "CI/CD",
    "Vercel",
    "AWS",
    "Mobile-first Design",
    "Progressive Web Apps",
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Skills & Expertise</h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-base px-4 py-2 hover:scale-105 transition-transform duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;