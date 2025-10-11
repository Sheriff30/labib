import { BrowserRouter, Route, Routes } from "react-router-dom";
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
} from "@/pages";
import Layout from "@/shared/Layout";
import ScrollToTop from "./shared/ScrollToTop";

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Library />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/news/:slug" element={<News />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/initiatives" element={<Inspiration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
