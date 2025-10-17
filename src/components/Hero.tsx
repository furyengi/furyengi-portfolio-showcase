import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Twitter, label: "X (Twitter)", url: "https://x.com/furyengi" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/furyengi" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/furyengi" },
    { icon: Youtube, label: "TikTok", url: "https://tiktok.com/@furyengi" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-4xl animate-fade-in-up">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl animate-float">
            <img 
              src={profileImage} 
              alt="Mahmud Abdulmalik" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          Hey, I'm <span className="text-primary">Mahmud Abdulmalik</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
          @furyengi
        </p>

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

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;