import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import HeroSection from "./pages/Home";
import Properties from "./pages/Properties";
import Results from "./pages/Results";

import SeaDunesBeachFront from "./pages/PropertiesListing/SeaDunes";
import Footer from "./components/Footer";
// import PropertyDetail from "./pages/PropertyDetails";
// import BookingForm from "./pages/BookingForm";
// import BookingSummary from "./pages/BookingSummary";




function App() {
  return (
    <>    
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/results" element={<Results />} />
        {/* <Route path="/property/:id" element={<PropertyDetail />} /> */}
        {/* <Route path="/booking-form" element={<BookingForm />} /> */}
        {/* <Route path="/booking-summary" element={<BookingSummary/>}/> */}
        <Route path="/sea-dunes-beach-front" element={<SeaDunesBeachFront />} />
        
      </Routes>
    <Footer />
    </>
  );
}

export default App;
