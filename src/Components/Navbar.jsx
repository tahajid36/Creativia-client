import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { signout, user } = useAuth();
  const navlinks = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/allcontest"}>
        <li>All Contests</li>
      </NavLink>
      <NavLink to={"/aboutus"}>
        <li>About Us</li>
      </NavLink>
    </>
  );
  const dropdownlinks = (
    <>
      <Link to={"/"}>
        <li className="m-2">Profile</li>
      </Link>
      <Link to={"/dashboard"}>
        <li className="m-2">Dashboard</li>
      </Link>
    </>
  );
 const navigate = useNavigate()
  const handleSignOut = () => {
    signout().then((res) => {
      console.log(res);
      navigate('/register')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your are logged out succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div className="inter">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow"
            >
              {/* responsive side navbar  */}
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-semibold md:block hidden ">Creativia</a>

        </div>
        <div className="navbar-center md:hidden">
          {/* this web logo will be hidden in large devices only show in phones  */}
        <a className="btn btn-ghost text-2xl font-semibold ">Creativia</a>

        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal hidden md:block md:flex  gap-15 px-1 mx-7 ">{navlinks}</ul>

          {user ? (
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="user profile picture"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {dropdownlinks}
                <li onClick={handleSignOut} className="m-2 btn">logout </li>
              </ul>
            </div>
          ) : (
            <Link to={'/login'} className="btn ">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
