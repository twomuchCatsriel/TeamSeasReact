import { useState } from 'react'
import './app.css'
import './appMobile.css'
import FrontPage from './frontpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <FrontPage></FrontPage>
  )
}

export default App
