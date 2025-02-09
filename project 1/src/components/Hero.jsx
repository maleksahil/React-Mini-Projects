import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full mt-20 px-8 md:px-16">
      {/* Left Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:w-1/2 w-full flex flex-col justify-between space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center md:text-left text-gray-900">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="text-gray-600 text-center md:text-left md:w-[75%] leading-relaxed">
          Your feet deserve the best, and we’re here to help you with our
          high-quality, stylish, and comfortable shoes.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-red-700 text-white px-6 py-3 rounded-full cursor-pointer shadow-lg hover:bg-red-800 transition"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border-2 border-black px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-800 hover:text-white transition"
          >
            Category
          </motion.button>
        </div>

        {/* Availability */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-700">Also available on</p>
          <div className="flex justify-center md:justify-start space-x-6 mt-3">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src="/images/flipkart.png"
              alt="Flipkart"
              className="w-12 hover:scale-110 transition"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              src="/images/amazon.png"
              alt="Amazon"
              className="w-12 hover:scale-110 transition"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Section - Hero Image */}
      <motion.div
        initial={{x:50, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0"
      >
        <motion.img
          whileHover={{ rotate:30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src="/images/hero-image.png"
          alt="Hero"
          className="w-[50%] h-auto object-contain rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
