import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Page";
import Layout from "./shared/Layout";
import TermsAndConditions from "./pages/TermsAndConditions/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
