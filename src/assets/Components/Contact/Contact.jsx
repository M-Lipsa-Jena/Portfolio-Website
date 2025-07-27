import React, { useEffect, useState } from "react";
import "./Contact.css";
import theme_pattern from "../../icons/theme_pattern.svg";
import gmail from "../../../assets/gmail.svg";
import linkedin from "../../../assets/linkedin.svg";
import github_color from "../../../assets/icons/github_color.svg";
import call_icon from "../../../assets/call_icon.svg";

const Contact = () => {
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    console.log("Hi i am contact");
  }, []);

  const phonePart1 = "986";
  const phonePart2 = "120";
  const phonePart3 = "9739";
  const phoneNumber = `${phonePart1}${phonePart2}${phonePart3}`;

  const handleShowNumber = () => {
    setShowNumber(true);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="caontact-section">
        <div className="contact-left">
          <h1>Let’s Build Something Great Together!</h1>
          <p>
            If you'd like to collaborate or just say hi, feel free to reach out.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              {/* <h5>{phoneNumber}</h5> */}
              <a href={`tel:${phoneNumber}`}>Phone</a>
              {/* {!showNumber ? (
                <button className="show-number-btn" onClick={handleShowNumber}>
                  Show Number
                </button>
              ) : (
                <h5>{phoneNumber}</h5>
              )} */}
            </div>
            <div className="contact-detail">
              <img src={gmail} alt="" />
              <a href="mailto:xyz@gmail.com">E-mail</a>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="" />
              <a
                href="https://www.linkedin.com/in/m-lipsa-jena-155264218/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-detail">
              <img src={github_color} alt="" />
              <a
                href="https://github.com/M-Lipsa-Jena"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-right"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
          />
          <label htmlFor="email">Your-Email </label>
          <input
            type="email"
            placeholder="Enter your E-mail"
            name="email"
            required
          />
          <label htmlFor="message">Drop Your Message Here</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Let me know how I can help you!"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
