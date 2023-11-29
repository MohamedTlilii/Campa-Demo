import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Button from "./Button/Button";
import AboutSection from "./AboutSection/AboutSection";
import AccomodationsSection from "./AccomodationsSection/AccomodationsSection";
import Cards from "./Card/Cards";
import ServicesSection from "./Servicesection/ServicesSection";
import Portfolio from "./Portfolio/Portfolio"

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Button color="white" bgColor="#f36525" content="About Company" />
      </div>
      <div className="second-btn">
        <Button
          color="white"
          bgColor="rgb(49, 49, 48)"
          content="Get a Quote "
        />
      </div>
      <AboutSection />
      <div className="about-btn">
        <Button
          width="150px"
          content="Learn More"
          bgColor=" #f36525"
          color="white"
        />
      </div>
      <AccomodationsSection />
      <div className="Accomodation-btn">
        <Button
          content="Small Tent-Max 2 People"
          width="300px"
          color="black"
          bgColor="white"
        />
        <Button
          content="Medium Pitch-Pet Allowed"
          width="300px"
          color="black"
          bgColor="white"
        />
        <Button
          content="Big Carvan For Your Fmily"
          width="300px"
          color="black"
          bgColor="white"
        />
      </div>
      <div>
        <ServicesSection />
      </div>
      <div className="cards">
        <Cards
          icon={"./assets/img/camping.png"}
          text={"Camping"}
          title={"Team Camping"}
          width={"18rem"}
          height={"50%"}
          plus={"+"}
        />
        <Cards
          icon={"./assets/img/hiking.png"}
          text={"Hiking"}
          title={" Individual Camping"}
          width={"18rem"}
          height={"850px"}
          plus={"+"}
        />
        <Cards
          icon={"./assets/img/bus.png"}
          text={"Travel"}
          title={" Waterfront Activities"}
          width={"18rem"}
          height={"850px"}
          plus={"+"}
        />
        <Cards
          icon={"./assets/img/house.png"}
          text={"Music"}
          title={" Special Treaps"}
          width={"18rem"}
          height={"850px"}
          plus={"+"}
        />
      </div>
      <div>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
