import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Imagecontainer () {
  const imgdetails = [
    { img: require("../Assets/images/shirts.png"),
    delay:0.1,
  },
    { img: require("../Assets/images/all electronics.jpg"),delay:0.25, },
    { img: require("../Assets/images/allshirt.jpg"),delay:0.4, },
    { img: require("../Assets/images/menpants.jpg"),delay:0.6, },
    { img: require("../Assets/images/smartWatch.jpg"),delay:0.8, },
    {
      img: require("../Assets/images/pexels-cottonbro-studio-9429437.jpg"),
      delay:1,
    },
    {
      img: require("../Assets/images/pexels-karolina-grabowska-4735935.jpg"),
      delay:1.2,
    },
    {
      img: require("../Assets/images/pexels-rahib-yaqubov-17555285.jpg"),
      delay:1.4,
    },
  ];
  return (
    <section className="px-6 my-3">
      <h1 className="font-bold my-6 text-xl text-center">#PRODUCTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {imgdetails.map((detail, index) => {
          return (
            <div className="overflow-hidden" key={index}>
              <LazyLoadImage 
                  effect="blur"
                  src={detail.img}
                  className="aspect-[1/1]"
              >
               </LazyLoadImage>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Imagecontainer
