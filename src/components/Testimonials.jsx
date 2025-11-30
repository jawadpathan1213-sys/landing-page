import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
  {
    text: `We have been working with Positivus for the past year and have seen a significant 
increase in website traffic and leads as a result of their efforts. The team is 
professional, responsive, and truly cares about the success of our business. We highly 
recommend Positivus to any company looking to grow their online presence.`,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: `Their insights, dedication, and communication make them the best agency we’ve worked 
with. They consistently deliver great results and meaningful progress  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas unde suscipit perferendis deserunt odit animi et quo quisquam`,
    name: "Sarah Johnson",
    role: "CEO at BlueTech",
  },
  {
    text: `Amazing service! They helped us scale with confidence and clarity. Love their approach 
to optimization and reporting  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas unde suscipit perferendis deserunt odit animi et quo quisquam facilis hic ipsum fugiat eos, molestiae in magni inventore alias cupiditate.`,
    name: "David Wilson",
    role: "Founder at DigitalFlow",
  },
];

const [index, setIndex] = useState(0)
const ismd = window.innerWidth < 1024;
const ismobile = window.innerWidth < 640;
const for250 = window.innerWidth < 250;
const for500 = window.innerWidth < 500;
const for400 = window.innerWidth < 400;
const for300 = window.innerWidth < 300;

const handleLeft = ()=>(
    setIndex((prev)=>(prev - 1 + testimonials.length)% testimonials.length)
)
const handleRight = ()=>(
     setIndex((prev)=>(prev + 1 )% testimonials.length)
)

const getTranslateValue = () => {
  if (for250) return index * 125;
  if (for300) return index * 122;
  if (for400) return index * 115;
  if (for500) return index * 105;
  if (ismobile) return index * 100;
  if (ismd) return index * 88;
  return index * 50;
};

  return (
    <div id='contact' className='py-5 sm:py-10 overflow-x-hidden'>
           <div className='py-5 flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 items-center '>
        <h1 className='bg-[#B9FF66] text-2xl sm:text-3xl w-fit px-1 rounded-[5px]'>
          Testimonials
        </h1>
        <p className='leading-[17px] max-w-[400px] text-center sm:text-start'>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
     
      <div className='bg-[#191A23] p-5 sm:p-10 text-white rounded-4xl'>
       <div className='flex transition-transform gap-5 sm:gap-10' style={{transform:`translateX(-${getTranslateValue()}%) `}}>
        {
            testimonials.map((item, index)=>(

                <div className='relative' key={index}>
                <div className=' border border-[#B9FF66] rounded-2xl sm:rounded-4xl p-2 min-[300px]:p-5 md:p-7 lg:p-10 text-xs sm:text-base
                md:h-75 sm:h-60  lg:h-60 sm:w-[70vw] lg:w-[50vw] w-[70vw] h-45 max-[434px]:h-62 max-[300px]:h-60'>{item.text}</div>
                <div className='sm:w-20 sm:h-20 h-10 w-10 border-b rotate-45 bottom-16 max-[434px]:bottom-22 max-[400px]:bottom-16 max-[377px]:bottom-22 max-[250px]:bottom-23 max-[244px]:bottom-28 sm:bottom-20 left-10 min-[400px]:left-20 sm:left-30 bg-[#191A23] border-r absolute border-[#B9FF66] '></div>
                <div className='mt-8 sm:mt-16 ml-10 min-[400px]:ml-20 sm:ml-30'>
                    <p className='sm:text-2xl text-xl text-[#B9FF66]'>{item.name}</p>
                    <p>{item.role}</p>
                </div>
                </div>
            ))
        }
       </div>
       <div className='flex gap-5 justify-center mt-5 '>
        <FaArrowLeft onClick={()=>handleLeft()} className='cursor-pointer' />
         <div className='sm:w-50 w-30 flex justify-center gap-5'>
            {testimonials.map((_, i)=>(
                <img key={i} src={`${i ===index ?'greenstar.png':'whitestar.png'} `} alt="" />

            ))}
         </div>
        <FaArrowRight onClick={()=>handleRight()} className='cursor-pointer' />
       </div>
      </div>
      
    </div>
  )
}

export default Testimonials





