import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
          <Link to="/Allproducts">Shop All</Link>
        </li>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
          <Link to="/For Boys">For Boys</Link>
        </li>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
          <Link to="/For Girls">For Girls</Link>
        </li>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
          <Link to="/Electronics">Electronics</Link>
        </li>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
          <Link to="/Jewellery">Jewellery</Link>
        </li>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
          <Link to="/About">About</Link>
        </li>
        <li className="ring-2 ring-[#585758] p-1 px-4 rounded hover:ring-0 hover:bg-slate-600 transition-all duration-500 hover:text-white">
          <Link to="/Contact">Contact</Link>
        </li>
    </>
  )
}

export default Sidebar