import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FeaturedActivities from "../components/homeSection/FeaturedActivities";
import DiscoverDestinSection from "../components/homeSection/DiscoverDestin";
import PropertiesSection from "../components/homeSection/PropertiesSection";
import PropertyCalendar from "../components/PropertyCalendar";
import PropertyCard from "../components/PropertyCard";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    bathroom: 1,
  });

  const [availableProperties, setAvailableProperties] = useState([]);
  const navigate = useNavigate(); // ✅ navigation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchCalendar = async () => {
      if (formData.checkIn && formData.checkOut) {
        try {
          const res = await fetch(
            `http://localhost:5000/api/calendar?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}`
          );
          const data = await res.json();
          console.log("Calendar data:", data);
        } catch (error) {
          console.error("Error fetching calendar:", error);
        }
      }
    };
    fetchCalendar();
  }, [formData.checkIn, formData.checkOut]);

  // ✅ handleSearch with redirect
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("🔍 Search button clicked:", formData);

    const { checkIn, checkOut, guests, bathroom } = formData;
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates!");
      return;
    }

    try {
      // 1️⃣ Redirect user to /results with query params
      const params = new URLSearchParams({
        checkIn,
        checkOut,
        guests,
        bathroom,
      }).toString();

      navigate(`/results?${params}`); // 👈 redirects with filters

      // 2️⃣ (Optional) still fetch available properties for preview on home
      const res = await axios.get("http://localhost:5000/api/properties/available", {
        params: { checkIn, checkOut, guests, bathroom },
      });

      console.log("✅ Available Properties:", res.data);

      if (Array.isArray(res.data) && res.data.length > 0) {
        setAvailableProperties(res.data);
      } else {
        setAvailableProperties([]);
      }
    } catch (err) {
      console.error("Error fetching available properties:", err);
    }
  };

  return (
    <>
      <section className="relative h-[100vh] w-full flex flex-col justify-center items-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="https://www.coastaldreamrentals.com/img/header-videos.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute bg-[#00000031] inset-0 bg-opacity-40 z-0"></div>

        <div className="z-10 text-white px-4">
          <h1 className="text-5xl md:text-7xl font-cursive mb-4">
            Sunny Florida Vacation Rentals
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            Rental Property Management and Vacation Rentals in Okaloosa and Walton County
          </p>

          {/* 🔹 Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-white text-black rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center gap-3 md:gap-2 max-w-4xl mx-auto"
          >
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4"
            />

            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min={formData.checkIn || new Date().toISOString().split("T")[0]}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4"
            />

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Guest{i > 0 ? "s" : ""}
                </option>
              ))}
            </select>

            {/* <select
              name="bathroom"
              value={formData.bathroom}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4"
            >
              {[...Array(5)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Bathroom{i > 0 ? "s" : ""}
                </option>
              ))}
            </select> */}

            <button
              type="submit"
              className="bg-sky-700 text-white rounded-lg px-6 py-2 w-full md:w-auto hover:bg-sky-800 transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Optional preview below search */}
      {availableProperties.length > 0 && (
        <section className="py-12 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Available Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {availableProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </section>
      )}

      <PropertiesSection />
      <FeaturedActivities />
      <DiscoverDestinSection />
      <PropertyCalendar />
    </>
  );
};

export default HeroSection;
