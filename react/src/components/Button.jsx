import  { useState } from 'react';


export function Button({label})
{
    const [text, setText] = useState(label);



    return(
        <button 
        className="bottone_Normale" 
        type="button" 
        onClick={()=> setText(text === "brava scimmia" ? "ciao" : "brava scimmia")}>
        {text}
        </button>
    );


}
