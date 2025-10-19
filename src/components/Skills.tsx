import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "HTML5", color: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20" },
    { name: "CSS3", color: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20" },
    { name: "JavaScript", color: "bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/20" },
    { name: "TypeScript", color: "bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/20" },
    { name: "React", color: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/20" },
    { name: "Next.js", color: "bg-gray-500/10 hover:bg-gray-500/20 border-gray-500/20" },
    { name: "Tailwind CSS", color: "bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/20" },
    { name: "Node.js", color: "bg-green-600/10 hover:bg-green-600/20 border-green-600/20" },
    { name: "Express", color: "bg-gray-600/10 hover:bg-gray-600/20 border-gray-600/20" },
    { name: "REST APIs", color: "bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/20" },
    { name: "GraphQL", color: "bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/20" },
    { name: "PostgreSQL", color: "bg-blue-700/10 hover:bg-blue-700/20 border-blue-700/20" },
    { name: "MongoDB", color: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20" },
    { name: "Redis", color: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20" },
    { name: "Supabase", color: "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20" },
    { name: "WebSockets", color: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20" },
    { name: "Git", color: "bg-orange-600/10 hover:bg-orange-600/20 border-orange-600/20" },
    { name: "Docker", color: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/20" },
    { name: "CI/CD", color: "bg-violet-500/10 hover:bg-violet-500/20 border-violet-500/20" },
    { name: "Vercel", color: "bg-gray-700/10 hover:bg-gray-700/20 border-gray-700/20" },
    { name: "AWS", color: "bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20" },
    { name: "Mobile-first Design", color: "bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border-fuchsia-500/20" },
    { name: "Progressive Web Apps", color: "bg-indigo-600/10 hover:bg-indigo-600/20 border-indigo-600/20" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Skills & Expertise</h2>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={`text-base px-4 py-2 hover:scale-105 transition-all duration-200 ${skill.color}`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;