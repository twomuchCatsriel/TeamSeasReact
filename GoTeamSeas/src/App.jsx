import { useState } from 'react'
import NavBar from './navigationBar'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NavBar></NavBar>
  )
}

export default App
