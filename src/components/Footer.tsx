import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Envisage</h3>
            <p className="text-gray-400 max-w-md">
              Transforming how organizations connect with their audiences through innovative 
              mobile solutions and comprehensive communication services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Process</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>KMA Center, Upper Hill</li>
              <li>Mara Rd, Block E</li>
              <li>+254 788 144 252</li>
              <li>info@envisagemobile.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Envisage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;