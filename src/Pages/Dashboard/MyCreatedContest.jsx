import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const MyCreatedContest = () => {
  const {user} =useAuth()
  const {data: createdContest = [], isLoading} = useQuery({
    queryKey: ['createdContest', user?.email],
    queryFn: async () =>{
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/postedcontest/${user?.email}`
      )
      return result.data
    }
  })
  console.log(createdContest)

    return (
      <div>
         <div>
          <div className="bg-[#191022] font-['Spline_Sans',sans-serif] text-white antialiased min-h-screen p-4 md:p-8 lg:px-40">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
        
        {/* Page Heading & Stats */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-end">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">My Posted Contests</h1>
            <p className="text-[#ad92c9] text-base font-normal">Track your posted contests.</p>
          </div>
          
          {/* Quick Stats Row */}
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-4 bg-[#261933] border border-[#362348]">
              <p className="text-[#ad92c9] text-xs font-medium uppercase tracking-wider">Active</p>
              <p className="text-white text-2xl font-bold leading-tight">3</p>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-4 bg-[#261933] border border-[#362348]">
              <p className="text-[#ad92c9] text-xs font-medium uppercase tracking-wider">Pending</p>
              <p className="text-white text-2xl font-bold leading-tight">1</p>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-lg p-4 bg-[#261933] border border-[#362348]">
              <p className="text-[#7311d4] text-xs font-medium uppercase tracking-wider">Won</p>
              <p className="text-[#7311d4] text-2xl font-bold leading-tight">2</p>
            </div>
          </div>
        </div>

        {/* Toolbar: Filter, Search, Sort, Toggle */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-between bg-[#261933]/50 p-2 rounded-xl border border-[#362348]">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 px-2">
            <button className="flex h-9 shrink-0 items-center justify-center px-4 rounded-lg bg-[#7311d4] text-white text-sm font-medium">
              All
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="w-full overflow-hidden rounded-xl border border-[#362348] bg-[#261933] shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#261933] border-b border-[#362348]">
                <tr>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs w-[35%]">Contest Name</th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs">Status</th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs">Prize</th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs">Action</th>
                  <th className="px-6 py-4 font-semibold text-[#ad92c9] uppercase tracking-wider text-xs text-right">Submission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#362348]">
                {/* Single Table Row */}
                {createdContest.map(p => <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-cover bg-center shrink-0 border border-[#362348]" 
                        style={{ backgroundImage: `url('${p.image}')` }}
                      ></div>
                      <div>
                        <h3 className="font-bold text-white text-base leading-snug">{p.title}</h3>
                        <p className="text-[#ad92c9] text-xs">{p.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">${p.price}</td>
                  <td className="px-6 py-4 space-x-2">
                    
                      <button className='btn-xs btn  bg-green-700'>Edit</button> 
                      <button className='btn-xs btn  bg-red-700'>Delete</button>
                    
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-white hover:text-[#7311d4] transition-colors btn-outline btn btn-sm text-sm font-medium">See Submission</button>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer / Pagination */}
          <div className="bg-[#261933] border-t border-[#362348] p-4 flex items-center justify-between text-xs text-[#ad92c9]">
            <span>Showing 1 of 1 contest</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border border-[#362348] opacity-50 cursor-not-allowed" disabled>Previous</button>
              <button className="px-3 py-1 rounded border border-[#362348] opacity-50 cursor-not-allowed" disabled>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

      </div>
   
    );
};

export default MyCreatedContest;