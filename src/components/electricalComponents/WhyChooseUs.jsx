import React from "react";
import {
  FaShieldAlt,
  FaUserCheck,
  FaCogs,
  FaMapMarkedAlt,
  FaBolt,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    title: "Trusted & Registered",
    desc: "Zikon Enterprises is a registered vendor for L&T and other government bodies, ensuring credibility and compliance.",
    icon: <FaShieldAlt />, // Shield icon
    step: "Point 01",
    highlight: true,
  },
  {
    title: "Skilled Workforce",
    desc: "Our team consists of highly skilled and trained professionals for civil, electrical, and security projects.",
    icon: <FaUserCheck />,
    step: "Point 02",
  },
  {
    title: "Turnkey Project Delivery",
    desc: "We offer end-to-end project execution from planning to installation, ensuring hassle-free service.",
    icon: <FaCogs />,
    step: "Point 03",
  },
  {
    title: "Pan India Reach",
    desc: "We operate across multiple states in India, backed by logistics and trained local teams.",
    icon: <FaMapMarkedAlt />,
    step: "Point 04",
  },
  {
    title: "Rapid Response",
    desc: "We ensure swift action for emergency installations or technical issues, reducing downtime.",
    icon: <FaBolt />,
    step: "Point 05",
  },
  {
    title: "Advanced Tools & Tech",
    desc: "Our equipment is up-to-date with the latest technologies for efficient and safe execution.",
    icon: <FaTools />,
    step: "Point 06",
  },
  {
    title: "Client-Centric Approach",
    desc: "We believe in long-term partnerships, always prioritizing client satisfaction and transparency.",
    icon: <FaHandshake />,
    step: "Point 07",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#161616] py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Why Choose Zikon Enterprises
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#1B1B1E] px-6 pt-14 pb-8 rounded-lg text-center group hover:shadow-xl transition-all duration-300"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto absolute -top-8
    bg-[#2E2E2E] text-white transition-colors duration-200 hover:bg-[#C1121F] cursor-pointer`}
            >
              {item.icon}
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2E2E2E] px-4 py-1 rounded font-semibold text-white text-sm shadow-md">
              {item.step}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
