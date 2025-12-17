import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import Card from "./Card";

const SortedCard = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["contestData"],
    queryFn: () =>
      fetch("http://localhost:5000/contests").then((result) => result.json()),
  });
  if (error) {
    console.log(error.message);
  }
  if (isPending) {
    return (
      <h1 className="text-center m-8 text-4xl font-bold inter">
        Loading.......
      </h1>
    );
  }
  const sortedData = data.sort(
    (a, b) => b.participantCount - a.participantCount
  );
  const finalSortedData = sortedData.slice(0, 8);
  return (
    <section className="w-full py-12 px-4 sm:px-8 lg:px-16 bg-transparent">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="flex flex-row justify-between items-end mb-10 w-full">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Popular Contests
            </h2>
            <p className="text-[#95c6a9] text-sm md:text-base">
              Join the community and showcase your skills.
            </p>
          </div>
          
          <button className="hidden sm:flex group items-center justify-center gap-2 px-6 h-10 rounded-full border border-[#254632] bg-[#1a2c22] hover:border-[#36e27b] transition-all duration-300">
            <span className="text-sm font-bold text-white group-hover:text-[#36e27b] transition-colors">Show All</span>
            <span className="text-white group-hover:text-[#36e27b] transition-colors">→</span>
          </button>
        </div>

        {/* Contest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-6 md:gap-8">
        {finalSortedData.map(contestData => <Card contestData={contestData}></Card>)}
        </div>

        {/* Mobile Show All Button */}
        <div className="flex sm:hidden w-full justify-center mt-8">
          <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-full border border-[#254632] bg-[#1a2c22] w-full">
            <span className="text-base font-bold text-white">Show All Contests</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default SortedCard;
