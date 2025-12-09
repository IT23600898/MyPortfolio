import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast'; // 👇 1. Import Toast

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Toast එක Loading වෙන බව පෙන්වීම
    const loadingToast = toast.loading('Sending message...');

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          toast.dismiss(loadingToast); // Loading එක අයින් කිරීම
          
          // 👇 2. Success Toast
          toast.success("Message sent successfully!", {
            style: {
              borderRadius: '10px',
              background: '#1e293b', // Dark Blue background
              color: '#fff',
            },
          });
          
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.dismiss(loadingToast);
          
          // 👇 3. Error Toast
          toast.error("Failed to send. Please try again.", {
            style: {
              borderRadius: '10px',
              background: '#1e293b',
              color: '#ef4444', // Red text
            },
          });
          console.error("Email Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* 👇 4. Toast Container එක මෙතනට දැම්මා */}
      <Toaster position="top-center" reverseOrder={false} />

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
               <p className="text-slate-400 mb-4">I'm open for freelance projects or full-time opportunities.</p>
               
               <div className="flex gap-4">
                  {/* GitHub */}
                  <a href="https://github.com/IT23600898" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-all duration-300 transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/rashmini_kavindya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-all duration-300 transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>

                  {/* Instagram */}
                  <a href="https://instagram.com/_raxm1n1._" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-300 transform hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
               </div>
             </div>

             <div className="space-y-4">
               {/* Email Item */}
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider">Email Me</p>
                   <a href="mailto:your.email@example.com" className="text-white hover:text-sky-400 transition-colors">rashminik727@gmail.com</a>
                 </div>
               </div>

               {/* Location Item */}
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                   <p className="text-white">52/1 A, 1st Lane, Manthrimulla Road, Attidiya, Dehiwala.</p>
                 </div>
               </div>
             </div>

          </div>

          {/* Right: Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-slate-900/50 backdrop-blur-xl border border-blue-800/30 p-8 rounded-2xl shadow-xl space-y-6 animate-fade-in-up animation-delay-500">
            
            <div className="space-y-2">
                <label className="text-sm text-slate-400">Name</label>
                <input type="text" name="from_name" required placeholder="Your Name" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600" />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-slate-400">Email</label>
                <input type="email" name="from_email" required placeholder="Your Email" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600" />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-slate-400">Subject</label>
                <input type="text" name="subject" placeholder="Project Inquiry" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600" />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-slate-400">Message</label>
                <textarea name="message" rows="4" required placeholder="Your message here..." className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"></textarea>
            </div>

            <button type="submit" disabled={loading} className={`w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02] transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
               {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact