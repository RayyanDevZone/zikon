import React from "react";
import "./ClientReviews.scss";

import { IoMdPerson } from "react-icons/io";

const ClientReviews = () => {
  return (
    <div className="CLientReview">
      <div className="cards-client">
        <div className="parent-card">
          <div className="card1">
            <div className="rating"><p>New visit by Buildtech</p></div>
            <div className="review">
              <p> 
                "Working with Zikon was a game-changer. Their attention to
                detail and commitment to quality made all the difference in our
                project. We couldn’t be happier with the results!"
              </p>
            </div>
            <div className="client-details">
              <div className="client-image">
              <IoMdPerson />
              </div>
              <div className="client-info">
                {" "}
                <h4>-Vineet Shah </h4>
                <h5>Project Manager at BuildTech Solutions </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="parent-card">
          <div className="card2">
            <div className="rating"><p>Recently published.</p></div>
            <div className="review">
              {" "}
              <p>
                "Zikon’s team was professional, efficient, and dedicated from
                start to finish. They handled every aspect of our project with
                precision and kept us informed every step of the way."
              </p>
            </div>
            <div className="client-details">
              <div className="client-image">
              <IoMdPerson />
              </div>
              <div className="client-info">
                {" "}
                <h4>-Sonia Mehta </h4>
                <h5>CEO of UrbanEdge Developments </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="parent-card">
          <div className="card3">
            <div className="rating"></div>
            <div className="review">
              <p>
                "I was thoroughly impressed with Zikon’s ability to deliver on
                time without compromising on quality. Their expertise across
                multiple sectors was clear, and the project outcome exceeded our
                expectations."
              </p>
            </div>
            <div className="client-details">
              <div className="client-image">
              <IoMdPerson />
              </div>
              <div className="client-info">
                {" "}
                <h4>-Raghav Bansal </h4>
                <h5> Operations Director at Innovate Infrastructure </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="parent-card">
          <div className="card4">
            <div className="rating"></div>
            <div className="review">
              {" "}
              <p>
                "Choosing Zikon was the best decision for our construction
                needs. They brought our vision to life with unmatched dedication
                and skill. I highly recommend their services."
              </p>
            </div>
            <div className="client-details">
              <div className="client-image">
              <IoMdPerson />
              </div>
              <div className="client-info">
                <h4>-Priya Verma</h4>
                <h5> Head of Facilities at Metro Builders </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading-client">
        <h1>FROM OUR SATISFIED CLIENTS</h1>
      </div>
      <div className="excess-client"></div>
    </div>
  );
};

export default ClientReviews;
