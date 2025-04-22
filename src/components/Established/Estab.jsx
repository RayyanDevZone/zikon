import React from 'react';
import hunet from '../../images/hunet.jpeg';
import lt from '../../images/LT.png';
import { motion } from 'framer-motion';

const Estab = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Grey Section */}
      <div className="bg-gray-600 text-white flex items-center justify-center h-[40vh] md:h-[50vh] px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-lg md:text-xl font-semibold">Year<br />Established</h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white">2024</h1>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-lg md:text-xl font-semibold">Completed<br />Projects</h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white">50+</h1>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-lg md:text-xl font-semibold">Skilled<br />Team</h1>
            <h1 className="text-2xl md:text-4xl font-bold text-white">500+</h1>
          </motion.div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white text-black flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-evenly gap-10">
          <motion.div
            className="flex items-center justify-center w-[70%] md:w-1/4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={hunet} alt="hunet" className="object-cover w-full h-full max-h-40" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center w-[70%] md:w-1/4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={lt} alt="L&T" className="object-contain h-32" />
          </motion.div>
          <motion.div
            className="flex items-center justify-center w-[70%] md:w-1/4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/hi/7/7b/Indian_Railways_logo.png"
              alt="Indian Railway"
              className="h-32 w-32 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Estab;
