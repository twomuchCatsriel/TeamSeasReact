import { useState } from 'react'
import NavBar from './navigationBar'
import SetBackgroundImage from './backgroundImage'
import ContrastTextbox from './contrastTextbox'


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
    </div>)
}

export default FrontPage;
