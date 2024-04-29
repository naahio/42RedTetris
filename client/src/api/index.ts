import axios from 'axios';

export const baseURL = import.meta.env.VITE_API_BASE_URL as string;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
