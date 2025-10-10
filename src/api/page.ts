import axiosInstance from "./axios";

export const getPage = async (type: string) => {
  try {
    const res = await axiosInstance.get(`/pages/${type}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
