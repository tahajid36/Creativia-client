import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageContest = () => {
    const axiosSecure = useAxiosSecure()
  // Example data structure based on your requirements
  const { isPending, error, data: contests } = useQuery({
    queryKey: ["manageContestData"],
    queryFn:async () =>
    { const res = await axiosSecure.get("/manage-contests")
        console.log(res.data)
        return res.data
    }
    
  });
  if (error) {
    console.log(error.message);
  }
  if (isPending) {
    return <h1 className="inter text-xl md:text-4xl text-center m-23 font-bold ">Loading.......</h1>;
  }

  const handleConfirm = (contest, status) => {
    Swal.fire({
      title: "Approve Contest?",
      text: "This will make the contest visible to all users.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7d13e8",
      cancelButtonColor: "#302839",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/contest/${contest._id}/status`, {status})
        // Add your logic to update status to "Confirmed" here
        console.log(status, contest)
        Swal.fire("Confirmed!", "Contest is now live.", "success");
        
      }
    });
  };

  const handleDelete = (contestId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#302839",
      confirmButtonText: "Yes, delete it!",
    }).then( async(result) => {
      if (result.isConfirmed) {
         await axiosSecure.delete(`/contests/${contestId}`)
        // Add your logic to delete the contest here
        Swal.fire("Deleted!", "Contest has been removed.", "success");

      }
    });
  };

  return (
    <div className="py-10 min-h-screen w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Manage Contests
          </h1>
          <p className="text-sm">
            Review, approve, or remove contest submissions.
          </p>
        </div>
        <div className="stats shadow bg-base-200 border border-white/5 text-white">
          <div className="stat px-6">
            <div className="stat-title text-gray-400">Total Pending</div>
            <div className="stat-value text-[#7d13e8] text-2xl">12</div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#1a1421] shadow-2xl">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-base-200 ">
            <tr>
              <th className="py-4 px-6">Contest Info</th>
              <th>Category</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="">
            {contests.map((contest) => (
              <tr
                key={contest._id}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="font-bold  text-base">
                      {contest.title}
                    </span>
                    <span className="text-xs text-gray-500">
                      By: {contest.owner?.email}
                    </span>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost border-white/10 text-xs px-3 py-2 uppercase font-bold tracking-wider">
                    {contest.category}
                  </span>
                </td>
                <td>
                  <div
                    className={`badge gap-2 font-bold px-3 py-3 border-none ${
                      contest?.status === "active"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-yellow-500/10 text-yellow-500"
                    }`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${
                        contest?.status === "active"
                          ? "bg-green-500"
                          : "bg-yellow-500 animate-pulse"
                      }`}
                    ></span>
                    {contest?.status}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    {/* Approve Button */}
                    <button
                      onClick={() => handleConfirm(contest, 'active')}
                      // Disables if status is already active/Confirmed OR if it was already rejected
                      disabled={
                        contest.status === "active" ||
                        contest.status === "rejected"
                      }
                      className="btn btn-sm bg-[#7d13e8] hover:bg-[#5e0eb0] border-none text-white px-4 rounded-lg first-letter:uppercase disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Approve
                    </button>

                    {/* Reject Button */}
                    <button
                      onClick={() => handleConfirm(contest, 'rejected')} // Assuming you have a handleReject function
                      // Disables if status is already active/Confirmed OR if it was already rejected
                      disabled={
                        contest.status === "active" ||
                        contest.status === "rejected"
                      }
                      className="btn btn-sm btn-ghost hover:bg-white/10 text-gray-400 font-bold px-4 rounded-lg first-letter:uppercase disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Reject
                    </button>

                    {/* Delete Button - Usually remains enabled so admins can remove any contest */}
                    <button
                      onClick={() => handleDelete(contest._id)}
                      className="btn btn-sm bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border-none px-4 rounded-lg transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContest;
