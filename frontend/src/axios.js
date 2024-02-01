import axios from 'axios'
 
import useAuthStore from './store';

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1",
  });

api.interceptors.request.use((config) => {
  const token = useAuthStore().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status >  202) {
      // Unauthorized, clear auth data and redirect to login
      // useAuthStore().clearAuthData();
      // Replace '/login' with your actual login route
     alert("no data found")
    }
    return Promise.reject(error);
  }
);

export default api;
