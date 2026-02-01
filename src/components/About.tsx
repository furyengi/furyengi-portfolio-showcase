import { Code2, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Palette,
      title: "Design Eye",
      description: "Creating visually stunning interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to continuous learning"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="animate-fade-in-up">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Building digital experiences that{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                matter
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a love for creating elegant 
                solutions to complex problems. My journey in tech started with curiosity 
                and has evolved into a career focused on building impactful digital products.
              </p>
              
              <p>
                With expertise spanning frontend frameworks like React to backend 
                technologies like Node.js, I bridge the gap between beautiful design 
                and robust functionality.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="glass-sage rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-sage flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
