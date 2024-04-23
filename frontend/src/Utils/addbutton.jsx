import React from "react";

const Addtocart = ({addtocart,index}) => {
  return (
    <button
      onClick={() => {
        addtocart(index);
      }}
      className="bg-[#b41988a0] hover:scale-105 transition-all rounded duration-500 p-1 text-[10px] px-6 text-white"
    >
      Add to cart
    </button>
  );
};

export default Addtocart;
