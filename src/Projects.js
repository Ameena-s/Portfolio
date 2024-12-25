import React from "react";

export default function Projects() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2>My Projects</h2>
        <h4>Some Of My Distinguished Works</h4>
      </div>

      <div className="portfolio-content">
        <div className="row">
          <a
            href="https://github.com/Ameena-s/Dictionary-Web-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Project link</p>
          </a>
          <div className="main-row"></div>
          <h3>English Dictionary</h3>
        </div>

        <div className="row">
          <a
            href="https://github.com/Ameena-s/Weather-Web-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Project link</p>
          </a>
          <div className="main-row"></div>
          <h3>Weather Forecasting App</h3>
        </div>
      </div>
    </section>
  );
}
