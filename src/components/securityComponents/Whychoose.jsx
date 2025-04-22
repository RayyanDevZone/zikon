import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Clock, Activity } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={36} className="text-orange-500" />,
    title: 'Trusted Protection',
    desc: 'We deliver reliable security with cutting-edge technology and trained professionals.',
  },
  {
    icon: <UserCheck size={36} className="text-orange-500" />,
    title: 'Verified Personnel',
    desc: 'Each guard is thoroughly verified and professionally trained for various threat scenarios.',
  },
  {
    icon: <Clock size={36} className="text-orange-500" />,
    title: '24/7 Readiness',
    desc: 'We operate round-the-clock so you stay protected — always and everywhere.',
  },
  {
    icon: <Activity size={36} className="text-orange-500" />,
    title: 'Real-Time Response',
    desc: 'Our control room responds instantly to alarms and intrusions for rapid mitigation.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Whychoose = () => {
  return (
    <div className="w-full bg-[#0D1117] text-white py-20 px-6 md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest font-semibold">// why choose us</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Uncompromised Security, Every Step</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            With over a decade of experience, Zikon Security brings safety, innovation, and integrity under one roof.
          </p>
        </motion.div>

        {/* Staggered Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-start gap-6 bg-[#161B22] p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-[#1f2937]"
            >
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Whychoose;
