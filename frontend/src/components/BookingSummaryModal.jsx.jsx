import React from "react";
import { FaXmark } from "react-icons/fa6";

const BookingSummaryModal = ({ isOpen, onClose, property, checkIn, checkOut, pricing }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative animate-scaleIn">

        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <FaXmark size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Review your booking
        </h2>

        {/* Property */}
        <p className="font-semibold text-lg">{property?.title}</p>

        {/* Dates */}
        <div className="bg-gray-100 p-3 rounded-lg mt-3">
          <p><strong>Check-in:</strong> {checkIn}</p>
          <p><strong>Check-out:</strong> {checkOut}</p>
          <p><strong>Nights:</strong> {pricing?.nights}</p>
        </div>

        {/* Pricing Breakdown */}
        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-2">Price Details</h3>

          <div className="flex justify-between py-1">
            <span>Base Price ({pricing?.nights} nights)</span>
            <span>${pricing?.subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-1">
            <span>Cleaning Fee</span>
            <span>${pricing?.cleaningFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-1">
            <span>Service Fee</span>
            <span>${pricing?.serviceFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-1">
            <span>Taxes</span>
            <span>${pricing?.taxes.toFixed(2)}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>${pricing?.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Reserve Button */}
        <button
          className="w-full mt-6 bg-black text-white py-3 text-lg rounded-lg hover:bg-gray-900 transition"
        >
          Continue → Guest Details
        </button>
      </div>
    </div>
  );
};

export default BookingSummaryModal;
