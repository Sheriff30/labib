import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://16.16.195.9/api/v1/",

  headers: {
    "Content-Type": "application/json",
  },
});

export const nextApi = axios.create({
  baseURL: "/",
  withCredentials: true,
});

export default axiosInstance;
