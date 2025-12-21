import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  Trophy, 
  Star, 
  Wallet, 
  Plus, 
  Search, 
  Bell, 
  ChevronDown,
  TrendingUp,
  MoreHorizontal
} from 'lucide-react';
import useAuth from '../../Hooks/useAuth';

const DashboardHome = () => {
    const {user} = useAuth()
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for cards
      gsap.from(".stat-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Simple hover animation logic for the chart area
      gsap.to(".chart-fill", {
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0d0f14] text-white p-4 md:p-8 font-sans">
      
      {/* Top Navigation Bar */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="hover:text-white cursor-pointer">🏠</span>
          <span>/</span>
          <span className="hover:text-white cursor-pointer">Dashboard</span>
          <span>/</span>
          <span className="text-gray-300">Overview</span>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search contests..." 
              className="w-full bg-[#161b22] border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button className="relative p-2 bg-[#161b22] rounded-full hover:bg-gray-800">
            <Bell className="w-5 h-5 text-gray-400" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0d0f14]"></div>
          </button>
          <div className="flex items-center gap-3 pl-2 border-l border-gray-800">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">{user?.displayName}</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-200">
              <img src={user?.photoURL} alt="profile" />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Hero Welcome Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.displayName}👋</h1>
          <p className="text-gray-500">Here is what is happening with your contests today.</p>
        </div>
       
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<Trophy className="w-5 h-5 text-gray-300" />} label="Total Contests" value="12" trend="+12%" />
        <StatCard icon={<Star className="w-5 h-5 text-gray-300" />} label="Active Wins" value="4" trend="+5%" />
        <StatCard icon={<Wallet className="w-5 h-5 text-gray-300" />} label="Total Earnings" value="$3,450" trend="+22%" />
      </div>

      {/* Earnings Chart Card */}
      <div className="bg-[#161b22]/50 border border-gray-800/50 rounded-[32px] p-8 relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-gray-400 font-medium mb-1">Earnings Overview</p>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">$3,450</h2>
              <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full">+15% vs last month</span>
            </div>
          </div>
          <div className="flex bg-black/30 rounded-full p-1 border border-gray-800">
            <button className="px-4 py-1.5 text-xs bg-[#2d333b] rounded-full">30 Days</button>
            <button className="px-4 py-1.5 text-xs text-gray-500 hover:text-white">7 Days</button>
            <button className="px-4 py-1.5 text-xs text-gray-500 hover:text-white">24 Hours</button>
          </div>
        </div>

        {/* Mock Graphic Wave Section */}
        <div className="h-64 relative mt-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path 
              d="M0,150 Q150,160 250,130 T450,110 T650,150 T850,50 L1000,200 L0,200 Z" 
              fill="url(#gradient)"
              className="chart-fill"
            />
            <path 
              d="M0,150 Q150,160 250,130 T450,110 T650,150 T850,50" 
              fill="none" 
              stroke="#1d4ed8" 
              strokeWidth="3" 
            />
            {/* Glow dot */}
            <circle cx="850" cy="50" r="6" fill="#1d4ed8" filter="blur(2px)" />
            <circle cx="850" cy="50" r="3" fill="white" />
          </svg>
          <div className="flex justify-between mt-4 text-xs text-gray-600 px-2 font-medium">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>

      {/* Recent Submissions placeholder */}
      <div className="mt-8 bg-[#161b22]/50 border border-gray-800/50 rounded-[32px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Recent Submissions</h3>
          <MoreHorizontal className="text-gray-600 cursor-pointer" />
        </div>
        <div className="space-y-4">
           <div className="h-12 bg-gray-800/30 rounded-xl animate-pulse"></div>
           <div className="h-12 bg-gray-800/30 rounded-xl animate-pulse w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for individual Stat Cards
const StatCard = ({ icon, label, value, trend }) => {
  return (
    <div className="stat-card bg-[#161b22]/50 border border-gray-800/50 p-6 rounded-[32px] hover:border-gray-700 transition-all group cursor-default">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-[#21262d] rounded-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex items-center gap-1 text-xs text-green-400 font-semibold bg-green-500/10 px-2 py-1 rounded-full">
          <TrendingUp className="w-3 h-3" />
          {trend}
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardHome;