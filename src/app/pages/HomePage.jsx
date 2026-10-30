import Navbar from '../layouts/Navbar';
import Hero from '../layouts/Hero';
import Container from '../layouts/Container';
import Cards from '../layouts/Cards';



function HomePage() {
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


export default HomePage
