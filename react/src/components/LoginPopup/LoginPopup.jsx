import "./LoginPopup.css";

/* 
Il componente LoginPopup rappresenta un popup per il login degli utenti.
- Accetta una prop:
  - handlePopupClick: una funzione per chiudere il popup, associata al pulsante "X" e al pulsante "Login".
- Contiene un modulo di login con campi per l'username e la password.
- Lo stile del componente è gestito tramite il file CSS "LoginPopup.css".
*/

export function LoginPopup({ handlePopupClick }) {
  return (
    <div className="popup-background">
      <div className="login-background">
        <div className="head-bar">
          <text className="dark-text">Login e divertiti</text>
          <button onClick={handlePopupClick}> X </button>
        </div>
        <label className="dark-text">Username:</label>
        <input className="input-bar" name="username" />
        <label className="dark-text">Password:</label>
        <input className="input-bar" name="passwd" />
        <button className="login-button" onClick={handlePopupClick}> Login</button>
      </div>
    </div>
  );
}
