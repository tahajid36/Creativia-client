import React from "react";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-10 h-screen bg-background-light text-text-main-light">
      {/* Sidebar */}
      <aside className="col-span-2 border-r border-gray-100">
        <nav className="px-4 py-6">
          <p className="px-4 mb-2 text-xs font-semibold text-text-sub-light uppercase tracking-wider">
            Menu
          </p>

          <ul className="space-y-1">
            <li>
              <Link
                to={'/dashboard'}
                className="flex items-center px-4 py-3 text-gray-500 rounded-xl"
              >
                <span className="text-sm font-medium">Profile</span>
              </Link>
            </li>

            <li>
              <Link
                to={'/dashboard/addcontest'}
                className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl"
              >
                <span className="text-sm font-medium">Add Contests</span>
              </Link>
            </li>

            <li>
              <Link
                to={'/dashboard/participatedcontest'}
                className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl"
              >
                <span className="text-sm font-medium">
                  Participated Contests
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={'/dashboard/editcontest'}
                className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl"
              >
                <span className="text-sm font-medium">
                  Edit Contests
                </span>
              </Link>
            </li>

            <li>
              <Link
                to={'/dashboard/mycreatedcontests'}
                className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl"
              >
                <span className="text-sm font-medium">My Created Contests</span>
              </Link>
            </li>
            <li>
              <Link to={'/'}
                className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl"
              >
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content (Empty) */}
      <div className="col-span-8 bg-purple-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
