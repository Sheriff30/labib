/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { LANGS, DEFAULT_LANG } from "./index";

const LangContext = createContext({ lang: DEFAULT_LANG });

export const useLang = () => useContext(LangContext);

/**
 * Reads the :lang route param, keeps i18next + <html lang/dir> in sync, and
 * exposes the active language via useLang(). Invalid languages redirect to the
 * default, preserving the rest of the path.
 */
export default function LangProvider({ children }) {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();
  const valid = LANGS.includes(lang);

  useEffect(() => {
    if (!valid) return;
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    // Re-evaluate scroll animations after a direction/content change.
    setTimeout(() => AOS.refreshHard?.(), 0);

    // SEO: maintain <link rel="alternate" hreflang> for ar/en + x-default.
    const origin = window.location.origin;
    const rest = location.pathname.replace(/^\/[^/]+/, ""); // strip lang segment
    const alternates = {
      ar: `${origin}/ar${rest}`,
      en: `${origin}/en${rest}`,
      "x-default": `${origin}/ar${rest}`,
    };
    Object.entries(alternates).forEach(([hreflang, href]) => {
      let el = document.head.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`
      );
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    });
  }, [lang, valid, i18n, location.pathname]);

  if (!valid) {
    // e.g. "/about" (no lang segment) -> "/ar/about"
    return (
      <Navigate
        to={`/${DEFAULT_LANG}${location.pathname}${location.search}`}
        replace
      />
    );
  }

  return <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>;
}
