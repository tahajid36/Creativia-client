import React from 'react';

const AboutUs = () => {
  return (
    <div className="antialiased text-slate-900  font-['Manrope',sans-serif]">
      <main className="flex-grow flex flex-col items-center w-full">
        
        {/* Hero Section */}
        <section className="w-full relative px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Abstract Background Element (Glows) */}
          <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7d13e7] rounded-full blur-[128px]"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7d13e7]/10 border border-[#7d13e7]/20 text-[#7d13e7] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#7d13e7] animate-pulse"></span>
              Reimagining Competition
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight ">
              Empowering Creativity Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d13e7] to-blue-400">Fair Competition</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Creativia is dedicated to providing a stage for global talent. We believe in meritocracy, where the best ideas win regardless of background, location, or status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="h-12 px-8 rounded-xl bg-[#7d13e7]  font-bold text-base hover:bg-[#5e0eb0] transition-all shadow-lg shadow-[#7d13e7]/25">
                Explore Our Vision
              </button>
              <button className="h-12 px-8 rounded-xl bg-white/5 border border-white/10  font-bold text-base hover:bg-white/10 transition-all">
                View Open Contests
              </button>
            </div>
          </div>
        </section>

        {/* Our Mission Grid */}
        <section className="w-full max-w-7xl px-6 py-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 flex flex-col gap-4 md:sticky md:top-24">
              <h2 className="text-3xl md:text-4xl font-bold ">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Why Creativia exists: to bridge the gap between hidden talent and global opportunity. We are building the infrastructure for the creative economy.
              </p>
              <button className="w-fit mt-4 text-[#7d13e7] font-bold hover:underline flex items-center gap-1">
                Read our manifesto <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'auto_awesome', title: 'Showcase Talent', desc: 'A platform designed to put your best work in front of the right eyes.' },
                { icon: 'balance', title: 'Fair Opportunities', desc: 'Unbiased judging ensures that skill is the only metric that matters.' },
                { icon: 'emoji_events', title: 'Win Prizes', desc: 'Real rewards for real effort. We guarantee prize distribution.' },
                { icon: 'groups', title: 'Community First', desc: 'Join thousands of creators. Collaborate, learn, and grow together.' }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7d13e7]/50 transition-colors group">
                  <div className="size-12 rounded-lg bg-[#7d13e7]/10 flex items-center justify-center text-[#7d13e7] mb-4 group-hover:bg-[#7d13e7] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold  mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works (Timeline) */}
        <section className="w-full bg-white/5 py-20 px-6 border-y border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-16 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold  mb-4">How Creativia Works</h2>
              <p className="text-gray-400 text-lg">From discovery to victory, we've streamlined the process.</p>
            </div>
            <div className="w-full relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                {[
                  { n: '1', t: 'Discover', d: 'Browse categories and find contests matching your skills.' },
                  { n: '2', t: 'Join & Secure', d: 'Register for the contest. Fees are secured in escrow.' },
                  { n: '3', t: 'Submit', d: 'Upload your masterpiece before the deadline.' },
                  { n: '4', t: 'Win & Earn', d: 'Winners earn recognition and prizes instantly.' }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left gap-4 group">
                    <div className={`size-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all ${i === 0 ? 'bg-[#7d13e7]  shadow-lg shadow-[#7d13e7]/30' : 'bg-transparent border-2 border-[#7d13e7] text-[#7d13e7] group-hover:bg-[#7d13e7] group-hover:text-white'}`}>
                      {step.n}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-bold  mb-1">{step.t}</h3>
                      <p className="text-sm text-gray-400">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#7d13e7] font-bold">
                  <span className="material-symbols-outlined">public</span>
                  <span>Global Network</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black leading-tight">
                  Join a Thriving Community of <span className="text-[#7d13e7]">Creators</span>
                </h2>
                <div className="flex gap-8 mt-4">
                  <div>
                    <p className="text-3xl font-black ">10k+</p>
                    <p className="text-sm text-gray-400">Active Creators</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black ">$2M+</p>
                    <p className="text-sm text-gray-400">Paid in Prizes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black ">150+</p>
                    <p className="text-sm text-gray-400">Countries</p>
                  </div>
                </div>
              </div>
              
              {/* Avatar Grid */}
              <div className="lg:w-1/2 grid grid-cols-3 gap-4 opacity-80">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="aspect-square rounded-2xl bg-gray-800 bg-cover bg-center" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbWsvSqTU5rs4R7D6RRrLpKp33xcdOK5c-ybu8vab05g_ejvcUEb8Ab-s7ZLJKLyjNDqoBXiY-DFzAS4qq8HCTcSz9xaq8_g1DlLFDzbxLmsXafa8nsioeiKT_88XVA5Uq1tZQ50aGb2bF2U_KlWUOIcY-RpLlkoOXFOniZp24FEQoXpf1qaRRutlyW59rLvII8LEMPLEXwLSHnAT12BFRF_uDUnAyntQxLJglMhmkTyXzwWeDgPy2dXOTK1e6qdd6R2dV15S0bH4y')`}}></div>
                  <div className="aspect-square rounded-2xl bg-gray-800 bg-cover bg-center" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpeOS6cdhSfWOJl0X1KqmaTyyOOW6WV_mBJrci2xgDs_8tRgyVapi9WwR9a9wV4g9oO8C9oSlWz9c19Zb1LArLL67BcQmEe2S1x_FbkDNQWuwuKg2l_A3nqKZofakpFV-eR19UNj7Pw-jC1HWJt7hgGr_oNrjVQGLDLMDZxxJ8XViQaHSZRh1LmtYbBay_gITyg0Ss6_I2TcFmypW2O-uNhadQ48lm0MFF7EW4yIyXYaZgq4Ko8ZJXD6w7d293wuvVdSCASnHP96IE')`}}></div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="aspect-square rounded-2xl bg-gray-800 bg-cover bg-center" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLpqX7vJY3fj8VRxrsxON4Sg1plPMWCmSz61kyEnIkYj3ymgezse9tkCTz3hMdHNP6NDEcjXE0dByqfbE7QmQMUvFWvgto-e2RmY6TdORIEUZAL51WVxHq42Bwv_xArch_XlUnhoHMAcYRjY1kr-SFGHtxan9ut8iApHyral-yVkeRj5KU_5zxEluNh90xJYHi-3DyF9xBrRV10hUzcKeZlGCBz7_zkV98DWtMMTaJK5E5SHbYJ3HLSgb9h0fZV7myx2av_OmkRpMa')`}}></div>
                  <div className="aspect-square rounded-2xl bg-[#7d13e7] flex flex-col items-center justify-center  p-2 text-center">
                    <span className="material-symbols-outlined text-3xl mb-1">handshake</span>
                    <span className="text-xs font-bold">You?</span>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gray-800 bg-cover bg-center" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuApPEXLrXvogFX8ckiBS7qCMeTJEjy9dWSRnp3UvDETxBSYaEwFjrsiRn-bBsXsIfmTdzPuCQCBEuXUphLj2no7CbZmh_qIKgsOwX4mac1jODU0TVLtv_5DFl2Grr0uTwXES2u7bEVn6S9y0t4WzIhirMUY1HXksGhcCwzC2s9J-drhS8ffl2fjLsvkLt6nz4r_8UCPxgqr5mTdjZcsojqf8tA2jOZVmtvv1si1k3k0f7CVRfnlzAgy5AAwKP6AsCykzEjwD1ewDsjo')`}}></div>
                </div>
                <div className="flex flex-col gap-4 mt-12">
                  <div className="aspect-square rounded-2xl bg-gray-800 bg-cover bg-center" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVe3rPpgvUUTDLxJGzr4Mx-OR0I7vU8-b4Ey3YAp0AD2HZYS0M2vY-FOFxnfrqnm9GPC2OecrRvAYBwzvtiTQ3Hz5W8YGNemr6phBiIhyhl-CIiCSR9_LSzSJblkBwBIuQrwcndC4E1m9hzUrqI5Gg1IdAm_Mz2_So-8dLGCSBHYo5UKVHnKGJDwx77-39iy0GTB_ePXiyFlMQeYr-6CRKZzfWl5KTIua8FDyRy_5dbVc2xdV8Hf3RemRQOe9raRS4QtoSwajEmPKy')`}}></div>
                  <div className="aspect-square rounded-2xl bg-gray-800 bg-cover bg-center" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAevNo2Tw6pLS-w3CkOvZSlhiVPaEW1Bvveh625r_dGbATeXEl83BDcbJefV5ewA6ecNq_BNWgo9FOqXd-5DgTDkmwRsvDXxeM4Jjy2IoOShp098BieA7ywe6XDcKukMfkTJadrD0FgIshwnYGC28tStUvCvHleQjO1wZxADoADv8W5lqHeDCV-w0WUbHQKFgDcqMgYdyS1JK7CsXNG8-8s3RJJRg-1mbaLx3V-XZSCogmbs2L7iasOYlQgENJgPOgSEC0HSzldVm-p')`}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-10">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-[#7d13e7]  text-center py-16 px-6 shadow-2xl shadow-[#7d13e7]/20">
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-2xl">
                Ready to make your mark on the world?
              </h2>
              <p className="text-lg max-w-xl">
                Join thousands of creators worldwide who are turning their passion into prizes. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                <button className="h-14 px-8 rounded-xl bg-white text-[#7d13e7] font-bold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                  Explore Contests
                </button>
                <button className="h-14 px-8 rounded-xl bg-transparent border-2 border-white  font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                  Create a Contest
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;