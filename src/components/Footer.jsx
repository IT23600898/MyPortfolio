import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 text-center border-t border-slate-800 text-sm">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-sky-400">Rashmini Kavindya</span>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer