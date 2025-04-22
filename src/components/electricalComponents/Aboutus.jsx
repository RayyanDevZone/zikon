import React from "react";
import { FaBolt } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";
import { FaAward, FaStar } from "react-icons/fa6";

const Aboutus = () => {
  const cards = [
    {
      icon: <FaBolt className="text-4xl text-[#C1121F]" />,
      heading: "Electrical Installation",
      sub: "Expert installations with precision and safety."
    },
    {
      icon: <FaStar className="text-4xl text-[#C1121F]" />,
      heading: "Best Service",
      sub: "Unmatched reliability and quick turnaround."
    },
    {
      icon: <FaAward className="text-4xl text-[#C1121F]" />,
      heading: "100% Guarantee",
      sub: "We stand behind every project we complete."
    },
    {
      icon: <LuTrophy className="text-4xl text-[#C1121F]" />,
      heading: "Award Winning",
      sub: "Recognized for excellence and innovation."
    }
  ];

  return (
    <div className="w-full bg-[#003049] py-12 px-4 sm:px-8 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FDF0D5] mb-12">
        OUR EXCELLENCE!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FDF0D5] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-bold text-[#003049] mb-1">{card.heading}</h3>
            <p className="text-sm text-[#780000]">{card.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
