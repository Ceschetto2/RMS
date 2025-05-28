import "./LogoutConfirmation.css";

export function LogoutConfirmation({ onConfirm, onCancel }) {

    return (
        <div className="background-overlay">

            <div className="logout-popup">
                <h2 className="dark-text">Logout</h2>
                <p  className="dark-text" style={color=bakc}>Sei Sicur@ di voler effettuare il logout?</p>
                <div className="logout-popup-buttons">
                    <button
  className="confirm-button"
  style={{
    backgroundColor: "rgb(94, 134, 95)", // verde pastello
    border: "2px solid rgb(66, 88, 66)", // bordo verde più scuro
    color: "#ffffff", // bianco più scuro
    fontWeight: "bold" // testo in grassetto
  }}
  onClick={onConfirm}
>
  Si
</button>
<button
  className="cancel-button"
  style={{
    backgroundColor: "rgb(174, 97, 97)", // rosso pastello
    border: "2px solid rgb(101, 63, 63)", // bordo rosso più scuro
    color: "#ffffff", // bianco più scuro
    fontWeight: "bold" // testo in grassetto
  }}
  onClick={onCancel}
>
  No
</button>
                </div>
            </div>

        </div>
    );
}