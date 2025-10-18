import { Home, Code2, Briefcase, Mail, FileText, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: FileText, label: "About" },
    { id: "skills", icon: Code2, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
  ];

  const actionItems = [
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "whatsapp", icon: MessageCircle, label: "WhatsApp Business", url: "https://api.whatsapp.com/send/?phone=2348159309399&text&type=phone_number&app_absent=0" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-card/50 backdrop-blur-2xl border border-border/40 shadow-lg rounded-full px-4 py-3 flex items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative p-3 rounded-full transition-all duration-300
                ${isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-secondary/50 text-foreground"
                }
              `}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
        
        <div className="w-px h-8 bg-border/50 mx-1" />
        
        {actionItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          if (item.url) {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full transition-all duration-300 hover:bg-secondary/50 text-foreground"
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          }
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative p-3 rounded-full transition-all duration-300
                ${isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-secondary/50 text-foreground"
                }
              `}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;