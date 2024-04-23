import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Herosection = () => {
  const locate = useLocation();
  return (
    <main>
      <motion.section
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        initial="hidden"
        animate="show"
        className="container relative"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: -90 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{
            delay: 0.25,
            type: "spring",
            stiffness: 100,
            ease: "easeIn",
          }}
          className=" p-1 px-4 rounded font-semibold cursor-pointer  drop-shadow-[1px_1px_1.5px_white] absolute top-0 left-0"
        >
          {locate.state?.name}
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 200 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 1.4, delay: 0.15 }}
          className="hero--content text-[#090909a8] font-bold tracking-wider"
        >
          Buy Our Immense Products
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 0.5 }}
          className="w-3/4 tracking-widest text-sm md:text-xl"
        >
          👇Get our products👇
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 0.7 }}
          className="flex justify-center w-full"
        >
          <Link
            to="/Allproducts"
            style={{ zIndex: "0" }}
            className="ring-2 backdrop-blur ring-[#24283ccc] shadow-[0_0_20px_white] rounded-full hover:text-white tracking-widest font-bold p-1 px-4 text-sm lg:text-md text-[#222223] hover:bg-[#707ebf] transition-all duration-500"
          >
            SHOP NOW
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Herosection;
