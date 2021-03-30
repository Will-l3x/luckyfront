import React from 'react'
import About from '../About'
import Login from '../Auth/Login'
import Camp from '../Camp'
import Contact from '../Contact'
import Footer from '../Footer'
import Header from '../Header'
import HeroSection from '../HeroSection'
import Navbars from '../navbar'
import Services from '../Services'
import Team from '../Team'
import HelpDesk from './HelpDesk'


function Home() {
    return (
        <>
          
            
            <Header />
            <Navbars />
            <HeroSection />
            <Services />
            <About />
            <Camp />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
