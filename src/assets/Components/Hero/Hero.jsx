import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="./src/assets/Images/Lipsa.jpeg" alt="Lipsa Image" />

      <h1>
        Hi, I'm <span>M. Lipsa Jena</span>
      </h1>
      <h2>A Passionate Frontend Developer</h2>
      <p>
        Let’s build something great together! I craft responsive, user-friendly
        web experiences using modern tools like React, HTML, CSS, and
        JavaScript.
      </p>

      <div className="hero-action">
        <a href="#contact" className="hero-connect">
          Connect with Me
        </a>
        <a href="/M. Lipsa Jena.pdf" target="_blank" className="hero-resume">
          View Resume
        </a>
      </div>
    </div>
  );
};
export default Hero;
