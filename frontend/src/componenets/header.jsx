import React, { useState, useContext } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import { namecontext } from "../App";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
const Header = () => {
  const { cartcount, setcartcount } = useContext(namecontext);
  const navigate = useNavigate();
  const [sidenav, setsidenav] = useState(false);
  const ShowCartitem = () => {
    navigate("/Cartitems");
  }
  const sidebar = () => {
    setsidenav(!sidenav);
  };
  const sidebarremove = () => {
    setsidenav(!sidenav);
  };
  function logoutfun() {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  }
  return (
    <>
      <header
      variants={{ hidden: { opacity: 0, }, show: { opacity: 1 } }}
      initial="hidden"
      animate="show"
        style={{ zIndex: "99" }}
        className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-[#7683c2] via-[##7683c2] to-[#7683c2] rounded p-4 flex justify-between items-center shadow-md"
      >
        <div onClick={ShowCartitem} className="relative cursor-pointer text-[#f6f5f5d7] shadow-[0_0_1rem_black] rounded-md hover:scale-105 transition-all duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 p-1"
          >
            <path
              fillRule="evenodd"
              d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute top-8  text-teal-50 font-bold text-[14px] left-[12px]">
            {cartcount}
          </p>
        </div>
        <div>
          <Link
          to='/landingpage'
            // onClick={landingpage}
            className="font-bold tracking-widest text-[#ffffffe0] md:text-lg"
          >
            Buy Your Products
          </Link>
        </div>
        {/* hamburger */}
        <div onClick={sidebar} className="cursor-pointer text-white lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-7 h-7 p-1"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Navbar />
      </header>
      <ul
        style={{
          position: "fixed",
          top: "0rem",
          left: sidenav ? "0rem" : "65rem",
          zIndex: "99",
        }}
        className="cursor-pointer flex lg:hidden bg-[#b7d4f0] p-6 flex-col items-center justify-center gap-4 w-full h-full transition-all duration-700 text-sm"
      >
        {/* Xmark */}
        <div
          onClick={sidebarremove}
          className="bg-red-700 p-2 rounded-full text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <Sidebar/>
        <button
          onClick={logoutfun}
          className="bg-red-400 hover:ring-2 transition duration-500 hover:ring-black p-1 px-4 rounded"
        >
          Logout
        </button>
      </ul>
    </>
  );
};

export default Header;
