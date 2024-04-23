import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup";
import Landingpage from "./componenets/Landingpage";
import AllProducts from "./componenets/products/AllProducts";
import CartItems from "./componenets/products/CartItems";
import Boysproducts from "./componenets/Navbarcomponents/Boys";
import Girlsproducts from "./componenets/Navbarcomponents/Girls";
import Jewellery from "./componenets/Navbarcomponents/Jewellery";
import Electronics from "./componenets/Navbarcomponents/Electronics";
import About from "./componenets/Navbarcomponents/About";
import Contacts from "./componenets/Navbarcomponents/Contact";
import Cartdetail from "./componenets/products/Cartdetails";
import Checkoutpage from "./componenets/products/Checkoutpage";
import { createContext } from "react";
import data from './data.json';
const namecontext = createContext({});
const App = () => {
  const [Cartdetails, setCartdetails] = useState(data)
  const [cartcount, setcartcount] = useState(0);
  const [addCart, setaddCart] = useState([]);
  return (
    <>
      <namecontext.Provider
        value={{
          Cartdetails,
          setCartdetails,
          addCart,
          setaddCart,
          cartcount,
          setcartcount,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signuppage" element={<Signup />}></Route>
              <Route path="/landingpage" element={<Landingpage />}></Route>
              <Route path="/Allproducts" element={<AllProducts />}></Route>
              <Route path="/For Boys" element={<Boysproducts />}></Route>
              <Route path="/For Girls" element={<Girlsproducts />}></Route>
              <Route path="/Electronics" element={<Electronics />}></Route>
              <Route path="/Jewellery" element={<Jewellery />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Contact" element={<Contacts />}></Route>
              <Route path="/Cartitems" element={<CartItems />}></Route>
              <Route path="/Cartdetails" element={<Cartdetail />}></Route>
              <Route path="/Checkout" element={<Checkoutpage/>}></Route>
            
          </Routes>
        </BrowserRouter>
      </namecontext.Provider>
    </>
  );
};

export default App;
export { namecontext };
