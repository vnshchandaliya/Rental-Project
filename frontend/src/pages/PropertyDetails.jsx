// import React, { useState } from "react";
// import BookingModal from "../components/BookingModal";
// import BookingForm from "./BookingForm";

// const PropertyDetails = ({ property }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const bookingData = {
//     name: property.title,
//     image: property.image,
//     checkIn: "11/13/2025",
//     checkOut: "11/14/2025",
//     nights: 1,
//     rate: 375,
//     fees: 315,
//     tax: 89.7,
//     warranty: 79,
//     total: 858.7,
//     guests: 1,
//   };

//   if (showForm) return <BookingForm bookingData={bookingData} />;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{property.title}</h1>
//       <img src={property.image} alt="" className="rounded-lg my-4" />
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-green-600 text-white px-6 py-2 rounded-lg"
//       >
//         Reserve
//       </button>

//       <BookingModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         bookingData={bookingData}
//         onReview={() => {
//           setIsModalOpen(false);
//           setShowForm(true);
//         }}
//       />
//     </div>
//   );
// };

// export default PropertyDetails;
