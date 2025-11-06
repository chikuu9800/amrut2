"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skyline from "/images/Indian_Monuments_PNG-removebg-preview.png";
import orangeCircle from "/images/Red_dot__Japanese_art_Drawing_Ink_wash_painting__sushi_takeaway__watercolor_Painting__sphere__chinese_Painting_png-removebg-preview (1).png";

const leftImages = [
  "/images/Mahapurush/1.png",
  "/images/Mahapurush/2.png",
  "/images/Mahapurush/3.png",
];

const data = [
  {
    title: "छत्रपती शिवाजी महाराज",
    details: `"जोपर्यंत तुमच्या मनात आत्मविश्वास आहे, तोपर्यंत तुम्हाला कोणीही पराभूत करू शकत नाही."`,
  },
  {
    title: "लोकमान्य बाळ गंगाधर टिळक",
    details: `"शिकवण्याचा आणि शिकण्याचा हक्क हा प्रत्येकाचा आहे. तो कोणत्याही परिस्थितीत हिरावून घेतला जाऊ शकत नाही."`,
  },
  {
    title: "स्वामी विवेकानंद",
    details: `"आपल्या जीवनात शंभर टक्के यश मिळवायचं असेल तर पिळवणुकीला नकार द्या, आणि मनाचे शुद्धतेवर विश्वास ठेवा."`,
  },
];

const MaharashtraShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col justify-center items-center py-16 md:py-20 bg-white min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      {/* Section Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600 mb-8 md:mb-10 text-center px-4"
        style={{ fontFamily: "baloo, sans-serif" }}
      >
        महापुरुषांचे प्रेरणादायी विचार
      </motion.h1>

      {/* Main Content */}
      <div className="relative z-20 w-[92%] sm:w-[85%] lg:w-[80%] rounded-3xl overflow-hidden flex flex-col md:flex-row bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
        
        {/* LEFT SECTION (Fixed Size) */}
        <div className="md:w-1/2 w-full flex justify-center items-center bg-orange-50 p-6 sm:p-8 md:p-10">
          <div className="relative aspect-[4/3] w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={leftImages[index]}
                alt={data[index].title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-contain rounded-2xl shadow-md bg-white p-4"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="md:w-1/2 w-full flex flex-col justify-center items-center text-center p-6 sm:p-8 md:p-10 relative bg-white"
          style={{
            backgroundImage: `url(${orangeCircle})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8 }}
              className="max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]"
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-700 mb-4 leading-snug"
                style={{ fontFamily: "baloo, sans-serif" }}
              >
                {data[index].title}
              </h2>
              <p
                className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed italic"
                style={{ fontFamily: "poppins, serif" }}
              >
                {data[index].details}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Skyline */}
      <img
        src={skyline}
        alt="Skyline"
        className="absolute bottom-0 left-0 w-full opacity-10 md:opacity-20 pointer-events-none"
      />
    </div>
  );
};

export default MaharashtraShowcase;
