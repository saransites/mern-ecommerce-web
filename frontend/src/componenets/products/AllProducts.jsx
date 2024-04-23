import React, { useContext, useEffect, useState } from "react";
import Header from "../header";
import Productdetails from "./productdetails";
import { namecontext } from "../../App";
import { FaSearch } from "react-icons/fa";
const AllProducts = () => {
  const { Cartdetails, setCartdetails } = useContext(namecontext);
  const [inputval, setinputval] = useState("");
  const searching=()=>{
    let temparr = Cartdetails.filter(item=>{
      if(item.title.toLowerCase().includes(inputval.toLowerCase())){
        return item
      }
    })
    setCartdetails(temparr)
  }
  return (
    <main className="loginbg">
      <Header />
      <div className="flex items-center justify-center relative">
        <input
          type="text"
          onChange={(e) => setinputval(e.target.value)}
          className="p-2 px-6 outline:none m-1 outline-none focus:border-b-2 border-black"
          placeholder="Search..."
        ></input>
        <FaSearch onClick={searching} className="absolute left-[calc(50%+6rem)] cursor-pointer" />
      </div>
      <div className="flex justify-center flex-col items-center text-center">
        <h1 className="text-xl font-bold tracking-widest text-[#b7da45]">
          All Products
        </h1>
        <p className="tracking-widest text-white w-1/2">
          Expolring your Products
        </p>
      </div>
      {/* All products */}
      <main>
        <Productdetails details={Cartdetails} />
      </main>
    </main>
  );
};

export default AllProducts;
