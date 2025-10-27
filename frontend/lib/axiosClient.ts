// src/lib/axiosClient.ts
import axios from "axios";
import { useAuthStore } from "@/store/zustand/useAuthStore";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  withCredentials: false, // true ถ้าใช้ cookie
});

// interceptor เพิ่ม token ทุก request
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// interceptor handle error เช่น token หมดอายุ
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default api;
