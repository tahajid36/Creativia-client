import React from "react";
import { Link, Outlet } from "react-router";
import useRole from "../../Hooks/useRole";
import Loading from "../../Components/Loading";

const DashboardLayout = () => {
  const [role, isLoading] = useRole();
  console.log(role);
  if(isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="grid grid-cols-10 h-screen">
      {/* Sidebar */}
      <aside className="col-span-2 bg-[#0f0a1e] border-r border-purple-900/50 min-h-screen">
        <nav className="px-4 py-8">
          <div className="flex items-center gap-2 px-4 mb-6">
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <p className="text-[10px] font-bold text-purple-400/60 uppercase tracking-[0.2em]">
              Main Menu
            </p>
          </div>

          <ul className="space-y-2">
          <li>
                  <Link
                    to="/dashboard/myprofile"
                    className="flex items-center gap-3 px-4 py-3 text-purple-100/70 hover:text-white hover:bg-white/5 rounded-xl transition"
                  >
                    <span className="text-sm font-semibold">Profile</span>
                  </Link>
                </li>
            {role === "creator" && (
              <>
                <li>
                  <Link
                    to="/dashboard/mycreatedcontests"
                    className="flex items-center gap-3 px-4 py-3 text-purple-100/70 hover:text-white hover:bg-white/5 rounded-xl transition"
                  >
                    <span className="text-sm font-semibold">
                      My Created Contests
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addcontest"
                    className="flex items-center gap-3 px-4 py-3 text-purple-100/70 hover:text-white hover:bg-white/5 rounded-xl transition"
                  >
                    <span className="text-sm font-semibold">Add Contests</span>
                  </Link>
                </li>
              </>
            )}

            {role === "user" && (
              <>
                
                <li>
                  <Link
                    to="/dashboard/participatedcontest"
                    className="flex items-center gap-3 px-4 py-3 text-purple-100/70 hover:text-white hover:bg-white/5 rounded-xl transition"
                  >
                    <span className="text-sm font-semibold">
                      Participated Contests
                    </span>
                  </Link>
                </li>{" "}
              </>
            )}

            {role === "admin" && (
              <>
                <li>
                  <Link
                    to="/dashboard/manageusers"
                    className="flex items-center gap-3 px-4 py-3 text-purple-100/70 hover:text-white hover:bg-white/5 rounded-xl transition"
                  >
                    <span className="text-sm font-semibold">Manage Users</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/managecontest"
                    className="flex items-center gap-3 px-4 py-3 text-purple-100/70 hover:text-white hover:bg-white/5 rounded-xl transition"
                  >
                    <span className="text-sm font-semibold">
                      Manage Contest
                    </span>
                  </Link>
                </li>
              </>
            )}

            <div className="pt-4 mt-4 border-t border-purple-900/40">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 px-4 py-3 text-purple-300/50 hover:text-purple-300 hover:bg-purple-500/10 rounded-xl transition"
                >
                  <span className="text-sm font-semibold">Back to Home</span>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="col-span-8 bg-[#0b0618] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
