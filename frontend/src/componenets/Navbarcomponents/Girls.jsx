import React from "react";
import Header from "../header";
import { useContext } from "react";
import { namecontext } from "../../App";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
import Button from "../../Utils/buybutton";
import Addtocart from "../../Utils/addbutton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GirlsProducts = () => {
  const { cartcount, setcartcount } = useContext(namecontext);
  const girlproducts = data.slice(14, 20);
  const { addCart, setaddCart } = useContext(namecontext);
  const navigate = useNavigate();
  const addtocart = (idx) => {
    const item = girlproducts[idx];
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
      toast.error("This product is already added in the Cart")
    }
  };
  const checkoutpage = (idx) => {
    let price = girlproducts[idx].price;
    navigate("/checkout", { state: { items: price } });
  };
  const Cartdetailpage = (item) => {
    navigate("/Cartdetails", { state: { data: item } });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-400 to-[#4343ca]">
      <Header />
      <p className="text-center my-4 bg-[#cececd71] p-2">Girl's Cloths</p>
      <section className="flex flex-wrap gap-6 items-center justify-center">
        {girlproducts.map((item, index) => {
          return (
            <div className="productbox text-center w-[10rem] p-2">
              <figure
                onClick={() => {
                  Cartdetailpage(item);
                }}
                className="w-40 h-40 flex justify-center cursor-pointer bg-[#f1f1f1] items-center shadow-[0_0_10px_black]"
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
                <Addtocart index={index} addtocart={addtocart} />
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

export default GirlsProducts;
