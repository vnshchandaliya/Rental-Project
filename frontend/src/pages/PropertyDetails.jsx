// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const PropertyDetails = () => {
//   const { slug } = useParams();
//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/properties/${slug}`)
//       .then((res) => setProperty(res.data))
//       .catch((err) => console.error("Error fetching property:", err));
//   }, [slug]);

//   if (!property) return <p>Loading...</p>;

//   return (
//     <div className="p-8">
//       <img src={property.image} alt={property.title} className="w-full h-80 object-cover rounded-xl" />
//       <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
//       <p>Guests: {property.guests}</p>
//       <p>Bathrooms: {property.bathroom}</p>
//       <p>Bedrooms: {property.bedroom}</p>
//     </div>
//   );
// };

// export default PropertyDetails;
