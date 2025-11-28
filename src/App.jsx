import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='sm:px-[5vw] px-[10vw] lg:px-[7vw]'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
