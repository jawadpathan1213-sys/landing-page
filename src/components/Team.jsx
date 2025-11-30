import React from "react";

const Team = () => {
  return (
    <div className='flex flex-col py-5 sm:py-10'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 items-center '>
        <h1 className='bg-[#B9FF66] text-2xl sm:text-3xl w-fit px-1 rounded-[5px]'>
          Services
        </h1>
        <p className='leading-[17px] max-w-[500px] text-center sm:text-start'>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 sm:my-10 gap-5 sm:gap-10 text-xs sm:text-sm md:text-base'>
        <div className='border p-3 sm:p-7 md:p-10 rounded-4xl shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black'>
          <div className='flex items-center max-[300px]:flex-col gap-5 max-[300px]:gap-3'>
            <img className='max-[300px]:w-15' src='/team1.png' alt='img' />
            <h1 className='self-baseline-last text-xl max-[300px]:text-[17px]'>
              <span className='font-semibold'>John Smith</span> <br />
              <span>CEO and Founder</span>
            </h1>
          </div>
          <hr className='my-3 sm:my-5' />
          <p>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </p>
        </div>
        <div className='border p-3 sm:p-7 md:p-10 rounded-4xl shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black'>
          <div className='flex items-center max-[300px]:flex-col gap-5 max-[300px]:gap-3'>
            <img className='max-[300px]:w-15' src='/team2.png' alt='img' />
            <h1 className='self-baseline-last text-xl max-[300px]:text-[17px] '>
              <span className='font-semibold'>Jane Doe</span> <br />
              <span>Director of Operations</span>
            </h1>
          </div>
          <hr className='my-3 sm:my-5' />
          <p>
            7+ years of experience in project management and team leadership.
            Strong organizational and communication skills
          </p>
        </div>
        <div className='border p-3 sm:p-7 md:p-10 rounded-4xl shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black'>
          <div className='flex items-center max-[300px]:flex-col gap-5 max-[300px]:gap-3'>
            <img className='max-[300px]:w-15' src='/team3.png' alt='img' />
            <h1 className='self-baseline-last text-xl max-[300px]:text-[17px] '>
              <span className='font-semibold'>Michael Brown</span> <br />
              <span>Senior SEO Specialist</span>
            </h1>
          </div>
          <hr className='my-3 sm:my-5' />
          <p>
            5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization
          </p>
        </div>
        <div className='border p-3 sm:p-7 md:p-10 rounded-4xl shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black'>
          <div className='flex items-center max-[300px]:flex-col gap-5 max-[300px]:gap-3'>
            <img className='max-[300px]:w-15' src='/team4.png' alt='img' />
            <h1 className='self-baseline-last text-xl max-[300px]:text-[17px] '>
              <span className='font-semibold'>Emily Johnson</span> <br />
              <span>PPC Manager</span>
            </h1>
          </div>
          <hr className='my-3 sm:my-5' />
          <p>
            3+ years of experience in paid search advertising. Skilled in
            campaign management and performance analysis
          </p>
        </div>
        <div className='border p-3 sm:p-7 md:p-10 rounded-4xl shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black'>
          <div className='flex items-center max-[300px]:flex-col gap-5 max-[300px]:gap-3'>
            <img className='max-[300px]:w-15' src='/team5.png' alt='img' />
            <h1 className='self-baseline-last text-xl max-[300px]:text-[17px] '>
              <span className='font-semibold'>Brian Williams</span> <br />
              <span>Social Media Specialist</span>
            </h1>
          </div>
          <hr className='my-3 sm:my-5' />
          <p>
            4+ years of experience in social media marketing. Proficient in
            creating and scheduling content, analyzing metrics, and building
            engagement
          </p>
        </div>
        <div className='border p-3 sm:p-7 md:p-10 rounded-4xl shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black'>
          <div className='flex items-center max-[300px]:flex-col gap-5 max-[300px]:gap-3 '>
            <img className='max-[300px]:w-15' src='/team6.png' alt='img' />
            <h1 className='self-baseline-last text-xl max-[300px]:text-[17px] '>
              <span className='font-semibold'>Sarah Kim</span> <br />
              <span>Content Creator</span>
            </h1>
          </div>
          <hr className='my-3 sm:my-5' />
          <p>
            2+ years of experience in writing and editing Skilled in creating
            compelling, SEO-optimized content for various industries
          </p>
        </div>
      </div>
      <button className='py-2 px-2 lg:py-3 lg:px-7 text-xs sm:text-sm md:text-base border rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all ease-in w-40 sm:w-50 self-end'>
        See all team
      </button>
    </div>
  );
};

export default Team;
