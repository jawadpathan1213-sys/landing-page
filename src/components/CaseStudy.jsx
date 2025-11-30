import React from "react";

const CaseStudy = () => {
  return (
    <div>
      <div id="usecases" className='py-5 flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 items-center overflow-x-hidden'>
        <h1 className='bg-[#B9FF66] text-2xl sm:text-3xl w-fit px-1 rounded-[5px]'>
          Use Cases
        </h1>
        <p className='leading-[17px] max-w-[500px] text-center sm:text-start'>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className='p-5 sm:p-10 bg-[#191A23] text-white rounded-3xl sm:rounded-4xl flex justify-between w-full my-5 sm:my-10 gap-10 overflow-x-auto'>
        <div className='flex gap-3 flex-col w-auto min-w-70'>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className='flex items-center gap-2'>
            <p className='text-[#B9FF66]'>Learn More</p>
            <img className='w-5' src='/arrowicon.png' alt='' />
          </div>
        </div>
        <div className='h-[130px] w-1 bg-white'></div>
        
        
        <div className='flex gap-3 flex-col w-auto min-w-70'>
          <p>
           For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <div className='flex items-center gap-2'>
            <p className='text-[#B9FF66]'>Learn More</p>
            <img className='w-5' src='/arrowicon.png' alt='' />
          </div>
        </div>
        <div className='h-[130px] w-1 bg-white'></div>
        

        <div className='flex gap-3 flex-col w-auto min-w-70'>
          <p>
            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <div className='flex items-center gap-2'>
            <p className='text-[#B9FF66]'>Learn More</p>
            <img className='w-5' src='/arrowicon.png' alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
