// import React, { useState } from "react";

// const BookingForm = ({ bookingData }) => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     country: "",
//     city: "",
//     state: "",
//     zip: "",
//     paymentType: "",
//     cardName: "",
//     cardNumber: "",
//     cvv: "",
//     expiry: "",
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking Submitted:", { ...form, bookingData });
//     // TODO: send to backend
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
//       {/* LEFT — Form */}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <h2 className="text-lg font-bold border-b pb-2 mb-4">1. Guest Information</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <input name="firstName" placeholder="First Name*" onChange={handleChange} className="border p-2 rounded" />
//             <input name="lastName" placeholder="Last Name*" onChange={handleChange} className="border p-2 rounded" />
//           </div>
//           <input name="email" placeholder="Email*" onChange={handleChange} className="border p-2 rounded w-full mt-2" />
//           <input name="phone" placeholder="Phone*" onChange={handleChange} className="border p-2 rounded w-full mt-2" />
//           <input name="address" placeholder="Home Address*" onChange={handleChange} className="border p-2 rounded w-full mt-2" />
//           <div className="grid grid-cols-3 gap-2 mt-2">
//             <input name="country" placeholder="Country" onChange={handleChange} className="border p-2 rounded" />
//             <input name="city" placeholder="City" onChange={handleChange} className="border p-2 rounded" />
//             <input name="state" placeholder="State" onChange={handleChange} className="border p-2 rounded" />
//           </div>
//           <input name="zip" placeholder="Zip" onChange={handleChange} className="border p-2 rounded w-full mt-2" />
//         </div>

//         <div>
//           <h2 className="text-lg font-bold border-b pb-2 mb-4">2. Payment Information</h2>
//           <select name="paymentType" onChange={handleChange} className="border p-2 rounded w-full mb-2">
//             <option>Select payment type</option>
//             <option>Credit Card</option>
//             <option>Debit Card</option>
//             <option>UPI</option>
//           </select>
//           <input name="cardName" placeholder="Card Holder Name*" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
//           <input name="cardNumber" placeholder="Card Number*" onChange={handleChange} className="border p-2 rounded w-full mb-2" />
//           <div className="grid grid-cols-2 gap-2">
//             <input name="cvv" placeholder="CVV*" onChange={handleChange} className="border p-2 rounded" />
//             <input name="expiry" placeholder="Expiry (mm/yy)*" onChange={handleChange} className="border p-2 rounded" />
//           </div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4">
//             Complete My Booking
//           </button>
//         </div>
//       </form>

//       {/* RIGHT — Summary */}
//       <div className="border rounded-lg p-4 bg-gray-50">
//         <img src={bookingData.image} alt="property" className="rounded-lg mb-3" />
//         <h3 className="font-semibold">{bookingData.name}</h3>
//         <p>{bookingData.checkIn} → {bookingData.checkOut}</p>
//         <p>Guests: {bookingData.guests}</p>
//         <div className="border-t mt-3 pt-3 text-sm">
//           <p>Price: ${bookingData.rate}</p>
//           <p>Taxes & Fees: ${bookingData.tax}</p>
//           <p className="font-bold mt-2 text-lg">Total: ${bookingData.total}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
