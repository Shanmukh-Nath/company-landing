import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import OpscaleERPNexus from "./pages/products/opscale";
import HRMSProductPage from "./pages/products/hrms";
import BpoServices from "./pages/services/bpo";
import PrivacyPolicy from "./pages/legals/PrivacyPolicy";
import { useEffect } from "react";
import TermsOfService from "./pages/legals/TermsOfService";
import RefundPolicy from "./pages/legals/RefundPolicy";

export default function App() {
  const location = useLocation();
  const isFullPageRoute =
    location.pathname === "/products/opscale" ||
    location.pathname === "/products/hrms" ||
    location.pathname === "/services/bpo" ||
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
    </>
  );
}
