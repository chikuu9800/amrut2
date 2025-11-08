import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Paripatra from "./Pages/Paripatra";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/paripatra" element={<Paripatra />} />

      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
