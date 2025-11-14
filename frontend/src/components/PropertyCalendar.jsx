import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const statusColors = {
  A: "bg-green-500",     // Available
  CI: "bg-yellow-500",   // Check-in Only
  CO: "bg-orange-500",   // Check-out Only
  R: "bg-red-500",       // Not Available
  T: "bg-purple-500",    // Turn Over Date
};

const statusLabels = {
  A: "Available",
  CI: "Check-in Only",
  CO: "Check-out Only",
  R: "Not Available",
  T: "Turn Over Date",
};

const PropertyCalendar = () => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    fetchCalendarData();
  }, [month, year]);

  const fetchCalendarData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/calendar/month", {
        params: { month, year },
      });
      setCalendarData(res.data.data);
    } catch (err) {
      console.error("Error fetching calendar:", err);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  // Days in month
  const daysInMonth = new Date(year, month, 0).getDate();

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
          >
            ← PREV
          </button>

          <div className="flex items-center gap-2">
            <select
              value={month}
              onChange={(e) => setMonth(parseInt(e.target.value))}
              className="border rounded-lg px-3 py-2"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="border rounded-lg px-3 py-2"
            >
              {[2024, 2025, 2026].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <button
              onClick={fetchCalendarData}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Load
            </button>
          </div>

          <button
            onClick={nextMonth}
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
          >
            NEXT →
          </button>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mb-4 text-sm">
          {Object.entries(statusLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-1">
              <div className={`w-4 h-4 ${statusColors[key]} rounded`}></div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-sky-700 text-white text-sm">
                <th className="p-2 border">Unit</th>
                <th className="p-2 border text-left">Property Name</th>
                {Array.from({ length: daysInMonth }, (_, i) => (
                  <th key={i + 1} className="p-1 border text-center">
                    {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendarData.map((property) => (
                <tr key={property.id} className="text-center text-sm">
                  <td className="border p-2 font-semibold text-sky-700">
                    {property.id}
                  </td>
                  <td className="border p-2 text-left">{property.name}</td>
                  {property.days.map((day, i) => (
                    <td
                      key={i}
                      className={`border p-1 text-white font-semibold text-xs ${statusColors[day.status]} rounded`}
                    >
                      {day.status}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PropertyCalendar;
