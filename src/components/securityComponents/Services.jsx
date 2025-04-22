import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const servicesList = [
  {
    title: 'Surveillance Systems',
    desc: 'Installation and maintenance of advanced CCTV systems including night-vision, motion detection, and remote monitoring.',
    icon: '📷',
  },
  {
    title: 'Access Control',
    desc: 'Smart biometric and RFID-based access systems for entry/exit control and visitor management.',
    icon: '🔐',
  },
  {
    title: 'Guard Services (coming soon)',
    desc: 'Trained, verified, and professional security guards for residential, industrial, and commercial zones.',
    icon: '🛡️',
  },
  {
    title: 'Alarm & Intrusion Detection',
    desc: 'Custom alarm systems integrated with motion sensors, intrusion alerts, and emergency response setups.',
    icon: '🚨',
  },
  {
    title: '24/7 Monitoring',
    desc: 'Our central control room provides round-the-clock real-time monitoring with instant threat response.',
    icon: '⏱️',
  },
  {
    title: 'Corporate Security Audits',
    desc: 'Full assessment of your existing security system to identify loopholes and recommend upgrades.',
    icon: '📋',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white py-20 px-6 md:px-20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-12"
          variants={fadeIn}
        >
          Our Security Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#161B22] p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border border-[#1f2937]"
              custom={index + 1}
              variants={fadeIn}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
