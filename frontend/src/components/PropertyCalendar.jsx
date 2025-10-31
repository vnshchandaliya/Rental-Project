import React, { useEffect, useState } from "react";

const PropertyCalendar = () => {
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/calendar");
      const data = await res.json();
      setBooked(data.bookedDates || []);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white shadow rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Property Availability Calendar</h2>
      <ul className="space-y-2">
        {booked.map((b) => (
          <li key={b.propertyId}>
            🏠 Property ID: {b.propertyId} — ❌ Booked Dates: {b.dates.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyCalendar;
