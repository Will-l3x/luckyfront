import React from 'react'
import About from '../About'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Camp from '../Camp'
import Contact from '../Contact'
import Footer from '../Footer'
import Header from '../Header'
import HeroSection from '../HeroSection'
import Navbars from '../navbar'
import Services from '../Services'
import Team from '../Team'
import Admin from './Admin'
import AdminBase from './AdminBase'
import AdmissionDesk from './AdmissionDesk'
import AssessmentDesk from './AssessmentDesk'
import DispensaryDesk from './DispensaryDesk'
import DoctorsDesk from './DoctorsDesk'
import HelpDesk from './HelpDesk'
import LabDesk from './LabDesk'


function Home() {
    return (
        <>
           <Admin />
           <AdminBase />
        
           
            {/*<Header />
            <Navbars />
            <HeroSection />
            <Services />
            <About />
            <Camp />
            <Team />
            <Contact />
            <Footer />*/}
        </>
    )
}

export default Home
