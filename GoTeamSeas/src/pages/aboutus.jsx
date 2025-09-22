import React from "react";
import NavBar from "../navigationBar";
import SetBackgroundImage from "../backgroundImage";
import ContrastTextbox from "../contrastTextbox";
import ImageAndText from "../ImageAndTextSidebySide";
import Footerbar from "../footerbar";

function AboutUs(){
    return (
        <div>
            <NavBar></NavBar>
            <SetBackgroundImage path={"./AboutusBackground.jpg"}></SetBackgroundImage>
            <div className="frontpageContainer">
                <ContrastTextbox headerText="Om #TeamSeas"></ContrastTextbox>
            </div>

            <section className="infoSection"> 
                <ImageAndText variant="imageLeft" imagePath="./theguys.png" headerText="En Innsats for Verden"
                paragraphText="#TeamSeas er en global frivilligorganisasjon som fokuserer på havkonservasjon. Organisasjonen ble startet i Oktober 2021 av Jimmy Donaldson og Mark Rober, med målet å fjerne søppel fra havet."
                paragraphText2="Med over 14.000.000 kg fjernet så langt, så gjør #TeamSeas en viktig jobb for å konservere verdens hav og sjøer, slik at ingen kommer til å leve i en fremtid hvor det er mer plastikk en fisk i havet."
                ></ImageAndText>

                <ImageAndText variant="imageRight" imagePath="./boahowoah.jpg" headerText="Hvorfor #TeamSeas?"
                paragraphText="I dag så er søppelforurensning et stort problem over hele verden. Dette påvirker våre hav og sjøer, og påvirker også derfor tusenvis av dyrearter som lever i disse områdene. I dag, så ser vi tusenvis av fisk og fugler dø av å spise søppel, som truer flere arter med dyr."
                paragraphText2="Indirekte, så kan forurensningen av havet også påvirke oss. Fisk er en viktig kilde til mat for mange tusenvis av mennesker rundt hele verden. Hvis disse fiskene har spist plast, så putter det også menneskene som spiser de i fare. Søppelforurensning påvirker oss alle, og vi må gjøre noe med det.">
                </ImageAndText>

                <ImageAndText variant="imageLeft" imagePath="./masked.jpg" headerText="Vårt Oppdrag"
                paragraphText="Vi jobber med Hav og strandkonservasjon. Havet er en viktig del av menneskets historie, og er derfor det viktig å ta vare på dem. Vi jobber derfor med å rydde søppel fra både havet og strendene verden rundt, slik at alle kan ha en ren verden uten søppelforrurensning."
                paragraphText2=""
                ></ImageAndText>
            </section>

            <Footerbar></Footerbar>
        </div>
    )
}

export default AboutUs;