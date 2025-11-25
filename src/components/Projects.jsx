import React from "react";

const Projects = () => {
  // Project Data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern online shopping experience featuring user authentication, product filtering, cart management, and payment gateway integration.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather application providing detailed forecasts, location-based weather data, and interactive maps using external APIs.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool designed for efficiency, featuring drag-and-drop task organization, dark mode, and local storage data persistence.",
      tech: ["React", "Redux", "Framer Motion"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Background Abstract Glows (About එකේ විදියටම) */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-sm md:text-base text-sky-400 font-semibold tracking-[0.2em] uppercase mb-2">
            My Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Projects</span>
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-slate-900/50 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 shadow-lg hover:shadow-sky-500/20 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              
              {/* Image Placeholder with Gradient (Since no images yet) */}
              <div className="h-48 mb-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-slate-900 border border-blue-800/20 flex items-center justify-center relative overflow-hidden group-hover:border-sky-500/30 transition-colors">
                 <div className="absolute inset-0 bg-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <h4 className="text-4xl font-bold text-slate-700 group-hover:text-sky-500/40 transition-colors duration-300">
                    {project.title.charAt(0)}
                 </h4>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags (Same style as About Skills) */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium text-sky-300 bg-blue-950/40 border border-blue-800/30 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons / Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                   <a href={project.github} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      GitHub
                   </a>
                   <a href={project.link} className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors ml-auto group-hover:translate-x-1 duration-300">
                      Live Demo <span>→</span>
                   </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;