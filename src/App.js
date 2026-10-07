import { useState } from "react";
import "./style.css"

export default function App() {
  const [reiter, setReiter] = useState("Home");
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div id="header">
        <img width="60" height="60" sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)" src="https://primary.jwwb.nl/public/w/j/m/temp-aebyjmzchiibayiqtnbu/image-high-ta35je.png?enable-io=true&enable=upscale&height=140&quality=70" alt="TeamJermann-Logo"></img>
        <h1>Team Jermann</h1>
        <div>
            <select
              className="Dropdown"
              value={reiter}
              onChange={(event) => {
                setReiter(event.target.value);
              }}
           >
              <option value="Home">Home</option>
              <option value="Team">Team</option>
              <option value="Saisonplan 2026/27">Saisonplan</option>
              <option value="Sponsoren">Sponsoren</option>
            </select>
         
            <button className="Button" onClick={() => setCounter(counter + 1)}>
             <div> {counter} Like</div>
            </button>
          </div>

      </div>

      <p id="DynamicText">
              {reiter}
            </p>
      
    </div>
  );
}
