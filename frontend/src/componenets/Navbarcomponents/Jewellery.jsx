import React from "react";
import Header from "../header";
import { useState, useContext } from "react";
import { namecontext } from "../../App";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import Button from "../../Utils/buybutton";
import Addtocart from "../../Utils/addbutton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Jewellery = () => {
  const { cartcount, setcartcount } = useContext(namecontext);
  const jewellerycart = data.slice(4, 8)
  const { addCart, setaddCart } = useContext(namecontext);
  const navigate = useNavigate();
  const addtocart = (idx) => {
    const item = jewellerycart[idx];
    if (!item.added) {
      item["added"] = "yes";
      setaddCart([
        ...addCart,
        {
          image: item.image,
          name: item.title,
          price: item.price,
          count: 1,
          fixedprice: item.fixedprice,
        },
      ]);
      setcartcount(cartcount + 1);
      toast.success("This Product Successfully added in the cart");
    } else {
      toast.error("This product is already added in the Cart");
    }
  };
  const checkoutpage = (idx) => {
    let price = Jewellery[idx].price;
    navigate("/checkout", { state: { items: price } });
  };
  const Cartdetailpage = (item) => {
    navigate("/Cartdetails", { state: { data: item } });
  };

  return (
    <div className="bg-gradient-to-t from-gray-900 to-gray-600 min-h-screen">
      <Header />
      <p className="text-center my-4 bg-[#cececd3d] text-white p-2">
        Jewellery Products
      </p>
      <section className="flex flex-wrap gap-6 justify-center">
        {jewellerycart.map((item, index) => {
          return (
            <div className="productbox  text-center text-teal-50">
              <figure
                onClick={() => {
                  Cartdetailpage(item);
                }}
                className="flex justify-center cursor-pointer bg-[#f1f1f1] items-center shadow-[0_0_10px_black]"
              >
                <img
                  src={item.image}
                  className="w-40 p-2 h-40 mix-blend-multiply object-contain"
                  alt={item.title}
                ></img>
              </figure>
              <div className="cart my-2">
                <h4
                  onClick={() => {
                    Cartdetailpage(item);
                  }}
                  className="text-center cursor-pointer"
                >
                  {item.title}
                </h4>
                <p>${item.price}</p>
              </div>
              <div className="flex gap-2 justify-center">
                <Addtocart index={index} addtocart={addtocart} />
                <Button index={index} checkoutpage={checkoutpage} />
              </div>
            </div>
          );
        })}
        <ToastContainer/>
      </section>
    </div>
  );
};

export default Jewellery;
