import React from "react";
import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
    const {user} = useAuth()
  return (
    <div className="mt-[100px] flex justify-center items-start p-6">
      <div className="w-full max-w-md bg-secondary rounded-xl shadow-md p-6">

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full mb-4 border"
          />

          <h2 className="text-xl font-semibold text-gray-800">
            User Name
          </h2>

          <p className="text-sm text-gray-500">
            {user?.displayName}
          </p>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-500 uppercase mb-1">
              Full Name
            </p>
            <p className="text-gray-800">
            {user?.displayName}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase mb-1">
              Email Address
            </p>
            <p className="text-gray-800">
            {user?.email}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase mb-1">
              Address
            </p>
            <p className="text-gray-800">
              Bangladesh
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
