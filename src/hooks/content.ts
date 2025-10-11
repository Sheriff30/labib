import { useQuery } from "@tanstack/react-query";
import { getArticle, getArticles, getNews } from "../api/articles";
import { getPage } from "../api/page";

export const useArticles = (type: string, page: number = 1) => {
  return useQuery({
    queryKey: ["articles", type, page],
    queryFn: () => getArticles(type, page),
  });
};

export const usePage = (type: string) => {
  return useQuery({
    queryKey: ["pages", type],
    queryFn: () => getPage(type),
  });
};
export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ["pages", slug],
    queryFn: () => getArticle(slug),
  });
};
export const useNews = (slug: string) => {
  return useQuery({
    queryKey: ["pages", slug],
    queryFn: () => getNews(slug),
  });
};
