import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./Attivita.css"
import { useState } from 'react'

export function Attivita() {
    const [EventList, setEventList] = useState([
        { title: 'Allenamento', date: '2025-05-22' },
        { title: 'Lezione di danza', date: '2025-05-23' },
        { title: 'Gita fuori porta', start: '2025-05-25', end: '2025-05-27', allDay: true },
    ])

    const dateClick = () => {
        setEventList([
            ...EventList,
            { title: 'Nuova Attività', date: '2025-05-13' }
        ])
    }

    return (
        <div className="activity">
            <div>
                <h1 className="titolo">Attività</h1>
                <button onClick={dateClick}>Aggiungi Evento Test</button>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                }}
                height="auto"
                aspectRatio={1.8}
                initialDate={new Date()}
                selectable={true}
                select={(info) => alert(`Hai selezionato: ${info.startStr} - ${info.endStr}`)}
                events={EventList}
                eventClick={(info) => alert(`Hai cliccato su: ${info.event.title}`)}
                eventMouseEnter={(info => {
                    info.el.style.backgroundColor = 'lightblue'
                    info.el.style.cursor = 'pointer'
                }
                )}
                eventMouseLeave={(info => {
                    info.el.style.backgroundColor = ''
                }
                )}

                locale="it"
                buttonText={{
                    today: 'Oggi',
                    month: 'Mese',
                    week: 'Settimana',
                    day: 'Giorno',
                }}
            />
        </div>
    )
}