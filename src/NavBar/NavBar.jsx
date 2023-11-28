import React from "react";
import "./Style.css";
import { GoChevronDown } from "react-icons/go";


function NavBar() {
  return (
    <div >
      <nav className="Containair">
        <img
          style={{ width: "180px", height: "70px" }}
          src="/assets/img/logoNav.png"
          alt="logo"
        />
        <ul>
          <li>
            Homepages <GoChevronDown  className="arow" />
          </li>
          <li>Blog <GoChevronDown className="arow" /></li>
          <li>Pages <GoChevronDown  className="arow" /></li>
          <li>Shop <GoChevronDown className="arow"/></li>
          <li>Contact Us</li>
        </ul>
        <button>Free Consultation</button>
      </nav>
    </div>
  );
}

export default NavBar;
