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
              BP 76N/78K <br />
               PRAYAGRAJ, UTTAR PRADESH.
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
              9:00 am to 6:00 pm
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
            <IoIosCall /> +91 6386535005
          </p>
          <p className="ctc">
            <MdEmail /> contact@zikon.in
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
