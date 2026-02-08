import { Scale as Scales, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LawyerSelection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-200px)] flex flex-col justify-center"
    >
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 text-center"
          >
            What type of legal assistance do you need?
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto text-center leading-relaxed"
          >
            Select the appropriate legal domain for your case so we can provide the most relevant guidance.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-modern overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-civil-500/10 to-civil-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Link to="/chat/civil" className="block h-full relative z-10">
                <div className="p-12 flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-civil-500/30 blur-2xl rounded-full group-hover:bg-civil-500/50 transition-all duration-300" />
                    <div className="relative bg-gradient-to-br from-civil-500 to-civil-700 text-white p-6 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <FileText size={48} />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-5 text-civil-700">Civil Law</h2>
                  <p className="text-gray-600 mb-8 text-center leading-relaxed text-lg">
                    For disputes between individuals or organizations, including contracts, property, family law, personal injury, and more.
                  </p>
                  <span className="px-8 py-4 bg-gradient-to-r from-civil-500 to-civil-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    Get Civil Legal Help
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-modern overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-criminal-500/10 to-criminal-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Link to="/chat/criminal" className="block h-full relative z-10">
                <div className="p-12 flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-criminal-500/30 blur-2xl rounded-full group-hover:bg-criminal-500/50 transition-all duration-300" />
                    <div className="relative bg-gradient-to-br from-criminal-500 to-criminal-700 text-white p-6 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <Scales size={48} />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-5 text-criminal-700">Criminal Law</h2>
                  <p className="text-gray-600 mb-8 text-center leading-relaxed text-lg">
                    For cases involving alleged violations of public law, including investigations, charges, pleas, trials, and sentencing.
                  </p>
                  <span className="px-8 py-4 bg-gradient-to-r from-criminal-500 to-criminal-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    Get Criminal Legal Help
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-base text-gray-500 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Note: This AI provides general legal information and not specific legal advice. Always consult with a licensed attorney for your specific case.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default LawyerSelection;