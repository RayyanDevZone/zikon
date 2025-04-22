import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, BadgeCheck, CheckCircle2 } from 'lucide-react'

const certifications = [
  {
    title: 'ISO 9001:2015 Certified',
    desc: 'For maintaining top-notch quality management systems in security services.',
    icon: <ShieldCheck className="text-cyan-400" size={32} />,
  },
  {
    title: "24/7 Surveillance Solutions",
    desc: "Providing round-the-clock surveillance and monitoring services to ensure the safety and security of your premises.",
    icon: <CheckCircle2 className="text-green-400" size={32} />,
  },
  {
    title: 'MSME Registered',
    desc: 'Verified by National Small Industries Corporation for operational excellence.',
    icon: <BadgeCheck className="text-yellow-400" size={32} />,
  },
  {
    title: 'L&T Registered Vendor',
    desc: 'Official vendor for Larsen & Toubro – trusted by industry giants.',
    icon: <Award className="text-orange-400" size={32} />,
  },
]

const Certification = () => {
  return (
    <div className="w-full bg-gradient-to-tl from-[#000814] via-[#001d3d] to-[#003566] text-white py-20 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 sm:mb-20">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-xs sm:text-sm tracking-widest text-blue-300"
        >
          // certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Globally Recognized, Locally Trusted
        </motion.h2>
      </div>

      {/* Timeline Style Certifications */}
      <div className="relative border-l-4 border-blue-600 pl-6 sm:pl-10 space-y-16 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative"
          >
            {/* Dot + Pulse */}
            <div className="absolute -left-[0.65rem] top-1 sm:-left-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 animate-ping absolute"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400 relative z-10"></div>
            </div>

            {/* Content Block */}
            <div className="flex items-start gap-4 flex-col sm:flex-row">
              <div className="flex-shrink-0">{cert.icon}</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mt-1">
                  {cert.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Certification
