import React from "react";

export default function Home() {
  return (
    <section className="home" id="home">
      <video autoPlay loop muted playsInline className="back-video">
        <source src="img/video4.mp4" type="video/mp4" />
      </video>
      <div className="home-text">
        <h4>Hello</h4>
        <h1>
          I am Ameenabee <br /> <span>Sayyad</span>
        </h1>
        <h3>Front end Developer</h3>
        <a
          href="https://drive.google.com/file/d/1X6VOO8tp-HvaKk3-9f0b3g4OfKYE8VZK/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resumess
        </a>
      </div>
    </section>
  );
}
