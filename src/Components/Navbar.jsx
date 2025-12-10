import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const navlinks = <>
  <NavLink to={'/'}><li>Home</li></NavLink>
  <NavLink to={'/allcontest'}><li>All Contests</li></NavLink>
  <NavLink to={'/aboutus'}><li>About Us</li></NavLink>
  </>
    return (
        <div className='inter'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {/* responsive side navbar  */}
        {navlinks}
      </ul>


    </div>
    <a className="btn btn-ghost text-xl text-primary font-semibold ">Creativia</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal gap-15 px-1 mx-7 ">
      {navlinks}
    </ul>
    <a className="btn ">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;