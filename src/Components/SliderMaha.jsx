"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Brain,
  Wrench,
  Briefcase,
  ArrowUp,
  Landmark,
  Lightbulb,
  Handshake,
  IndianRupee,
  Factory,
  Building,
  Phone,
  Mail,
} from "lucide-react";

export default function AboutAmrut() {
  const [selected, setSelected] = useState("about");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // === Icon + Label Sets ===
  const iconSets = {
    about: [
      { icon: <Brain size={20} />, label: "संशोधन" },
      { icon: <Wrench size={20} />, label: "प्रशिक्षण" },
      { icon: <Briefcase size={20} />, label: "रोजगाराच्या संधी" },
    ],
    establishment: [
      { icon: <Brain size={20} />, label: "संकल्पना" },
      { icon: <Wrench size={20} />, label: "प्रशिक्षण" },
      { icon: <ArrowUp size={20} />, label: "स्वयंरोजगार" },
    ],
    board: [
      { icon: <Landmark size={20} />, label: "राज्य शासन अधिकारी" },
      { icon: <Lightbulb size={20} />, label: "सेवाश्रय" },
      { icon: <Handshake size={20} />, label: "सदस्य मार्गदर्शन" },
    ],
    initiatives: [
      { icon: <Wrench size={20} />, label: "प्रशिक्षण" },
      { icon: <IndianRupee size={20} />, label: "स्वयंरोजगार" },
      { icon: <Factory size={20} />, label: "उद्योग दिशा" },
    ],
    contact: [
      { icon: <Building size={20} />, label: "मुख्य कार्यालय" },
      { icon: <Phone size={20} />, label: "दूरध्वनी" },
      { icon: <Mail size={20} />, label: "ईमेल" },
    ],
  };

  // === Icon Animations ===
  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const floatingAnimation = {
    y: [0, -4, 0],
    transition: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
  };

  // === Text Content ===
  const content = {
    about: `महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत) ही एक
स्वायत्त संस्था आहे जी महाराष्ट्र शासनाने स्थापन केली आहे.
राज्यातील युवकांना संशोधन, कौशल्यविकास व प्रशिक्षणाच्या माध्यमातून
रोजगाराच्या संधी उपलब्ध करून देणे हा या संस्थेचा प्रमुख उद्देश आहे.`,
    establishment: `दिनांक २२ ऑगस्ट २०१९ रोजी महाराष्ट्र शासनाने शासन निर्णयाद्वारे
'अमृत' या संस्थेची स्थापना केली. या संस्थेचा हेतू संशोधन आणि
प्रशिक्षणाद्वारे युवकांना सक्षम करणे व समाजातील सर्व घटकांचा
विकास घडवणे आहे.`,
    board: `अमृतच्या कार्याची दिशा ठरवण्यासाठी सक्षम संचालक मंडळ कार्यरत आहे.
या मंडळात राज्य शासनातील वरिष्ठ अधिकारी, क्षेत्रातील तज्ज्ञ व
समाजहितासाठी कार्य करणारे सदस्य आहेत.`,
    initiatives: `अमृत संस्थेमार्फत विविध प्रशिक्षण, स्वयंरोजगार व उद्योजकता विकासाच्या
योजना राबविल्या जातात. या योजनांद्वारे युवकांना आत्मनिर्भरतेकडे वाटचाल
करण्याची प्रेरणा दिली जाते.`,
    contact: (
      <div className="space-y-3 text-sm md:text-base">
        <p>
          <span className="text-orange-700 font-bold">अमृत मुख्य कार्यालय:</span>
          <br />
          ५ वा मजला, हनुमान रोड, मंत्रालय, मुंबई – ४०००३२
        </p>
        <p>
          <span className="text-orange-700 font-bold">दूरध्वनी:</span> ०२२-२२२२२२२२
        </p>
        <p>
          <span className="text-orange-700 font-bold">ईमेल:</span> info@mahaamrut.org.in
        </p>
      </div>
    ),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-[80%] m-auto py-16 px-4 md:px-10 bg-white"
    >
      {/* === Header === */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-orange-700 mb-2"
          style={{ fontFamily: "Baloo, serif" }}
        >
          अमृत विषयी माहिती
        </h2>
        <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto">
          महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत) ही संस्था संशोधन,
          प्रशिक्षण आणि विकास उपक्रमांद्वारे युवकांना कौशल्यविकास, रोजगार आणि
          प्रगतीच्या संधी उपलब्ध करून देते.
        </p>
      </div>

      {/* === Layout === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* === Left Menu === */}
        <div className="flex flex-col gap-3 md:col-span-1">
          <h3
            className="text-base md:text-lg font-bold text-gray-800 border-b border-gray-300 pb-2"
            style={{ fontFamily: "Baloo, serif" }}
          >
            सामान्य माहिती
          </h3>
          <ul className="space-y-2 mt-2 text-gray-700">
            {[
              { id: "about", title: "अमृत विषयी" },
              { id: "establishment", title: "अमृतची स्थापना" },
              { id: "board", title: "संचालक मंडळ" },
              { id: "initiatives", title: "उपक्रम आणि योजना" },
              { id: "contact", title: "संपर्क माहिती" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`cursor-pointer border-l-4 pl-2 transition-all ${
                  selected === item.id
                    ? "border-orange-600 text-orange-700 font-semibold"
                    : "border-transparent hover:text-orange-600"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* === Right Content === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100/70 border border-orange-300 
              rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row justify-between items-start"
          >
            {/* === Text Section === */}
            <div className="flex-1 text-gray-800">
              <h4
                className="text-lg md:text-xl font-semibold text-orange-700 mb-3"
                style={{ fontFamily: "Baloo, serif" }}
              >
                {
                  {
                    about: "अमृत विषयी",
                    establishment: "अमृतची स्थापना",
                    board: "संचालक मंडळ",
                    initiatives: "उपक्रम आणि योजना",
                    contact: "संपर्क माहिती",
                  }[selected]
                }
              </h4>
              <div className="text-sm leading-relaxed whitespace-pre-line">
                {content[selected]}
              </div>
            </div>

            {/* === Icons Section (Row on Mobile, Column on Desktop) === */}
            <div className="flex flex-wrap md:flex-col justify-center md:justify-start items-center gap-4 md:gap-6 mt-6 md:mt-0 md:ml-6 w-full md:w-auto">
              {iconSets[selected]?.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    animate={isInView ? floatingAnimation : {}}
                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange-500 
                    bg-gradient-to-br from-orange-300 to-orange-500 text-white shadow-md"
                  >
                    {item.icon}
                  </motion.div>
                  <p className="mt-1 text-xs font-semibold text-orange-700">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
