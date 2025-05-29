import "./EventPopup.css";
import { act, useContext, useEffect, useState } from 'react';


import { eventsDataContext } from '../../Hooks/Events/EventProvider';
export function EventPopup({ startStr, endStr }) {

    const { eventsData, setEventsData, setIsEventPopupOpen } = useContext(eventsDataContext);
    const actualDate = new Date().toISOString().split('T')
    const today = actualDate[0]
    const timeNow = actualDate[1].split('Z')[0]

    const [dateStr, setDateStr] = useState({ startDate: startStr ? startStr : today, startTime: timeNow, endDate: endStr ? endStr : today, endTime: timeNow })

    const setDate = (e) => (
        setDateStr({
            ...dateStr,
            [e.target.name]: e.target.value
        })
    )

    const [event, setEvent] = useState({
        allDay: false,
        location: "",
        eventType: "Gara",
        start: new Date(),
        end: new Date(),
        boatType: "",
        costalType: "",
        description: ""
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




    useEffect(() => {
        if (event.boatType !== "Costal") {
            setEvent({
                ...event,
                costalType: ""
            })
        }
    }, [event.boatType])

    useEffect(() => {
        setEvent({
            ...event,

            start: new Date(dateStr.startDate + "T" + dateStr.startTime),
            end: new Date(dateStr.endDate + "T" + dateStr.endTime)
        })

    }, [dateStr])

    useEffect(() => {
        setDateStr({
            ...dateStr,
            endDate: event.allDay ? "" : today
        })



    }, [event.allDay])

    const showEvent = () => {
        setEventsData([

            ...eventsData,
            event
        ])
    }

    const eventTypes = ["Gara", "Allenamento"]
    const boatTypes = ["", "Gozzo Nazionale", "Jole Lariana", "Bilancella", "Costal", "Veneta", "Bisse", "Galeone", "VIP750"]
    const costalTypes = ["", "C1X", "C2X", "C2X+", "C4X", "C4X+", "C8X+"]
    return (
        <div className="popup-background">
            <div className='popup-container'>
                <div className='top-bar' >
                    <label className='dark-text' > Inserisci Nuovi Eventi </label>
                    <button onClick={() => setIsEventPopupOpen(false)}> chiudi </button>
                </div>
                <label className="dark-text"> Titolo Evento:
                    <input type="text" name="title" placeholder="allenamento/gara" onChange={setEventDataText} />
                </label>

                <div className="data-container">


                    <label className="dark-text"> Tutto il giorno

                        <input type="checkbox" className="checkbox" name="allDay" checked={event.allDay} onChange={setEventDataBool} />
                    </label>

                    <div className="time-date-container">

                        <label className="dark-text"> Inizio:
                            <input name="startDate" type="date" defaultValue={dateStr.startDate} onChange={setDate} />
                            <input name="startTime" type="time" value={dateStr.startTime} onChange={setDate} />
                        </label>


                        <label className="dark-text"> Fine:
                            {<input name="endDate" type="date" value={dateStr.endDate} disabled={event.allDay} onChange={setDate} />}
                            <input name="endTime" type="time" value={dateStr.endTime} onChange={setDate} />
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
                <label className="dark-text"> Descrizione Evento:
                    <textarea
                        name="description"
                        id="note"
                        rows="4"
                        cols="50"
                        value={event.description}
                        onChange={setEventDataText}
                    />
                </label>
                <button onClick={showEvent} />
            </div>

        </div>
    );
}