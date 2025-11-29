import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Proposal from './components/Proposal'

const App = () => {
  return (
    <div className='sm:px-[5vw] px-[10vw] lg:px-[7vw]'>
      <Navbar />
      <Home />
      <Services />
      <Proposal />
    </div>
  )
}

export default App
