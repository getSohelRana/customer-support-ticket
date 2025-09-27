import React from 'react';
import bgImg from "../../../assets/vector1.png";



const Banner = ({ progress }) => {
  return (
    <div className='container mx-auto px-2 my-10'>
      <div className='grid grid-cols-1  sm:grid-cols-2 gap-6 container mx-auto '>
        <div style={{
          backgroundImage: `url(${bgImg}),linear-gradient(to bottom right, #632EE3, #9F62F2)`,
          backgroundPosition: "left bottom,  right bottom",
          backgroundRepeat: "no-repeat",
        }} className='h-[240px] w-full relative flex  flex-col justify-center items-center gap-4 text-white rounded-xl'>
          <img src={bgImg} alt="" className='absolute bottom-0 right-0 rotate-y-180' />
          <h2 className='text-3xl font-semibold'>In Progress</h2>
          <p className='text-3xl font-semibold'>{progress}</p>
        </div>
        <div style={{
          backgroundImage: `url(${bgImg}),linear-gradient(to top right, #54CF68, #00827A)`,
          backgroundPosition: "left bottom,  right bottom",
          backgroundRepeat: "no-repeat",
        }} className='h-[240px] w-full relative flex  flex-col justify-center items-center gap-4 text-white rounded-xl'>
          <img src={bgImg} alt="" className='absolute bottom-0 right-0 rotate-y-180' />
          <h2 className='text-3xl font-semibold'>Resolved</h2>
          <p className='text-3xl font-semibold'>0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// {progress}