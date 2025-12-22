import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { isPending, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  // console.log(data)
  if (error) {
    console.log(error.message);
  }
  if (isPending) {
    return (
      <h1 className="inter text-xl md:text-4xl text-center m-23 font-bold ">
        Loading.......
      </h1>
    );
  }

  const handleRoleChange = (user, role) => {
    console.log(user._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/${user._id}/role`, { role });
        Swal.fire({
          title: "Changed!",
          text: "Role has been Changed.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800">
      <h1 className="text-4xl font-bold inter ml-15 mb-14 mt-12">Manage Users</h1>
      <div className="w-11/12 mx-auto">
      <table className="min-w-full divide-y  divide-slate-800">
        <thead className="bg-[#111722]">
          <tr>
            {["User", "Email", "Change Role", "Current Role"].map((head) => (
              <th
                key={head}
                className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 bg-[#1a2230]">
          {data?.map((user) => (
            <tr
              key={user._id || user.id}
              className="hover:bg-slate-800/50 transition-colors group"
            >
              {/* USER COLUMN */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {user.img ? (
                    <img
                      src={user.img}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#135bec]/50 transition-all"
                      alt={user.name}
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                      {user.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <div className="ml-4">
                    <div className="text-sm font-bold text-white">
                      {user.name}
                    </div>
                  </div>
                </div>
              </td>

              {/* EMAIL COLUMN - Fixed classes added here */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-slate-400">{user.email}</div>
              </td>

              {/* ROLE SELECT COLUMN */}
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  onChange={(e) => handleRoleChange(user, e.target.value)}
                  defaultValue={user.role}
                  className={`block w-32 pl-3 pr-8 py-1.5 text-xs font-medium border border-slate-700 rounded-md bg-[#111722] cursor-pointer focus:ring-1 transition-colors
                ${
                  user.role === "Admin"
                    ? "text-[#135bec] focus:ring-[#135bec]"
                    : "text-[#7c3aed] focus:ring-[#7c3aed]"
                }`}
                >
                  <option value="admin">Admin</option>
                  <option value="creator">Creator</option>
                  <option value="user">User</option>
                </select>
              </td>

              {/* CURRENT ROLE TEXT COLUMN */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ManageUsers;
