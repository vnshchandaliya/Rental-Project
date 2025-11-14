import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  guests: Number,
  floors: Number,
  bedroom: Number,
  bathroom: Number,
  sleep: String,
  image: String,
  latitude: Number,
  longitude: Number,
   basePricePerNight: { type: Number, default: 0 },
  cleaningFee: { type: Number, default: 0 },
  serviceFeePercent: { type: Number, default: 5 },
  taxesPercent: { type: Number, default: 7 },
  link: { type: String, required: true }, // 👈 ye add karo
  calendar: [
    {
      date: Date,
      status: String,
    },
  ],

});

const Property = mongoose.model("Property", propertySchema);

export default Property;
