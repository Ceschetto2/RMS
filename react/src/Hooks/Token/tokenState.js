
//Variabile per salvare il JWT token di autenticazione in locale usando una variabile react. Non sopravvive alla ricarica della pagina, ma è la implementazione più sicura
let JWTtoken = null
//Una alternativa sarebbe usare lo storage del brosware. Sia i cookie che il localStorage sopravvivono alla ricarica della pagina.

//Funzione per settare il valore del token dall'estenrno del modulo
export function setToken(token)
{
    //localStorage.setItem("jwt", token.data); 
    JWTtoken = token;
}

//Funzione per cancellare il valore del token dall'esterno del modulo
export function deleteToken()
{
    //localStorage.removeItem("jwt");
    JWTtoken = null;
}


//funzione per prendere il valore del token dall'esterno
export function getToken()
{
    //return localStorage.getItem("jwt");
    return JWTtoken;
}
