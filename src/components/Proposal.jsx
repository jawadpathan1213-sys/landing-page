import React from 'react'

const Proposal = () => {
  return (
    <div className='w-full mb-10 p-4 sm:p-10 items-center flex flex-col sm:flex-row bg-[#F3F3F3] rounded-2xl justify-between sm:rounded-4xl sm:h-[35vw] md:h-[30vw] lg:h-[25vw] gap-6 sm:gap-0'>
      <div className='flex flex-col gap-5 sm:gap-3 md:gap-4 lg:gap-5 w-full sm:w-[40vw]'>
        <h1 className='text-xl font-semibold'>Let’s make things happen</h1>
        <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <button className='py-2 px-2 lg:py-3 lg:px-7 text-xs sm:text-sm md:text-base border rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all ease-in w-40 sm:w-50'>Get your free proposal</button>
      </div>
      <img className='w-[80%] sm:w-[20vw]' src="/proposal.png" alt="img" />
    </div>
  )
}

export default Proposal
