import { useState } from 'react';
import Navbar from './layouts/Navbar/'
import Hero from './layouts/Hero/'
import Cards from './layouts/Cards/'
import Container from './layouts/Container'
import './styles/global.css'

function App() {


  return (

    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Container>
        <Cards></Cards>
      </Container>
    </>

  )

}



export default App
