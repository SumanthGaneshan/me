import React, { useState } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/prog3.png";
import { Check } from "lucide-react";

const Hero = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); 
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white px-4 md:px-8 relative overflow-hidden">

      {/* Background Shape with Different Border Radius */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <motion.div
          className="absolute w-[400px] h-[400px] bg rounded-full bg-[#19191d]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* Image */}
      <motion.img
        src={myImage}
        height={300}
        width={300}
        alt="Description of the image"
        className="relative rounded-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Name */}
      <motion.h1
        className="text-5xl mt-5 sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="relative z-10 text-white">Sumanth Ganeshan</span>
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="mt-4 text-3xl sm:text-3xl md:text-2xl lg:text-4xl font-bold text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <span className="text-purple-500">&lt;</span>
        Software Developer
        <span className="text-purple-500">/&gt;</span>
      </motion.h2>

      {/* Button */}
      <motion.a
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        download="Sumanth_Ganeshan_Resume"
        className="mt-8 inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <button
          type="button"
          onClick={handleDownload}
          className="text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 transition-all focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Download Resume
        </button>
      </motion.a>
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed z-10 top-10 text-base bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 flex items-center justify-center gap-2">
          <Check size={20}/>Resume downloaded
        </div>
      )}
    </div>
  );
};

export default Hero;
