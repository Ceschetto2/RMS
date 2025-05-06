import { getToken } from "../../Hooks/Token/tokenState";

export function Dashboard(){
return(

    <div>
    {(getToken())?<h1>ciao</h1>  : <h1>cazzo</h1>}
    </div>
)
}