import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='flex gap-5 flex-col min-[400px]:flex-row justify-between md:items-center px-[15vw] py-10 sm:px-[5vw] lg:px-[7vw] sm:py-8 lg:py-12 text-[16px] lg:text-[18px] items-start'>
      <img className='w-35 lg:w-50 flex flex-nowrap' src="/navlogo.png" alt="img" />
      <div className='flex flex-col md:flex-row md:items-center gap-7 md:gap-[2vw] '>
      <ul className='sm:flex hidden items-center gap-4 md:gap-[1.7vw] lg:gap-[2.5vw] '>
        <li className='hover:text-gray-500 hover:border-gray-300 border-b border-white transition-all ease-in cursor-pointer  '>About us</li>
        <li className='hover:text-gray-500 hover:border-gray-300 border-b border-white transition-all ease-in cursor-pointer  '>Services</li>
        <li className='hover:text-gray-500 hover:border-gray-300 border-b border-white transition-all ease-in cursor-pointer  '>Use Cases</li>
        <li className='hover:text-gray-500 hover:border-gray-300 border-b border-white transition-all ease-in cursor-pointer  '>Pricings</li>
        <li className='hover:text-gray-500 hover:border-gray-300 border-b border-white transition-all ease-in cursor-pointer  '>Blogs</li>
      </ul>
      <button className='py-2 px-3 lg:py-3 lg:px-7 border rounded-xl hover:bg-black hover:text-white transition-all ease-in'>Request a quote</button>
      </div>
      <div className='fixed sm:hidden'>
        <FaBars onClick={() => setNav(!nav)} className='fixed right-3 cursor-pointer rounded-full bg-gray-100 p-2 hover:bg-gray-300 w-8 h-8 '/>
        {nav ?<ul className='bg-white mt-7 flex flex-col gap-2 border p-3 cursor-pointer fixed right-5'>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricings</li>
            <li>Blogs</li>
        </ul>:null}
      </div>
    </div>
  )
}

export default Navbar
