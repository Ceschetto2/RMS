import "./EventPopup.css";
import { useContext, useEffect, useState } from 'react';


import { eventsDataContext } from '../../Hooks/Events/EventProvider';
export function EventPopup({ startStr, endStr }) {

    console.log(startStr + endStr)
    const { eventsData, setEventsData, setIsEventPopupOpen } = useContext(eventsDataContext);

    const today = new Date().toISOString().split('T')[0]
    const [dateStr, setDateStr] = useState({ startDate: startStr ? startStr : today, startTime: "", endDate: endStr ? endStr : today, endTime: "" })
    const setDate = (e) => (
        setDateStr({
            ...dateStr,
            [e.target.name]: e.target.value
        })
    )

    const [event, setEvent] = useState({
        isAllDay: false,
        location: "",
        eventType: "Gara",
        startDate: null,
        endDate: null,
        boatType: "",
        costalType: "",
    })
    const setEventDataText = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })
    }
    const setEventDataBool = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.checked
        })
    }


    const showEvent = () => {
        console.log(event)
    }

    useEffect(() => {
        if (event.boatType !== "Costal"){
            setEvent({
                ...event,
                costalType : ""
            })}
    }, [event.boatType])

    /* Nota su type="date":

    Il valore sarà sempre una stringa nel formato YYYY-MM-DD.

    Anche se onChange funziona, non otterrai un oggetto Date — se ti serve, devi convertirlo manualmente:*/

    const eventTypes = ["Gara", "Allenamento"]
    const boatTypes = ["Gozzo Nazionale", "Jole Lariana", "Bilancella", "Costal", "Veneta", "Bisse", "Galeone", "VIP750"]
    const costalTypes = ["C1X", "C2X", "C2X+", "C4X", "C4X+", "C8X+"]
    return (
        <div className="popup-background">
            <div className='popup-container'>
                <div className='top-bar' >
                    <label className='dark-text' > Inserisci Nuovi Eventi </label>
                    <button onClick={() => setIsEventPopupOpen(false)}> chiudi </button>
                </div>
                <h2 className="dark-text"> Seleziona Date </h2>

                <div className="data-container">


                    <label className="dark-text"> Tutto il giorno

                        <input type="checkbox" className="checkbox" name="isAllDay" checked={event.isAllDay} onChange={setEventDataBool} />
                    </label>

                    <div className="time-date-container">

                        <label className="dark-text"> Inizio:
                            <input name="startDate" type="date" defaultValue={dateStr.startDate} onChange={setDate} />
                            <input name="startTime" type="time" onChange={setDate} />
                        </label>


                        <label className="dark-text"> Fine:
                            {<input name="endDate" type="date" disabled={event.isAllDay} defaultValue={dateStr.endDate} onChange={setDate} />}
                            <input name="endTime" type="time" onChange={setDate} />
                        </label>


                    </div>

                </div>

                <label className="dark-text">Luogo:
                    <input type="text" name="location" placeholder="Inserisci il luogo" onChange={setEventDataText} />
                </label>

                <div className="event-type-container">
                    <label className="dark-text">Tipo Evento:
                        <div className="event-type-select">
                            {eventTypes.map(opt => (
                                <label key={opt} className="dark-text">
                                    <input
                                        type="radio"
                                        name="eventType"
                                        value={opt}
                                        checked={event.eventType === opt}
                                        onChange={setEventDataText}
                                    />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    </label>
                    <label className="dark-text">
                        Specialità:
                        <select name="boatType" value={event.boatType} onChange={setEventDataText}>
                            {boatTypes.map((boat) => (
                                <option value={boat}>{boat}</option>
                            ))}
                        </select>
                        {event.boatType === "Costal" ?
                            <select name="costalType" value={event.costalType} onChange={setEventDataText}>
                                {costalTypes.map((cType) => (
                                    <option value={cType}>{cType}</option>
                                ))}
                            </select>

                            : null}

                    </label>


                </div>
                <button onClick={showEvent} />
            </div>

        </div>
    );
}