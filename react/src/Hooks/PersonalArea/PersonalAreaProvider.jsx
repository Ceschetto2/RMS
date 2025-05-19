
import { createContext, useState } from "react";


export const PersonalAreaContext = createContext();
/**
 * Il componente PersonalAreaContext fornisce un contesto per gestire lo stato dell'area personale.
 * Utilizza il Context API di React per condividere lo stato tra i componenti figli.
 **/
export default function PersonalAreaProvider({ children }) {
  const [isPersonalAreaOpen, setIsPersonalAreaOpen] = useState(false);

  return (
    <PersonalAreaContext.Provider
      value={{
        isPersonalAreaOpen,
        setIsPersonalAreaOpen
      }}
    >
      {children}
    </PersonalAreaContext.Provider>
  );

}
