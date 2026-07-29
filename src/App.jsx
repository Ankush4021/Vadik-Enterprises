import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import TestimonialsSection from "./components/layout/Testimonial";
import ScrollToTop from "./components/layout/ScrollToTop";
import WhatsAppButton from "./components/layout/WhatsAppButton";

function App() {
  const location = useLocation();

  return (
    <>

      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;