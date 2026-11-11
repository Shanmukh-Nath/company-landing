import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import OpscaleERPNexus from "./pages/products/opscale";
import HRMSProductPage from "./pages/products/hrms";
import EdopsProductPage from "./pages/products/edops";
import BpoServices from "./pages/services/bpo";
import PrivacyPolicy from "./pages/legals/PrivacyPolicy";
import { useEffect } from "react";
import TermsOfService from "./pages/legals/TermsOfService";
import RefundPolicy from "./pages/legals/RefundPolicy";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

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

  const knownWrappedRoutes = [
    "/",
    "/privacy-policy",
    "/terms-of-service",
    "/refund-policy",
  ];

  const isFullPageRoute = !knownWrappedRoutes.includes(location.pathname);

  return (
    <>
      <Header />

      <div className={isFullPageRoute ? "" : "main-content-wrapper"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/opscale" element={<OpscaleERPNexus />} />
          <Route path="/products/hrms" element={<HRMSProductPage />} />
          <Route path="/products/edops" element={<EdopsProductPage />} />
          <Route path="/services/bpo" element={<BpoServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
