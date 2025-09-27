import React from 'react';
import bgImg from "../../../assets/vector1.png";
import bgImg2 from "../../../assets/vector2.png";


const Banner = ({progress , resolved}) => {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 gap-6 mt-10 container mx-auto px-2'>
      <div className='rounded-xl'>
        <div
          style={{
            backgroundImage: `url(${bgImg}),  linear-gradient(to bottom right, #632EE3, #9F62F2)`,
            backgroundPosition: "left bottom,  right bottom", 
            backgroundRepeat: "no-repeat",
          }}
          className="h-[250px] w-full text-white p-4 rounded-xl flex flex-col justify-center items-center"
        >
          <p className="text-3xl font-semibold">In-progress</p>
          <p className="text-2xl font-bold" >{progress}</p>
        </div>
      </div>

      <div className='rounded-xl'>
        <div
          style={{
            backgroundImage: `url(${bgImg}),  linear-gradient(to top right, #54CF68, #00827A), url(${bgImg2})`,
            backgroundPosition: "left bottom,  right bottom, top right", 
            backgroundRepeat: "no-repeat",
          }}
          className="h-[250px] w-full text-white p-4 rounded-xl flex flex-col justify-center items-center"
        >
          <p className="text-3xl font-semibold">Resolved</p>
          <p className="text-2xl font-bold" >{resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
