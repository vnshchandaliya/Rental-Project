import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchPropertyById = (id) => API.get(`/properties/${id}`);
export const createBooking = (data) => API.post(`/bookings/create`, data);

export default API;
