import axiosInstance from "./axios";

export const getArticles = async (type: string, page: number = 1) => {
  try {
    const res = await axiosInstance.get(
      `/categories/${type}/articles?page=${page}`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
