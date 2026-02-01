import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD", "Vercel", "AWS"]
    }
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
            A comprehensive toolkit built through years of hands-on experience 
            with modern web technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className="glass-sage rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full gradient-sage" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-8 glass-sage rounded-2xl p-6 animate-fade-in">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full gradient-sage" />
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Mobile-first Design", "Progressive Web Apps", "Responsive Design", "Performance Optimization", "SEO", "Accessibility"].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
