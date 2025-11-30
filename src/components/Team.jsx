import React from "react";

const Team = () => {
    const teamarray = [
        {
            name:`John Smith`,
            role:`CEO and Founder`,
            text:`10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy`,
            img:`/team1`
        },
        {
            name:`Jane Doe`,
            role:`Director of Operations`,
            text:`7+ years of experience in project management and team leadership.
            Strong organizational and communication skills`,
            img:`/team2`
        },
        {
            name:`Michael Brown`,
            role:`Senior SEO Specialist`,
            text:`5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization`,
            img:`/team3`
        },
        {
            name:`Emily Johnson`,
            role:`PPC Manager`,
            text:`3+ years of experience in paid search advertising. Skilled in
            campaign management and performance analysis`,
            img:`/team4`
        },
        {
            name:`Brian Williams`,
            role:`Social Media Specialist`,
            text:`4+ years of experience in social media marketing. Proficient in
            creating and scheduling content, analyzing metrics, and building
            engagement`,
            img:`/team5`
        },
        {
            name:`Sarah Kim`,
            role:`Content Creator`,
            text:`2+ years of experience in writing and editing Skilled in creating
            compelling, SEO-optimized content for various industries`,
            img:`/team6`
        }
    ]
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
        {teamarray.map((item, index)=>(
            <div key={index} className='border p-3 sm:p-7 md:p-10 rounded-4xl shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black'>
          <div className='flex items-center max-[300px]:flex-col gap-5 max-[300px]:gap-3'>
            <img className='max-[300px]:w-15' src={`${item.img}.png`} alt='img' />
            <h1 className='min-[300px]:self-baseline-last self-start text-xl max-[300px]:text-[17px]'>
              <span className='font-semibold'>{item.name}</span> <br />
              <span>{item.role}</span>
            </h1>
          </div>
          <hr className='my-3 sm:my-5' />
          <p>
            {item.text}
          </p>
        </div>
        ))}
      </div>
     
      <button className='py-2 px-2 lg:py-3 lg:px-7 text-xs sm:text-sm md:text-base border rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all ease-in w-40 sm:w-50 self-end'>
        See all team
      </button>
    </div>

  );
};

export default Team;
