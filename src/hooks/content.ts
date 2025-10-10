import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/articles";
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
