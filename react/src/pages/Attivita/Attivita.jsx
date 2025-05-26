import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./Attivita.css"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { eventsDataContext } from '../../Hooks/Events/EventProvider';

export function Attivita() {
    const {eventsData, setEventsData, isEventPopupOpen, setIsEventPopupOpen} = useContext(eventsDataContext);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/Events/allEvents',
                    {
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('token')}`,
                        }
                    }
                );
                console.log(response);
                
                
                setEventsData(response.data.map(event => ({
                    title: event.title,
                    date: event.start_date,
                    allDay: event.all_day,
                    id: event.event_id,
                    description: event.description,
                })));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();

    }, [])
    const dateClick = () => {
        setIsEventPopupOpen(true);
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
                select={(info) => {alert(`Hai selezionato: ${info.start}`)}}
                events={eventsData}
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
                dateClick={(info) => {
                    const calendarApi = info.view.calendar;
                    calendarApi.changeView('dayGridDay', info.dateStr);
                }}

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