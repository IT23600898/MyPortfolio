import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-lg text-white px-8 md:px-16 lg:px-24 px-4 py-4 flex justify-between items-center fixed w-full top-0 z-50 border-b border-blue-900/50 shadow-xl shadow-blue-900/20">
      <div className="text-2xl font-bold tracking-wide">
        <span className='text-blue-400'>&lt;</span>
        RK
        <span className='text-blue-400'>/&gt;</span>
      </div>
      
      <div className='space-x-8 hidden md:flex items-center text-slate-300 font-medium'>
        <a href="#home" className="hover:text-blue-300 hover:shadow-[0_2px_0_0_#60a5fa] pb-1 transition-all duration-300">Home</a>
        <a href="#about" className="hover:text-blue-300 hover:shadow-[0_2px_0_0_#60a5fa] pb-1 transition-all duration-300">About Me</a>
        <a href="#projects" className="hover:text-blue-300 hover:shadow-[0_2px_0_0_#60a5fa] pb-1 transition-all duration-300">Projects</a>
        <a href="#contact" className="hover:text-blue-300 hover:shadow-[0_2px_0_0_#60a5fa] pb-1 transition-all duration-300">Contact</a>
        
        <button className='bg-gradient-to-r from-blue-700 to-sky-500 text-white px-6 py-2 rounded-full transform transition-all duration-300 shadow-lg shadow-blue-700/50 hover:shadow-sky-500/60'>
          Connect Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar