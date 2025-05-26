
import { useContext } from 'react';
import { eventsDataContext } from '../../Hooks/Events/EventProvider';
export function EventPopup() {
    const { setIsEventPopupOpen } = useContext(eventsDataContext);
    return (
       <div className = "popup-background">
        <button onClick={()=>setIsEventPopupOpen(false)} className="close-popup-button">X</button>


       </div>
    );
}