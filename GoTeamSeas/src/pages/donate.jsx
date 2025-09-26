import React from "react";
import NavBar from "../navigationBar";
import SetBackgroundImage from "../backgroundImage";
import ContrastTextbox from "../contrastTextbox";
import BasicTextComponent from "../basicTextComponent";
import Footerbar from "../footerbar";

function DonationPage(){
    return (
        <div>
            <NavBar></NavBar>
            <SetBackgroundImage path="./TheOceanCleanup.png"></SetBackgroundImage>

            <div className="frontpageContainer">
                <ContrastTextbox 
                headerText="Støtt arbeidet vårt"
                infoText="Hjelp oss med å lage en renere verden."
                button1_destination="https://teamseas.org/"
                button1_text="Doner her"
                buttonvariant1="orange"
                ></ContrastTextbox>
            </div>

            <section className="infoSection volunteerInfoSection">
                <BasicTextComponent variant="blue" text="Hvor går støtten din?"></BasicTextComponent>
                <BasicTextComponent text="Din støtte lar oss jobbe sammen for å rydde opp havet og strender verden rundt fra plast."></BasicTextComponent>
                <BasicTextComponent text="50% av støtten din vil gå til The Ocean Cleanup for å fjerne søppel fra havet, og resten vil gå til oss slik at vi kan fjerne søppel fra strender verden rundt."></BasicTextComponent>
                <BasicTextComponent text="All støtten din vil bare gå direkte til å hjelpe jorden vår, og vil aldri bli brukt til noe annet."></BasicTextComponent>
                
                <BasicTextComponent variant="blue" text="Jeg kan ikke donere."></BasicTextComponent>
                <BasicTextComponent text="Hvis du ikke kan støtte finansielt, kan du fortsatt støtte #TeamSeas ved å spre ordet om organisasjonen."></BasicTextComponent>
                <BasicTextComponent text="Jo flere folk som kjenner til hva #TeamSeas gjør, jo bedre."></BasicTextComponent>
            </section>

            <Footerbar></Footerbar>
        </div>
    )
}


export default DonationPage;