import { Home, Code2, Briefcase, Mail, FileText } from "lucide-react";
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
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="glass shadow-lg rounded-full px-4 py-3 flex items-center gap-2">
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
      </div>
    </nav>
  );
};

export default Navigation;