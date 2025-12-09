// ContactForm.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactForm({ open, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    enquiryAbout: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "#000",
              zIndex: 500,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "10%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              width: "95%",
              maxWidth: "550px",
              background: "#fff",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0px 20px 60px rgba(0,0,0,0.2)",
              zIndex: 999,
              fontFamily: "Inter, sans-serif",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#a92427",
                textAlign: "center",
              }}
            >
              Contact Us
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                required
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyle}
              />

              {/* Mobile */}
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                required
                value={formData.mobile}
                onChange={handleChange}
                style={inputStyle}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />

              {/* Enquiry About */}
              <input
                type="text"
                name="enquiryAbout"
                placeholder="Enquiry About *"
                required
                value={formData.enquiryAbout}
                onChange={handleChange}
                style={inputStyle}
              />

              {/* Products or Services */}
              <select
                name="type"
                required
                value={formData.type}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  color: formData.type ? "#000" : "#777",
                }}
              >
                <option value="">Select: Products or Services *</option>
                <option value="product">Products</option>
                <option value="service">Services</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message *"
                required
                value={formData.message}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  minHeight: "120px",
                  resize: "vertical",
                }}
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#a92427",
                  color: "#fff",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "14px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "1rem",
  outline: "none",
  fontFamily: "Inter, sans-serif",
};
