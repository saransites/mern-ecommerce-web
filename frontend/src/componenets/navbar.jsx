import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
      <ul className="hidden lg:flex items-center justify-center gap-4 text-sm text-white">
        <li className="hover:scale-105 transition-all duration-500">
          <NavLink to="/Allproducts">Shop All</NavLink>
        </li>
        <li className="hover:scale-110 transition-all duration-500">
          <NavLink to="/For Boys">Men's cloths</NavLink>
        </li>
        <li className="hover:scale-110 transition-all duration-500">
          <NavLink to="/For Girls">Girl's Cloths</NavLink>
        </li>
        <li className="hover:scale-110 transition-all duration-500">
          <NavLink to="/Electronics">Electronics</NavLink>
        </li>
        <li className="hover:scale-110 transition-all duration-500">
          <NavLink to="/Jewellery">Jewellery</NavLink>
        </li>
        <NavLink
          to="/"
          className="bg-red-400 hover:ring-2 transition duration-500 hover:ring-black p-1 px-4 rounded"
        >
          Logout
        </NavLink>
      </ul>
  );
};

export default Navbar;
