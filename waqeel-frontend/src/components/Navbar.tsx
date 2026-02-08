// src/components/Navbar.tsx

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scale, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    // Close mobile menu when the route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="glass-effect sticky top-0 z-10 shadow-lg border-b border-white/20">
      <div className="container-custom py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl shadow-lg">
              <Scale size={28} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">ApnaWaqeel</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${location.pathname === "/"
                  ? "bg-primary-100 text-primary-700 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                }`}
            >
              Home
            </Link>

            <Link
              to="/select"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${location.pathname === "/select"
                  ? "bg-primary-100 text-primary-700 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                }`}
            >
              Get Started
            </Link>

            <Link
              to="/about-us"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${location.pathname === "/about-us"
                  ? "bg-primary-100 text-primary-700 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                }`}
            >
              About Us
            </Link>

            <Link
              to="/terms"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${location.pathname === "/terms"
                  ? "bg-primary-100 text-primary-700 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                }`}
            >
              Terms of Service
            </Link>

            <Link
              to="/contact-us"
              className={`ml-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 shadow-md transform hover:-translate-y-0.5 ${location.pathname === "/contact-us"
                  ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                  : "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 hover:shadow-lg"
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-base font-medium ${location.pathname === "/" ? "text-primary-500" : "text-gray-600"
                  }`}
              >
                Home
              </Link>

              <Link
                to="/select"
                className={`text-base font-medium ${location.pathname === "/select" ? "text-primary-500" : "text-gray-600"
                  }`}
              >
                Get Started
              </Link>

              <Link
                to="/about-us"
                className={`text-base font-medium ${location.pathname === "/about-us" ? "text-primary-500" : "text-gray-600"
                  }`}
              >
                About Us
              </Link>

              <Link
                to="/terms"
                className={`text-base font-medium ${location.pathname === "/terms" ? "text-primary-500" : "text-gray-600"
                  }`}
              >
                Terms of Service
              </Link>

              <Link
                to="/contact-us"
                className={`text-base font-medium ${location.pathname === "/contact-us" ? "text-primary-500" : "text-gray-600"
                  }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
