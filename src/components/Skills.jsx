import React from 'react';
import { motion } from 'framer-motion';
// Importing Icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaBootstrap, FaAndroid, FaFileWord, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';
// 👇 මෙතන වෙනස් කළා: SiFramermotion වෙනුවට SiFramer දැම්මා
import { SiTailwindcss, SiSpringboot, SiMongodb, SiPostman, SiAndroidstudio, SiFramer } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" />, spin: true },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }, 
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        // 👇 Icon එක SiFramer ලෙස වෙනස් කළා
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
      ]
    },
    {
      title: "Office & Productivity",
      skills: [
        { name: "MS Word", icon: <FaFileWord className="text-blue-600" /> },
        { name: "PowerPoint", icon: <FaFilePowerpoint className="text-orange-600" /> },
        { name: "MS Excel", icon: <FaFileExcel className="text-green-600" /> },
      ]
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* --- Background Animated Glows --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm md:text-base text-sky-400 font-semibold tracking-[0.2em] uppercase mb-3">
            My Arsenal
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Technologies</span>
          </h3>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            A comprehensive look at the tools and technologies I use to bring digital products to life.
          </p>
        </motion.div>

        {/* --- Skills Categories --- */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              
              {/* Category Title */}
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <div className="h-[1px] bg-slate-800 flex-grow max-w-[50px] mr-4"></div>
                <h4 className="text-2xl font-bold text-slate-200">
                  {category.title}
                </h4>
                <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      backgroundColor: "rgba(30, 58, 138, 0.2)",
                      borderColor: "rgba(56, 189, 248, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-slate-900/50 backdrop-blur-sm border border-blue-800/30 p-4 rounded-xl shadow-lg cursor-default flex flex-col items-center justify-center gap-3 relative overflow-hidden"
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Icon Animation */}
                    <motion.div 
                      className="text-4xl relative z-10"
                      animate={skill.spin ? { rotate: 360 } : {}}
                      transition={skill.spin ? { repeat: Infinity, duration: 8, ease: "linear" } : {}}
                    >
                      {skill.icon}
                    </motion.div>

                    <p className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors relative z-10">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;