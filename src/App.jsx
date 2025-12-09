import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import OpscaleERPNexus from "./pages/products/opscale";
import HRMSProductPage from "./pages/products/hrms";
import BpoServices from "./pages/services/bpo";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
  const isFullPageRoute =
    location.pathname === "/products/opsacle" ||
    location.pathname === "/products/hrms";
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      document.body.classList.add("scrolling");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <div style={{ marginTop: isFullPageRoute ? 0 : 90 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/opscale" element={<OpscaleERPNexus />} />
          <Route path="/products/hrms" element={<HRMSProductPage />} />
          <Route path="/services/bpo" element={<BpoServices />} />
        </Routes>
      </div>
    </>
  );
}
