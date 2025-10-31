import React from "react";
import { Bed, Bath, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Link to={property.link} 
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.03]"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover"
        />
      </div>

      {/* Title Bar */}
      <div className="bg-teal-500 text-white text-center py-2 font-semibold text-lg">
        {property.title}
      </div>

      {/* Details */}
      <div className="p-4 grid grid-cols-2 gap-y-2 text-gray-700 text-sm">
        <div className="flex items-center space-x-2">
          <Building size={16} />
          <span>Floors {property.floors}</span>
        </div>
        {/* <div className="flex items-center space-x-2">
          <Building size={16} />
          <span>Floors {property.floors  }</span>
        </div> */}

        <div className="flex items-center space-x-2">
          <Users size={16} />
          <span>Sleeps {property.sleep}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Bed size={16} />
          <span>Bedroom {property.bedroom}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Bath size={16} />
          <span>Bathroom {property.bathroom}</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
