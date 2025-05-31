import axios from "axios";
import Cookies from 'js-cookie';
const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

function buildApiUrl(path) {
  const base = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
  return base + '/' + path.replace(/^\//, '');
}

export class ApiClient {
  constructor() {
    // Initialize axios with default headers
    this.axiosInstance = axios.create({
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    });

    // Add request interceptor to ensure token is set for every request
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor to handle auth errors
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.logout();
          window.location.href = '/unauthorized';
        }
        return Promise.reject(error);
      }
    );
  }

  getToken() {
    return Cookies.get('token');
  }

  setToken(token) {
    Cookies.set('token', token, { expires: 7 }); // Token expires in 7 days
  }

  removeToken() {
    Cookies.remove('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  async login(email, password) {
    try {
      const response = await this.axiosInstance.post(buildApiUrl('/auth/login'), {
        email,
        password
      });
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  async register(email, password) {
    try {
      const response = await this.axiosInstance.post(buildApiUrl('/auth/register'), {
        email,
        password
      });
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  logout() {
    this.removeToken();
    window.location.href = '/user';
  }

  // EVENTS API METHODS
  async getEvents() {
    try {
      const response = await this.axiosInstance.get(buildApiUrl('/events'));
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  async getEvent(id) {
    try {
      const response = await this.axiosInstance.get(buildApiUrl(`/events/${id}`));
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  async createEvent(eventData) {
    try {
      const response = await this.axiosInstance.post(buildApiUrl('/events'), eventData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Update an event by ID
  async updateEvent(id, eventData) {
    try {
      const response = await this.axiosInstance.put(buildApiUrl(`/events/${id}`), eventData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Delete an event by ID
  async deleteEvent(id) {
    try {
      const response = await this.axiosInstance.delete(buildApiUrl(`/events/${id}`));
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
}
