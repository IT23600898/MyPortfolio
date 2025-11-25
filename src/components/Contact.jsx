import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Background Abstract Glows */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Heading */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-sm md:text-base text-sky-400 font-semibold tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Me</span>
          </h3>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info Box */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-800/30 p-8 rounded-2xl shadow-xl space-y-8 animate-fade-in-up">
             
             <div>
               <h4 className="text-xl font-bold text-white mb-2">Let's Talk</h4>
               <p className="text-slate-400">I'm open for freelance projects or full-time opportunities.</p>
             </div>

             <div className="space-y-4">
               {/* Email Item */}
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider">Email Me</p>
                   <a href="mailto:your.email@example.com" className="text-white hover:text-sky-400 transition-colors">your.email@example.com</a>
                 </div>
               </div>

               {/* Location Item */}
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                   <p className="text-white">Colombo, Sri Lanka</p>
                 </div>
               </div>
             </div>

          </div>

          {/* Right: Contact Form */}
          <form className="bg-slate-900/50 backdrop-blur-xl border border-blue-800/30 p-8 rounded-2xl shadow-xl space-y-6 animate-fade-in-up animation-delay-500">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400">Message</label>
              <textarea rows="4" placeholder="Your message here..." className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02] transition-all duration-300">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact