import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  // Project Data
  const projects = [
    {
      id: 1,
      title: "Central Pet Care (Backend) – Smart Pet Health & Services Platform",
      description: "The backend of “Central Pet Care” is built with Node.js, Express, and MongoDB, managing users, pets, appointments, and services via secure RESTful APIs. Authentication and role-based access ensure data protection. Deployed on Render, it provides a reliable, scalable environment powering the frontend seamlessly.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/images/port01.avif", 
      link: "https://central-pet-care-frontend.vercel.app/",
      github: "https://github.com/Central-Pet-Care/Central-Pet-Care-Backend.git"
    },
    {
      id: 2,
      title:  "Central Pet Care (Frontend) – Smart Pet Health & Services Platform",
      description: "The frontend of “Central Pet Care” is developed using React and Tailwind CSS, providing a responsive and intuitive interface for users to manage pets, appointments, and services. Integrated seamlessly with the backend APIs, it ensures smooth interactions and real-time updates. The application is deployed on Vercel, delivering fast and reliable access across all devices",
      tech: ["React", "Tailwind", "Chart.js", "jsPdf.js"],
      image: "/images/port01.avif",
      link: "https://central-pet-care-frontend.vercel.app/",
      github: "https://github.com/Central-Pet-Care/Central-Pet-Care-Frontend.git"
    },
    {
      id: 3,
      title: "Java-Based Web Hospital Management Solution",
      description: "A comprehensive web-based Hospital Management System developed using Java (JSP/Servlet) and MySQL. This application streamlines hospital operations by digitalizing patient registration, doctor appointments, inventory management, and administrative reporting.",
      tech: ["Java", "Apache Tomcat 9", "JDBC"],
      image: "/images/port02.png",
      github: "https://github.com/IT23600898/Hospital-Management-System.git"
    },
    {
      id: 4,
      title: "Identity Issuing Service System",
      description: "Designed and developed a comprehensive web-based platform to streamline the application process for government-issued identities, such as National Identity Cards (NIC) and Driving Licenses. The system bridges the gap between applicants and administrative officials by digitizing manual workflows.",
      tech: ["PHP"," MySQL", "JavaScript", "HTML5"," CSS3"],
      image: "/images/port03.png",
      github: "https://github.com/IT23600898/Identity-Issuing-Service-System.git"
    },
    {
      id: 5,
      title: "LeafDrop (also stylized as LeafDrop Care)",
      description: "LeafDrop is a mobile application designed to make plant care simple, enjoyable, and stress-free through a clean, nature-inspired interface. The application serves as a comprehensive tool for both beginners and seasoned plant lovers to grow and sustain thriving indoor gardens.",
      tech: ["Figma"],
      image: "/images/port04.webp",
      link: "https://www.figma.com/proto/SXyK7k6A2Iap4x7pVZLT1s/MAD-Lab-Test-01?page-id=0%3A1&node-id=30-101&p=f&viewport=429%2C382%2C0.11&t=13SN9NCLMQNMNlYY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30%3A101",
      github: "https://github.com/IT23600898/Identity-Issuing-Service-System.git"
    },
    {
      id: 6,
      title: "LeafDrop",
      description: "LeafDrop is a mobile application designed to simplify indoor plant care with a nature-inspired interface. It features a personalized dashboard for tracking plants, a smart watering reminder system, and a comprehensive plant search library to help users nurture their gardens effortlessly.",
      tech: ["IDE: Android Studio", "UI/Markup: XML"],
      image: "/images/port06.png",
      github: "https://github.com/IT23600898/1stProject.git"
    },
    {
      id: 7,
      title: "HealthyMe",
      description: "Developed 'HealthyMe,' a native Android application designed to assist users in maintaining a healthy and organized lifestyle. The app features a habit tracker with visual progress indicators, a daily mood tracker with analytical charts, and a reminder system powered by WorkManager. All user data is persisted locally using SharedPreferences to ensure offline availability.",
      tech: ["IDE: Android Studio", "UI/Markup: XML", "Kotlin", "SharedPreferences"],
      image: "/images/port05.png",
      github: "https://github.com/IT23600898/HealthyMe.git"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Cards එකින් එක එන පරතරය
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* --- Background Abstract Glows --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* --- Section Heading --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm md:text-base text-sky-400 font-semibold tracking-[0.2em] uppercase mb-2">
            My Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Projects</span>
          </h3>
        </motion.div>

        {/* --- Projects Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              whileHover={{ y: -10 }} // Card Hover Effect
              className="group flex flex-col bg-slate-900/50 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 shadow-lg hover:shadow-sky-500/20 hover:border-sky-500/30 transition-all duration-300 overflow-hidden"
            >
              
              {/* Image Container */}
              <div className="h-48 mb-6 rounded-xl border border-blue-800/20 relative overflow-hidden group-hover:border-sky-500/30 transition-colors">
                 <motion.img 
                   whileHover={{ scale: 1.1 }} // Image Zoom Effect
                   transition={{ duration: 0.5 }}
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
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
                   {/* Conditional Rendering: Only show GitHub button if link exists */}
                   {project.github && (
                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                     </a>
                   )}

                   {/* Conditional Rendering: Only show Live Demo button if link exists */}
                   {project.link && (
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors ml-auto group-hover:translate-x-1 duration-300">
                        Live Demo <span>→</span>
                     </a>
                   )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;