import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="relative">
      {/* Background with subtle pattern */}
      <div 
        className="fixed inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>&copy; 2025 Mahmud Abdulmalik (@furyengi). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;