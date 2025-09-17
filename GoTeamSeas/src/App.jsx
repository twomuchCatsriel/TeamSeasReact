import { useState } from 'react'
import NavBar from './navigationBar'
import './app.css'
import './appMobile.css'
import SetBackgroundImage from './backgroundImage'
import ContrastTextbox from './contrastTextbox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar>
      <SetBackgroundImage path={"/BackgroundImage.png"}></SetBackgroundImage>
      <ContrastTextbox subheaderText="Verdens hav er i fare." headerText="Det er opp til oss å redde dem."></ContrastTextbox>
    </div>
  )
}

export default App
