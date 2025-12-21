import {
  User,
  Mail,
  Camera,
  Save,
  MoreHorizontal,
  Trophy,
  Lightbulb,
} from "lucide-react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useAuth from "../../Hooks/useAuth";

const chartData = [
  { name: "Wins", value: 65 },
  { name: "Losses", value: 35 },
];

const COLORS = ["#1325ec", "#282a39"];

const MyProfile = () => {
  const {user} = useAuth()

  return (
    <main className="flex-grow w-full px-4 md:px-10 py-8 md:py-10 flex justify-center  bg-base-200">
      <div className="w-full max-w-[1100px] flex flex-col gap-8">
        {/* Page Heading */}
        <div>
          <h1 className="text-3xl md:text-4xl font-black">Profile Settings</h1>
          <p className=" ">
            Manage your personal information and track your contest performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <div className="lg:col-span-8 bg-base-100 ">
            <div className="  rounded-xl p-6 md:p-8 border">
              {/* Header */}
              <div className="flex flex-col sm:flex-row gap-6 border-b pb-8 mb-8">
                <div className="relative group cursor-pointer">
                  <div
                    className="h-28 w-28 rounded-full bg-cover"
                    style={{
                      backgroundImage:
                        `url(${user.photoURL})`,
                    }}
                  />
                  <div className="absolute inset-0  rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Camera className="" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{user.displayName}</h3>
                  <p className="text-slate-500">{user?.email}</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  icon={<User size={18} />}
                  label="Full Name"
                  value="Alex Sterling"
                />
                <Input
                  icon={<Mail size={18} />}
                  label="Email"
                  value="alex.sterling@design.com"
                />
              </div>

              <textarea
                className="w-full mt-6 min-h-[140px] p-4 rounded-lg  "
                defaultValue="Senior UI/UX Designer passionate about clean interfaces."
              />

              <div className="flex justify-end mt-6">
                <button className="flex items-center gap-2 bg-primary  px-8 py-3 rounded-lg">
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Performance Card */}
            <div className="rounded-xl p-6 border">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Performance Overview</h3>
                <MoreHorizontal className="" />
              </div>

              {/* DONUT CHART */}
              <div className="h-[260px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((_, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* CENTER LABEL */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-sm ">Win Rate</span>
                  <span className="text-4xl font-black">65%</span>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Stat label="Contests" value="42" />
                <Stat label="Victories" value="27" highlight />
                <div className="col-span-2  dark:bg-[#111218] rounded-lg p-4 flex items-center justify-center gap-2">
                  <Trophy className="text-yellow-500" />
                  <span className="font-bold">#142</span>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="bg-primary/10 rounded-xl p-6">
              <div className="flex gap-3">
                <Lightbulb className="text-primary" />
                <div>
                  <h4 className="font-bold text-primary">Pro Tip</h4>
                  <p className="text-sm">
                    Complete your bio to increase visibility by 25%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Input = ({ label, value, icon }) => (
  <label className="flex flex-col gap-2">
    <span className="text-sm font-semibold">{label}</span>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      <input
        className="w-full h-12 pl-11 pr-4 rounded-lg bg-slate-50 dark:bg-input-bg border"
        defaultValue={value}
      />
    </div>
  </label>
);

const Stat = ({ label, value, highlight }) => (
  <div className="bg-slate-50 dark:bg-[#111218] rounded-lg p-4 flex flex-col items-center">
    <span className="text-xs uppercase text-slate-500">{label}</span>
    <span className={`text-2xl font-bold ${highlight ? "text-primary" : ""}`}>
      {value}
    </span>
  </div>
);

export default MyProfile;
