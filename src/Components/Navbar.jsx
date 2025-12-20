import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import {  useTheme } from "../Hooks/ThemeContext";

const Navbar = () => {
  const {theme, toggleTheme} = useTheme()
  const { signout, user } = useAuth();
  const navigate = useNavigate();

  // Updated styling for NavLinks to match the "pill" design
  const navlinks = (
    <>
      <NavLink 
        to={"/"} 
        className={({ isActive }) => 
          `px-4 py-1.5 text-sm font-medium rounded-full transition-all ${isActive ? 'bg-[#7d13e8] text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`
        }
      >
        Home
      </NavLink>
      <NavLink 
        to={"/allcontest"} 
        className={({ isActive }) => 
          `px-4 py-1.5 text-sm font-medium rounded-full transition-all ${isActive ? 'bg-[#7d13e8] text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`
        }
      >
        All Contests
      </NavLink>
      <NavLink 
        to={"/aboutus"} 
        className={({ isActive }) => 
          `px-4 py-1.5 text-sm font-medium rounded-full transition-all ${isActive ? 'bg-[#7d13e8] text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}`
        }
      >
        About Us
      </NavLink>
    </>
  );

  // Updated styling for Dropdown links
  const dropdownlinks = (
    <>
      <Link to={"/"} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 transition-colors group">
        Profile
      </Link>
      <Link to={"/dashboard"} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 transition-colors group border-t border-white/5">
        Dashboard
      </Link>
      <li><div className="flex ml-1">
      <button onClick={toggleTheme}>{theme === "dark" ? "Light Mode" : "Dark Mode"}</button></div> </li>
    </>
  );

  const handleSignOut = () => {
    signout().then((res) => {
      console.log(res);
      navigate('/register');
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are logged out successfully",
        showConfirmButton: false,
        timer: 1500,
        background: "#2d1f3b", // Matching the theme
        color: "#fff"
      });
    });
  };

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-white/10 bg-[#191022]/80 backdrop-blur-md transition-all duration-300 font-['Spline_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#7d13e8] transition-colors">
              Creativia
            </span>
          </Link>

          {/* Center: Navigation (Desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5">
              {navlinks}
            </div>
          </div>

          {/* Right Area */}
          <div className="flex items-center gap-5">
            {user ? (
              <div className="flex items-center gap-4">
                

                {/* User Menu Dropdown */}
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="flex items-center gap-2 focus:outline-none py-2 group">
                    <div className="relative">
                      <div className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-[#7d13e8]/20 group-hover:ring-[#7d13e8] transition-all">
                        <img 
                          alt="user profile" 
                          className="h-full w-full object-cover" 
                          src={user.photoURL} 
                        />
                      </div>
                      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-[#191022]"></div>
                    </div>
                    
                  </div>

                  <ul tabIndex={0} className="dropdown-content mt-1 w-56 rounded-xl bg-[#2d1f3b] shadow-2xl ring-1 ring-white/10 z-[110] overflow-hidden p-0 menu">
                    <div className="px-4 py-3 border-b border-white/5">
                      <p className="text-xs text-gray-400">Signed in as</p>
                      <p className="text-sm font-bold text-white truncate">{user?.displayName || 'Active User'}</p>
                    </div>
                    
                    <div className="py-1">
                      {dropdownlinks}
                    </div>
                    {/* signout btn here  */}
                    <div className="py-1 border-t border-white/5">
                      <button 
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-900/10 transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              /* Logged Out State */
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-white/5 rounded-lg transition-colors">
                  Log In
                </Link>
                <Link to="/register" className="px-5 py-2 text-sm font-bold text-white bg-[#7d13e8] hover:bg-[#5a0ca8] rounded-lg shadow-lg shadow-[#7d13e8]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="dropdown dropdown-bottom dropdown-end md:hidden">
              <div tabIndex={0} role="button" className="p-2 text-gray-400 hover:text-white">
                <span className="material-symbols-outlined">menu</span>
              </div>
              <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-[#2d1f3b] rounded-xl w-64 border border-white/10 flex flex-col gap-2">
                {navlinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;