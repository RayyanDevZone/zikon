import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white py-20 px-6 md:px-20">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500" variants={fadeInUp}>
          About Zikon Security
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          At Zikon Security, we are dedicated to providing cutting-edge security solutions tailored for both public and private sectors. From surveillance systems to trained guard services and access control technologies — we safeguard what matters the most.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-10 text-left"
          variants={staggerContainer}
        >
          {[
            {
              title: 'Our Mission',
              content:
                'To deliver trustworthy, innovative, and scalable security services that ensure safety, peace of mind, and operational continuity for our clients.',
            },
            {
              title: 'Our Vision',
              content:
                'To become India’s most reliable and advanced security services provider, leveraging technology and professionalism.',
            },
            {
              title: 'Why Choose Us?',
              content:
                '✔️ Experienced security personnel\n✔️ Modern surveillance systems\n✔️ End-to-end safety solutions\n✔️ Trusted by government & enterprise clients',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#161B22] p-6 rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 whitespace-pre-line">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-sm text-gray-500 italic"
          variants={fadeInUp}
        >
          Registered Vendor of L&T | ISO Certified | PAN India Coverage
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Aboutus;
