import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllContests = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["contestData"],
    queryFn: () =>
      fetch("http://localhost:5000/contests").then((result) => result.json()),
  });
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl text-primary">This is all context page</h1>
    </div>
  );
};

export default AllContests;
