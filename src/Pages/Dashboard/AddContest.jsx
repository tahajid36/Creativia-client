import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddContest = () => {
  const {user} = useAuth()

  const {isPending, mutateAsync, reset: mutationReset} = useMutation({
    mutationFn: async payload => 
      fetch("https://creativia-server.vercel.app/contests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }),
    onSuccess: data => {
      console.log(data)
      // toast will be placed here 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your contest posted succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
      mutationReset()
    },
    onError: error =>{
      console.log(error)
    },
    onMutate: payload => {
      console.log('Newly added data will be', payload)
    },
    onSettled: (data, error)=>{
      console.log('onsettled', data)
      if(error) console.log(error)
      
    }
    

  })
  const {register, handleSubmit, formState: {errors}, reset} = useForm()
  const onSubmit = async data => {
    const {title, description, price, prizeMoney, category, banner, rules} = data

    try{
      const contestData = {
        banner,category, status:'pending' , title, description,rules, price: Number(price), prizeMoney: Number(prizeMoney),
        owner: {
          image: user?.photoURL,
          name: user?.displayName,
          email: user?.email
        }
      }
      await mutateAsync(contestData)
      reset()
    }
    catch(error) {
      console.log(error)
    }
  }

  if(isPending) return <h1 className="text-4xl font-bold inter text-purple-600 text-center">Loading....</h1>
  return (
    <div className="relative min-h-screen w-full bg-[#191022] font-display text-white antialiased overflow-x-hidden">
  {/* Decorative Background Effects */}
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7311d4]/20 rounded-full blur-[100px]"></div>
    <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7311d4]/10 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]"></div>
  </div>

  <main className="relative z-10 flex flex-col min-h-screen">
    <div className="flex-1 px-4 md:px-8 py-8 lg:px-12 w-full max-w-7xl mx-auto">
      
      {/* Header */}
      <header className="flex flex-col gap-2 mb-10">
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
          Post New Contest
        </h1>
        <p className="text-[#ad92c9] text-lg font-normal">
          Enter your contest details in this form and click submit to launch.
        </p>
      </header>

      {/* Form with React Hook Form Logic */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Main Details */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-[#241830]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Contest Details</h2>
            </div>

            <div className="flex flex-col gap-6">
              {/* Contest Title */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">
                  Contest Title<span className="text-[#7311d4] ml-1">*</span>
                </label>
                <input
                  {...register('title', {
                    required: 'title is required',
                    maxLength: { value: 20, message: 'title cannot be too long' },
                  })}
                  type="text"
                  placeholder="e.g. Minimalist UI Challenge"
                  className={`w-full rounded-xl bg-[#362348] border ${errors.title ? 'border-red-500' : 'border-transparent'} focus:border-[#7311d4] focus:ring-1 focus:ring-[#7311d4] text-white placeholder:text-[#ad92c9]/50 px-4 py-3.5 transition-all outline-none`}
                />
                {errors.title && <p className='text-xs text-red-400 mt-1'>{errors.title.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">Price</label>
                  <input
                    {...register('price', {
                      required: 'price is required',
                      min: { value: 0, message: 'Price must be positive' }
                    })}
                    type="number"
                    placeholder="0.00"
                    className="w-full rounded-xl bg-[#362348] border border-transparent focus:border-[#7311d4] focus:ring-1 focus:ring-[#7311d4] text-white placeholder:text-[#ad92c9]/50 px-4 py-3.5 transition-all outline-none"
                  />
                  {errors.price && <p className='text-xs text-red-400 mt-1'>{errors.price.message}</p>}
                </div>

                {/* Prize Money */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-semibold uppercase tracking-wider">Prize Money</label>
                  <input
                    {...register('prizeMoney', {
                      required: 'prize is required',
                      min: { value: 0, message: 'Prize must be positive' }
                    })}
                    type="number"
                    placeholder="Enter amount"
                    className="w-full rounded-xl bg-[#362348] border border-transparent focus:border-[#7311d4] focus:ring-1 focus:ring-[#7311d4] text-white placeholder:text-[#ad92c9]/50 px-4 py-3.5 transition-all outline-none"
                  />
                  {errors.prizeMoney && <p className='text-xs text-red-400 mt-1'>{errors.prizeMoney.message}</p>}
                </div>
              </div>

              {/* Task Instructions */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">Task Instructions</label>
                <textarea
                  {...register('rules', { required: 'task instructions is required' })}
                  rows="3"
                  placeholder="Steps to follow..."
                  className="w-full rounded-xl bg-[#362348] border border-transparent focus:border-[#7311d4] focus:ring-1 focus:ring-[#7311d4] text-white placeholder:text-[#ad92c9]/50 px-4 py-3.5 transition-all outline-none resize-none"
                ></textarea>
                {errors.rules && <p className='text-xs text-red-400 mt-1'>{errors.rules.message}</p>}
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">Description</label>
                <textarea
                  {...register('description', { required: 'descriptions is required' })}
                  rows="4"
                  placeholder="Full contest description..."
                  className="w-full rounded-xl bg-[#362348] border border-transparent focus:border-[#7311d4] focus:ring-1 focus:ring-[#7311d4] text-white placeholder:text-[#ad92c9]/50 px-4 py-3.5 transition-all outline-none"
                ></textarea>
                {errors.description && <p className='text-xs text-red-400 mt-1'>{errors.description.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Settings */}
        <div className="flex flex-col gap-8">
          {/* Category & Image Card */}
          <div className="bg-[#241830]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Configuration</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Contest Type */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">Contest Type</label>
                <input
                  {...register('category', { required: 'category is required' })}
                  type="text"
                  placeholder="e.g. Design"
                  className="w-full rounded-xl bg-[#362348] border border-transparent focus:border-[#7311d4] focus:ring-1 focus:ring-[#7311d4] text-white placeholder:text-[#ad92c9]/50 px-4 py-3.5 transition-all outline-none"
                />
                {errors.category && <p className='text-xs text-red-400 mt-1'>{errors.category.message}</p>}
              </div>

              {/* Banner URL */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-semibold uppercase tracking-wider">Image URL</label>
                <div className="relative group">
                   <input
                    {...register('banner', { required: 'imageurl is required' })}
                    type="url"
                    placeholder="https://..."
                    className="w-full rounded-xl bg-[#362348] border border-transparent focus:border-[#7311d4] focus:ring-1 focus:ring-[#7311d4] text-white placeholder:text-[#ad92c9]/50 px-4 py-3.5 transition-all outline-none"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#ad92c9] text-sm group-focus-within:text-[#7311d4]">link</span>
                </div>
                {errors.banner && <p className='text-xs text-red-400 mt-1'>{errors.banner.message}</p>}
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="sticky bottom-4 z-20 md:static mt-auto">
            <button
              type="submit"
              className="w-full bg-[#7311d4] hover:bg-[#9645e3] text-white text-lg font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#7311d4]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md flex items-center justify-center gap-3"
            >
              Submit Contest
            </button>
            <p className="text-center text-[#ad92c9] text-xs mt-4">
              Review all details before publishing.
            </p>
          </div>
        </div>
      </form>
    </div>
  </main>
</div>
  );
};

export default AddContest;
