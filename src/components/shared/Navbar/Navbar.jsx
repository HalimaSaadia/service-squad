import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidUser } from "react-icons/bi";

import "./navbar.css";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleLogout = () => {
    logout()
      .then((result) => {
        toast.success("Successfully Logged Out");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <div className=" bg-no-repeat bg-cover sticky top-0 z-50  borderStyle border-b-2 bg-base-100 shadow-xl ">
      <div>
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

                {user && <li>
                  <NavLink to="#">Dashboard</NavLink>
                  <ul className="p-2">
                    <li>
                      <NavLink to="/my-services">My Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/add-service">Add Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-schedules">My Schedules</NavLink>
                    </li>
                  </ul>
                </li>}
                {!user && <li><NavLink to="/login">Login</NavLink></li>}
                {/* <li className="mt-5">
                  {user ? (
                    <button
                      onClick={() => handleLogout()}
                      className="bg-gradient-to-tr from-[#EE0D26] to-[#FBD32C] w-24"
                    >
                      <NavLink className={(isActive) => "false"}>
                        <span className="text-white">Logout</span>
                      </NavLink>
                    </button>
                  ) : (
                    <NavLink to="/login">Login</NavLink>
                  )}
                </li> */}
              </ul>
            </div>
            <div className="flex justify-center">
              {/* <img src="https://i.postimg.cc/XN8HCx5g/Untitled-design.png" alt="" /> */}
              <p className=" normal-case text-xl font-bold justify-center flex items-center gap-2">
                <img
                  className="w-8 md:w-12"
                  src="https://i.postimg.cc/fTSZy7TM/money-9481647-removebg-preview.png"
                  alt=""
                />
                ServiceSquad
              </p>
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
              {user && (
                <li tabIndex={0}>
                  <details>
                    <summary className="text-base font-bold">Dashboard</summary>
                    <ul className="px-2">
                      <li>
                        <NavLink to="/my-services">My Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/add-service">Add Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/my-schedules">My Schedules</NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
              )}
              {!user && <li><NavLink to="/login">Login</NavLink></li>}

              {/* <li>
                {user ? (
                  <button
                    onClick={() => handleLogout()}
                    className="bg-gradient-to-tr from-[#EE0D26] to-[#FBD32C] w-24"
                  >
                    {" "}
                    <NavLink to="#" className={(isActive) => "false"}>
                      <span className="text-white">Logout</span>
                    </NavLink>
                  </button>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li> */}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {user ? (
                    <img src={user?.photoURL} />
                  ) : (
                    <BiSolidUser className="text-[44px] text-gray-600" />
                  )}
                </div>
              </label>
              {user &&
              <div style={{ backgroundImage: "url('https://svgshare.com/i/zHf.svg')" }} className="bg-no-repeat bg-cover">
                 <ul
                tabIndex={0}
                className="mt-3 z-[1] cursor-text p-2 text-white  shadow menu menu-sm dropdown-content bg-[#1E293BEE] rounded space-y-3 "
              >
                <li className="border-b-2 borderStyle">
                  <p className="justify-between hover:cursor-default hover:text-white">{user?.displayName}</p>
                </li>
                <li className="border-b-2 borderStyle hover:cursor-default hover:text-white">
                  <p>{user?.email}</p>
                </li>
                <li>
                  <button
                    onClick={() => handleLogout()}
                    className="bg-gradient-to-tr from-[#EE0D26] to-[#FBD32C] w-24"
                  >
                    <NavLink className={(isActive) => "false"}>
                      <span className="text-white">Logout</span>
                    </NavLink>
                  </button>
                </li>
              </ul>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
