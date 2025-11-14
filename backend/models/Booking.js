// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },

  user: {
    name: String,
    email: String,
    phone: String,
  },

  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: Number,
  nights: Number,

  pricing: {
    baseTotal: Number,
    cleaningFee: Number,
    serviceFee: Number,
    taxes: Number,
    subtotal: Number,
    total: Number,
    currency: { type: String, default: "USD" }
  },

  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },

  payment: {
    provider: String,
    paymentIntentId: String,
    paid: { type: Boolean, default: false },
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
