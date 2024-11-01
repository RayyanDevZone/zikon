import React from "react";
import "./Clients.scss";
const Clients = () => {
  return (
    <div className="clients">
      <div className="top-clients">
        <h1>From Our Satisfied Clients</h1>
      </div>
      <div className="bottom-clients">
        <div className="card-review">
          <p>
            "Working with Zikon was a game-changer. Their attention to detail
            and commitment to quality made all the difference in our project. We
            couldn’t be happier with the results!"
          </p>
          <div>
            {" "}
            <h3 className="customer">— Amit Shah </h3>
            <h3 className="customer">
              — Project Manager at BuildTech Solutions{" "}
            </h3>
          </div>
        </div>
        <div className="card-review">
          <p>
            "Zikon’s team was professional, efficient, and dedicated from start
            to finish. They handled every aspect of our project with precision
            and kept us informed every step of the way."
          </p>
          <div>
            {" "}
            <h3 className="customer">— Sonia Mehta </h3>
            <h3 className="customer">— CEO of UrbanEdge Developments </h3>
          </div>
        </div>
        <div className="card-review">
          <p>
            "I was thoroughly impressed with Zikon’s ability to deliver on time
            without compromising on quality. Their expertise across multiple
            sectors was clear, and the project outcome exceeded our
            expectations."
          </p>
          <div>
            <h3 className="customer">— Rajiv Bansal </h3>
            <h3 className="customer">
              — Operations Director at Innovate Infrastructure{" "}
            </h3>
          </div>
        </div>
        <div className="card-review">
          <p>
            "Choosing Zikon was the best decision for our construction needs.
            They brought our vision to life with unmatched dedication and skill.
            I highly recommend their services."
          </p>
          <div>
            <h3 className="customer">— Priya Verma </h3>
            <h3 className="customer">
              — Head of Facilities at Metro Builders{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
   