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

  // Animation: bottom-to-top reveal + floating
  const iconVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Floating motion after appearing
  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
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
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत) ही संस्था
          संशोधन, प्रशिक्षण आणि विकास उपक्रमांद्वारे युवकांना कौशल्यविकास,
          रोजगार आणि प्रगतीच्या संधी उपलब्ध करून देते.
        </p>
      </div>

      {/* === Layout === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* === Left Menu === */}
        <div className="flex flex-col gap-3 md:col-span-1">
          <h3
            className="text-lg md:text-xl font-bold text-gray-800 border-b border-gray-300 pb-2"
            style={{ fontFamily: "Baloo, serif" }}
          >
            सामान्य माहिती
          </h3>
          <ul className="space-y-2 mt-2 text-gray-700 text-base">
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
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-gradient-to-l from-transparent to-orange-500/30 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start border border-orange-100 relative overflow-hidden"
          >
            {/* === Text Section === */}
            <div className="flex-1 text-gray-700 md:pr-8">
              <h4
                className="text-xl md:text-2xl font-semibold text-orange-700 mb-3"
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

              {/* Descriptions */}
              {selected === "about" && (
                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                  महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत) ही एक स्वायत्त
                  संस्था आहे जी महाराष्ट्र शासनाने स्थापन केली आहे. राज्यातील युवकांना
                  संशोधन, कौशल्यविकास व प्रशिक्षणाच्या माध्यमातून रोजगाराच्या संधी
                  उपलब्ध करून देणे हा या संस्थेचा प्रमुख उद्देश आहे.
                </p>
              )}

              {selected === "establishment" && (
                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                  दिनांक २२ ऑगस्ट २०१९ रोजी महाराष्ट्र शासनाने शासन निर्णयाद्वारे 'अमृत'
                  या संस्थेची स्थापना केली. या संस्थेचा हेतू म्हणजे संशोधन आणि
                  प्रशिक्षणाद्वारे युवकांना सक्षम करणे व समाजातील सर्व घटकांचा विकास
                  घडवणे.
                </p>
              )}

              {selected === "board" && (
                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                  अमृतच्या कार्याची दिशा ठरवण्यासाठी सक्षम संचालक मंडळ कार्यरत आहे.
                  या मंडळात राज्य शासनातील वरिष्ठ अधिकारी, क्षेत्रातील तज्ज्ञ व समाजहिताच्या
                  दृष्टीने कार्य करणारे सदस्य यांचा समावेश आहे.
                </p>
              )}

              {selected === "initiatives" && (
                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                  अमृत संस्थेमार्फत विविध प्रशिक्षण, स्वयंरोजगार व उद्योजकता विकासाच्या
                  योजना राबविण्यात येतात. या योजनांद्वारे युवकांना आत्मनिर्भरतेकडे वाटचाल
                  करण्याची प्रेरणा दिली जाते.
                </p>
              )}

              {selected === "contact" && (
                <div className="space-y-3 text-sm md:text-base">
                  <p>
                    <span className="text-orange-700 font-bold">
                      अमृत मुख्य कार्यालय:
                    </span>{" "}
                    <br />
                    ५ वा मजला, हनुमान रोड, मंत्रालय, मुंबई – ४०००३२
                  </p>
                  <p>
                    <span className="text-orange-700 font-bold">दूरध्वनी:</span>{" "}
                    ०२२-२२२२२२२२
                  </p>
                  <p>
                    <span className="text-orange-700 font-bold">ईमेल:</span>{" "}
                    info@mahaamrut.org.in
                  </p>
                </div>
              )}
            </div>

            {/* === ICONS SECTION === */}
            <div className="flex flex-col items-center justify-center gap-5 mt-8 md:mt-0 md:mr-6">
              {selected === "about" && (
                <>
                  <motion.div
                    custom={0}
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.div
                      className="icon-box"
                      animate={isInView ? floatingAnimation : {}}
                    >
                      <Brain size={24} />
                    </motion.div>
                    <p className="icon-label">संशोधन</p>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.div
                      className="icon-box"
                      animate={isInView ? floatingAnimation : {}}
                    >
                      <Wrench size={24} />
                    </motion.div>
                    <p className="icon-label">प्रशिक्षण</p>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.div
                      className="icon-box"
                      animate={isInView ? floatingAnimation : {}}
                    >
                      <Briefcase size={24} />
                    </motion.div>
                    <p className="icon-label">रोजगाराच्या संधी</p>
                  </motion.div>
                </>
              )}

              {selected === "establishment" && (
                <>
                  <motion.div custom={0} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Brain size={24} />
                    </motion.div>
                    <p className="icon-label">संकल्पना</p>
                  </motion.div>

                  <motion.div custom={1} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Wrench size={24} />
                    </motion.div>
                    <p className="icon-label">प्रशिक्षण</p>
                  </motion.div>

                  <motion.div custom={2} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <ArrowUp size={24} />
                    </motion.div>
                    <p className="icon-label">स्वयंरोजगार</p>
                  </motion.div>
                </>
              )}

              {selected === "board" && (
                <>
                  <motion.div custom={0} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Landmark size={24} />
                    </motion.div>
                    <p className="icon-label">राज्य शासन अधिकारी</p>
                  </motion.div>
                  <motion.div custom={1} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Lightbulb size={24} />
                    </motion.div>
                    <p className="icon-label">सेवाश्रय</p>
                  </motion.div>
                  <motion.div custom={2} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Handshake size={24} />
                    </motion.div>
                    <p className="icon-label">सदस्य मार्गदर्शन</p>
                  </motion.div>
                </>
              )}

              {selected === "initiatives" && (
                <>
                  <motion.div custom={0} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Wrench size={24} />
                    </motion.div>
                    <p className="icon-label">प्रशिक्षण</p>
                  </motion.div>
                  <motion.div custom={1} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <IndianRupee size={24} />
                    </motion.div>
                    <p className="icon-label">स्वयंरोजगार</p>
                  </motion.div>
                  <motion.div custom={2} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Factory size={24} />
                    </motion.div>
                    <p className="icon-label">उद्योग दिशा</p>
                  </motion.div>
                </>
              )}

              {selected === "contact" && (
                <>
                  <motion.div custom={0} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Building size={24} />
                    </motion.div>
                    <p className="icon-label">मुख्य कार्यालय</p>
                  </motion.div>
                  <motion.div custom={1} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Phone size={24} />
                    </motion.div>
                    <p className="icon-label">दूरध्वनी</p>
                  </motion.div>
                  <motion.div custom={2} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.div className="icon-box" animate={isInView ? floatingAnimation : {}}>
                      <Mail size={24} />
                    </motion.div>
                    <p className="icon-label">ईमेल</p>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* === Styles === */}
      <style jsx>{`
        .icon-box {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 4px solid #ff7a00;
          background: linear-gradient(to bottom right, #ffa94d, #ff7a00);
          color: white;
          box-shadow: 0 4px 12px rgba(255, 122, 0, 0.3);
        }
        .icon-label {
          margin-top: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #e36414;
          text-align: center;
        }
      `}</style>
    </section>
  );
}


