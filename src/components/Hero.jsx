import React from "react";
import { HiSearch } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-[#fafbfc] pt-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-6">
        <h1 className="xl:text-7xl lg:text-5xl sm:text-3xl text-2xl xl:leading-normal lg:leading-normal font-bold text-center">
          Find you <span className="bg-primary text-white whitespace-pre">dream jobs</span> in <br /> New Castle
        </h1>
        <p className="text-2xl lg:w-1/2 text-center leading-10 my-8 ">
          When you are searching for new job, there are a few things you can do
          to get the best results. Here are some tips to help you find the right
          job for you.
        </p>
        <div className="flex items-center border-2 border-solid border-primary rounded-full h-16 lg:w-2/5 w-full py-2 relative mt-4">
          <input type="text" placeholder="Search for job" className="bg-transparent h-full w-full border-none outline-none absolute px-20 xl:text-2xl text-base" />
          <button className="bg-primary rounded-full text-white w-12 h-12 py-2 flex items-center justify-center border-none ml-2">
            <HiSearch className="text-2xl"/>
          </button>
          <button className="flex items-center bg-[#f3f3f4] absolute right-2 rounded-full lg:px-4 px-2 h-[90%] xl:text-xl text-sm font-normal gap-x-2 border-none">
            <IoLocationOutline className="text-black lg:text-2xl"/>
            Any Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
