import React from "react";
import CustomButton from "./buttons";

function NavBar(){
    return(
        <nav>
            <div>
                <ul>
                    <li className="showOnPC"> <a href="/"><img src="./public/teamSeasLogo_Big.png" height={100}></img> </a></li>
                    <li className="showOnMobile"> <a href="/"><img src="./public/TeamSeasLogo_Round.png" height={50}></img> </a></li>

                    <div id="links" style={{marginLeft: "auto"}}>
                        <li> <a href="/omoss" className="normalNavLink">Om Oss</a> </li>
                        <li> <a href="https://youtube.com" className="normalNavLink">Bli Frivillig</a> </li>
                        <li> <a href="https://youtube.com" className="normalNavLink">Donasjoner</a> </li>
                        <li className="hideOnMobile"> <a href="https://youtube.com" className="normalNavLink">Arrangementer</a> </li>
                        <li className="hideOnMobile"> <a href="https://youtube.com" className="normalNavLink">Logg inn</a> </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;