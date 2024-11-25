import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-indigo-600">
            Envisage
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#process" className="text-gray-700 hover:text-indigo-600 transition-colors">Process</a>
              <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Process</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;