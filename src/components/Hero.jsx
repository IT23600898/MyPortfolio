import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='bg-slate-950 text-white h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden'>
      
      {/* Background Abstract Glows with Animation */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-600/15 rounded-full blur-[150px] -z-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-700/15 rounded-full blur-[150px] -z-10 animate-blob animation-delay-4000"></div>

      <div className='text-center space-y-8 z-10 max-w-4xl opacity-0 animate-fade-in'> {/* Fade-in animation for content */}
        
        {/* Subtitle */}
        <p className='text-sky-400 font-semibold tracking-[0.2em] uppercase text-base md:text-lg animate-fade-in-up animation-delay-500'>
          Empowering Digital Visions
        </p>

        {/* Main Heading (Gradient Text with slightly larger size) */}
        <h1 className='text-6xl md:text-8xl lg:text-8xl font-extrabold tracking-tighter leading-none animate-fade-in-up animation-delay-1000'>
          I'm <br className="md:hidden"/>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600'>
            Rashmini Kavindya
          </span>
        </h1>

        {/* Description */}
        <p className='text-slate-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-1500'>
          Transforming ideas into <span className='text-white font-bold'>dynamic and responsive web applications</span> with cutting-edge technologies.
        </p>
        
        {/* Buttons */}
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center pt-6 animate-fade-in-up animation-delay-2000'>
          <button className='bg-gradient-to-r from-blue-700 to-sky-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-700/40 hover:shadow-sky-500/60'>
            Get in Touch
          </button>
          
          <button className='bg-transparent border border-blue-600 text-blue-300 px-10 py-4 rounded-full font-bold text-lg hover:border-sky-400 hover:text-sky-400 hover:bg-blue-900/30 transition-all duration-300'>
            My Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero