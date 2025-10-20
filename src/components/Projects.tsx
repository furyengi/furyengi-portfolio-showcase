const Projects = () => {
  const progressSteps = [
    {
      title: "Ideation & Research",
      description: "Market research and concept validation",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      status: "completed"
    },
    {
      title: "MVP Development",
      description: "Building the core features and functionality",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      status: "in-progress"
    },
    {
      title: "Beta Testing",
      description: "User testing and feedback collection",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      status: "upcoming"
    },
    {
      title: "Launch",
      description: "Official product release and marketing",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      status: "upcoming"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24 lg:px-12">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            I am working on something big
          </h2>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Startup Building Progress</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {progressSteps.map((step, index) => (
              <div
                key={step.title}
                className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square w-full overflow-hidden relative">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    step.status === 'completed' ? 'bg-green-500/90 text-white' :
                    step.status === 'in-progress' ? 'bg-blue-500/90 text-white' :
                    'bg-muted/90 text-muted-foreground'
                  }`}>
                    {step.status === 'completed' ? '✓ Done' :
                     step.status === 'in-progress' ? '⟳ In Progress' :
                     '○ Upcoming'}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;