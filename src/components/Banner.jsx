import React from "react";

const Banner = () => {
  return (
    <div className="lg:px-52 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse lg:gap-24 items-center justify-center bg-sky-500">
      <div className="h-full lg:py-40 flex flex-col justify-center lg-items-start items-center">
        <p className="text-[#f6f3ec] mb-4">
            Showcase your skills, achievements and academic experience on MediNet.
        </p>
        <h1 className="text-[#f6f3ec] text-5xl font-semibold mb-4 leading-normal capitalize">
          Build your professional Healthcare profile
        </h1>
        <div className="float-left w-[400px] h-[100px]">
            <button className="mx-4 w-1/3 my-1 font-medium mt-4 rounded-full bg-white text-sky-700 hover:bg-sky-900 hover:text-white py-2 transition-color duration-300">
                Sign In
            </button>
            <button className="mx-4 w-1/3 my-1 font-medium mt-4 rounded-full bg-white text-sky-700 hover:bg-sky-900 hover:text-white py-2 transition-color duration-300">
                Sign Up
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
