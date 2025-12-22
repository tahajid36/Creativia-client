import React from "react";

const Error = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
   

      {/* Main Content */}
      <main className="flex flex-1 justify-center px-4 md:px-40 py-5">
        <div className="max-w-[960px] flex flex-col justify-center flex-1">
          <div className="flex flex-col items-center gap-8 py-12 md:py-24 text-center">
            {/* Illustration */}
            <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1e2a36] border border-[#e7edf3] dark:border-[#22303e]">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdtVGCyKtufskbOPFZRa9zki8c1Y12i90Vep9Bo9b8R5TBblaUkLDESDV0Qo4OY-MpGupfMJ0kk74h0xwPebfXfjzSCaMbZeIOo4Fzp4TOPT5wYwVwTD6R6sd8WOUoekAHYZOphzo8K5wDUFReqZEoQHyGpUgrhgy4UtC9sZJHPkX_RTFZTsbkjtNjLn7y6iew-e6UsvnwQ4xJL-YWG4bPLJU8dTqEpjdtiZR8INPRAqGYXN4qhFPJAPKLXEs6tRoh-rhqs8uKW2Tx")',
                }}
              />
            </div>

            {/* Text */}
            <div className="max-w-[560px] flex flex-col gap-4">
              <h1 className="text-primary text-6xl md:text-8xl font-extrabold">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d141b] dark:text-white">
                Whoops! Page Not Found
              </h2>
              <p className="text-[#4c739a] dark:text-[#94a3b8] text-base md:text-lg">
                The link you clicked might be broken or the page may have been
                removed. We couldn&apos;t find the page you&apos;re looking for,
                but you can always navigate back.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="min-w-[160px] h-12 px-6 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
                Back to Home
              </button>
              <button className="min-w-[160px] h-12 px-6 rounded-lg border border-[#cfdbe7] dark:border-[#22303e] text-[#0d141b] dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-[#1e2a36] transition-all">
                Contact Support
              </button>
            </div>

            {/* Helpful Links */}
            <div className="flex gap-6 mt-4">
              <a className="flex items-center gap-1 text-sm font-medium text-[#4c739a] hover:text-primary">
                <span className="material-symbols-outlined text-lg">search</span>
                Search
              </a>
              <a className="flex items-center gap-1 text-sm font-medium text-[#4c739a] hover:text-primary">
                <span className="material-symbols-outlined text-lg">map</span>
                Sitemap
              </a>
              <a className="flex items-center gap-1 text-sm font-medium text-[#4c739a] hover:text-primary">
                <span className="material-symbols-outlined text-lg">help</span>
                Help Center
              </a>
            </div>
          </div>

          {/* Action Panel */}
          <div className="p-4 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-xl border border-[#cfdbe7] dark:border-[#22303e] bg-white dark:bg-[#1e2a36] p-6 shadow-sm">
              <div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    bug_report
                  </span>
                  <p className="font-bold text-[#0d141b] dark:text-white">
                    Found a broken link?
                  </p>
                </div>
                <p className="text-sm text-[#4c739a] dark:text-[#94a3b8]">
                  Let us know so we can fix it for future travelers.
                </p>
              </div>
              <a className="flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors">
                Report Issue
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
};

export default Error;
