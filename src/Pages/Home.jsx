import React from 'react'
import EmbassyBanner from '../Components/Banner'
import SLogon from '../Components/SLogon'
import Tabs from '../Components/Tabs'
import AnimatedMap from '../Components/AnimatedMap'
import MaharashtraShowcase from '../Components/SliderMaha'
import Footer from '../Components/Footer'
import AmrutStats from '../Components/Dynamic'
import AmrutMissionVision from '../Components/Vison'
import YojanaSlider from '../Components/Slider'
import AmrutSlider from '../Components/AmrutSlider'


const Home = () => {
  return (
    <div>
      <EmbassyBanner />
      <SLogon />
      <YojanaSlider />
      <Tabs />
      <AmrutMissionVision />
      <AnimatedMap />
      <AmrutSlider/>
      <MaharashtraShowcase />
      <AmrutStats />

      <Footer />
    </div>
  )
}

export default Home
