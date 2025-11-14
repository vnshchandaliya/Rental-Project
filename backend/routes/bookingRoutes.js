// routes/bookingRoutes.js
import express from "express";
import Booking from "../models/Booking.js";
import Property from "../models/Property.js";
import { calcPricing } from "../utils/Pricing.js";

const router = express.Router();

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const { propertyId, checkIn, checkOut, user, guests } = req.body;

    if (!propertyId || !checkIn || !checkOut) {
      return res.status(400).json({ message: "Missing booking data" });
    }

    // ⭐ Fetch property details
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // ⭐ Calculate final pricing
    const pricing = calcPricing(checkIn, checkOut, property);

    // ⭐ Create booking in DB
    const booking = await Booking.create({
      property: propertyId,
      user,
      guests,
      checkIn,
      checkOut,
      nights: pricing.nights,
      pricing: {
        baseTotal: pricing.subtotal,
        cleaningFee: pricing.cleaningFee,
        serviceFee: pricing.serviceFee,
        taxes: pricing.taxes,
        subtotal: pricing.subtotal,
        total: pricing.total,
        currency: "USD",
      },
    });

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/preview", async (req, res) => {
  try {
    const { propertyId, checkIn, checkOut } = req.body;

    const property = await Property.findById(propertyId);
    if (!property) return res.status(404).json({ message: "Property not found" });

    const pricing = calcPricing(checkIn, checkOut, property);

    res.json({ pricing });

  } catch (err) {
    res.status(500).json({ message: "Error calculating pricing" });
  }
});


// GET all bookings
router.get("/", async (_req, res) => {
  const bookings = await Booking.find().populate("property");
  res.json(bookings);
});

export default router;
