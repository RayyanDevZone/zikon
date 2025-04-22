import React from "react";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";
import cardsbg from "../../images/cardsbg.png";

const reviews = [
  {
    title: "New visit by Buildtech",
    text: `"Working with Zikon was a game-changer. Their attention to detail and commitment to quality made all the difference in our project. We couldn’t be happier with the results!"`,
    name: "Vineet Shah",
    position: "Project Manager at BuildTech Solutions",
  },
  {
    title: "Recently published.",
    text: `"Zikon’s team was professional, efficient, and dedicated from start to finish. They handled every aspect of our project with precision and kept us informed every step of the way."`,
    name: "Sonia Mehta",
    position: "CEO of UrbanEdge Developments",
  },
  {
    title: "",
    text: `"I was thoroughly impressed with Zikon’s ability to deliver on time without compromising on quality. Their expertise across multiple sectors was clear, and the project outcome exceeded our expectations."`,
    name: "Raghav Bansal",
    position: "Operations Director at Innovate Infrastructure",
  },
  {
    title: "",
    text: `"Choosing Zikon was the best decision for our construction needs. They brought our vision to life with unmatched dedication and skill. I highly recommend their services."`,
    name: "Priya Verma",
    position: "Head of Facilities at Metro Builders",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ClientReviews = () => {
  return (
    <div
      className="min-h-screen w-full py-10 px-4 md:px-10 flex flex-col items-center gap-10 bg-center bg-cover"
      style={{ backgroundImage: `url(${cardsbg})` }}
    >
      <h1 className="text-3xl md:text-5xl font-semibold font-raleway text-center text-gray-800 drop-shadow">
        FROM OUR SATISFIED CLIENTS
      </h1>

      <div className="w-full max-w-7xl flex  flex-wrap gap-6 justify-center">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="rounded-xl w-full  flex flex-col justify-between sm:w-[45%] lg:w-[22%] p-4 shadow-lg backdrop-blur-lg bg-center bg-cover"
            style={{ backgroundImage: "url('/images/cardsbg.png')" }}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {review.title && (
              <p className="text-sm text-gray-500 mb-2">{review.title}</p>
            )}
            <p className="text-gray-800 font-medium mb-4">{review.text}</p>
            <div className="flex items-center h-24 gap-3 px-3 bg-gray-100 rounded-xl shadow">
              <div className="text-3xl w-12 text-gray-700">
                <IoMdPerson />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{`- ${review.name}`}</h4>
                <h5 className="text-xs text-gray-500">{review.position}</h5>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
