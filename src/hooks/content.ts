import { useQuery } from "@tanstack/react-query";
import {
  getAllArticles,
  getAllNews,
  getArticle,
  getArticles,
  getNews,
} from "../api/articles";
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
export const useAllArticle = (page: number = 1) => {
  return useQuery({
    queryKey: ["articles", page],
    queryFn: () => getAllArticles(page),
  });
};
export const useNews = (slug: string) => {
  return useQuery({
    queryKey: ["pages", slug],
    queryFn: () => getNews(slug),
  });
};
export const useAllNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: () => getAllNews(),
  });
};
