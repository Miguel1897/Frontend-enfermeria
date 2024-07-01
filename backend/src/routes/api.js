import axios from 'axios';

const api = axios.create({
  baseURL: 'https://enfermeria-app-final.onrender.com/api', // Asegúrate de que esta es la URL correcta de tu backend
});

export default api;