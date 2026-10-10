import { useQuery } from "@tanstack/react-query";
import {
  getAllArticles,
  getAllNews,
  getArticle,
  getArticles,
  getNews,
} from "../api/articles";
import { getPage } from "../api/page";
import { useLang } from "@/i18n/LangProvider";

export const useArticles = (type: string, page: number = 1) => {
  return useQuery({
    queryKey: ["articles", type, page],
    queryFn: () => getArticles(type, page),
  });
};

export const usePage = (type: string) => {
  const { lang } = useLang();
  const query = useQuery({
    queryKey: ["pages", type],
    queryFn: () => getPage(type),
  });

  // Pages carry English as a separate `content_en` array (not embedded *_en
  // fields). In English, use it in place of `content` so every section renders
  // its translated text; fall back to Arabic when a translation is missing.
  const data = query.data as any;
  if (data && lang === "en" && Array.isArray(data.content_en)) {
    return { ...query, data: { ...data, content: data.content_en } };
  }
  return query;
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
