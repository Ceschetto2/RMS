import "./DropDownInfo.css"

export function DropDownInfo({props})
{
 
    return(
        <div className="question-container">
        <text className="testo-domanda" >{props.text}</text>
        </div>

    );

}