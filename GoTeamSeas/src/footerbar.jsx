import React from "react";

function Footerbar(){
    return(
        <footer style={{
            backgroundColor: "#a8dfe2"
        }}>
            <div id="outerFooterbarContainer">
                <div className="footerBox1"> 
                    <img src="./TeamSeasLogo_Big.png"></img>
                    <p className="footerText">#TeamSeas arbeider for en framtid uten plast i havene eller på strendene våre. 
                    Med over 15,000,000 kg søppel fjernet så langt, så kan vi gjøre en varende forskjell.</p>
                </div>
                <div className="footerBox2">
                    <p className="blueTitle">Sider</p>
                    <div className="listDiv">
                        <ul>
                            <li> <a href="/omoss">Om Oss</a> </li>
                            <li> <a href="/frivillig">Bli Frivillig</a> </li>
                            <li> <a href="/donasjon">Donasjoner</a> </li>
                            <li> <a href="/arrangementer">Arrangementer</a> </li>
                            <li> <a href="https://youtube.com">Logg inn</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="footerBox3">
                    <p className="blueTitle">Kontakt Oss</p>

                    <div className="listDiv">
                        <ul id="socialsList">
                            <li className="twitter"> <a href="https://x.com/teamseas">Twitter</a> </li>
                            <li className="tiktok"> <a href="https://www.tiktok.com/@teamseas">TikTok</a> </li>
                            <li className="reddit"> <a href="https://www.reddit.com/r/TeamSeas/">Reddit</a> </li>
                            <li className="youtube"> <a href="https://www.youtube.com/c/teamseas">YouTube</a> </li>
                            <li className="facebook"> <a href="https://www.facebook.com/TeamSeas/">FaceBook</a> </li>
                            <li className="instagram"> <a href="https://www.instagram.com/teamseas/">Instagram</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footerbar;