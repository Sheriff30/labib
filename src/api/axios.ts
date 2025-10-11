import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://back-end.labeb.sa/api/v1/",

  headers: {
    "Content-Type": "application/json",
  },
});

export const nextApi = axios.create({
  baseURL: "/",
  withCredentials: true,
});

export default axiosInstance;
