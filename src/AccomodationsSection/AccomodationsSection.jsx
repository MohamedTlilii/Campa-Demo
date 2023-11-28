import React from "react";
import "./Style.css";

function AccomodationsSection() {
  return (
    <div className="cont">
      <div className="tittleee">
        <h3 className="our">02 --- Our Accomodations</h3>
        <h4 className="titlle-our">Choose Accomodation</h4>
      </div>
      <div className="box-img">
        <img
          style={{ width: "400px", height: "250px" }}
          src="./assets/img/1.jpg"
          alt=""
        />
        <img
          style={{ width: "400px", height: "250px" }}
          src="./assets/img/2.jpg"
          alt=""
        />
        <img
          style={{ width: "400px", height: "250px" }}
          src="./assets/img/3.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AccomodationsSection;
