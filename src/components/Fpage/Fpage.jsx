import React from "react";
import "./Fpage.scss";
import fpbg from "../../images/fpbg.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
const Fpage = () => {
  return (
    <div className="Fpage">
      <div className="upper-fpage">
        <p>DELIVERING SUPERIOR STANDARDS IN EVERY PROJECT.</p>
      </div>
      <div className="lower-fpage">
        <div className="left-lower">
            <div className="upper-left">
                <p>//ESTD. 2024</p>
            </div>
            <div className="lower-left">
                <p>EVERY AGE HAS ITS WONDERS.BUT OURS IS THE AGE OF ARCHITECTURE</p>
            </div>
        </div>
        <div className="middle-lower">
          <img src={fpbg} alt=""></img>
          <div className="butn">
              <a
                href="https://wa.me/919161642136"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button><FaLocationArrow /></button>
              </a>
            </div>
        </div>
        <div className="right-lower">
        <p>WE CREATE PLACES THAT DESERVE TO BE STARED AT.</p>
        <div className="btn-right"><p>SCROLL DOWN</p><IoArrowForwardCircleOutline /></div>
        </div>
      </div>
    </div>
  );
};

export default Fpage;
