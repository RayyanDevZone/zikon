import React from "react";
import "./Footer.scss";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer">
      <div className="glass-footer">
        <div className="address">
          <div>
            <h3>Address</h3>
            <p>
              {" "}
              380/2 <br />
              GTB NAGAR KARELI
              <br /> PRYAGRAJ, UTTAR PRADESH.
            </p>
          </div>
          <div className="icon">
            {" "}
            <FaMapLocation />
          </div>
        </div>
        <div className="office-hours">
          <div>
            {" "}
            <h3>office hours</h3>
            <p>
              Monday to Friday
              <br />
              9:00 am to 5:00 pm
              <br />
              Weekends by appointment
            </p>
          </div>
          <div className="icon">
          <MdOutlineAccessTime />
          </div>
        </div>
        <div className="contact">
         <div> <h3>Stay connected</h3>
          <p className="ctc">
            <IoIosCall /> +91 9161642136
          </p>
          <p className="ctc">
            <MdEmail /> zrassociates318@gmail.com
          </p></div>
          <div className="icon">
          <RiContactsLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
