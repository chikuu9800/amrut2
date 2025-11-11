"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SLogon() {
  const sectionRef = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // start zoom when section enters viewport
  });

  // Map zoom scale: from 1 → 1.25 as we scroll through the section
  const mapScale = useTransform(scrollYProgress, [1, 1.25], [1.25, 1.5]);

  // Optional slight rotation or opacity if you want a deeper effect
  // const mapRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section
      ref={sectionRef}
      className="relative w-[80%] m-auto min-h-[50vh] px-4 flex items-center justify-center overflow-hidden mt-10"
    >
      {/* === Main Card Animation === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-6xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left z-10 overflow-hidden"
        style={{ fontFamily: "Baloo, sans-serif" }}
      >
        {/* === Soft background monuments image === */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <img
            src="/images/Indian_Monuments_PNG-removebg-preview.png"
            alt="Indian Monuments"
            className="w-[80%] md:w-[70%] object-contain grayscale"
          />
        </div>

        {/* === Left: Maharashtra Map (Scroll Zoom) === */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/images/_-removebg-preview.png"
            alt="Maharashtra Map"
            style={{
              scale: mapScale,
              // rotate: mapRotate, // optional rotation
            }}
            className="w-[60%] md:w-[50%] object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* === Right: Text Content === */}
        <motion.div
          className="w-full p-8 md:p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-orange-700 leading-snug relative z-10">
            महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
          </h1>
          <p className="text-gray-700 mt-4 text-lg max-w-3xl relative z-10">
            महाराष्ट्र राज्याच्या सर्वांगीण विकासासाठी नवोन्मेष, प्रशिक्षण आणि संशोधनाचे
            एकत्रिकरण करणारी योजना.
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl relative z-10">
            शिक्षण, उद्योजकता आणि कौशल्य विकासासाठी राज्यभर उपक्रम.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
