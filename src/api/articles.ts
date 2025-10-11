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
export const getArticle = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/articles/${slug}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
export const getNews = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/news/${slug}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
