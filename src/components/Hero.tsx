import { Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/furyengi" },
    { icon: "x", label: "X (Twitter)", url: "https://x.com/furyengi" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-12">
      <div className="max-w-5xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Mahmud
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Backend &amp; DevOps Engineer</span>
            </div>

            <p className="text-lg text-foreground/80 mb-10 max-w-xl leading-relaxed">
              I build scalable backend platforms and CI/CD automation that ship reliably at cloud scale.
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
                View Projects
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
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
