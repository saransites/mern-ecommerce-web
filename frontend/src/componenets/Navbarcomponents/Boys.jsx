import React from "react";
import Header from "../header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { namecontext } from "../../App";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import Button from "../../Utils/buybutton";
import Addtocart from "../../Utils/addbutton";
const BoysProducts = () => {
  const { cartcount, setcartcount } = useContext(namecontext);
  const boysproducts = data.slice(0, 4);
  const { addCart, setaddCart } = useContext(namecontext);
  const navigate = useNavigate();
  const addtocart = (idx) => {
    const item = boysproducts[idx];
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
      toast.success("This Product Successfully added in the cart")
    } else {
      toast.error("This product is already added in the Cart");
    }
  };
  const checkoutpage = (idx) => {
    let price = boysproducts[idx].price;
    navigate("/checkout", { state: { items: price } });
  };
  const Cartdetailpage = (item) => {
    navigate("/Cartdetails", { state: { data: item } });
  };
  return (
    <div className="min-h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Header />
      <p className="text-center bg-[#cececd3d] text-white p-2">Men's Cloths</p>
      <section className="flex flex-col gap-1 md:flex-row items-center justify-center p-2">
        {boysproducts.map((item, index) => {
          return (
            <div className="productbox flex flex-col text-teal-50 items-center text-center p-4">
              <figure
                onClick={() => {
                  Cartdetailpage(item);
                }}
                className="flex cursor-pointer justify-center w-40 h-40 bg-[#f1f1f1] items-center shadow-[0_0_10px_black]"
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
                  className="text-left cursor-pointer"
                >
                  {item.title}
                </h4>
                <p>${item.price}</p>
              </div>
              <div className="flex justify-center gap-2">
              <Addtocart index={index} addtocart={addtocart}/>
                <Button index={index} checkoutpage={checkoutpage} />
              </div>
            </div>
          );
        })}
      </section>
      <ToastContainer/>
    </div>
  );
};

export default BoysProducts;
