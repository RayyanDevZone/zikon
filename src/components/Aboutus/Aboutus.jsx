import React from "react";
import "./Aboutus.scss";

const Aboutus = () => {
  return (
    <div className="about">
      <div className="left-about">
        <div className="top-left-about">
          <h1>Your Trusted Partner for High-Quality, Reliable Tenders Across Civil, Mechanical, and Electrical Sectors</h1>
        </div>
        <div className="bottom-left-about">
          <p>At Zikon, we pride ourselves on delivering precision and excellence in every project. With expertise spanning civil, mechanical, and electrical sectors, we bridge the gap between vision and execution. Our dedicated team ensures each tender is met with the highest standards, making Zikon the preferred choice for clients who value reliability, transparency, and a commitment to quality.</p>
        </div>
      </div>
      <div className="right-about">
        <img src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about"></img>
      </div>
    </div>
  ); 
};

export default Aboutus;
