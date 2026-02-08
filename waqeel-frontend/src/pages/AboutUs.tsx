// src/pages/AboutUs.tsx

import React from "react";
import { motion } from "framer-motion";
import creator1 from "../assets/creator1.jpeg";
import creator2 from "../assets/creator2.jpg";

const AboutUs: React.FC = () => {
  return (
    <motion.div
      className="min-h-[calc(100vh-200px)] py-16 container-custom"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-primary-600 text-center mb-12">
        About ApnaWaqeel
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
        <img
          src={creator1}
          alt="Founder 1"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
        <img
          src={creator2}
          alt="Founder 2"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
      </div>

      <div className="prose prose-lg mx-auto text-gray-700">
        <p>
          Meet the visionaries behind <strong>ApnaWaqeel</strong>.
          From an early age, they aspired to pursue a career in law and earn an LLB. However,
          guided by their parents, they chose to study BSCS instead. Today, they are successfully
          combining both ambitions—integrating legal knowledge with cutting-edge
          artificial intelligence to create innovative legal solutions.
        </p>

        <blockquote>
          <p>“Better call Saul!”</p>
          <footer>
            — Saul Goodman, <cite>Better Call Saul</cite>
          </footer>
        </blockquote>

        <blockquote>
          <p>“I’m the guy who’s gonna win this one for you.”</p>
          <footer>
            — Saul Goodman, <cite>Better Call Saul</cite>
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
};

export default AboutUs;
