import Header from "./components/header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MilkDairyManagement from "./pages/products/mdms";
import HRMSProductPage from "./pages/products/hrms";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
  const isFullPageRoute = location.pathname === "/products/mdms";
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
          <Route path="/products/mdms" element={<MilkDairyManagement />} />
          <Route path="/products/hrms" element={<HRMSProductPage />} />
        </Routes>
      </div>
    </>
  );
}
