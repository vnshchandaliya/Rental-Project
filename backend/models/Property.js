import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  guests: Number,
  floors: Number,
  bedroom: Number,
  bathroom: Number,
  sleep: String,
  image: String,
  link: { type: String, required: true }, // 👈 ye add karo
  icalUrl: String,
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
