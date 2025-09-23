import { useState } from "react";
import CustomButton from "./buttons";

function NavBar(){
    const [hamburgerStatus, setHamburgerOpen] = useState(false);

    function toggleHamburger(){
        setHamburgerOpen(prev => !prev) // Flip state
        console.log(hamburgerStatus)
    }

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
                        <li> <a href="https://youtube.com" className="normalNavLink">Arrangementer</a> </li>
                        <li> <a href="https://youtube.com" className="normalNavLink">Logg inn</a> </li>
                        <li> <button className="hamburger" onClick={toggleHamburger}> <img src="hamburber.svg"></img> </button></li>
                    </div>
                </ul>

                <div id="newLinks" style={{
                    display: hamburgerStatus ? 'inline' : 'none'
                }}>
                    <a href="/omoss" className="normalNavLink">Om Oss</a>
                    <a href="https://youtube.com" className="normalNavLink">Bli Frivillig</a>
                    <a href="https://youtube.com" className="normalNavLink">Donasjoner</a>
                    <a href="https://youtube.com" className="normalNavLink">Arrangementer</a>
                    <a href="https://youtube.com" className="normalNavLink">Logg inn</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;