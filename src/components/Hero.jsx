import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../assets/image_4.jpg'; 

const Hero = () => {
  // --- Animation Variants ---

  // Main Container Stagger Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Text Elements Fade Up
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    },
  };

  // Image Entrance Animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 50, damping: 20, delay: 0.5 }
    },
  };

  // Slow Floating Animation
  const floatAnimation = {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  };

  return (
    <section id='home' className='bg-slate-950 text-white min-h-screen flex items-center relative overflow-hidden px-6 md:px-16 lg:px-24 py-20 lg:py-0 font-sans'>
      
      {/* --- Background Ambient Glows --- */}
      <div className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ x: [0, 50, 0], y: [0, -50, 0] }} transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }} className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-[120px] -z-10" />
          <motion.div animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }} className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] -z-10" />
          {/* Noise Texture for Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* --- Left Column: Text Content --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
        >
          
          {/* Subtitle Badge */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
             <span className="h-[2px] w-12 bg-sky-500 hidden lg:block"></span>
             <span className='px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 font-semibold tracking-wider text-xs md:text-sm uppercase'>
               IT Undergraduate | Web & Application Developer
             </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight'
          >
            Hello, I'm <br/>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500 drop-shadow-sm'>
              Rashmini Kavindya
            </span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div variants={itemVariants} className='text-xl md:text-2xl lg:text-3xl font-medium text-slate-300 h-[40px] lg:h-[50px] flex flex-wrap justify-center lg:justify-start items-center gap-2'>
            <span>A passionate</span>
            <span className="text-sky-400 font-bold">
              <Typewriter
                words={['IT Undergraduate', 'Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          {/* Professional Bio (Tailored for a Student) */}
          <motion.p 
            variants={itemVariants}
            className='text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0'
          >
            I am a third-year Information Technology undergraduate at <span className="text-slate-200 font-medium">SLIIT</span>, eager to kickstart my career. I combine strong technical skills in modern web technologies with a keen eye for design to build impactful digital solutions.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-wrap gap-5 justify-center lg:justify-start pt-4'
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className='bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-lg shadow-blue-900/40 flex items-center gap-2'
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="/Nirmani_CV.pdf" // Ensure this matches your public folder file name
              download="Rashmini_CV.pdf"
              whileHover={{ scale: 1.05, borderColor: "#38bdf8", backgroundColor: "rgba(56, 189, 248, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className='bg-transparent border border-slate-600 text-slate-300 px-8 py-3.5 rounded-full font-medium text-lg transition-colors hover:text-sky-400 hover:border-sky-400 flex items-center gap-2'
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>


        {/* --- Right Column: Professional Image (Rounded) --- */}
        <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2 flex justify-center"
        >
            {/* Floating Container */}
            <motion.div
                animate={{ y: [-10, 10, -10] }} // Gentle Float
                transition={floatAnimation}
                className="relative z-10 w-full max-w-[350px] lg:max-w-[420px] aspect-square"
            >
                {/* Backlight Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-b from-sky-500/40 to-blue-600/40 rounded-full blur-[60px] -z-10"></div>
                
                {/* Main Image (Rounded & Styled) */}
        
                <div className="w-full h-full rounded-[40px] overflow-hidden border-2 border-sky-500/20 shadow-2xl shadow-sky-500/20 bg-slate-900/50 backdrop-blur-sm">
                   <img 
                       src={heroImage} 
                       alt="Rashmini Kavindya" 
                       className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                   />
                </div>
            </motion.div>
        </motion.div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500/60 animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>

    </section>
  );
};

export default Hero;