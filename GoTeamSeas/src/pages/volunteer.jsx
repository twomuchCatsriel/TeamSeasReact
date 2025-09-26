import React from "react";
import NavBar from "../navigationBar";
import SetBackgroundImage from "../backgroundImage";
import ContrastTextbox from "../contrastTextbox";
import Footerbar from "../footerbar";
import BasicTextComponent from "../basicTextComponent";

function VolunteerPage(){
    return(
        <div>
            <NavBar></NavBar>
            <SetBackgroundImage path="./VolunteerImage.jpg"></SetBackgroundImage>

            <div className="frontpageContainer infoVolunteer">
                <ContrastTextbox 
                headerText="Bli Frivillig i #TeamSeas"
                infoText="#TeamSeas trenger din hjelp for å kunne gjøre en forskjell. Vi har arrangementer over hele verden, og vi vil gjerne ha deg med på laget."
                buttonvariant2="orange"
                button2_text="Meld deg på!"
                button2_destination="https://youtube.com"
                
                ></ContrastTextbox>
            </div>

            <section className="infoSection volunteerInfoSection">
                <BasicTextComponent variant="blue" text="Hvordan blir jeg frivillig?"/>
                <BasicTextComponent text="For å bli en frivillig, så må du sende inn et innmeldingsskjema. Vi vil ta kontakt med deg så fort vi kan."/> {/* I can not decide if I should make only a register account page, or if I should make a form like RødeKors does. Might change in the future*/}
                <BasicTextComponent text="Når vi tar kontakt, så vil vi dobbeltsjekke med deg at alt i innmeldingsskjemaet er riktig."></BasicTextComponent>
                <BasicTextComponent text="Hvis alt er riktig, så registerer vi deg som frivillig."></BasicTextComponent>
                <BasicTextComponent variant="blue" text="Hva gjør en frivillig?"/>
                <BasicTextComponent text="Våre frivillige jobbed med å rydde opp strender rundt om hele Norge. Som en frivillig, så vil du rydde strender i ditt nærområde."></BasicTextComponent>
                <BasicTextComponent variant="blue" text="Hvorfor bli frivillig?"></BasicTextComponent>
                <BasicTextComponent text="Ved å bli frivillig, så har du muligheten til å rydde miljøet og nærområdet ditt fra plast med andre mennesker."></BasicTextComponent>
                <BasicTextComponent text="Vi fremmer et sammarbeid som gjør det enkelt å holde strendene våre rene og fine."></BasicTextComponent>
            </section>

            <Footerbar></Footerbar>
        </div>
    )
}

export default VolunteerPage;