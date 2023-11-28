import React from "react";
import "./Style.css";
import { BiCircle } from "react-icons/bi";

function AboutSection() {
  return (
    <div className="Containair">
      <div >
        <img style={{ width: "350px" }} src="/assets/img/about.jpg" alt="" />
      </div>
      <div className="about-containt">
        <h3 className="About">01 --- About Us</h3>
        <h4 className="titlle">Find your next short break</h4>
        <div className="pragraph">
          <p>
            Camping is an outdoor activity involving overnight stays away from
            home with or without a shelter, such as a tent or a recreational
            vehicle Typically participants leave developed areas to spend time
            outdoors in more natural ones in pursuit of activities.
          </p>
          <p>
            Providing them enjoyment The night or more spent outdoors
            distinguishes camping.
          </p>
        </div>
      </div>
      <div className="Card">
        <span className="card-number">75</span>
        <span className="card-pro">%</span>
        <div className="camping-card">
          <BiCircle color="#f36525" fontSize="120px" />
          <h6 className="Camping">Camping</h6>
        </div>
        <p className="card-parag">
          Camping day-tripping, picnicking, and other similarly short-term
          recreational activities.
        </p>
        <div className="camping-btn">
          <a>Get a Quote </a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
