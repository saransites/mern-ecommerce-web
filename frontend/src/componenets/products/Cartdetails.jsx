import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header";
import { useState } from "react";
const Cartdetails = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([locate.state.data]);
  const addtocart = (idx) => {
    let item = cart[idx];
    navigate("/Checkout", { state: { items: item.price } });
  }
  return (
    <section className="signbg min-h-screen p-4">
      <Header />
      <div className="grid place-items-center h-screen">
      <div className="loginbg rounded-xl md:flex justify-center gap-4 bg-slate-600 items-center p-4 mx-12 text-white">
        {cart.map((item, index) => {
          return (
            <>
              <figure className="flex-grow mb-4 basis-[30%] justify-center">
                <img
                  src={item.image}
                  className="mx-auto w-72"
                  alt={item.title}
                ></img>
              </figure>
              <aside className="flex-grow basis-[70%]">
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-[8px] md:text-[14px]">
                    Product Name :{" "}
                    <span className="font-bold text-[10px] md:text-lg">
                      {item.title}
                    </span>
                  </p>
                  <p>
                    Rating :{" "}
                    <span className="font-bold">{item.rating.rate}</span>
                  </p>
                  <p>
                    Price : <span className="font-bold">${item.price}</span>
                  </p>
                  <p className="text-justify">{item.description}</p>
                  <button
                    onClick={() => {
                      addtocart(index);
                    }}
                    className="bg-[#3E442B] hover:scale-105 transition-all duration-500 rounded-md p-2 px-4 text-white"
                  >
                    Buy Now
                  </button>
                </div>
              </aside>
            </>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Cartdetails;
