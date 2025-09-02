import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, TermsAndConditions, About } from "@/pages";
import Layout from "@/shared/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
