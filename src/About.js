import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/IMG20240901175405.jpg" alt="Profile" />
      </div>

      <div className="about-text">
        <h2>About Me</h2>
        <h4>Hi, My name is Ameenabee !!</h4>
        <p>
          I am a Front End Developer at Parexel. I have a keen Interest in
          Problem Solving and Finding new and Dynamic Ideas.
        </p>
        <br />
        <p>I can provide clean code and pixel-perfect design.</p>
        <div className="about-gri">
          <div className="about-in">
            <h5>1. Collaboration</h5>
          </div>

          <div className="about-in">
            <h5>2. Problem solving</h5>
          </div>

          <div className="about-in">
            <h5>3. Time Management</h5>
          </div>

          <div className="about-in">
            <h5>4. Adaptability</h5>
          </div>
        </div>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}
