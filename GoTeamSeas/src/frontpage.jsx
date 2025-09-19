import { useState } from 'react'
import NavBar from './navigationBar'
import SetBackgroundImage from './backgroundImage'
import ContrastTextbox from './contrastTextbox'
import ImageAndText from './ImageAndTextSidebySide'


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
            buttonvariant2="orange">
            </ContrastTextbox>

            <img src='./Volunteer.jpg' className='sidebyside'></img>
        </div>

        <section id='infoSection'>
            <ImageAndText variant="imageLeft" imagePath="./Volunteer.jpg" headerText="Kutter av kilden" paragraphText="
            Plastikk i havet er et stort problem som ikke har en konkret løsning. #TeamSeas jobber derfor sammen med The Ocean Cleanup for å kutte av problemet ved kilden ved å fange opp søppelet fra de mest forurensende elvene før det kommer ut i havet.
            #TeamSeas jobber også med å rydde opp søppel og plastikk på strender verden rundt. Vi jobber sammen med lokalbefolkningen for å gjøre en varig forskjell fra strand til strand.
            "></ImageAndText>
        </section>
    </div>)
}

export default FrontPage;
