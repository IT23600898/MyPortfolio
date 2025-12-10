import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- Top Section: Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className='text-blue-400'>&lt;</span>
              RK
              <span className='text-blue-400'>/&gt;</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Passionate IT Undergraduate & Full Stack Developer from SLIIT. Dedicated to building seamless, user-centric digital experiences with modern technologies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-sky-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-sky-400 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect (Socials) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/IT23600898" },
                { icon: <FaLinkedin />, link: "https://linkedin.com/in/rashmini_kavindya" },
                { icon: <FaInstagram />, link: "https://instagram.com/_raxm1n1._" },
                { icon: <FaEnvelope />, link: "mailto:rashminik727@gmail.com" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#38bdf8" }} // Hover Effect
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-lg hover:border-sky-500/50 hover:bg-slate-800 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>

        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs md:text-sm">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-sky-400 font-medium">Rashmini Kavindya</span>. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  )
}

export default Footer;