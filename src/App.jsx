import React, { useEffect } from 'react'
import AOS from 'aos'
import {Toaster} from 'react-hot-toast'
import 'aos/dist/aos.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/header'
import About from './components/about/About'
import Freelance from './components/Freelance/Freelance'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {

  useEffect(()=>{
    AOS.init({duration:1200,delay:300,once:false,easing:'ease-in-out',offset:120})
  },[]);

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Freelance/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App

