// src/pages/GetStarted.tsx

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-200px)] flex flex-col justify-center"
    >
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Hero Section with Gradient Background */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="absolute inset-0 bg-gradient-to-r from-primary-100/50 via-blue-100/50 to-primary-100/50 blur-3xl -z-10"
            />

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-8"
            >
              Your Apna Legal Assistant!
            </motion.h1>

            {/* Quote Block with Modern Design */}
            <motion.blockquote
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative p-8 mb-10 glass-effect rounded-2xl max-w-3xl mx-auto"
            >
              <div className="absolute top-0 left-8 -mt-4 text-6xl text-primary-300 font-serif">"</div>
              <p className="text-2xl font-medium text-gray-800 relative z-10">
                I believe that until proven guilty every man, woman, and child in this country is innocent.
              </p>
              <footer className="mt-6 text-right">
                <span className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  — Saul Goodman
                </span>
              </footer>
            </motion.blockquote>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Link to="/select" className="inline-flex items-center group">
                <span className="btn-primary flex items-center text-lg">
                  Get Started
                  <ArrowRight
                    size={24}
                    className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Feature Cards with Enhanced Design */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="card-modern p-10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-700">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Get insights based on thousands of similar legal cases and precedents.
              </p>
            </div>

            <div className="card-modern p-10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-700">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Access legal help anytime, anywhere without scheduling appointments.
              </p>
            </div>

            <div className="card-modern p-10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-700">Clear Explanations</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Complex legal concepts explained in simple, understandable language.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetStarted;
