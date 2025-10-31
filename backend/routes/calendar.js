import express from "express";
import ical from "node-ical";
import fs from "fs";
import path from "path";

const router = express.Router();

// Read ICS file (for booked dates)
const calendarPath = path.resolve("./data/bookings.ics");

// Parse .ics file
let bookedDates = [];
if (fs.existsSync(calendarPath)) {
  const data = ical.sync.parseFile(calendarPath);
  bookedDates = Object.values(data)
    .filter((event) => event.type === "VEVENT")
    .map((event) => ({
      start: new Date(event.start),
      end: new Date(event.end),
    }));
}

// ✅ Available property filter
router.get("/available", async (req, res) => {
  const { checkIn, checkOut, guests, bathroom } = req.query;
  const allProperties = await Property.find();
  const available = allProperties.filter((p) =>
    p.maxGuests >= guests && p.bathrooms >= bathroom
  );
  res.json(available);
});

router.get("/calendar", (req, res) => {
  res.json({ message: "Calendar route is working ✅" });
});

export default router;
