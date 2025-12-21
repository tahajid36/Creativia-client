import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import Timer from "../Components/Timer";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

const ContestDetails = () => {
    const {user} = useAuth()
    const {id} = useParams()
    // console.log(id)
    const {data, isLoading, isError} = useQuery({
        queryKey: ['contest', id],
        queryFn: async () => {
          const res = await fetch(`https://creativia-server.vercel.app/contests/${id}`);
          return res.json();
        }
      })
    //   console.log(data)
      if (isLoading) return <Loading></Loading>;
      if (isError) return <p>Error loading contest!</p>;
      const {title, banner, description, participantCount, deadline, price, _id, prizeMoney} = data

      const handlePayment =async ()=>{
        const paymentInfo = {
            contestId: _id,
            title,
            description,
            banner, 
            price,
            participant: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL

            }

        }
        const res = await fetch("https://creativia-server.vercel.app/create-checkout-session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(paymentInfo),
          })
          const result = await res.json()
          if(!result?.url){
            console.log('stripe url is missing')
          }
         
            window.location.assign(result.url)
          
        
         
      }

  return (
    <div className="min-h-screen bg-[#191022] font-['Spline_Sans',sans-serif] text-white antialiased selection:bg-[#7311d4] selection:text-white">
      
      {/* 1. Breadcrumbs */}
      <div className="w-full border-b border-[#362348] bg-[#261933]/30">
        <div className="mx-auto max-w-[1280px] px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#ad92c9]">Home</span>
            <span className="text-[#ad92c9]">/</span>
            <span className="text-[#ad92c9]">Contests</span>
            <span className="text-[#ad92c9]">/</span>
            <span className="font-medium text-white">{title}</span>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1280px] px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Content */}
          <motion.div 
            className="lg:col-span-2 flex-1 min-w-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Image / Banner */}
            <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden mb-8 group">
              <img 
                src={banner} 
                alt="Contest Banner" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191022] via-[#191022]/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex gap-2 mb-4">
                  <span className="rounded-full bg-[#7311d4]/20 border border-[#7311d4]/30 px-3 py-1 text-xs font-semibold text-[#7311d4] uppercase tracking-wider animate-pulse">
                    Live Contest
                  </span>
                  <span className="rounded-full bg-[#261933] border border-[#362348] px-3 py-1 text-xs font-semibold text-[#ad92c9] uppercase tracking-wider">
                    Illustration
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white shadow-black drop-shadow-lg">
                  {title}
                </h1>
              </div>
            </div>

            {/* Tabs (Static) */}
            <div className="mb-8 flex gap-8 border-b border-[#362348]">
              <button className="border-b-2 border-[#7311d4] pb-3 text-sm font-semibold text-white">Overview</button>
              <button className="border-b-2 border-transparent pb-3 text-sm font-medium text-[#ad92c9] hover:text-white transition-colors">Rules</button>
              <button className="border-b-2 border-transparent pb-3 text-sm font-medium text-[#ad92c9] hover:text-white transition-colors">Discussion</button>
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4">Challenge Brief</h3>
                <p className="text-[#ad92c9] leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              {/* Requirement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-[#261933] rounded-xl p-5 border border-[#362348] flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#7311d4]/10 text-[#7311d4]">
                    <span className="material-symbols-outlined">palette</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Visual Style</h4>
                    <p className="text-sm text-[#ad92c9] mt-1">Unique silhouettes and neon accents expected.</p>
                  </div>
                </div>
                <div className="bg-[#261933] rounded-xl p-5 border border-[#362348] flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#7311d4]/10 text-[#7311d4]">
                    <span className="material-symbols-outlined">history_edu</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Storytelling</h4>
                    <p className="text-sm text-[#ad92c9] mt-1">Details should reflect environmental narrative.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sidebar */}
          <motion.div 
            className="w-full space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Prize Card */}
            <div className="rounded-xl border border-[#362348] bg-[#261933] p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-[#7311d4]">paid</span>
              </div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-[#ad92c9] mb-2">Total Prize Pool</h3>
              <div className="text-5xl font-black text-white tracking-tight mb-2">${prizeMoney}</div>
              <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 w-fit px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Guaranteed Payment</span>
              </div>
            </div>

            {/* Timer & Action Card */}
            <div className="rounded-xl border border-[#362348] bg-[#261933] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[#ad92c9]">Time Remaining</h3>
                <span className="flex size-2 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              
              <div className="mb-6">
                <Timer targetDate={deadline} />
              </div>

              <button 
                onClick={handlePayment} 
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#7311d4] py-4 px-4 font-bold text-white shadow-[0_4px_20px_rgba(115,17,212,0.4)] hover:bg-[#7311d4]/90 hover:-translate-y-0.5 transition-all"
              >
                <span>Register Entry</span>
                <span className="text-[#7311d4] bg-white rounded px-2 py-0.5 text-xs font-black">${price}</span>
              </button>
            </div>

            {/* Participants Card */}
            <div className="rounded-xl border border-[#362348] bg-[#261933] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ad92c9]">groups</span>
                  <span className="text-sm font-medium text-white">Participants</span>
                </div>
                <span className="text-sm font-bold text-white">{participantCount}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#191022] mb-4 overflow-hidden">
                <div className="h-full w-[75%] rounded-full bg-[#7311d4] shadow-[0_0_10px_#7311d4]"></div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-[#261933] bg-[#362348]" />
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#191022] ring-2 ring-[#261933] text-[10px] font-bold text-[#ad92c9]">
                  +{participantCount - 4}
                </div>
              </div>
            </div>

            {/* Previous Winner Widget */}
            <div className="rounded-xl border border-[#362348] bg-[#261933] p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#191022] flex items-center justify-center">
                 <span className="material-symbols-outlined text-[#7311d4]">workspace_premium</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Sarah Jenkins</h4>
                <p className="text-xs text-[#ad92c9]">Last Edition Winner</p>
              </div>
            </div>

          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContestDetails;
