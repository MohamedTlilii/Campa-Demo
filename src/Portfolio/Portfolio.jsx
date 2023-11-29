import "./Style.css";

import React from "react";

function Portfolio() {
  return (
    <div className="contanair-portfolio">
      <h3 className="portfolio">01 --- Portfolio</h3>
      <h4 className="portfolio-titlle">Awesome Case Studies</h4>
      <div>
        <img src="/assets/img/Portfolio14.jpg" alt="" />
        <p>
          {" "}
          <span>Camping , Adventure ,</span>{" "}
        </p>
        <h4>Safari Camping</h4>
        <p>
          Camping as a recreational activity became popular among elites in the
          early 20th century With time, it grew in popularity among other
          socioeconomic classes Modern campers frequent publicly owned natural
          resources such as national and state parks, wilderness areas, and
          commercial.
        </p>
        <p>Time Duration: 6 Months Author: Marry</p>
        <img src="/assets/img/Portfolio15.jpg" alt="" />
        <img src="/assets/img/Portfolio16.jpg" alt="" />
      </div>
    </div>
  );
}

export default Portfolio;
