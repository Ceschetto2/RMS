

let JWTtoken = null
export function setToken(token)
{
    //localStorage.setItem("jwt", token.data);
    JWTtoken = token;
}
export function deleteToken()
{
    //localStorage.removeItem("jwt");
    JWTtoken = null;
}
export function getToken()
{
    //return localStorage.getItem("jwt");
    return JWTtoken;
}
