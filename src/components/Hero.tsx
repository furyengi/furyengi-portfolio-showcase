import { Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: "x", label: "X (Twitter)", url: "https://x.com/furyengi" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/furyengi" },
    { icon: Github, label: "GitHub", url: "https://github.com/furyengi" },
    { icon: "tiktok", label: "TikTok", url: "https://tiktok.com/@furyengi" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-4xl animate-fade-in-up">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl animate-float">
            <img 
              src={profileImage} 
              alt="Mahmud Abdulmalik" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Hey, I'm <span className="text-primary">Mahmud Abdulmalik</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
          @furyengi
        </p>

        <div className="flex items-center gap-3 mb-8">
          {socialLinks.map((social) => {
            if (social.icon === "x") {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              );
            }
            if (social.icon === "tiktok") {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              );
            }
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl text-balance">
          Full-Stack Web Developer
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Creating innovative solutions and captivating designs. 
          Crafting seamless digital experiences from front to back.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
          
          <div className="glass rounded-full px-6 py-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;