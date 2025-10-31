import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import HeroSection from "./pages/Home";
import Properties from "./pages/Properties";
import Results from "./pages/Results";

import SeaDunesBeachFront from "./pages/PropertiesListing/SeaDunes";


function App() {
  return (
    <>    
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/results" element={<Results />} />
        <Route path="/sea-dunes-beach-front" element={<SeaDunesBeachFront />} />
        
      </Routes>
    
    </>
  );
}

export default App;
