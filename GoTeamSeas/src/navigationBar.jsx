import React from "react";

function NavBar(){
    return(
        <nav>
            <div>
                <ul>
                    <li id="showOnPC"> <img src="./public/teamSeasLogo_Big.png" height={100}></img></li>
                    <li id="showOnMobile"> <img src="./public/TeamSeasLogo_Round.png" height={50}></img></li>

                    <div id="links" style={{marginLeft: "auto"}}>
                        <li> <a href="https://youtube.com">Om Oss</a> </li>
                        <li> <a href="https://youtube.com">Bli Frivillig</a> </li>
                        <li> <a href="https://youtube.com">Donasjoner</a> </li>
                        <li> <a href="https://youtube.com" className="hideOnMobile">Arrangementer</a> </li>
                        <li> <a href="https://youtube.com" className="hideOnMobile">Logg inn</a> </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;