import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Property from "./models/Property.js";
import calendarRoutes from "./routes/calendar.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Get all properties
app.get("/api/properties", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// ✅ Filter route (guests, bathroom)
app.get("/api/properties/filter", async (req, res) => {
  const { guests, bathroom } = req.query;
  const filter = {};
  if (guests) filter.guests = { $gte: Number(guests) };
  if (bathroom) filter.bathroom = { $gte: Number(bathroom) };

  const properties = await Property.find(filter);
  res.json(properties);
});

// ✅ NEW: Available properties route (sync with calendar / dates)
app.get("/api/properties/available", async (req, res) => {
  try {
    const { checkIn, checkOut, guests, bathroom } = req.query;

    if (!checkIn || !checkOut) {
      return res.status(400).json({ error: "Check-in and check-out are required" });
    }

    const filter = {};
    if (guests) filter.guests = { $gte: Number(guests) };
    if (bathroom) filter.bathroom = { $gte: Number(bathroom) };

    // 🔹 For now: show all properties (future-ready for calendar)
    // Later we’ll sync with bookedDates collection or ICS file
    const properties = await Property.find(filter);

    res.json(properties);
  } catch (err) {
    console.error("❌ Error fetching available properties:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use("/api", calendarRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/rentalpro")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
