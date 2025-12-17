import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddContest = () => {
  const {user} = useAuth()

  const {isPending, isError, mutateAsync, reset: mutationReset} = useMutation({
    mutationFn: async payload => 
      fetch("http://localhost:5000/contests", {
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
        banner,category, title, description,rules, price: Number(price), prizeMoney: Number(prizeMoney),
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
    <div>
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Post Contests
            </h2>
            <p className="mt-2 text-gray-500 text-sm">
              Enter your contest details in this form and click submit.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* contest Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contest Title<span className="text-purple-500">*</span>
              </label>
              <input
              {...register('title', {
                required: 'title is required',
                maxLength: {
                  value: 20,
                  message: 'title cannot be too long',
                },
              })}
                type="text"
                placeholder="Input Your Contest Title"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
               {errors.title && (
                <p className='text-xs text-red-500 mt-1'>
                  {errors.title.message}
                </p>
              )}
            </div>
            {/* Price field here  */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price<span className="text-purple-500">*</span>
              </label>
              <input
              {...register('price', {
                required: 'price is required',
                 min: { value: 0, message: 'Price must be positive' }
              })}
                type="text"
                placeholder="Price"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
               {errors.price && (
                  <p className='text-xs text-red-500 mt-1'>
                    {errors.price.message}
                  </p>
                )}
            </div>

            {/* Prize money */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prize Money<span className="text-purple-500">*</span>
              </label>
              <input
              {...register('prizeMoney', {
                required: 'prize is required',
                 min: { value: 0, message: 'Prize must be positive' }
              })}
                type="tel"
                placeholder="Enter the prize money amount"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
              {errors.prizeMoney && (
                  <p className='text-xs text-red-500 mt-1'>
                    {errors.prizeMoney.message}
                  </p>
                )}
            </div>
            {/*  */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL<span className="text-purple-500">*</span>
              </label>
              <input
               {...register('banner', {
                required: 'imageurl is required',
              })}
                type="tel"
                placeholder="paste image url here"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
              {errors.banner && (
                  <p className='text-xs text-red-500 mt-1'>
                    {errors.banner.message}
                  </p>
                )}
            </div>

            {/* category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contest Type<span className="text-purple-500">*</span>
              </label>
              <input
              {...register('category', {
                required: 'category is required',
              })}
                type="tel"
                placeholder="Enter the contest type"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
               {errors.category && (
                  <p className='text-xs text-red-500 mt-1'>
                    {errors.category.message}
                  </p>
                )}
            </div>
            {/* task instructions  */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Instructions<span className="text-purple-500">*</span>
              </label>
              <textarea
              {...register('rules', {
                required: 'task instructions is required',
              })}
                placeholder="Accent"
                className="textarea textarea-accent w-full"
              ></textarea>
              {errors.rules && (
                  <p className='text-xs text-red-500 mt-1'>
                    {errors.rules.message}
                  </p>
                )}
            </div>

            {/* description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description<span className="text-purple-500">*</span>
              </label>
              <textarea
               {...register('description', {
                required: 'descriptions is required',
              })}
                placeholder="Accent"
                className="textarea textarea-accent w-full"
              ></textarea>
              {errors.description && (
                  <p className='text-xs text-red-500 mt-1'>
                    {errors.description.message}
                  </p>
                )}
            </div>
            <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white
            px-8 py-3 rounded-lg font-medium transition"
            >
              Submit
            </button>
          </div>
          </form>

          {/* Action */}
          
        </div>
      </div>
    </div>
  );
};

export default AddContest;
