const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">About Me</h2>
        
        <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
            I'm a passionate full-stack web developer who loves bringing ideas to life through code. 
            With expertise in both frontend and backend technologies, I create seamless digital experiences 
            that are not only functional but also beautiful.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
            My journey in web development has equipped me with a diverse skill set, from crafting 
            intuitive user interfaces to building robust server-side applications. I thrive on challenges 
            and am always eager to learn new technologies.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
            open-source projects, or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
