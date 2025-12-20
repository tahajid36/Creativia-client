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
      className="group relative flex flex-col w-full rounded-2xl h-[420px] bg-[#2d1f3b] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#7d13e8]/20 transition-all duration-300 hover:-translate-y-2 border border-white/10"
    >
      {/* Image Area */}
      <div className="relative h-56 w-full overflow-hidden">
        <div 
          className="absolute h-56 inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d1f3b] via-transparent to-transparent opacity-90"></div>
        
        {/* Participant Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <span className="text-[#a855f7] text-[14px]">👥</span>
          <span className="text-xs font-bold text-white">{participantCount}</span>
        </div>
      </div>
  
      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5 relative">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-xl font-bold leading-tight text-white group-hover:text-[#7d13e8] transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
  
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Deadline</span>
            <div className="flex items-center gap-1 text-xs font-medium text-gray-300">
              <span className="text-[14px] text-[#7d13e8]">schedule</span>
              <span>{deadline}</span>
            </div>
          </div>
          
          <Link 
            to={`/contests/${_id}`} 
            className="flex items-center justify-center h-10 px-6 bg-[#7d13e7]/10 border border-[#7d13e7]/30 hover:bg-[#7d13e7] rounded-xl transition-all duration-300 group/btn shadow-lg"
          >
            <span className="text-xs font-bold text-white transition-colors">
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
