import { Code2, Database, Globe, Server, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, REST APIs, GraphQL",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "PostgreSQL, MongoDB, Redis, Supabase",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript, WebSockets",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Zap,
      title: "DevOps & Tools",
      description: "Git, Docker, CI/CD, Vercel, AWS",
      gradient: "from-yellow-500/20 to-amber-500/20",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, Progressive Web Apps",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;