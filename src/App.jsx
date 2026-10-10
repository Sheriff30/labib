import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Home,
  TermsAndConditions,
  About,
  Library,
  Blog,
  Inspiration,
  Fields,
  News,
  Articles,
  Studies,
  NewsArticles,
} from "@/pages";
import Layout from "@/shared/Layout";
import ScrollToTop from "./shared/ScrollToTop";
import { Latest } from "./pages";
import LangProvider from "@/i18n/LangProvider";
import { LANGS, DEFAULT_LANG } from "@/i18n";

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Redirect "/" to the browser-preferred language (ar default).
function RootRedirect() {
  const browser =
    typeof navigator !== "undefined" ? navigator.language || "" : "";
  const lang = browser.toLowerCase().startsWith("en") ? "en" : DEFAULT_LANG;
  return <Navigate to={`/${lang}`} replace />;
}

// Unknown subpath under a valid language -> that language's home.
function LangNotFound() {
  const { lang } = useParams();
  return (
    <Navigate to={`/${LANGS.includes(lang) ? lang : DEFAULT_LANG}`} replace />
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<RootRedirect />} />

          <Route
            path="/:lang"
            element={
              <LangProvider>
                <Layout />
              </LangProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="about" element={<About />} />
            <Route path="library" element={<Library />} />
            <Route path="blog/:slug" element={<Blog />} />
            <Route path="news/:slug" element={<News />} />
            <Route path="news" element={<NewsArticles />} />
            <Route path="fields" element={<Fields />} />
            <Route path="initiatives" element={<Inspiration />} />
            <Route path="latest" element={<Latest />} />
            <Route path="articles" element={<Articles />} />
            <Route path="studies" element={<Studies />} />
            <Route path="*" element={<LangNotFound />} />
          </Route>

          {/* Any non-language path (e.g. "/about") -> prefix default lang. */}
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
