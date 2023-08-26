import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about.jsx";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<AboutPage />} path="/about"></Route>
          <Route element={<Contact />} path="/contact"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
