import React from "react";

const Card = ({ contestData }) => {
  const {
    banner,
    description,
    participantCount,
    title,
  } = contestData;
  return (
    <div className="">
      <div
        className="

      max-w-sm 
      space-y-4
      mx-auto
      bg-white 
      rounded-xl
      shadow-xl
      overflow-hidden flex flex-col
      transform hover:scale-[1.02] 
      transition duration-300 border-gray-100 
    "
      >
        {/* 1. Creative image/card design */}
        <div className="h-48 overflow-hidden">
          <img
            src={banner}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-4 flex flex-col flex-1">
          {/* 2. Contest Name */}
          <h3
            className="
          text-2xl
          font-extrabold 
          text-gray-900 
          leading-tight
        "
          >
            {title}
          </h3>

          {/* 3. Participants count */}
          <div className="flex items-center text-sm font-medium text-indigo-600">
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-bold text-gray-700">{participantCount}</span>
            <span className="ml-1 text-gray-500">Participants</span>
          </div>

          {/* 4. Short description (using slice + "...") */}
          <p
            className="
          text-base 
          text-gray-600 
           overflow-hidden 
        "
          >
            {description}
          </p>

          {/* 5. Details button */}
          <button
            className="
             w-full 
            py-3 px-4 mt-auto
            text-center 
            text-white 
            font-semibold 
            rounded-lg
            bg-indigo-600 
            hover:bg-indigo-700 
            transition duration-150 
            focus:outline-none focus:ring-4 focus:ring-indigo-300 
          "
          >
            Details & Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
