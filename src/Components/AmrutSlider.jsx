"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/images/SliderImg/8.jpeg",
  "/images/SliderImg/2.jpg",
  "/images/SliderImg/3.jpg",
  "/images/SliderImg/4.jpg",
  "/images/SliderImg/5.jpg",
  "/images/SliderImg/6.jpg",
  "/images/SliderImg/7.jpg",
  "/images/SliderImg/1.jpg",
];

const slideContent = [
  {
    title: "अमृत – प्रगतीचा नवा मार्ग",
    desc: "महाराष्ट्रातील युवक, महिला आणि नागरिकांना सशक्त करण्यासाठी संशोधन, प्रशिक्षण आणि विकासाची दिशा.",
  },
  {
    title: "कौशल्य विकास उपक्रम",
    desc: "रोजगार आणि उद्योजकतेसाठी कौशल्यवर्धन प्रशिक्षणाद्वारे राज्याचा सर्वांगीण विकास.",
  },
  {
    title: "महिला सक्षमीकरण योजना",
    desc: "महिलांना आर्थिकदृष्ट्या सक्षम करण्यासाठी विविध स्वयंरोजगार आणि प्रशिक्षण कार्यक्रम.",
  },
  {
    title: "स्वयंरोजगार प्रोत्साहन योजना",
    desc: "युवकांना व्यवसाय मार्गदर्शन, प्रशिक्षण आणि आर्थिक सहाय्याद्वारे रोजगारनिर्मिती.",
  },
  {
    title: "संशोधन व नवोन्मेष",
    desc: "संशोधन व नवकल्पना प्रोत्साहनाद्वारे ज्ञान, विज्ञान आणि तंत्रज्ञान विकासाची दिशा.",
  },
];

export default function AmrutSli() {
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const currentContent = slideContent[index % slideContent.length];

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-[85%] mx-auto mt-[50px] mb-10 overflow-hidden rounded-3xl shadow-2xl"
      style={{
        background:
          "linear-gradient(120deg, #ffb26b 0%, #fff3e0 50%, #ffb26b 100%)",
      }}
    >
      {/* Subtle Animated Overlay for Dynamic Feel */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-orange-300/25 via-orange-100/10 to-orange-50/10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      ></motion.div>

      {/* Bottom Shadow Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-orange-300/40 via-transparent to-transparent z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between">
        {/* LEFT SIDE */}
        <div className="relative flex flex-col justify-between w-full lg:w-1/2 min-h-[70vh] md:min-h-[75vh] text-center lg:text-left">
          {/* Title + Description */}
          <div className="pt-16 px-6 md:px-10 lg:px-14">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-900 leading-snug mb-3"
              style={{ fontFamily: "Baloo, serif" }}
            >
              {currentContent.title}
            </h2>
            <p
              className="text-gray-800 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {currentContent.desc}
            </p>
          </div>

          {/* Shaniwarwada Fort (Bottom Fixed) */}
          <div className="relative flex justify-center items-end mt-auto">
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-orange-200/70 via-transparent to-transparent"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity }}
            ></motion.div>
            <img
              src="/images/wmremove-transformed (1) (1).png"
              alt="Shaniwarwada Fort"
              className="relative z-10 w-[85%] md:w-[75%] lg:w-[80%] object-contain mix-blend-multiply opacity-95 drop-shadow-[0_25px_60px_rgba(255,140,0,0.35)]"
            />
          </div>
        </div>

        {/* RIGHT SIDE — Unified Gradient with Parent */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex flex-col justify-center items-center py-10"
        >
          <div className="relative w-[85%] max-w-lg">
            {/* Main Slide */}
            <div className="overflow-hidden rounded-2xl shadow-lg border border-orange-300 bg-white/60 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index]}
                  alt={`Slide ${index + 1}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-2xl"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-4 overflow-x-auto pb-2">
              {slides.slice(0, 4).map((thumb, i) => (
                <motion.img
                  key={i}
                  src={thumb}
                  alt={`Thumbnail ${i + 1}`}
                  onClick={() => setIndex(i)}
                  whileHover={{ scale: 1.05 }}
                  className={`w-16 h-12 md:w-20 md:h-14 rounded-lg object-cover cursor-pointer transition-all ${
                    i === index
                      ? "ring-2 ring-orange-500 shadow-md"
                      : "opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-orange-100 transition"
              >
                <ChevronLeft className="text-orange-700 w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-orange-100 transition"
              >
                <ChevronRight className="text-orange-700 w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
