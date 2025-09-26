import React from "react";
import NavBar from "../navigationBar";
import Footerbar from "../footerbar";
import SetBackgroundImage from "../backgroundImage";
import ContrastTextbox from "../contrastTextbox";

function ArrangementsPage(){
    return ( 
        <div>
            <NavBar></NavBar>
            <SetBackgroundImage path="./People.png"></SetBackgroundImage>
            <div className="frontpageContainer infoVolunteer">
                <ContrastTextbox headerText="Lokale arrangementer" infoText="#TeamSeas Arrangementer i ditt nærområde"></ContrastTextbox>
            </div>
            <Footerbar></Footerbar>
        </div>
    )
}

export default ArrangementsPage;