import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <div className="bg-[#fdf0d5] w-full py-16 px-4 md:px-12 lg:px-32">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-[#003049] mb-12"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-2xl rounded-xl p-6 md:p-10"
        >
          <div className="mb-6">
            <label className="block text-[#003049] font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#003049]"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#003049] font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#003049]"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#003049] font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#003049]"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#003049] text-white px-6 py-3 rounded-lg hover:bg-[#003049cc] transition-all font-semibold"
          >
            Send Message
          </button>
        </motion.form>

        {/* Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-[#003049] text-white p-6 rounded-xl shadow-lg space-y-4">
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl" />
              <span>+91 6386535005</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl" />
              <span>contact@zikon.in</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl" />
              <span>BP 76N/78K PRAYAGRAJ</span>
            </div>
          </div>

          {/* Optional: Embedded Google Map */}
          <iframe
            className="rounded-xl shadow-xl w-full h-64"
            title="location"
            src="https://maps.google.com/maps?q=Lucknow%20Industrial%20Area&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
          ></iframe>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 border-t pt-6 text-center text-sm text-[#003049]">
        © {new Date().getFullYear()} Zikon Security. All rights reserved.
      </div>
    </div>
  );
};

export default Contactus;
