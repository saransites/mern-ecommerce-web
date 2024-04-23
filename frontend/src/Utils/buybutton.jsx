import React from "react";

const Button = ({ checkoutpage, index }) => {
  return (
    <button
      onClick={() => {
        checkoutpage(index);
      }}
      className="bg-[#9b561de1] hover:scale-105 transition-all rounded duration-500 p-2 text-[10px] px-4 text-white"
    >
      Buy
    </button>
  );
};

export default Button;
