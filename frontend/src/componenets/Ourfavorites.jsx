import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Ourfavorites = () => {
  const navigate = useNavigate();
  const [scroll, setscroll] = useState(false);
  const details = [
    {
      title: "For Boys",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam!",
      btn: "SHOP NOW",
      img: require("../Assets/mensWear.jpg"),
      delay: 0.1,
    },
    {
      title: "For Girls",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam!",
      btn: "SHOP NOW",
      img: require("../Assets/girlsShopping.png"),
      delay: 0.25,
    },
    {
      title: "Electronics",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam!",
      img: require("../Assets/electronics.jpeg"),
      btn: "SHOP NOW",
      delay: 0.4,
    },
    {
      title: "Jewellery",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam!",
      img: require("../Assets/images/pexels-karolina-grabowska-4735935.jpg"),
      btn: "SHOP NOW",
      delay: 0.6,
    },
  ];
  function scrollpage() {
      setscroll(window.scrollY > 100);
  }
  useEffect(() => {
    window.addEventListener("scroll",scrollpage)
    return () => {
      window.removeEventListener("scroll", scrollpage);
    };
  }, [scroll]);
  const linkpage = (idx) => {
    navigate(`/${details[idx].title}`);
  };
  return (
    <section className="mt-14 px-6 flex flex-col gap-4">
      <h1 className="text-teal-100 font-bold text-3xl tracking-wider">
        OUR FAVORITES
      </h1>
      {scroll ? (
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          initial="hidden"
          animate="show"
          className="favorites__container"
        >
          {details.map((item, index) => {
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  show: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="show"
                transition={{ duration: 1, delay: item.delay, ease: "easeIn" }}
                key={index}
                className="flex text-[#f2f2f6] flex-col gap-3 justify-center items-center"
              >
                <h3 className="tracking-wider font-bold text-md md:text-xl">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-lg">{item.content}</p>
                <button
                  onClick={() => {
                    linkpage(index);
                  }}
                  className="ring-2 ring-white py-1 px-5 text-[8px] md:text-[13px] text-center tracking-wider font-bold hover:bg-[#4d6b93] transition-all duration-500 hover:text-white"
                >
                  {item.btn}
                </button>
                <img src={item.img} className="my-2 aspect-square h-56"></img>
              </motion.div>
            );
          })}
        </motion.div>
      ) : null}
    </section>
  );
};

export default Ourfavorites;
