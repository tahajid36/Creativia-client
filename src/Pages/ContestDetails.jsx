import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import Timer from "../Components/Timer";
import useAuth from "../Hooks/useAuth";

const ContestDetails = () => {
    const {user} = useAuth()
    const {id} = useParams()
    // console.log(id)
    const {data, isLoading, isError} = useQuery({
        queryKey: ['contest', id],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/contests/${id}`);
          return res.json();
        }
      })
    //   console.log(data)
      if (isLoading) return <p>Loading...</p>;
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
        const res = await fetch("http://localhost:5000/create-checkout-session", {
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
    <div className="min-h-screen text-white p-8 font-sans">
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section */}
      <motion.div
        className="md:col-span-2 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={banner}
            alt="Contest Preview"
            className="w-full h-96 object-cover"
          />
          <span className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            LIVE CONTEST
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <span className="bg-blue-700 px-3 py-1 rounded-full text-xs">Graphic Design</span>
          <span className="bg-blue-700 px-3 py-1 rounded-full text-xs">Character Art</span>
          <span className="bg-blue-700 px-3 py-1 rounded-full text-xs">3D Modeling</span>
        </div>
        <div className="bg-secondary p-3 mt-9 space-y-3 rounded-2xl text-black inter">
        <h1 className="text-4xl font-bold mt-4">
          {title}
        </h1>
        <p className=" mt-2">
          Create a character that embodies the spirit of a high-tech, low-life future. We are looking for unique silhouettes, neon accents, and storytelling through details.
        </p>

        </div>
       

        {/* Challenge Overview */}
        <motion.div
          className="mt-6 bg-secondary p-3 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl text-black font-semibold mb-2">Challenge Overview</h2>
          <p className="text-black">
            {description}
          </p>

          <h3 className="text-lg text-black font-semibold mt-4">Requirements</h3>
          <ul className="list-disc list-inside mt-2">
            {/* {data.rules?.map(l=> <li className="text-black">{l}</li>) || data.rules} */}
            
            
          </ul>
        </motion.div>
      </motion.div>

      {/* Right Sidebar */}
      <motion.div
        className="bg-secondary rounded-lg p-6 shadow-lg space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Prize */}
        <div className="space-y-2">
          <p className="text-black font-bold inter text-2xl">Total Prize Pool</p>
          <p className="text-3xl font-bold text-black">${prizeMoney}</p>
        </div>

        {/* Countdown */}
        <div className="bg-purple-700 rounded-lg p-4 text-center">
          <p className="text-gray-400 text-sm">Time Remaining</p>
          <div className="flex justify-center gap-3 mt-2 text-white font-mono">
            <Timer targetDate={deadline}></Timer>
          </div>
        </div>

        {/* Register Button */}
        <button onClick={handlePayment} className="w-full bg-green-400 text-black py-3 rounded-lg font-semibold hover:bg-green-500 transition-all">
          Register / Pay ${price}
        </button>

        {/* Participants */}
        <div>
          <p className="text-gray-400 text-sm">Participants</p>
          <div className="flex items-center mt-2 gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
            <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
            <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold">
              +{participantCount}
            </div>
          </div>
          <div className="w-full h-2 bg-gray-600 rounded-full mt-2">
            <div className="h-2 bg-green-400 rounded-full w-2/3"></div>
          </div>
        </div>

        {/* Previous Winner */}
        <div className="bg-purple-700 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Previous Winner</p>
          <p className="text-white font-semibold mt-1">Sarah Jenkins</p>
          <p className="text-gray-300 text-sm">Cyber-Noir Edition</p>
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default ContestDetails;
