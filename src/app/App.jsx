import { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx'
import PlotPage from './pages/PlotPage.jsx';
import ConverterPage from './pages/ConverterPage.jsx';
import './styles/global.css'
import { Routes, Route } from 'react-router-dom';
function App() {


  return (

    <Routes>


      <Route path="/" element={<HomePage />}></Route>
      <Route path="/plot" element={<PlotPage />} />
    </Routes>

  )

}



export default App
