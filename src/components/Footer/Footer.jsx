import React from "react";
import "./Footer.scss";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <h3>Address</h3>
        <p> 380/2 <br/>GTB NAGAR KARELI<br/> PRYAGRAJ, UTTAR PRADESH.</p>
      </div>
      <div className="office-hours">
        <h3>office hours</h3>
        <p>Monday to Friday<br/>
9:00 am to 5:00 pm<br/>
Weekends by appointment</p>
      </div>
      <div className="contact">
        <h3>Stay connected</h3>
        <p><IoIosCall /> +91 9161642136</p> 
        <p><MdEmail /> zrassociates318@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
