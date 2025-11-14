import React from "react";

const BookingModal = ({ isOpen, onClose, checkIn, checkOut, subtotal, tax, total, onReserve }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>

        <p><b>Check-In:</b> {checkIn}</p>
        <p><b>Check-Out:</b> {checkOut}</p>

        <div className="mt-4 border-t pt-4 space-y-2">
          <p>Subtotal: ${subtotal}</p>
          <p>Tax & Fees: ${tax}</p>
          <p className="font-bold text-lg">Total: ${total}</p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-300 px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={onReserve}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
