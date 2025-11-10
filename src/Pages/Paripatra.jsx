"use client";
import React from "react";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const notices = [
  { title: "ड्रोन पायलट प्रशिक्षण योजना प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/" },
  { title: "शासकीय संगणक टंकलेखन व लघुलेखन अर्थसहाय्य योजना प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/" },
  { title: "GCC -TBC मुदतवाढ प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/" },
  { title: "जाहीर प्रगटन", link: "https://mahaamrut.org.in/" },
  { title: "वनसेवा मुख्यपरीक्षेच्या पूर्व तयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/" },
  { title: "MPSC संयुक्त नागरी सेवा मुख्य परीक्षा-2024 (राज्य सेवा)", link: "https://mahaamrut.org.in/" },
  { title: "UPSC नागरी सेवा पूर्व परीक्षा 2025 उत्तीर्ण उमेदवारांना मुख्य परीक्षेच्या पूर्वतयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/" },
  { title: "UPSC वन सेवा पूर्व परीक्षा – 2025 उत्तीर्ण उमेदवारांना मुख्य परीक्षेच्या पूर्वतयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/" },
  { title: "C-DAC प्रसिद्धी पत्रक", link: "https://mahaamrut.org.in/" },
  { title: "MPSC अराजपत्रित (गट ब) मुख्य परीक्षेच्या पूर्व तयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/" },
  { title: "NIELIT प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/" },
  { title: "कृषी सेवा मुख्य परीक्षेच्या पूर्व तयारीसाठी अर्थ सहाय्य", link: "https://mahaamrut.org.in/" },
  { title: "निविदा सूचना", link: "https://mahaamrut.org.in/" },
];

const Paripatra = () => {
  return (
    <section
      className="relative w-[90%] md:w-[85%] mx-auto my-12 px-6 sm:px-10 md:px-14 py-10 md:py-20 rounded-[40px] shadow-2xl overflow-hidden"
    >
      {/* === FIXED PARCHMENT BACKGROUND === */}
      <div className="absolute inset-0 rounded-[40px] z-0">
        <div
          className="absolute inset-0 rounded-[40px]"
          style={{
            background:
              "radial-gradient(circle at center, #f8e7c0 0%, #f0d9a1 60%, #c59a63 100%)",
            boxShadow:
              "inset 0 0 120px rgba(120,60,10,0.45), inset 0 0 50px rgba(80,40,0,0.35)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-[40px] opacity-80 mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/parchment-texture.png')",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <motion.div
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          animate={{
            opacity: [0.75, 0.9, 0.8, 0.95, 0.75],
            scale: [1, 1.02, 1, 1.01, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(80,40,10,0.35) 100%)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Decorative Character */}
      <img
        src="/images/Gemini_Generated_Image_romgggromgggromg-removebg-preview.png"
        alt="Maratha Warrior"
        className="absolute bottom-0 right-6 md:right-16 w-28 sm:w-40 md:w-52 lg:w-64 object-contain opacity-95 drop-shadow-[0_8px_25px_rgba(0,0,0,0.3)] pointer-events-none select-none z-10"
      />

      {/* Title */}
      <div className="relative text-center z-20 py-8">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A1D09] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.3)] tracking-tight"
          style={{
            fontFamily: "'baloo', serif",
            letterSpacing: "-1px",  
          }}
        >
          परिपत्रक
        </h1>
        <div className="mt-3 w-40 h-[3px] bg-[#4A1D09] mx-auto rounded-full shadow-md"></div>
      </div>

      {/* Notice Cards */}
      <div className="relative z-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pb-28">
        {notices.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#fff9f0]/95 backdrop-blur-sm border border-[#c59a63]/40 hover:border-[#8b5e34] hover:shadow-[0_8px_20px_rgba(120,60,10,0.35)] transition-all rounded-xl p-6 flex items-center gap-4 text-left group relative overflow-hidden"
          >
            {/* Uniform Icon */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <ScrollText className="w-6 h-6 text-[#a24a13] group-hover:rotate-12 transition-transform duration-300" />
            </div>

            {/* Text */}
            <h3
              className="text-[17px] md:text-[18px] font-khand-medium text-[#4A1D09] group-hover:text-[#a24a13] transition-colors leading-snug"
              style={{ fontFamily: "'kand_medium', serif" }}
            >
              {item.title}
            </h3>

            {/* Bottom border animation */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[3px] bg-[#a24a13] rounded-t-lg"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Paripatra;
