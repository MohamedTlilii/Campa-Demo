import "./App.css";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Button from "./Button/Button";
function App() {
  return (
    <div>
      <NavBar />

      <Hero />
      <Button color="white" bgColor="#f36525" content="About Company" />
      <Button
        className="second-btn"
        color="white"
        bgColor="rgb(49, 49, 48)"
        content="Get a Quote "
      />
    </div>
  );
}

export default App;
