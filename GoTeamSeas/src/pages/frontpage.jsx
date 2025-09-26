import { useState } from 'react'
import NavBar from '../navigationBar'
import SetBackgroundImage from '../backgroundImage'
import ContrastTextbox from '../contrastTextbox'
import ImageAndText from '../ImageAndTextSidebySide'
import Footerbar from '../footerbar'


function FrontPage() {
    return (
    <div>
        <NavBar></NavBar>
        <SetBackgroundImage path={"/BackgroundImage.png"}></SetBackgroundImage>

        <div className='outerContainer'>
            <ContrastTextbox 
            subheaderText="Verdens hav er i fare." 
            headerText="Det er opp til oss å redde dem."
            infoText="#TeamSeas er en frivillig organisasjon som fokuserer på Sjø og Hav-konservasjon."
            buttonvariant1="blue"
            buttonvariant2="orange"
            button1_destination="/omoss"
            button1_text="Mer om oss"
            button2_destination="/donasjon"
            button2_text="Støtt oss"
            >
            </ContrastTextbox>

            <img src='./Volunteer.jpg' className='sidebyside' id='topImage'></img>
        </div>

        <section className='infoSection'>
            <ImageAndText variant="imageLeft" imagePath="./TheOceanCleanup.png" headerText="Kutter av kilden" paragraphText="
            Plastikk i havet er et stort problem som ikke har en konkret løsning. #TeamSeas jobber derfor sammen med The Ocean Cleanup for å kutte av problemet ved kilden ved å fange opp søppelet fra de mest forurensende elvene før det kommer ut i havet."
            paragraphText2="#TeamSeas jobber også med å rydde opp søppel og plastikk på strender verden rundt. Vi jobber sammen med lokalbefolkningen for å gjøre en varig forskjell fra strand til strand.">
            </ImageAndText>

            <ImageAndText variant="imageRight" imagePath="./People.png" headerText="Hvorfor støtte #TeamSeas?" paragraphText="
            #TeamSeas trenger din støtte for å kunne fortsette med havkonservasjon. Alle donasjoner blir delt likt med The Ocean Cleanup for at vi skal kunne fortsette med å kutte av plastikk fra kilden, og fjerne søppel fra strender verden rundt.
            Alle donasjoner blir bare brukt til å fremme havkonservasjon, og vil aldri bli brukt til noe annet."
            paragraphText2="Hvis du ikke er i en stilling hvor du kan komfortabelt donere, kan du hjelpe oss med å spre ordet, eller å bli med på frivillige arrangamenter for å rydde opp strender nær deg."
            ></ImageAndText>
            
            <Footerbar></Footerbar>
        </section>
    </div>)
}

export default FrontPage;
