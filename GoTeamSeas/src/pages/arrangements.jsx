import React from "react";
import NavBar from "../navigationBar";
import Footerbar from "../footerbar";
import SetBackgroundImage from "../backgroundImage";
import ContrastTextbox from "../contrastTextbox";
import BasicTextComponent from "../basicTextComponent";
import CustomButton from "../buttons";

function ArrangementsPage(){
    return ( 
        <div>
            <NavBar></NavBar>
            <SetBackgroundImage path="./People.png" style={{width:"100%"}}></SetBackgroundImage>
            <div className="frontpageContainer arrangementsPage">
                <ContrastTextbox headerText="Lokale arrangementer" infoText="#TeamSeas Arrangementer i ditt nærområde"></ContrastTextbox>
                <div className="workpls" style={{
                    width:"90%",
                    margin: "0 auto"
                }}>
                    <div className="contrastImageBox">
                        <img src="./HamarStrand.png" width={"100%"} alt="Koigen, Hamar"></img>
                        <BasicTextComponent text="Om 3 dager (01/01/1970)" variant="header"></BasicTextComponent>
                        <BasicTextComponent text="Koigen, Hamar Kommune" variant="white"></BasicTextComponent>
                        <CustomButton buttonText="Logg Inn" linkDestination="/innlogging" variant="blue"></CustomButton>
                    </div>
                </div>
            </div>
            <Footerbar></Footerbar>
        </div>
    )
}

export default ArrangementsPage;