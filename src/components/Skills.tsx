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
    <section id="skills" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 py-16 sm:py-24">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 sm:mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-3 sm:mb-4`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{skill.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;