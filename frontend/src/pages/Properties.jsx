import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

 useEffect(() => {
  axios.get("http://localhost:5000/api/properties").then((res) => {
    console.log(res.data); // 👈 ye line add karo
    setProperties(res.data);
  });
}, []);


  return (
          <>
            <section loading="lazy"
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url(https://www.coastaldreamrentals.com/img/hero-bg-img.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-[#00000049] z-10"></div>
        <div className="relative z-20 max-w-4xl px-4">
          <h1 className="text-center  text-[90px] font-[900] mx-19 ">Properties</h1>
          <p className="text-2xl">We have many properties to serve all your Vacation needs!</p>
        </div>
      </section>
          
    <div className="p-10 bg-gray-100 min-h-screen  pt-20">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        All Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((prop) => (
          <PropertyCard key={prop._id} property={prop} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Properties;
