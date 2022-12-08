import './App.css';
import React, {useState} from "react"
import Info from "./Info.js";
import Fish from "./Fish.js";
import aquarium from "./aquarium.jpg"
import butterflyfish from "./img/tropical/butterflyfish.png";
import clownfish from "./img/tropical/clownfish.png";
import lionfish from "./img/tropical/lionfish.png";
import parrotfish from "./img/tropical/parrotfish.png";
import mandarinfish from "./img/tropical/mandarinfish.png";
import triggerfish from "./img/tropical/triggerfish.png";
import wrasse from "./img/tropical/wrasse.png";
import angelfish from "./img/tropical/angelfish.png";
import catshark from "./img/tropical/catshark.png";
import kudaseahorse from "./img/tropical/kudaseahorse.png";
import seaturtle from "./img/tropical/seaturtle.png";

let fishnum;

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  }

  function ShowFish(props) {
    return (<img src = {props.src} id = {props.id} className="fish" onClick = {toggleInfo} ></img>)
  }

  function FishInfo(props) {
    return (
    <div>
      <img src = {props.src} className = "fish"></img>
      <h1>{props.name}</h1>
      <p>{props.info}</p>
      </div>
    )
  }

  function clickClownfish(){
    fishnum = 0;
    toggleInfo()
    console.log(fishnum);
  }

  function clickLionfish(){
    fishnum = 1;
    toggleInfo()
    console.log(fishnum);
  }

  function clickParrotfish(){
    fishnum = 2;
    toggleInfo()
    console.log(fishnum);
  }
  // List of all fish
  const ListOfFish = [clownfish, lionfish, parrotfish, mandarinfish, triggerfish, wrasse, angelfish, catshark, kudaseahorse, seaturtle];

  // names of all fish in string
  const NamesOfFish = ["Clownfish", "Lionfish", "Parrotfish", "Mandarinfish", "Triggerfish", "Wrasse", "Angelfish", "Catshark", "Kudaseahorse", "Seaturtle", "butterflyfish"];

  // information of all fish
  const FishInformation = [
    "Sample Clownfish Info",
    "Sample Lionfish Info",
    "Sample Parrotfish Info"
    ]

  // The fish that display on the screen, can be randomised
  let DisplayFish = [clownfish, lionfish, parrotfish, mandarinfish, triggerfish, wrasse, angelfish, catshark, kudaseahorse, seaturtle, butterflyfish];

  return (
  <div style = {{backgroundImage: "url(/aquarium.jpg)", filter: "brightness(100%)"}} className="App">
    <Fish></Fish>
      {/* <ShowFish src={DisplayFish[0]} id = "clownfish"/> */}
      {/* <ShowFish src={DisplayFish[1]} id = "lionfish"/> */}
      <img src = {clownfish} id = "clownfish" onClick = {clickClownfish}/>
      <img src = {lionfish} id = "lionfish" onClick = {clickLionfish}/>
      <img src = {parrotfish} id = "parrotfish" onClick = {clickParrotfish}/>
      <img src = {mandarinfish} id = "mandarinfish" onClick = {toggleInfo}/>
      <img src = {triggerfish} id = "triggerfish" onClick = {toggleInfo}/>
      <img src = {wrasse} id = "wrasse" onClick = {toggleInfo}/>
      <img src = {angelfish} id = "angelfish" onClick = {toggleInfo}/>
      <img src = {catshark} id = "catshark" onClick = {toggleInfo}/>
      <img src = {kudaseahorse} id = "kudaseahorse" onClick = {toggleInfo}/>
      <img src = {seaturtle} id = "seaturtle" onClick = {toggleInfo}/>
      <img src = {butterflyfish} id = "butterflyfish" onClick = {toggleInfo}/>

      {isOpen && <Info
        handleClose={toggleInfo}
        content={<div className="info-text">
          <FishInfo 
          src = {DisplayFish[fishnum]} name = {NamesOfFish[fishnum]} info = {FishInformation[fishnum]}>
          </FishInfo>
          </div>}
      />}
    </div>
  );
}

export default App;

// <button className="fish" onClick={toggleInfo}>Test Fish</button>

// {/* <img src = {butterflyfish} id = "butterflyfish" onClick = {toggleInfo}/> */}
// <img src = {DisplayFish[0]} id = {DisplayFish[0].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[1]} id = {DisplayFish[1].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[2]} id = {DisplayFish[2].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[3]} id = {DisplayFish[3].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[4]} id = {DisplayFish[4].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[5]} id = {DisplayFish[5].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[6]} id = {DisplayFish[6].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[7]} id = {DisplayFish[7].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[8]} id = {DisplayFish[8].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[9]} id = {DisplayFish[9].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
//
// {/* Adding button to randomise fish */}
// <button onClick={
//   // Randomise function that takes in an array of fish, and outputs the fish in random order, pulling from ListOfFish
//   function RandomFish() {
//     for (let i = 0; i < DisplayFish.length; i++) {
//       let NewFish = ListOfFish[Math.floor(Math.random() * ListOfFish.length)];
//       // Changing the src
//       document.getElementById(DisplayFish[i]).src = NewFish;
//       // Changing the id
//       document.getElementById(DisplayFish[i]).id = NewFish.toString();
//       DisplayFish[i] = NewFish;
//     }
//   }
// }>Randomize</button>
