
import { createContext, useState } from "react";


export const personalAreaContext = createContext();
/**
 * Il componente PersonalAreaContext fornisce un contesto per gestire lo stato dell'area personale.
 * Utilizza il Context API di React per condividere lo stato tra i componenti figli.
 **/
export default function PersonalAreaContext({ children }) {
  const [personalAreaState, setPersonalAreaState] = useState(false);

  return (
    <personalAreaContext.Provider
      value={{
        personalAreaState,
        setPersonalAreaState,
      }}
    >
      {children}
    </personalAreaContext.Provider>
  );

}
