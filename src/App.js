import './App.css';
import React, {useState} from "react"
import Info from "./Info.js";
import Fish from "./Fish.js";
import aquarium from "./aquarium.jpg"
import butterflyfish from "./img/tropical/butterflyfish.png";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  }

  return (
  <div style = {{backgroundImage: "url(/aquarium.jpg)"}} className="App">
      <img src = {butterflyfish} id = "fish1" onClick={toggleInfo}/>
      <button className="fish" onClick={toggleInfo}>Test Fish</button>
      {isOpen && <Info
        handleClose={toggleInfo}
        content={<div className="info-text">
          <img className="info-image" src={aquarium} alt ="fish" width="200" height="200"></img>
          <h2>Fish 1</h2>
          <h2>Fish 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus nibh ante, vel elementum nibh gravida sed. Praesent dictum sed eros vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur vulputate urna, at dignissim nisi consectetur in. Phasellus sed ipsum ante. Sed in facilisis tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sodales metus massa, nec pellentesque metus rutrum quis. In vestibulum suscipit ante eu ornare. Vivamus eu tortor ultrices, gravida lacus a, scelerisque leo. Praesent auctor lacinia dui, in bibendum dui egestas nec. Nulla a egestas magna.</p>
          </div>}
      />}
    </div>
  );
}

export default App;
