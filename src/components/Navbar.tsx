import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-[#2cd4bd] transition">Servizi</a>
            <a href="#contact" className="text-gray-300 hover:text-[#2cd4bd] transition">Contatti</a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition"
          >
            <span className="sr-only">Menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-[#2cd4bd] transition">Servizi</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-[#2cd4bd] transition">Contatti</a>
          </div>
        </div>
      )}
    </nav>
  );
}