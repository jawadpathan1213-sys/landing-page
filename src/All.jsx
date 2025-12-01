import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Proposal from './components/Proposal'
import CaseStudy from './components/CaseStudy'
import Process from './components/Process'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const All = () => {
  return (
    <div className='sm:px-[5vw] px-[10vw] lg:px-[7vw] overflow-x-hidden'>
      <Navbar />
      <Home />
      <Services />
      <Proposal />
      <CaseStudy />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      
    </div>
  )
}

export default All
