/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LangProvider";

/**
 * Pick the localized value of an API field. In English, prefers `${field}_en`
 * and falls back to the Arabic source when the translation is empty.
 */
export function localizedField(obj, field, lang) {
  if (!obj) return "";
  if (lang === "en") return obj[`${field}_en`] || obj[field] || "";
  return obj[field] ?? "";
}

/** Hook form: returns (obj, field) => localized string for the active language. */
export function useLocalized() {
  const { lang } = useLang();
  return (obj, field) => localizedField(obj, field, lang);
}

/** Prefix an internal path with the active language (external/hash paths untouched). */
export function localizedPath(path, lang) {
  if (!path) return path;
  if (path.startsWith("#") || /^https?:\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean === "/" ? "" : clean}`;
}

/** Drop-in replacement for react-router <Link> that prefixes the active language. */
export function LocalizedLink({ to, children, ...rest }) {
  const { lang } = useLang();
  return (
    <Link to={localizedPath(to, lang)} {...rest}>
      {children}
    </Link>
  );
}
