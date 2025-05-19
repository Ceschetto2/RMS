import { useContext } from "react";
import { PersonalAreaContext } from "../../Hooks/PersonalArea/PersonalAreaProvider";
import "./PersonalArea.css";

export function PersonalArea() {
    const { setIsPersonalAreaOpen } = useContext(PersonalAreaContext);

    return (
        <div className="overlay">
            <div className="personal-area">
                <h1>Area Personale</h1>
                <button onClick={() => setIsPersonalAreaOpen(false)}>Chiudi</button>
                {/* Qui puoi aggiungere il contenuto dell'area personale */}
            </div>
        </div>
    )


}