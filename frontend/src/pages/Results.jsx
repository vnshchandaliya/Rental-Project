import React, { useEffect, useState } from "react";
import PropertyMap from "../components/PropertyMap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';

const ResultsPage = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null); // track selected

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const guests = params.get("guests");
    const bathroom = params.get("bathroom");

    axios.get("http://localhost:5000/api/properties/filter", {
      params: { guests, bathroom }
    }).then(res => setProperties(res.data));
  }, [location.search]);

  return (
    <>
    <section loading="lazy"
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url(https://www.coastaldreamrentals.com/img/hero-bg-img.jpeg)`,
        }}
      >
        <div className="absolute inset-0 bg-[#00000049] z-10"></div>
        <div className="relative z-20 max-w-4xl px-4">
          <h1 className="text-center  text-[90px] font-[900] mx-19 pt-40">Results</h1>
          {/* <p className="text-2xl">We have many properties to serve all your Vacation needs!</p> */}
        </div>
      </section>
      <div className="container pt-15">
        <p className="mx-13 text-[40px]">Map</p>
    <div className="flex pt-15">
      <div className="w-2/3 mx-10 h-[87vh]">
        <PropertyMap 
          properties={properties} 
          selectedProperty={selectedProperty} 
        />
      </div>
      <div className="w-1/4 overflow-y-scroll h-screen">
      {properties.map((p) => (
        <div
          key={p._id}
          className="border-b p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedProperty(p)}
        >
          <img
            src={p.image}
            alt={p.title}
            className="rounded-md h-40 w-full object-cover"
          />

          {/* 👇 Title + Icon aligned in one row */}
          <div className="flex items-center justify-between mt-2">
            <h3 className="font-semibold text-lg">{p.title}</h3>

            {/* clickable icon */}
          <div>
  {p.link && (
    <a
      href={p.link}
      target={p.link.startsWith("http") ? "_blank" : "_self"} // open internal routes in same tab
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()} // prevent selecting map marker
    >
      <ArrowUpRight
        className="w-9 h-9 text-sky-600 cursor-pointer hover:text-sky-800 transition"
        title="View Property"
      />
    </a>
  )}
</div>

          </div>

          <p className="text-gray-600 text-sm">
            {p.guests} guests • {p.bathroom} bath
          </p>
        </div>
      ))}
    </div>
    </div>

      </div>
     </>
  );
  
};

export default ResultsPage;
