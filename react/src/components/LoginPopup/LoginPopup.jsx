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
  const [username, setUsername] = useState("");
  const [passwd, setPassword] = useState("");
  const [loginLabel, setLoginLabel] = useState("");
  const [authStatus, setAuthStatus] = useState(false);
  let navigate = useNavigate();
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="dark-text">Password:</label>
        <input
          className="input-bar"
          name="passwd"
          value={passwd}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="login-button"
          onClick={() =>
            userAuthentication(username, passwd, setLoginLabel, setAuthStatus, navigate)
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
//funzione di hashing è "one way", da un testo genera un unico hash che, con il salt con coincide
//con un nuovo hash della password originale, quindi il confronto diviene impossibile
async function userAuthentication(
  username,
  passwd,
  setLoginLabel,
  setAuthStatus,
  navigate
) {

  if ((!username || !passwd) === false) {
    try {
      setToken(
        await axios.post("http://localhost:8080/Authentication/login", {
          password: passwd,
          username: username,
        })
      );
      setLoginLabel("Credenziali corrette, benvenuto campione");
      setAuthStatus(true);
      navigate("/dashboard")
   
    } catch (err) {
      console.log("Errore: " + err);
      setLoginLabel("Credenziali Errate");
    }
  }
}
