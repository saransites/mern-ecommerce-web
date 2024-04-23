import React from "react";
import { useContext } from "react";
import { namecontext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Utils/buybutton";
import Addtocart from "../../Utils/addbutton";
const Productdetails = (props) => {
  const { cartcount, setcartcount } = useContext(namecontext);
  const navigate = useNavigate();
  const { addCart, setaddCart } = useContext(namecontext);
  const addtocart = (idx) => {
    const item = props.details[idx];
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
    let price = props.details[idx].price;
    navigate("/checkout", { state: { items: price } });
  };
  const Cartdetailpage = (item) => {
    navigate("/Cartdetails", { state: { data: item } });
  };
  return (
    <section className="productContainer mx-10">
      {props.details.map((item, index) => {
        return (
          <div
            className="productbox  flex text-white flex-col items-center text-center p-4"
            key={index}
          >
            <figure
              onClick={() => {
                Cartdetailpage(item);
              }}
              className="w-40 h-40 cursor-pointer flex justify-center bg-[#f1f1f1] items-center shadow-[0_0_10px_black]"
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
                className="cursor-pointer"
              >
                {item.title}
              </h4>
              <p>${item.price}</p>
            </div>
            <div className="flex justify-center gap-2 ">
              <Addtocart index={index} addtocart={addtocart}/>
              <Button index={index} checkoutpage={checkoutpage} />
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </section>
  );
};

export default Productdetails;
