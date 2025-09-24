import React from "react";
import NavBar from "../navigationBar";
import SetBackgroundImage from "../backgroundImage";
import ContrastTextbox from "../contrastTextbox";

function VolunteerPage(){
    return(
        <div>
            <NavBar></NavBar>
            <SetBackgroundImage path="./VolunteerImage.jpg"></SetBackgroundImage>

            <div className="frontpageContainer">
                <ContrastTextbox 
                headerText="Bli Frivillig i #TeamSeas"
                infoText="#TeamSeas trenger din hjelp for å kunne gjøre en forskjell. Vi har arrangementer over hele verden, og vi vil gjerne ha deg med på laget."
                buttonvariant2="orange"
                button2_text="Bli Frivillig her"
                button2_destination="https://youtube.com"
                
                ></ContrastTextbox>
            </div>
        </div>
    )
}

export default VolunteerPage;