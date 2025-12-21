import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../Components/Loading";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { PaintBucket } from "lucide-react";

const MyCreatedContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [openWinnerModal, setOpenWinnerModal] = React.useState(false);
  const [selectedContest, setSelectedContest] = React.useState(null);

  const { data: createdContest = [], isLoading } = useQuery({
    queryKey: ["createdContest", user?.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/postedcontest/${user?.email}`
      );
      return result.data;
    },
  });
  // Fetch participants for the selected contest
  const { data: participants = [] } = useQuery({
    queryKey: ["contestParticipants", selectedContest?._id],
    queryFn: async () => {
      if (!selectedContest) return [];
      const res = await axiosSecure.get(
        `/payments/contest/${selectedContest._id}`
      );
      return res.data;
    },
    enabled: !!selectedContest, // only fetch when a contest is selected
  });
  const handleDeclareWinner = async (participant) => {
    console.log(participant);
    Swal.fire({
      title: "Declare Winner?",
      text: `${participant.name} will be the final winner`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.patch(`/contest/${participant.contestId}/winner`, {
          WinnerName: participant.participantName,
          WinnerEmail: participant.participant,
        });

        Swal.fire("Success", "Winner declared!", "success");
      }
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="bg-[#191022] font-['Spline_Sans',sans-serif] text-white antialiased min-h-screen p-4 md:p-8 lg:px-40">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Page Heading & Stats */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-end">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              My Posted Contests
            </h1>
            <p className="text-[#ad92c9] text-base font-normal">
              Track your posted contests.
            </p>
          </div>

          {/* Quick Stats Row */}
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-4 bg-[#261933] border border-[#362348]">
              <p className="text-[#ad92c9] text-xs font-medium uppercase tracking-wider">
                Active
              </p>
              <p className="text-white text-2xl font-bold leading-tight">3</p>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-4 bg-[#261933] border border-[#362348]">
              <p className="text-[#ad92c9] text-xs font-medium uppercase tracking-wider">
                Pending
              </p>
              <p className="text-white text-2xl font-bold leading-tight">1</p>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-4 bg-[#261933] border border-[#362348]">
              <p className="text-[#7311d4] text-xs font-medium uppercase tracking-wider">
                Won
              </p>
              <p className="text-[#7311d4] text-2xl font-bold leading-tight">
                2
              </p>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="w-full overflow-hidden rounded-xl border border-[#362348] bg-[#261933] shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#261933] border-b border-[#362348]">
                <tr>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs w-[35%]">
                    Contest Name
                  </th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs">
                    Status
                  </th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs">
                    Prize
                  </th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs">
                    Action
                  </th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs text-right">
                    Find Winner
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#362348]">
                {createdContest.map((p) => (
                  <tr
                    key={p._id}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-cover bg-center shrink-0 border border-[#362348]"
                          style={{ backgroundImage: `url('${p.image}')` }}
                        ></div>
                        <div>
                          <h3 className="font-bold text-white text-base leading-snug">
                            {p.title}
                          </h3>
                          <p className="text-[#ad92c9] text-xs">{p.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white font-medium">
                      ${p.price}
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        className="btn-xs btn bg-green-700"
                        disabled={p.status === "completed"}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-xs btn bg-red-700"
                        disabled={p.status === "completed"} // Disable if completed
                      >
                        Delete
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => {
                          setSelectedContest(p);
                          setOpenWinnerModal(true);
                        }}
                        className="bg-purple-600 btn btn-sm text-sm font-medium"  disabled={p.status === "pending" || p.status === "completed"} 
                      >
                        Declare Winner
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Winner Modal */}
        {openWinnerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-[#261933] w-full max-w-2xl rounded-xl border border-[#362348] p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">
                  Participants — {selectedContest?.title}
                </h2>
                <button
                  onClick={() => setOpenWinnerModal(false)}
                  className="text-[#ad92c9] hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-x-auto rounded-lg border border-[#362348]">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#1b1226] border-b border-[#362348]">
                    <tr>
                      <th className="px-4 py-3 text-[#ad92c9]">SL No.</th>
                      <th className="px-4 py-3 text-[#ad92c9]">Email</th>
                      <th className="px-4 py-3 text-[#ad92c9]">Name</th>
                      <th className="px-4 py-3 text-[#ad92c9] text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#362348]">
                    {participants.map((participant, index) => (
                      <tr key={index} className="hover:bg-white/5">
                        <td className="px-4 py-3 text-white">{index + 1}</td>
                        <td className="px-4 py-3 text-[#ad92c9]">
                          {participant.participant}
                        </td>
                        <td className="px-4 py-3 text-[#ad92c9]">
                          {participant?.participantName}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => handleDeclareWinner(participant)}
                            className="btn btn-xs bg-green-600"
                          >
                            Declare Winner
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setOpenWinnerModal(false)}
                  className="btn btn-sm bg-[#362348]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCreatedContest;
