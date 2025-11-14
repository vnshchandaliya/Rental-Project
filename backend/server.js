import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";

import Property from "./models/Property.js";
import calendarRoutes from "./routes/calendarRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 🟢 Default route
app.get("/", (req, res) => {
  res.send("🏡 RentalPro API Working");
});

// ✅ Get all properties
app.get("/api/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Error fetching properties" });
  }
});

// ✅ Filter properties (guests, bathroom)
app.get("/api/properties/filter", async (req, res) => {
  const { guests, bathroom } = req.query;
  const filter = {};
  if (guests) filter.guests = { $gte: Number(guests) };
  if (bathroom) filter.bathroom = { $gte: Number(bathroom) };

  const properties = await Property.find(filter);
  res.json(properties);
});

// ✅ TEST route (calendar check)
app.get("/test-calendar", (req, res) => {
  res.send("✅ Calendar route test working fine");
});

// ✅ NEW: Available properties route (connected to calendar data)
app.get("/api/properties/available", async (req, res) => {
  try {
    const { checkIn, checkOut, guests, bathroom } = req.query;

    if (!checkIn || !checkOut) {
      return res.status(400).json({ error: "Check-in and check-out are required" });
    }

    // Step 1: Calendar data call (local)
    let calendarAvailable = [];
    try {
      const calRes = await axios.get(`http://localhost:${PORT}/api/calendar/search`, {
        params: { checkIn, checkOut },
      });
      calendarAvailable = calRes.data.availableProperties || [];
    } catch (err) {
      console.warn("⚠️ Calendar not reachable, fallback to DB only");
    }

    // Step 2: DB filter (guests, bathroom)
    const dbFilter = {};
    if (guests) dbFilter.guests = { $gte: Number(guests) };
    if (bathroom) dbFilter.bathroom = { $gte: Number(bathroom) };

    // Step 3: Match externalId (if calendar returned IDs)
    if (calendarAvailable.length > 0) {
      const ids = calendarAvailable.map((p) => p.id);
      const properties = await Property.find({
        ...dbFilter,
        externalId: { $in: ids },
      });
      return res.json(properties);
    }

    // Step 4: fallback to DB
    const properties = await Property.find(dbFilter);
    res.json(properties);
  } catch (err) {
    console.error("❌ Error fetching available properties:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ ROUTES (imported)
app.use("/api/calendar", calendarRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/bookings", bookingRoutes);

// ✅ MongoDB Connect
mongoose
  .connect("mongodb://127.0.0.1:27017/rentalpro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

// ✅ Server start
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
