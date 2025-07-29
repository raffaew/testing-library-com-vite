import "./App.scss";
import { useState } from "react";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [disabled, setDisabled] = useState(false);

  const nextColorClass = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const color = disabled ? "gray" : buttonColor;
  
  const buttonText = kebabCaseToTitleCase(nextColorClass);

  return (
    <div>
     <button disabled={disabled} className={color} onClick={() => setButtonColor(nextColorClass)}>Change to {buttonText}</button>

     <br />
     <input type="checkbox" onChange={(e) => setDisabled(e.target.checked)} id="disable-button-checkbox" checked={disabled}/>
     <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
