import { useEffect } from "react";
import { createContext, useState } from "react";


export const authContext = createContext(null);

export function AuthStatus({children}){
    const [authStatus, setAuthStatus] = useState(false);
    const [loginPopupState, setLoginPopupState] = useState(false)
    const [logoutPopupState, setLogoutPopupState] = useState(false)





    //Funzione per gestire il click sul bottone di login
    function handleLoginPopupButtonClick(){
      setLoginPopupState(!loginPopupState)
    }
    //Funzione per gestire il click sul bottone di logout
    function handleLogoutPopupButtonClick(){
      setLogoutPopupState(!logoutPopupState)
    }
    return(
        <authContext.Provider value = {{authStatus,  setAuthStatus, loginPopupState, handleLoginPopupButtonClick, logoutPopupState, handleLogoutPopupButtonClick}}>
            {children}
        </authContext.Provider>
    )
}



//Variabile per salvare il JWT token di autenticazione in locale usando una variabile react. Non sopravvive alla ricarica della pagina, ma è la implementazione più sicura
//let JWTtoken = null
//Una alternativa sarebbe usare lo storage del brosware. Sia i cookie che il localStorage sopravvivono alla ricarica della pagina.

//Funzione per settare il valore del token dall'estenrno del modulo
export function setToken(token)
{
    localStorage.setItem("jwt", token.data); 
}

//Funzione per cancellare il valore del token dall'esterno del modulo
export function deleteToken()
{
    localStorage.removeItem("jwt");
}


//funzione per prendere il valore del token dall'esterno
export function getToken()
{
    return localStorage.getItem("jwt");
}
