import React from "react";

const Navbar = () => {
  const navLi = (
    <>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Clinics</a>
      </li>
      <li>
        <a>Treatments</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
              navLi
            }
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Healpoint</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLi
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline text-black rounded-3xl">Need Help?</a>
      </div>
    </div>
  );
};

export default Navbar;
