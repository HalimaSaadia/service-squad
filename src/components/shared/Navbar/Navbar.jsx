import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidUser } from "react-icons/bi";
import Button from "../Button";
import "./navbar.css"

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.photoURL);
  const links = <></>;
  return (
    <div
      style={{ backgroundImage: "url('https://svgshare.com/i/zHf.svg')" }}
      className=" bg-no-repeat bg-cover sticky top-0 z-50 borderStyle border-b-2 "
    >
      <div className="bg-[#80808080]">
        <div className="navbar max-w-7xl mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  {user ? (
                    <button className="bg-gradient-to-tr from-[#EE0D26] to-[#FBD32C] w-24">
                      <NavLink className={(isActive) => false} ><span className="text-white">Logout</span></NavLink>
                    </button>
                  ) : (
                    <NavLink>Login</NavLink>
                  )}
                </li>
                <li>
                  <NavLink to="#">Dashboard</NavLink>
                  <ul className="p-2">
                    <li>
                      <NavLink to="my-services">My Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="add-services">Add Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="my-schedules">My Schedules</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              {/* <img src="https://i.postimg.cc/XN8HCx5g/Untitled-design.png" alt="" /> */}
              <p className=" normal-case text-xl">ServiceSquad</p>
            </div>
           
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {user &&  <li tabIndex={0}>
                <details>
                  <summary className="text-base font-bold">Dashboard</summary>
                  <ul className="px-2">
                    <li>
                      <NavLink to="my-services">My Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="add-services">Add Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="my-schedules">My Schedules</NavLink>
                    </li>
                  </ul>
                </details>
              </li>}
             
              <li>
                {user ? (
                    <button className="bg-gradient-to-tr from-[#EE0D26] to-[#FBD32C] w-24"> <NavLink to="#" className={(isActive) => false}><span className="text-white">Logout</span></NavLink></button>
                   
               
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user ? (
                  <img src={user?.photoURL} />
                ) : (
                  <BiSolidUser className="text-[44px] text-gray-600" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
