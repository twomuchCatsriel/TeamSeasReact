import { useState } from 'react'
import NavBar from './navigationBar'
import './app.css'
import './appMobile.css'
import SetBackgroundImage from './backgroundImage'
import ContrastTextbox from './contrastTextbox'
import CustomButton from './buttons'
import FrontPage from './frontpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <FrontPage></FrontPage>
  )
}

export default App
