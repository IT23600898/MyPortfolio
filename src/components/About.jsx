import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);

  // Scroll එක Track කිරීම
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Section එක පටන් ගන්න තැන සහ ඉවර වෙන තැන
  });

  // Scroll එකට අනුව වෙනස් වන අගයන් (Parallax Effect)
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]); // Background එක ටිකක් වේගයෙන් උඩට යයි
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]); // Text එක ස්මූත් විදියට එහා මෙහා වෙයි

  // Entrance Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section 
      ref={ref} 
      id="about" 
      className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      
      <motion.div 
        style={{ y: yBg }} 
        className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        style={{ y: yBg }} 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-600/10 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* --- Left Side: Text Content --- */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Viewport එකට ආවම පේන්න ගන්නවා
          viewport={{ once: true, amount: 0.3 }}
          style={{ y: yText }} // 👇 Scroll කරනකොට පොඩි Parallax movement එකක්
        >
          <motion.h2 variants={itemVariants} className="text-sm md:text-base text-sky-400 font-semibold tracking-[0.2em] uppercase">
              Who I Am
          </motion.h2>
          
          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-bold">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Rashmini</span>
          </motion.h3>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
            I am pursuing a <span className="text-sky-300 font-medium">BSc (Hons) in Information & Communication Technology</span>, specializing in Information Technology at <span className="text-sky-300 font-medium">SLIIT</span>, where I navigate the exciting intersection of technical engineering and creative design.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
            My core passions are Full Stack Development and UI/UX Design, where I thrive on transforming complex backend systems into seamless, visually engaging user experiences. By combining solid technical skills with a design-focused mindset, I aim to build scalable, user-centric digital solutions that not only function flawlessly but also delight users at every interaction.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 pt-4">
            <div className="group">
              <h4 className="text-3xl font-bold text-white group-hover:text-sky-400 transition-colors">3rd</h4>
              <p className="text-slate-500 text-sm">Year Undergrad</p>
            </div>
            <div className="group">
              <h4 className="text-3xl font-bold text-white group-hover:text-sky-400 transition-colors">10+</h4>
              <p className="text-slate-500 text-sm">Academic Projects</p>
            </div>
            <div className="group">
              <h4 className="text-3xl font-bold text-white group-hover:text-sky-400 transition-colors">100%</h4>
              <p className="text-slate-500 text-sm">Dedication</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Right Side: Skills Card --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: yText }} // 👇 Card එකත් Scroll එකත් එක්ක Move වෙනවා
          whileHover={{ y: -10 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-blue-800/30 p-8 rounded-2xl shadow-2xl shadow-blue-900/20"
        >
          
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
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-950/40 border border-blue-800/30 cursor-default transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_#0ea5e9]"></div>
                <span className="text-slate-300 text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
             <motion.a 
               href="/Nirmani_CV.pdf" 
               download="Nirmani_CV.pdf" 
               whileHover={{ scale: 1.05, color: "#38bdf8" }} 
               whileTap={{ scale: 0.95 }}
               className="text-sky-400 transition-colors text-sm font-semibold tracking-wide flex items-center justify-center gap-2 mx-auto cursor-pointer"
             >
               Download CV 
               <span>→</span>
             </motion.a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;