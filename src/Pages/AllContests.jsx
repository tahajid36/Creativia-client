import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "../Components/Card";
import Loading from "../Components/Loading";

const AllContests = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["contestData"],
    queryFn: () =>
      fetch("https://creativia-server.vercel.app/contests").then((result) => result.json()),
  });
  if (error) {
    console.log(error.message);
  }
  if (isPending) {
    return <Loading></Loading>;
  }
  // console.log(data);
  return (
    <div className="my-8">
      <h1 className="text-3xl mb-13 md:text-5xl text-[#7d13e7] font-bold text-center">Participate Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((contestData) => (
          <Card contestData={contestData}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllContests;
