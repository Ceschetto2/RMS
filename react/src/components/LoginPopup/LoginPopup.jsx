import { useState } from "react";
import bcrypt, { genSalt } from "bcryptjs";
import "./LoginPopup.css";
import axios from "axios";
/* 
Il componente LoginPopup rappresenta un popup per il login degli utenti.
- Accetta una prop:
  - handlePopupClick: una funzione per chiudere il popup, associata al pulsante "X" e al pulsante "Login".
- Contiene un modulo di login con campi per l'username e la password.
- Lo stile del componente è gestito tramite il file CSS "LoginPopup.css".
*/

export function LoginPopup({handlePopupClick }) {

  const [username, setUsername] = useState('');
  const [passwd, setPassword] = useState('');
  return (
    <div className="popup-background">
      <div className="login-background">
        <div className="head-bar">
          <text className="dark-text">Login e divertiti</text>
          <button onClick={handlePopupClick}> X </button>
        </div>
        <label className="dark-text">Username:</label>
        <input className="input-bar" name="username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label className="dark-text">Password:</label>
        <input className="input-bar" name="passwd" value={passwd} onChange={(e) => setPassword(e.target.value)}/>
        <button className="login-button" onClick={ () => userAuthentication(username, passwd)}> Login</button>
      </div>
    </div>
  );
}

async function userAuthentication(username, passwd){
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(passwd, salt);
  const response = await axios.post("http://localhost:8080/Authentication", { password: hash,  username:username} );

}

