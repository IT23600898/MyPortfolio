import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Background Abstract Glows */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-sm md:text-base text-sky-400 font-semibold tracking-[0.2em] uppercase">
              Who I Am
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-bold">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Rashmini</span>
          </h3>

          <p className="text-slate-400 text-lg leading-relaxed">
            I am pursuing a <span className="text-sky-300 font-medium">BSc (Hons) in Information & Communication Technology</span>, specializing in Information Technology at <span className="text-sky-300 font-medium">SLIIT</span>, where I navigate the exciting intersection of technical engineering and creative design.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            My core passions are Full Stack Development and UI/UX Design, where I thrive on transforming complex backend systems into seamless, visually engaging user experiences. By combining solid technical skills with a design-focused mindset, I aim to build scalable, user-centric digital solutions that not only function flawlessly but also delight users at every interaction.
          </p>

          {/* Stats / Highlights */}
          <div className="flex gap-8 pt-4">
            <div>
              <h4 className="text-3xl font-bold text-white">3rd</h4>
              <p className="text-slate-500 text-sm">Year Undergrad</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">10+</h4>
              <p className="text-slate-500 text-sm">Academic Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">100%</h4>
              <p className="text-slate-500 text-sm">Dedication</p>
            </div>
          </div>
        </div>

        {/* Right Side: Skills Card (Glass Style) */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-800/30 p-8 rounded-2xl shadow-2xl shadow-blue-900/20 transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animation-delay-500">
          
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full"></span>
            My Tech Stack
          </h4>

          <div className="grid grid-cols-2 gap-4">
            {[
              "MERN Stack", "Spring Boot", "React.js", 
              "Java", "Figma (UI/UX)", "Tailwind CSS",
              "Node.js", "Git/GitHub"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-950/40 border border-blue-800/30 hover:border-sky-500/50 hover:bg-blue-900/60 transition-all duration-300 group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-sky-500 group-hover:shadow-[0_0_10px_#0ea5e9] transition-shadow"></div>
                <span className="text-slate-300 group-hover:text-white text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
             <a 
               href="/Nirmani_CV.pdf" 
               download="Nirmani_CV.pdf" 
               className="text-sky-400 hover:text-white transition-colors text-sm font-semibold tracking-wide flex items-center justify-center gap-2 mx-auto group cursor-pointer"
             >
               Download CV 
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;