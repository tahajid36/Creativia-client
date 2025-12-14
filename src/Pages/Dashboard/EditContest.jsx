import React from 'react';

const EditContest = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Update Contest Details
            </h2>
            <p className="mt-2 text-gray-500 text-sm">
              Enter your updated contest details in this form and click submit.
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name<span className="text-purple-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Input Your First Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price<span className="text-purple-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>

            {/* Prize money */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prize Money<span className="text-purple-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter the prize money amount"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>
            {/*  */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL<span className="text-purple-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="paste image url here"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contest Type<span className="text-purple-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter the contest type"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Instructions<span className="text-purple-500">*</span>
              </label>
              <textarea
                placeholder="Accent"
                className="textarea textarea-accent w-full"
              ></textarea>
            </div>

            {/* description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description<span className="text-purple-500">*</span>
              </label>
              <textarea
                placeholder="Accent"
                className="textarea textarea-accent w-full"
              ></textarea>
            </div>
          </form>

          {/* Action */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white
            px-8 py-3 rounded-lg font-medium transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
   
};

export default EditContest;