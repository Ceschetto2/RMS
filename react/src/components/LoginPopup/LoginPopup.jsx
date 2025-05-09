import { useEffect, useState } from "react";
import "./LoginPopup.css";
import axios from "axios";
import {setToken } from "../../Hooks/Token/tokenState";
import { useNavigate } from "react-router-dom";
/* 
Il componente LoginPopup rappresenta un popup per il login degli utenti.
- Accetta una prop:
  - handlePopupClick: una funzione per chiudere il popup, associata al pulsante "X" e al pulsante "Login".
- Contiene un modulo di login con campi per l'username e la password.
- Lo stile del componente è gestito tramite il file CSS "LoginPopup.css".
*/

export function LoginPopup({ handlePopupClick }) {
  const [user, setUser] = useState({username: "", passwd:""});
    //inizializzazione dell'hook useNavigate usato per indirizzare l'utente verso altre pagine dopo qualche azione
    let navigate = useNavigate(); 

  const setUserCredential = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  


  const [loginLabel, setLoginLabel] = useState("");
  const [authStatus, setAuthStatus] = useState(false);


  //Questo hook ha l'effetto di chiudere il popup di login quando l'autenticazione va a buon fine.
  useEffect(() => {
    if (authStatus) handlePopupClick();
  }, [authStatus]);

  return (
    <div className="popup-background">
      <div className="login-background">
        <div className="head-bar">
          <text className="dark-text">Login e Divertiti</text>
          <button onClick={handlePopupClick}> X </button>
        </div>
        <label className="dark-text">Username:</label>
        <input
          className="input-bar"
          name="username"
          value={user.username}
          onChange={setUserCredential}
        />
        <label className="dark-text">Password:</label>
        <input
          className="input-bar"
          name="passwd"
          value={user.passwd}
          onChange={setUserCredential}
        />
        <button
          className="login-button"
          onClick={() =>
            userAuthentication(user, setLoginLabel, setAuthStatus, navigate)
          }
        >
          Login
        </button>
        <label className="dark-text">{loginLabel}</label>;
      </div>
    </div>
  );
}

//La password deve essere inviata in chiaro, criptata tramite il protocollo https perchè la
//funzione di hashing è "one way", da un testo genera un unico hash che, in aggiunta al salt, con coincide
//con un nuovo hash della password originale, quindi il confronto diviene impossibile
async function userAuthentication(
  user,
  setLoginLabel,
  setAuthStatus,
  navigate
) {
  if ((!user.username || !user.passwd) === false) {
    try {
      setToken(
        await axios.post("http://localhost:8080/Authentication/login", {
          username: user.username,
          password: user.passwd
        })
      );
      setLoginLabel("Credenziali corrette, benvenuto campione");
      setAuthStatus(true);
      navigate("/dashboard");
   
    } catch (err) {
      console.log("Errore: " + err);
      setLoginLabel("Credenziali Errate");
    }
  }
}
