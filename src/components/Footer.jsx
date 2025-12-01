import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#191A23] sm:rounded-t-4xl rounded-0 p-7 sm:p-10 text-xs sm:mx-[5vw] lg:mx-[7vw] mt-10 text-white'>
       <div className='flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center sm:justify-between items-center'>
        <img className='w-30 sm:w-25' src="/blacklogo.png" alt="img" />
        <ul className='flex underline flex-col sm:flex-row gap-2 items-center  sm:gap-2 md:gap-5'>
            <a className='hover:text-gray-400 transition-all ease-in' href="#about">About us</a>
            <a className='hover:text-gray-400 transition-all ease-in' href="#services">Services</a>
            <a className='hover:text-gray-400 transition-all ease-in' href="#usecases">Use Cases</a>
            <a className='hover:text-gray-400 transition-all ease-in' href="#testimonials">Testimonials</a>
            <a className='hover:text-gray-400 transition-all ease-in' href="#contact">Contact</a>
        </ul>
        <div className='flex  gap-3 sm:gap-2 '>
            <img className='w-5 h-5 cursor-pointer' src="iconfirst.png" alt="img" />
            <img className='w-5 h-5 cursor-pointer' src="iconsecond.png" alt="img" />
            <img className='w-5 h-5 cursor-pointer' src="iconthird.png" alt="img" />
        </div>
       </div>
       <div className='my-5 sm:my-10 flex flex-col sm:flex-row items-center sm:items-start'>
        <div className='sm:text-base flex flex-col gap-3 sm:gap-2 sm:w-[50%] w-full items-center sm:items-start mb-5'>
            <h1 className='bg-[#B9FF66] text-black px-2 rounded-[5px] w-fit'>Contact</h1>
            <p>Email: jawadpathan1213@gmail.com</p>
            <p>+92 322 9672054</p>
            <p className='max-w-[300px] text-center sm:text-start'>Address: 23450 Maini, Tehsil Topi, District Swabi, KPK Pakistan</p>
        </div>
        <div className='sm:w-[50%] h-40 w-full bg-[#292A32] flex  items-center flex-col lg:flex-row p-5 rounded-xl justify-center gap-3 sm:text-base'>
            <input className='outline-none w-full lg:w-[48%] p-3 lg:p-4  rounded-[7px]  border border-white min-w-[200px]' placeholder='Email' type="email" />
            <button className='bg-[#B9FF66] p-3 lg:p-4 rounded-[7px] border border-[#B9FF66] text-black w-full lg:w-[48%] min-w-[200px] cursor-pointer'>Subscribe to news</button>
        </div>
    </div>
        <hr />
        <div className='flex flex-col sm:flex-row md:text-base gap-2 sm:gap-5 mt-5 sm:mt-10 items-center sm:items-start '>
        <p>© 2025 Positivus. All Rights Reserved.</p>
        <p className='underline cursor-pointer hover:text-gray-400'>Privacy Policy</p>
        </div>
       </div>
  )
}

export default Footer
