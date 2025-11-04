import React from "react";
import Accordion from "../Components/Accordion"
import Slider from "../Components/Slider";
import AboutUs from "../Components/Aboutus";
import InspirationCarousel from "../Components/InspirationCarousel";
import Contactus from "../Components/Contactus";

const Home = () => {
 
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 font-martel" style={{fontFamily: 'baloo, serif' }}>
    
<Accordion/>
     
      <Slider />
      <AboutUs/>
      <InspirationCarousel />
      <Contactus />

    </div>
  );
};

export default Home;
