import React from "react";
import Slide from "./Slider";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mb-10  gap-4 mx-auto w-11/12 ">
      <div className=" md:col-span-3 w-11/12 mx-auto">
        <Slide></Slide>
      </div>
      <div className="md:col-span-2 space-y-4  rounded-2xl">
        <h1 className="text-3xl text-center md:text-left md:text-[70px]  font-bold inter">
          A Creative Arena for Every Skill Level
        </h1>
        <p className="text-md md:text-xl text-center md:text-left">
          Enter contests, challenge others, and earn prizes. Or craft your own
          competition. Participate in contests from top organizers—or create
          your own competitive challenge.
        </p>
        {/* search section  */}

        <label className="input rounded-full w-11/12 mx-auto md:w-10/12 my-4 
        ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" className="" />
        </label>
        {/* popular section  */}
        <div className="flex gap-4">
          <p>
            <span className="font-bold text-xl">Popular: </span>
          </p>
          <div className="">
            <div className="badge mx-2 badge-primary">Graphics</div>
            <div className="badge mx-2 badge-neutral">Typing</div>
            <div className="badge mx-2 badge-secondary">Coding</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
