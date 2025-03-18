import "./LoginPopup.css";

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
