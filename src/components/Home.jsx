import React from 'react'

const Home = () => {
  return (
    <div>
    <div id='about' className='flex flex-col sm:flex-row gap-10 mt-[2vw] sm:mt-10'>
        <div className=' w-full sm:w-[40vw] flex items-center'>
            <div className='gap-5 flex flex-col'>
            <h1 className='text-[10vw] leading-[13vw] sm:text-[5vw] sm:leading-[6vw]'>Navigating the digital landscape for success</h1>
            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className='py-3 px-3 lg:py-3 lg:px-7 border rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all ease-in w-45 sm:w-50'>Book a Consulation</button>
        </div>
        </div>
        <div className='w-full sm:w-[45vw]'>
            <img className='w-full' src="/home.png" alt="" />
        </div>
    </div>
    {/* logo section  */}
    <div className='flex flex-col sm:flex-row sm:items-center justify-between  mt-10 gap-5 sm:gap-0'>
       <div className='flex flex-row justify-between  w-[99%] sm:w-[47%] pl-[10vw] sm:pl-0'>
        <img className='w-[20vw] min-[400px]:w-[15vw]  sm:w-[10vw] cursor-pointer' src="/amazon.png" alt="img" />
        <img className='w-[20vw] min-[400px]:w-[15vw]  sm:w-[10vw] cursor-pointer' src="/secondlogo.png" alt="img" />
        <img className='w-[20vw] min-[400px]:w-[15vw]  sm:w-[10vw] cursor-pointer' src="/hubspot.png" alt="img" />
       </div>
       <div className='flex flex-row justify-between w-[99%] sm:w-[47%] pr-[10vw] sm:pr-0'>
        <img className='w-[20vw] min-[400px]:w-[15vw]  sm:w-[10vw] cursor-pointer' src="/notion.png" alt="img" />
        <img className='w-[20vw] min-[400px]:w-[15vw]  sm:w-[10vw] cursor-pointer' src="/netflix.png" alt="img" />
        <img className='w-[20vw] min-[400px]:w-[15vw]  sm:w-[10vw] cursor-pointer' src="/zoom.png" alt="img" />
       </div>
    </div>
  </div>
  )
}

export default Home
