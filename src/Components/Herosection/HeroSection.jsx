import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#112117] text-white antialiased rounded-2xl overflow-x-hidden">
     
      <main className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden bg-[radial-gradient(circle_at_15%_50%,rgba(54,226,123,0.08),transparent_25%)]">
        
        {/* Secondary radial gradient layer */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(54,100,226,0.05),transparent_25%)]" />

        {/* Decorative blurred blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#36e27b]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col items-center justify-center min-h-[80vh]">
          <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8 z-10">
            
            {/* Chips / Trending Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {['LogoDesign', 'Illustration', 'UXChallenge', 'Photography'].map((tag, i) => (
                <div key={tag} className="flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm transition hover:bg-white/10 cursor-pointer">
                  <span className={`text-xs ${i === 0 ? 'text-[#36e27b]' : i === 1 ? 'text-purple-400' : 'text-blue-400'}`}>#</span>
                  <span className="text-gray-300 text-xs font-medium">{tag}</span>
                </div>
              ))}
            </div>

            {/* Hero Content */}
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Discover & Join <br />
                <span className="text-[#36e27b]">Creative Contests</span>
              </h1>
              <h2 className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
                Showcase your talent, compete with the best designers worldwide, and win premium prizes. Your next big break starts here.
              </h2>
            </div>

            {/* Glassmorphism Search Bar */}
            <div className="w-full max-w-3xl mt-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#36e27b]/20 via-blue-500/20 to-[#36e27b]/20 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative flex flex-col md:flex-row items-center p-2 bg-[#1a2c22]/90 md:bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-full shadow-2xl gap-2 md:gap-0">
                
                {/* Category Dropdown */}
                <div className="relative w-full md:w-auto min-w-[160px] border-b md:border-b-0 md:border-r border-white/10">
                  <button className="flex items-center justify-between w-full h-12 md:h-14 px-6 text-gray-300 hover:text-white transition-colors">
                    <span className="text-sm font-medium">All Categories</span>
                    <span className="text-gray-500 text-[10px]">▼</span>
                  </button>
                </div>

                {/* Input */}
                <div className="flex-1 w-full">
                  <input 
                    className="w-full h-12 md:h-14 bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 px-6 text-sm md:text-base outline-none" 
                    placeholder="Search contests..." 
                    type="text"
                  />
                </div>

                {/* Button */}
                <div className="w-full md:w-auto p-1">
                  <button className="flex w-full md:w-auto items-center justify-center h-12 md:h-12 px-10 bg-[#36e27b] hover:bg-[#25a85a] text-[#112117] rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(54,226,123,0.4)] hover:scale-105 active:scale-95">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70">
              <div className="flex items-center gap-2">
                <span className="text-[#36e27b]">●</span>
                <span className="text-gray-300 text-sm">Verified Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#36e27b]">●</span>
                <span className="text-gray-300 text-sm">$2M+ Paid Out</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#36e27b]">●</span>
                <span className="text-gray-300 text-sm">50k+ Designers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#112117] to-transparent pointer-events-none"></div>
      </main>
    </div>
  );
};

export default HeroSection;