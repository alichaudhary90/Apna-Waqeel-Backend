// src/components/Footer.tsx

import { Scale, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

          {/* Logo & Tagline */}
          <div className="mb-6 md:mb-0 max-w-sm">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-2 rounded-xl">
                <Scale size={24} className="text-primary-900" />
              </div>
              <span className="text-2xl font-bold">ApnaWaqeel</span>
            </div>
            <p className="text-gray-300 text-base text-center md:text-left italic leading-relaxed">
              "Did you know you have rights? Constitution says you do!"
              <cite className="block mt-3 not-italic text-gray-400 font-semibold">~ Saul Goodman</cite>
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/select" className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail size={20} className="text-accent-400 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:aapnawaqeel@gmail.com"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    aapnawaqeel@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone size={20} className="text-accent-400 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+923479256190"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    +92 347 9256190
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone size={20} className="text-accent-400 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+923014146033"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    +92 301 4146033
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ApnaWaqeel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
