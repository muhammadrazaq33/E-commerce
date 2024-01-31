import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SinglePage from "./SinglePage";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Header from "./components/Header";
import { Footer } from "./components/Footer.jsX";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct" element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
