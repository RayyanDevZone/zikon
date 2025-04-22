import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLightbulb />,
    title: "Indoor Lighting",
    desc: "High-quality indoor lighting solutions combining efficiency, safety, and elegant design—perfectly suited for homes and commercial spaces. Zikon ensures precision installation with lasting performance.",
    bg: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <FaSnowflake />,
    title: "Air Conditioning",
    desc: "Professional air conditioning services including installation and maintenance. Zikon ensures efficient cooling, reliability, and expert handling for all residential and commercial environments.",
        bg: "https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <FaRoad />,
    title: "Roadside Lighting",
    desc: "Durable, energy-efficient roadside lighting tailored for highways and infrastructure. Zikon delivers compliant, long-lasting solutions that enhance visibility and public safety.",
    bg: "https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-[#C1121F] flex flex-col items-center px-4 py-10">
      <p className="text-[#FDF0D5] font-semibold text-lg">// OUR SERVICES</p>
      <p className="text-[#FDF0D5] font-semibold text-4xl text-center mt-2">
        Outstanding Residential & <br /> Commercial Services
      </p>

      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative group bg-[#FDF0D5] p-6 rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-110"
          >
            {/* Background Image (Visible on Hover) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{ backgroundImage: `url(${service.bg})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="text-4xl text-[#C1121F]">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#000]">{service.title}</h3>
              <p className="text-sm font-medium text-gray-700">{service.desc}</p>
            </div>
          
          </div>
          
        ))}
      </div>
      <p className="text-[#FDF0D5] font-semibold text-lg w-auto mt-10">// AND MANY MORE</p>
    </div>
  );
};

export default Services;
