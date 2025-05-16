import "./LogoutConfirmation.css";

export function LogoutConfirmation({ onConfirm, onCancel }) {

    return (
        <div className="background-overlay">

            <div className="logout-popup">
                <h2 className="dark-text">Logout</h2>
                <p  className="dark-text">Sicur@ di voler effettuare il logout?</p>
                <div className="logout-popup-buttons">
                    <button className="confirm-button" onClick={onConfirm}>Si</button>
                    <button className="cancel-button" onClick={onCancel}>No</button>
                </div>
            </div>

        </div>
    );
} 