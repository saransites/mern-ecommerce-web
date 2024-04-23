import React, { useContext, useState, useEffect } from "react";
import { namecontext } from "../../App";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
const CartItems = () => {
  const navigate = useNavigate();
  const [totalprice, settotalprice] = useState(0);
  const { addCart, setaddCart } = useContext(namecontext);
  const { cartcount, setcartcount } = useContext(namecontext);
  // Sum of cartItems Price
  useEffect(() => {
    let result = addCart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    settotalprice(result);
  }, []);
  const incrementCart = (idx, amt) => {
    let temparr = [...addCart];
    temparr[idx].count++;
    let qtyprice = temparr[idx].price + amt;
    temparr[idx].price = qtyprice;
    setaddCart(temparr);
  };
  const decrementCart = (idx, orignalamt) => {
    let temparr = [...addCart];
    if (temparr[idx].count > 1) {
      //decrease count
      temparr[idx].count--;
      let qtyprice = temparr[idx].price - orignalamt;
      temparr[idx].price = qtyprice;
    }
    if (temparr.length == 0) {
      setcartcount(0);
    }
    setaddCart(temparr);
  };
  useEffect(() => {
    let sum = addCart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    settotalprice(sum);
  }, [incrementCart, decrementCart]);
  const removecart = (idx) => {
    try {
      let temparr = [...addCart];
      setaddCart(temparr);
      temparr.splice(idx, 1);
      setcartcount(cartcount - 1);
      // calculating total price after removing an item from cart
      let result = temparr.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      settotalprice(result);
    } catch (err) {
      console.error(err);
    }
  };
  const checkout = () => {
    let name=addCart.map(item=>{
      return item.name
    })
    navigate("/Checkout", { state: { items: totalprice , productname:name } });
  };
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-400 via-gray-300 to-blue-500">
      <Header />
      {addCart.length == 0 ? (
        <div className="bg-red-400 p-2 text-center">
          <p>Your cart is Empty</p>
        </div>
      ) : (
        <div className="text-center mb-6 flex justify-center items-center flex-col">
          <p>Total Amount is ${totalprice.toFixed(2)}</p>
          <button onClick={checkout} className="bg-red-400 p-1 px-4 rounded">
            Checkout
          </button>
        </div>
      )}
      <main className="cartItems my-4">
        {addCart.map((item, index) => {
          return (
            <section
              key={index}
              className="flex flex-col text-white bg-[#757575] w-fit mx-14 gap-3 p-2 justify-center items-center"
            >
              <figure className="flex cursor-pointer justify-center w-40 h-40 bg-[#f1f1f1] items-center shadow-[0_0_10px_black]">
                <img
                  src={item.image}
                  alt="img"
                  className="p-2 object-contain w-40 h-40"
                ></img>
              </figure>
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-[#e2ff4f]">${item.price.toFixed(2)}</p>
              </div>
              {/* cart item increase and decrease */}
              <div className="my-2 p-1 flex items-center gap-2 text-center w-[fit-content] border-2 border-black text-[1px]">
                {/* minus icon */}
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    decrementCart(index, item.fixedprice);
                  }}
                >
                  <FaMinusCircle className="text-xl" />
                </button>
                <p>{item.count}</p>
                {/* plus icon */}
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    incrementCart(index, item.fixedprice);
                  }}
                >
                  <FaPlusCircle className="text-xl" />
                </button>
              </div>
              {/* Remove button */}
              <div
                className="bg-red-500 p-3 cursor-pointer rounded-full"
                onClick={() => {
                  removecart(index);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default CartItems;
