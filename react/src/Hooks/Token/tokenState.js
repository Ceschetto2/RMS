
let token = null;

export function getToken()
{
    return token;
}

export function setToken(tokenn)
{
    token = tokenn.data;
}
export function deleteToken()
{
    token = null;
}