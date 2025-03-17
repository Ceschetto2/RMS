import { useState } from "react";
import "./DropDownInfo.css";

export function DropDownInfo({ props }) {
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="question-container" onClick={handleClick}>
      <text className="testo-domanda">{props.text}</text>

      {clicked ? <></> : <div className="question-container expanded">
        
        
        <ul>
            <li>
                se nel mondo esistesse un po di bene
            </li>
            <li>
                e ciascun considerasse ...
            </li>

        </ul>
        se nel
        
        
        </div>}
    </div>
  );
}
