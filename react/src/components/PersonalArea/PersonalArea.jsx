import { useContext } from "react";
import PersonalAreaContext, { personalAreaContext } from "../../Hooks/PersonalArea/PersonalAreaContext";
import "./PersonalArea.css";

export function PersonalArea() {
    const { personalAreaState, setPersonalAreaState } = useContext(personalAreaContext);

    return (
        <div className="overlay">
            <div className="personal-area">
                <h1>Area Personale</h1>
                <button onClick={() => setPersonalAreaState(false)}>Chiudi</button>
                {/* Qui puoi aggiungere il contenuto dell'area personale */}
            </div>
        </div>
    )


}