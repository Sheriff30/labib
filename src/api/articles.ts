import axiosInstance from "./axios";

export const getArticles = async (type: string) => {
  try {
    const res = await axiosInstance.get(`/content/articles`, {
      params: { type },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
