
import { useState } from 'react'
import { Search, Calculator, ChartSpline, Ruler, BotMessageSquare, Languages, Sun } from 'lucide-react'
import Logo from '../../../assets/plotit-logo.png'
function Navbar() {

  return (

    <div className='navigation'>

      <div className='nav-left'>
        <div className='nav-logo'>
          <img src={Logo} />
        </div>
        <nav className='nav-links'>
          <ul>
            <li>
              <Search size={32} strokeWidth={1} />
              <span>Solutions</span>
            </li>
            <li>
              <Calculator size={32} strokeWidth={1} />
              <span>Calculator</span>
            </li>
            <li>
              <ChartSpline size={32} strokeWidth={1} />
              <span>Plot</span>
            </li>
            <li>
              <Ruler size={32} strokeWidth={1} />
              <span>Converter</span>
            </li>
            <li>
              <BotMessageSquare size={32} strokeWidth={1} />
              <span>Chatbot</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className='nav-right'>
        <ul>
          <li><button><Languages size={32} strokeWidth={1} /></button></li>

          <li><button><Sun size={32} strokeWidth={1} /></button></li>

        </ul>
      </div>
    </div>
  )
}


export default Navbar;
