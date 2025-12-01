import React from 'react'

const Contact = () => {
  return (
    <div>
       <div id='contact' className='py-5 my-5 sm:my-10 flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 items-center '>
        <h1 className='bg-[#B9FF66] text-2xl sm:text-3xl w-fit px-1 rounded-[5px]'>
          contact Us
        </h1>
        <p className='leading-[17px] max-w-[300px] text-center sm:text-start'>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className='rounded-3xl sm:rounded-4xl bg-[#F3F3F3] max-[300px]:p-2 max-[300px]:text-xs p-10 flex justify-between relative'>
        <div className='w-[99%] sm:w-[50%]'>
         <div className='flex gap-2 sm:gap-5 my-5'>
            <input  className='' type="radio" name='radio'/><label>Say Hi</label>
            <input  type="radio" name='radio'/><label>Get a quote</label>
         </div>
         <form className='flex flex-col gap-4'>
            <div>

           <label >Name</label>
           <input placeholder='Name' type="text" className='outline-none p-1 sm:p-3 w-full bg-white sm:rounded-xl rounded-[5px] border' />
            </div>
            <div>
           <label >Email</label>
           <input placeholder='Email' type="email" className='outline-none p-1 sm:p-3 w-full bg-white sm:rounded-xl rounded-[5px] border' />
           </div>
           <div>                     
           <label >Message</label>
           <textarea placeholder='Message' type="text" className='outline-none p-1 sm:p-3 w-full bg-white sm:rounded-xl rounded-[5px] border h-40 resize-none box-border' />
          
           </div> 
           <button className='w-full  p-3 bg-black hover:bg-white text-white hover:text-black rounded-xl border transition-all ease-in cursor-pointer'>Send Message</button>
         </form>
         </div>
         <img className='self-end  absolute sm:right-[-180px] md:right-[-230px] hidden sm:flex w-100  md:w-130' src="/contactspring.png" alt="" />
      </div>
    </div>
  )
}

export default Contact
