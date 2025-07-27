import React from "react";
import "./Footer.css";
import user_icon from "../../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img />
          <p>
            Thanks for scrolling this far! I hope you enjoyed exploring my work.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user-icon" />
            <input type="email" placeholder="Enter Your email for updates" />
          </div>
          <div className="Footer-Rate">Send Feedback</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 M. Lipsa Jena – All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
