import React from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-wrap items-center justify-between w-full px-8 py-4 bg-white shadow-sm"
    >
      {/* Brand Logo */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <img src="/images/brand_logo.png" alt="Brand Logo" className="w-[120px]" />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center md:justify-between w-full md:w-1/2 text-center font-semibold gap-6 md:gap-10 tracking-wide mt-2 md:mt-0">
        {["MENU", "LOCATION", "ABOUT", "CONTACT"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer transition relative"
          >
            <span className="hover:text-red-600 transition">{item}</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-red-600 transition-all duration-300 hover:w-full"></span>
          </motion.li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0 ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red-700 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-800 cursor-pointer transition"
        >
          Login
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
