import React from 'react'
import Main from '../components/main/Main'
import EndPart from '../components/main/EndPart'
import Navbar from '../components/header/Navbar'
import Educations from '../components/main/Educations'
import CarouselKursiyer from '../components/main/CarouselKursiyer'
import Footer from '../components/footer/Footer'

function Teachers() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Educations/>
    <EndPart/>
    <CarouselKursiyer/>
    <Footer/>
    </>
  )
}

export default Teachers