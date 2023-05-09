import React from 'react'
import Carosels from '../components/carousel/Carousels'
import CarouselSerf from '../components/carousel/CarouselSerf'
import Spacial from '../components/main/Spacial'
import Kesfet from '../components/main/Kesfet'
import WhichProg from '../components/main/WhichProg'
import Educations from '../components/main/Educations'
import Kursiyer from '../components/main/Kursiyer'
import CarouselKursiyer from '../components/main/CarouselKursiyer'
import KayitMain from '../components/main/KayitMain'
import Accordion from '../components/main/Accordion'
import Watch from '../components/main/Watch'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'



function HomePage() {
  return (
    <>
    <Navbar/>
    <Carosels/>
    <CarouselSerf/>
    <Spacial/>
    <Kesfet/>
    <WhichProg/>
    <Educations/>
    <Kursiyer/>
    <CarouselKursiyer/>
    <KayitMain/>
    <Accordion/>
    <Watch/>
    <Footer/>
    </>
    
  )
}

export default HomePage