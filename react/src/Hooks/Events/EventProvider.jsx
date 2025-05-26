import { createContext, useState } from 'react';
export const eventsDataContext = createContext(null);
export function EventProvider({ children }) {

    const [eventsData, setEventsData] = useState([]);
    const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  return (
    <eventsDataContext.Provider value={{eventsData, setEventsData, isEventPopupOpen, setIsEventPopupOpen}}>
      {children}
    </eventsDataContext.Provider>
    
  );
}