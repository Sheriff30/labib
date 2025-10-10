import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/articles";
import { getPage } from "../api/page";

export const useArticles = (type: string) => {
  return useQuery({
    queryKey: ["articles", type],
    queryFn: () => getArticles(type),
  });
};

export const usePage = (type: string) => {
  return useQuery({
    queryKey: ["pages", type],
    queryFn: () => getPage(type),
  });
};
