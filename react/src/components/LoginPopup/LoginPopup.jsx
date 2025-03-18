import "./LoginPopup.css";

export function LoginPopup({handlePopupClick}) {
    return (<div className="popup-background"> 

        <div className="login-background">
            <div className="head-bar">
                <text className="dark-text">Login e divertiti</text>
                <button onClick={handlePopupClick}> X </button>
             
            
            </div>    
        </div>
    </div> 
    );


  
}
