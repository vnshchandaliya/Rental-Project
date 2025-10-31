import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

const Results = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Parse query params from URL
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get("checkIn");
  const checkOut = queryParams.get("checkOut");
  const guests = queryParams.get("guests");
  const bathroom = queryParams.get("bathroom");

  useEffect(() => {
    const fetchAvailableProperties = async () => {
      try {
        console.log("🔍 Fetching available properties for:", {
          checkIn,
          checkOut,
          guests,
          bathroom,
        });

        const res = await axios.get("http://localhost:5000/api/properties/available", {
          params: { checkIn, checkOut, guests, bathroom },
        });

        console.log("✅ Available Data:", res.data);

        if (Array.isArray(res.data) && res.data.length > 0) {
          setProperties(res.data);
        } else {
          setProperties([]);
        }
      } catch (err) {
        console.error("❌ Error fetching available properties:", err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    if (checkIn && checkOut) fetchAvailableProperties();
  }, [checkIn, checkOut, guests, bathroom]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg font-semibold">
        Loading available rentals...
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Search Our Vacation Rentals
        </h2>

        {properties.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No properties available for selected dates.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
