import React from 'react';

const RecentWinners = () => {
  const winners = [
    {
      id: 1,
      name: "Sarah Jenkins",
      prize: "$2,500",
      category: "Logo Design Marathon",
      location: "Toronto, CA",
      quote: "This platform changed my career trajectory entirely. I never thought I could win against such talent.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcBNk1s4pULW4N9S74irXsM1naR1W8VZ3p12eZO3zp2C69lhnXUOWsQcU-9guIlXa65StdLJwiPYVwn6TSPdD_nPQYrlvIsn_ECGgXhq_UAp7Oq_5roWnwoyOoEcXy5_HIqMbC3EQpS7jpRcVwE1brURLjrfBHhrVr0V-siHLh0b8TAZE2g8Ax-gOEL8y0rG7nAtU2QqvV4noh6eoJAr1NSwxwQVGjoEpAS4h32dNCCf3OJdXQYpM-pAmvCS-j3k-Rd7_FisSQqvLx",
      featured: false
    },
    {
      id: 2,
      name: "Marcus Thorne",
      prize: "$5,000",
      category: "Grand Prize • UX Challenge",
      location: "London, UK",
      quote: "Pushing my limits in this contest was exactly what I needed. The brief was challenging but rewarding.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj_POzItuFoJpiyJwOnr6wpo2b_UCH9M5a6HyHG_Oy3BloTPihA0QONRxqspmjgv8OOt6NKMCDrqhKbeS_hHaoo5lhCYVNqJ-ZyahFqCkIFto4luR7jwyUy0HQyl48bT7W-RfI2GLuYUGzOMS_K2mHM-Qn041Xbko2fBvjzg8MAifJtJp3NSHk4a__bi_n-B6F9k4qk59O3Xh3i0A6FqceB5e8om9TF3fujvt7pOwT9Q3QwGm1vluucP87vjoy5mopOQgmbtG82Xhg",
      featured: true
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      prize: "$1,200",
      category: "Icon Set Design",
      location: "Austin, USA",
      quote: "Incredible community and amazing feedback. I learned more in 2 weeks than I did in a year of self-study.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYaiGB0EeOXSjkj3-aDzQSRsG08-EK84-1P0MQefZ6NMqDzHVtRKbcDdJv4h2ICnyh9SAKRbp390FGj46BOv3VkIpQO2QI4fwApbspI3AitFZBOK2a8CMz2rRrK0UG879jmpwsLfBnNblVV1R7T1-HRviAurpvoBCqQRLjvkZrU6TSox7K-ewTlyxMgChprB5kbgcAUPFvRrahEpkEe_A2xIHZWU57zJQCeAjf1mlpZ90yLhiQfjGF8GxIxnuKw2m5npadbCZVa6nG",
      featured: false
    }
  ];

  return (
    <section className="bg-base-200 bg-[radial-gradient(at_0%_0%,rgba(59,130,246,0.1)_0,transparent_50%),radial-gradient(at_100%_0%,rgba(125,19,232,0.1)_0,transparent_50%),radial-gradient(at_50%_100%,rgba(99,102,241,0.05)_0,transparent_50%)] antialiased rounded-2xl overflow-x-hidden rounded-2xl min-h-screen py-16 px-4 font-sans">
      {/* Header Section */}
      <div className="max-w-[960px] mx-auto text-center space-y-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Wall of Fame
        </h2>
        <p className="text-[#ad92c9] text-base max-w-xl mx-auto">
          Real creators, real prizes. Join the hall of fame and start your journey today.
        </p>
      </div>

      {/* Main Content Area: Winners Grid */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {winners.map((winner) => (
            <div
              key={winner.id}
              className={`group relative flex flex-col items-center bg-[#231b2e] rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7f13ec1a] 
                ${winner.featured 
                  ? 'lg:-mt-4 lg:mb-4 border-[#7f13ec]/40 shadow-lg' 
                  : 'border-white/5'
                }`}
            >
              {/* Subtle Glow Background Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#7f13ec]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

              {/* Avatar Section */}
              <div className="relative mb-6 z-10">
                <div className={`rounded-full p-1 border-2 transition-colors duration-300 ${winner.featured ? 'w-28 h-28 border-[#7f13ec]/50 group-hover:border-[#7f13ec] shadow-[0_0_15px_rgba(127,19,236,0.3)]' : 'w-24 h-24 border-[#7f13ec]/30 group-hover:border-[#7f13ec]'}`}>
                  <img
                    src={winner.img}
                    alt={winner.name}
                    className="w-full h-full rounded-full object-cover bg-slate-800"
                  />
                </div>
                <div className="absolute -bottom-2 -right-1 bg-[#7f13ec] text-white p-1.5 rounded-full border-[3px] border-[#231b2e] shadow-lg flex items-center justify-center">
                  <span className="text-sm">🏆</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-center text-center z-10 w-full">
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${winner.featured ? 'text-[#7f13ec]' : 'text-gray-400'}`}>
                  {winner.category}
                </span>
                <h3 className={`font-bold text-[#7f13ec] mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300 ${winner.featured ? 'text-4xl' : 'text-3xl'}`}>
                  {winner.prize}
                </h3>

                {/* Quote */}
                <div className="relative py-6 px-2 w-full">
                  <span className="absolute top-2 left-0 text-[#7f13ec]/20 text-4xl leading-none font-serif">"</span>
                  <p className="text-gray-300 italic font-light leading-relaxed text-sm">
                    {winner.quote}
                  </p>
                  <span className="absolute bottom-0 right-0 text-[#7f13ec]/20 text-4xl leading-none font-serif">"</span>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-white/10 rounded-full mb-4"></div>

                {/* Name & Location */}
                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-bold text-white">{winner.name}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <span className="text-xs">📍</span>
                    <span>{winner.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / CTA */}
        <div className="w-full flex justify-center mt-12 gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-700 bg-transparent flex items-center justify-center text-gray-400 hover:border-[#7f13ec] hover:text-[#7f13ec] transition-all">
            <span className="text-xl">←</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-[#7f13ec] text-white flex items-center justify-center shadow-lg hover:bg-[#7f13ec]/90 transition-all hover:scale-105 shadow-[#7f13ec]/30">
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWinners;