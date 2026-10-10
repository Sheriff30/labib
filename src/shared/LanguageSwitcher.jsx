import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LangProvider";
import { LANGS } from "@/i18n";

/**
 * Toggles between ar/en by swapping the first path segment, preserving the
 * rest of the URL (and hash/query).
 */
export default function LanguageSwitcher({ className = "" }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const target = lang === "ar" ? "en" : "ar";

  const switchTo = () => {
    const segments = location.pathname.split("/");
    // segments[0] = "", segments[1] = current lang
    if (LANGS.includes(segments[1])) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    navigate(segments.join("/") + location.search + location.hash);
  };

  return (
    <button
      type="button"
      onClick={switchTo}
      aria-label={target === "en" ? "Switch to English" : "التبديل إلى العربية"}
      className={`body-medium cursor-pointer ${className}`}
    >
      {target === "en" ? "EN" : "ع"}
    </button>
  );
}
