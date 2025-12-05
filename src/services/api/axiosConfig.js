import axios from 'axios';

// Membuat instance axios dengan konfigurasi dasar
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://67890abcdef1234567890.mockapi.io/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - untuk menangani header, logging, dan otorisasi
apiClient.interceptors.request.use(
  (config) => {
    // Log request
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    
    // Menambahkan token authorization jika ada (dari localStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Menambahkan custom headers jika diperlukan
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    
    return config;
  },
  (error) => {
    // Log error pada request
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Response Interceptor - untuk menangani response dan error handling
apiClient.interceptors.response.use(
  (response) => {
    // Log response sukses
    console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    // Log error pada response
    console.error('[API Response Error]', error.response?.data || error.message);
    
    // Handle error berdasarkan status code
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Unauthorized - bisa redirect ke login
          console.warn('Unauthorized access. Please login again.');
          // localStorage.removeItem('authToken');
          // window.location.href = '/login';
          break;
        case 403:
          console.warn('Forbidden access.');
          break;
        case 404:
          console.warn('Resource not found.');
          break;
        case 500:
          console.error('Server error. Please try again later.');
          break;
        default:
          console.error('An error occurred:', error.response.data);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;

