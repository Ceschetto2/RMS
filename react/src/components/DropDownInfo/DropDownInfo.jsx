import { useState } from "react";
import "./DropDownInfo.css";

export function DropDownInfo({ question, answare }) {
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="question-container" onClick={handleClick}>
      <text className="testo-domanda">{question}</text>

      {clicked ? <></> : <div className="question-container expanded">
        {answare}
      
        
        </div>}
    </div>
  );
}
