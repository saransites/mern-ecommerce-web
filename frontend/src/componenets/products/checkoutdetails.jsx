import React,{ useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
const Checkoutdetails = () => {
  const locate = useLocation();
  const [data, setdata] = useState("")
  const [process, setprocess] = useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    let username=e.target.username.value
    if(username)setprocess(true)
    setdata(username)
}
  return (
    <section className="signbg h-screen">
      <Header />
      <h1 className="text-center signbg font-bold opacity-35 text-[#000000]">
        Payment Details
      </h1>
      <div className={`grid place-items-center text-center ${process  && "md:grid-cols-2"} h-3/4`}>
        <form onSubmit={handleSubmit} className="checkoutform text-white text-center rounded flex flex-col shadow-[0_0_10px_black] justify-center gap-4 items-center mx-10 p-4">
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="emailaddress"
              placeholder="admin@example.com"
              className="bg-transparent p-1 px-2 ring-1 ring-[#ffffff8e] rounded outline-none"
            ></input>
          </div>
          <div>
            <label className="block font-semibold">Card Information</label>
            <input
              type="number"
              placeholder="Card Number"
              name="cardNumber"
              className="bg-transparent p-1 px-2 ring-1 ring-[#ffffff8e] rounded outline-none"
            ></input>
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            <input
              className="bg-transparent p-1 px-2 ring-1 ring-[#ffffff8e] rounded outline-none"
              name="expirydate"
              placeholder="MM/YY (Expiry Date)"
            ></input>
            <input
              className="bg-transparent p-1 px-2 ring-1 ring-[#ffffff8e] rounded outline-none"
              name="cvvnumber"
              placeholder="CVV"
            ></input>
          </div>
          <div>
            <label className="block font-semibold">Name on Card</label>
            <input
              type="text"
              name="username"
              placeholder="Card holder name"
              className="bg-transparent p-1 px-2 ring-1 ring-[#ffffff8e] rounded outline-none"
            ></input>
          </div>
          <button
          type="submit"
            // onClick={orderplace}
            className="bg-[#232323] hover:scale-105 transition-all duration-500 p-2 px-4 rounded"
          >
            Payout ${locate.state.items}
          </button>
        </form>
        {
          process  && <div>
          <h1 className="font-semibold">Congratulation!...<span className="text-[#61167a] text-[2rem]">{data}</span></h1>
          <h3>Your product of <span className="font-semibold text-white">{locate.state.productname.toString()}</span> is order Successfully...</h3>
        </div>
        }
      </div>
    </section>
  );
};

export default Checkoutdetails;
