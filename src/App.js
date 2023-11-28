import "./App.css";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Button from "./Button/Button";
import AboutSection from "./AboutSection/AboutSection";
import AccomodationsSection from "./AccomodationsSection/AccomodationsSection";

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
        <Button width="150px" content="Learn More" />
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
    </div>
  );
}

export default App;
