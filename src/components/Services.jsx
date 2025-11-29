import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Services = () => {
  return (
    <div className='mt-5 sm:mt-20'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 items-center '>
        <h1 className='bg-[#B9FF66] text-2xl sm:text-3xl w-fit px-1 rounded-[5px]'>
          Services
        </h1>
        <p className='leading-[17px] max-w-[500px]'>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-15 mb-10 gap-[10vw] sm:gap-[5vw]'>
        {/* 1111111111111111111111111111111111111111111 */}

        <div className='w-auto border rounded-4xl h-70 min-[400px]:h-50  p-5 flex justify-between items-center bg-[#F3F3F3]  shadow-black shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)]'>
          <div className='flex flex-col  max-[400px]:w-full '>
            <h1 className='text-xl bg-[#B9FF66] w-fit font-medium px-1 rounded-[5px]'>
              Search Engine
            </h1>
            <h1 className='text-xl bg-[#B9FF66] w-fit font-medium px-1 rounded-[5px]'>
              optimization
            </h1>
            <img
              className='w-[50%] self-end min-w-[100px] mt-3 mb-3 min-[400px]:hidden flex'
              src='frame1.png'
              alt='img'
            />

            <div className='flex items-center flex-1 max-[400px]:mt-0 mt-10 gap-2'>
              <img className='w-8' src='/blackarrow.png' alt='' />
              <p>Learn More</p>
            </div>
          </div>
          <div className='w-[40%] max-[400px]:hidden'>
            <img
              className='w-full min-[400px]:flex hidden'
              src='frame1.png'
              alt='img'
            />
          </div>
        </div>

        {/* 2222222222222222222222222 */}

        <div className='w-auto border rounded-4xl h-70 min-[400px]:h-50  p-5 flex justify-between items-center bg-[#B9FF66]  shadow-black shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)]'>
          <div className='flex flex-col  max-[400px]:w-full '>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              pay-per-click
            </h1>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              advertising
            </h1>
            <img
              className='w-[50%] self-end min-w-[100px] mt-3 mb-3 min-[400px]:hidden flex'
              src='frame2.png'
              alt='img'
            />

            <div className='flex items-center flex-1 max-[400px]:mt-0 mt-10 gap-2'>
              <img className='w-8' src='/blackarrow.png' alt='' />
              <p>Learn More</p>
            </div>
          </div>
          <div className='w-[40%] max-[400px]:hidden'>
            <img
              className='w-full min-[400px]:flex hidden'
              src='frame2.png'
              alt='img'
            />
          </div>
        </div>

        {/* 33333333333333 */}

        <div className='w-auto border rounded-4xl h-70 min-[400px]:h-50  p-5 flex justify-between items-center bg-[#191A23]  shadow-black shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)]'>
          <div className='flex flex-col  max-[400px]:w-full '>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              Social Media
            </h1>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              Marketing
            </h1>
            <img
              className='w-[50%] self-end min-w-[100px] mt-3 mb-3 min-[400px]:hidden flex'
              src='frame3.png'
              alt='img'
            />

            <div className='flex items-center flex-1 max-[400px]:mt-0 mt-10 gap-2 text-white'>
              <img className='w-8' src='/whitearrow.png' alt='' />
              <p>Learn More</p>
            </div>
          </div>
          <div className='w-[40%] max-[400px]:hidden'>
            <img
              className='w-full min-[400px]:flex hidden'
              src='frame3.png'
              alt='img'
            />
          </div>
        </div>

        {/* 44444444444444444444444444444444444  */}

        <div className='w-auto border rounded-4xl h-70 min-[400px]:h-50  p-5 flex justify-between items-center bg-[#F3F3F3]  shadow-black shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)]'>
          <div className='flex flex-col  max-[400px]:w-full '>
            <h1 className='text-xl bg-[#B9FF66] w-fit font-medium px-1 rounded-[5px]'>
              Email
            </h1>
            <h1 className='text-xl bg-[#B9FF66] w-fit font-medium px-1 rounded-[5px]'>
              Marketing
            </h1>
            <img
              className='w-[50%] self-end min-w-[100px] mt-3 mb-3 min-[400px]:hidden flex'
              src='frame4.png'
              alt='img'
            />

            <div className='flex items-center flex-1 max-[400px]:mt-0 mt-10 gap-2'>
              <img className='w-8' src='/blackarrow.png' alt='' />
              <p>Learn More</p>
            </div>
          </div>
          <div className='w-[40%] max-[400px]:hidden'>
            <img
              className='w-full min-[400px]:flex hidden'
              src='frame4.png'
              alt='img'
            />
          </div>
        </div>

        {/* 5555555555555555555555555555 */}
        <div className='w-auto border rounded-4xl h-70 min-[400px]:h-50  p-5 flex justify-between items-center bg-[#B9FF66]  shadow-black shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)]'>
          <div className='flex flex-col  max-[400px]:w-full '>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              Content
            </h1>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              creation
            </h1>
            <img
              className='w-[50%] self-end min-w-[100px] mt-3 mb-3 min-[400px]:hidden flex'
              src='frame5.png'
              alt='img'
            />

            <div className='flex items-center flex-1 max-[400px]:mt-0 mt-10 gap-2'>
              <img className='w-8' src='/blackarrow.png' alt='' />
              <p>Learn More</p>
            </div>
          </div>
          <div className='w-[40%] max-[400px]:hidden'>
            <img
              className='w-full min-[400px]:flex hidden'
              src='frame5.png'
              alt='img'
            />
          </div>
        </div>

        {/* 66666666666666666666 */}

        <div className='w-auto border rounded-4xl h-70 min-[400px]:h-50  p-5 flex justify-between items-center bg-[#191A23]  shadow-black shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)]'>
          <div className='flex flex-col  max-[400px]:w-full '>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              Analytics and
            </h1>
            <h1 className='text-xl bg-white w-fit font-medium px-1 rounded-[5px]'>
              Tracking
            </h1>
            <img
              className='w-[50%] self-end min-w-[100px] mt-3 mb-3 min-[400px]:hidden flex'
              src='frame6.png'
              alt='img'
            />

            <div className='flex items-center flex-1 max-[400px]:mt-0 mt-10 gap-2 text-white'>
              <img className='w-8' src='/whitearrow.png' alt='' />
              <p>Learn More</p>
            </div>
          </div>
          <div className='w-[40%] max-[400px]:hidden'>
            <img
              className='w-full min-[400px]:flex hidden'
              src='frame6.png'
              alt='img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
