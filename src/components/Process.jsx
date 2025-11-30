import React, { useState } from "react";

const Process = () => {
    const array = [
  {
    id : '1',
    title: "Consultation",
    text: `
    During the initial consultation, we dive deeply into your business goals, 
    your audience, challenges, and opportunities. This includes a detailed discussion 
    about your marketing history, current performance, and the results you want to achieve.
    We also analyze your brand positioning so we can tailor the perfect strategy for you.
    `,
},
{
      id : '2',
      title: "Research and Strategy Development",
      text: `
      Our team conducts in-depth market research, competitor analysis, and audience targeting. 
      We evaluate industry trends, customer behavior, and marketing gaps. 
      Based on this data, we craft a powerful strategy designed to boost visibility, 
      conversions, and long-term growth.
      `,
    },
    {
    id : '3',
    title: "Implementation",
    text: `
    Once the strategy is finalized, we execute it using the best tools and techniques. 
    This may include SEO optimization, PPC ads, content creation, social media campaigns, 
    email funnels, and more — all tailored to your business.
    `,
},
{
      id : '4',
      title: "Monitoring and Optimization",
      text: `
      We constantly track every campaign’s performance, measure KPIs, and analyze results. 
      Based on real-time data, we make improvements to ensure your marketing is always 
      performing at its best.
      `,
    },
    {
      id : '5',
      title: "Reporting and Communication",
      text: `
      You receive detailed reports showing progress, insights, and recommendations. 
      We also maintain regular communication so you always know what's happening 
      behind the scenes with your marketing.
      `,
    },
    {
      id : '6',
    title: "Continual Improvement",
    text: `
      Marketing is an ongoing process. We continuously refine, revise, and optimize your 
      campaigns based on new trends, updated data, and your evolving business needs. 
      This ensures long-term and consistent growth.
    `,
  },
];
  const [visible, setVisible] = useState("");
  return (
    <div>
        <div className="flex flex-col gap-5 text-xs sm:text-base">
            <div className='flex py-5 sm:py-10 flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 items-center '>
        <h1 className='bg-[#B9FF66] text-2xl sm:text-3xl w-fit px-1 rounded-[5px]'>
          Our Working Process
        </h1>
        <p className='leading-[17px] max-w-[300px]'>
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
            {
                array.map((item, index)=>(
                    <div key={index}
          className={`p-2 sm:p-7 w-full rounded-2xl sm:rounded-3xl ${
            visible === item.id ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
          } shadow-[0_8px_0px_-5px_rgba(0,0,0,0.3)] shadow-black border`}
        >
          <div className='flex justify-between max-[500px]:flex-col-reverse flex-row'>
           <h1>
             <span className="text-xl sm:text-3xl">0{item.id}</span><span className='text-[17px] sm:text-2xl'>
                {item.title}
              </span>
            </h1>
            <img
              onClick={() => setVisible(item.id)}
              className={`self-end w-5 sm:w-10 ${visible === item.id ? "hidden" : "flex"}`}
              src='/plus.png'
              alt='img'
            />
            <img
              onClick={() => setVisible(0)}
              className={`self-end w-5 sm:w-10 ${visible !== item.id ? "hidden" : "flex"}`}
              src='/minus.png'
              alt='img'
            />
          </div>
          {visible === item.id ? (
            <div>
              <hr className='my-2 sm:my-5' />
              <p className="text-justify">
               {item.text}
              </p>
            </div>
          ) : null}
        </div>
         ))}
            
        </div>
    <div className='my-5 sm:my-10 '>
        
        

    </div>
    </div>
  );
};

export default Process;
