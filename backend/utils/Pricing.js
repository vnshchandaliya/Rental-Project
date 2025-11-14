// utils/pricing.js
export const calcPricing = (checkIn, checkOut, property) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  const subtotal = property.basePricePerNight * nights;
  const cleaningFee = property.cleaningFee;
  const serviceFee = (subtotal * property.serviceFeePercent) / 100;
  const taxes = (subtotal * property.taxesPercent) / 100;

  const total = subtotal + cleaningFee + serviceFee + taxes;

  return {
    nights,
    subtotal,
    cleaningFee,
    serviceFee,
    taxes,
    total,
  };
};
