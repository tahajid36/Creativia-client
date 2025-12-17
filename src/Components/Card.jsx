import React from "react";
import { Link } from "react-router";

const Card = ({ contestData }) => {
  const {
    _id,
    banner,
    description,
    participantCount,
    title, deadline
  } = contestData;
  return (
    <div className="">
        <div 
              key={_id}
              className="group relative flex flex-col w-full rounded-2xl h-[400px] bg-[#1a2c22]  overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#36e27b1a] transition-all duration-300 hover:-translate-y-2 border border-white/5"
            >
              {/* Image Area */}
              <div className="relative h-60 w-full overflow-hidden">
                <div 
                  className="absolute h-60 inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${banner})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2c22] via-transparent to-transparent opacity-90"></div>
                
                {/* Participant Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="text-[#36e27b] text-[14px]">👥</span>
                  <span className="text-xs font-bold text-white">{participantCount}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1 p-5 relative">
                <div className="flex flex-col gap-2 mb-4">
                  <h3 className="text-xl font-bold leading-tight text-white group-hover:text-[#36e27b] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#95c6a9] line-clamp-2">
                    {description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs font-medium text-white/40">
                    <span className="text-[14px]">🕒</span>
                    <span>{deadline}</span>
                  </div>
                  
                  <Link to={`/contests/${_id}`} className="flex items-center justify-center h-9 px-5 bg-[#254632] hover:bg-[#36e27b] rounded-full transition-colors duration-300 group/btn">
                    <span className="text-xs font-bold text-white group-hover/btn:text-[#112117]">
                      View Details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Card;
