import mongoose from "mongoose";
import Property from "./models/Property.js";

const seedDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/rentalpro");
    console.log("✅ MongoDB Connected to rentalpro");

    await Property.deleteMany({});
    console.log("🧹 Old data cleared");

    const seedProperties = [
  {
    title: "Sea Dunes Beach Front",
    guests: 2,
    floors: 1,
    bedroom: 3,
    bathroom: 3,
    sleep: 8,
    image: "https://www.coastaldreamrentals.com/img/property-img-1/img-7.jpg",
    link: "/sea-dunes-beach-front",
  },
  {
    title: "Jade East 210",
    guests: 6,
    floors: 1,
    bedroom: 3,
    bathroom: 3,
    sleep: "3 King Beds",
    image: "https://www.coastaldreamrentals.com/img/property-img2/img-1.jpg",
    link: "/jade-east-210",
  },
  {
    title: "Grand Caribbean West 213",
    guests: 6,
    floors: 1,
    bedroom: 1,
    bathroom: 1,
    sleep: 2,
    image: "https://www.coastaldreamrentals.com/img/property-img3/img-1.jpg",
    link: "/grand-caribbean-west-213",
  },
  {
    title: "Crystal Sands",
    guests: 6,
    floors: 1,
    bedroom: 1,
    bathroom: 1.5,
    sleep: 6,
    image: "https://www.coastaldreamrentals.com/img/property-img4/img-1.jpg",
    link: "/crystal-sands",
  },
  {
    title: "Beach Sanctuary, Destin",
    guests: 10,
    bedroom: 4,
    bathroom: 3.5,
    sleep: 10,
    image: "https://www.coastaldreamrentals.com/img/property-img5/img-1.jpg",
    link: "/beach-sanctuary-destin",
  },
  {
    title: "Shoreline Towers 2051, Destin",
    guests: 5,
    floors: 1,
    bedroom: 3,
    bathroom: 3,
    sleep: 6,
    image: "https://www.coastaldreamrentals.com/img/property-img6/img-1.jpg",
    link: "/shoreline-towers-2051",
  },
  {
    title: "Summer Breeze",
    guests: 5,
    bedroom: 1,
    bathroom: 1,
    sleep: 6,
    image: "https://www.coastaldreamrentals.com/img/property-img-7/Summer%20Breeze%20204_20250417_5%20(1).jpg",
    link: "/summer-breeze",
  },
  {
    title: "Summer Spell",
    guests: 5,
    bedroom: 1,
    bathroom: 1,
    sleep: 6,
    image: "https://www.coastaldreamrentals.com/img/property-img-8/Summerspell%20106_20250304_19.jpg",
    link: "/summer-spell",
  },
];


    const inserted = await Property.insertMany(seedProperties);
    console.log("✅ Properties added:", inserted.length);

  } catch (error) {
    console.error("❌ Error inserting data:", error);
  } finally {
    await mongoose.connection.close();
    console.log("🔒 Connection closed");
  }
};

seedDB();
