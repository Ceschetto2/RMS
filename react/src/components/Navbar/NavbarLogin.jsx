

export function NavbarLogin({handlePopupClick})
{
    return(
        <div className="navbar">
        <Link className="nav-link-image" to="/"> 
        <img className="nav-image"  src="https://iili.io/3fDhbyb.png" alt="home">

        </img>
        </Link>
  
     

      <button className="nav-button" onClick={handlePopupClick}>Login</button>
 
    </div>
    )
}