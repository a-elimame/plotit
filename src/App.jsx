import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import NavBar from "./components/NavBar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar>
      <SideBar></SideBar>

    </div>
  )
}


export default App
