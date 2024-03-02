import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<About />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
