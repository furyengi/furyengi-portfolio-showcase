import { Instagram, Github, ArrowDown } from "lucide-react";
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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-5xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Open for opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Mahmud
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
              Full-Stack Developer
            </p>
            
            <p className="text-muted-foreground mb-8">
              @furyengi
            </p>

            <p className="text-lg text-foreground/80 mb-8 max-w-lg leading-relaxed">
              I craft beautiful, functional web experiences with modern technologies. 
              From concept to deployment, I bring ideas to life.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all gradient-sage text-primary-foreground border-0"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="rounded-full px-8 py-6 text-base border-2 border-primary/30 hover:bg-primary/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </Button>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                if (social.icon === "x") {
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Mahmud Abdulmalik" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full gradient-sage opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 lg:mt-16 animate-bounce">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
