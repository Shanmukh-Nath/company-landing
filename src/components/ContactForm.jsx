// ContactForm.jsx
import { useState, useEffect, useRef } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  Send,
  Check,
  Building2,
  Zap,
  ArrowRight,
} from "lucide-react";

const ACCENT = "#a92427";
const ACCENT_LIGHT = "rgba(169,36,39,0.08)";
const ACCENT_BDR = "rgba(169,36,39,0.25)";
const ACCENT_DARK = "#7e1a1c";
const TEXT_DARK = "#1a1a1a";
const TEXT_MID = "#555";
const TEXT_LIGHT = "#888";
const BG_WHITE = "#ffffff";
const BG_LIGHT = "#fafafa";
const BORDER_LIGHT = "#e5e5e5";

export default function ContactForm({ open, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    enquiryAbout: "",
    type: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const firstInputRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 350);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.mobile))
      errs.mobile = "Enter a valid mobile number";
    if (!formData.email.trim()) errs.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Enter a valid email address";
    if (!formData.enquiryAbout.trim())
      errs.enquiryAbout = "Please describe your enquiry";
    if (!formData.type) errs.type = "Please select a category";
    if (!formData.message.trim()) errs.message = "A message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
    onSubmit?.(formData);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        enquiryAbout: "",
        type: "",
        message: "",
      });
      setErrors({});
    }, 300);
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes cf-fade-in   { from { opacity: 0 } to { opacity: 1 } }
        @keyframes cf-slide-up  { from { opacity: 0; transform: translateY(32px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes cf-success   { 0% { transform: scale(0) rotate(-20deg) } 60% { transform: scale(1.18) rotate(5deg) } 100% { transform: scale(1) rotate(0deg) } }
        @keyframes cf-spin      { to { transform: rotate(360deg) } }
        @keyframes cf-checkpath { from { stroke-dashoffset: 40 } to { stroke-dashoffset: 0 } }

        .cf-overlay {
          position: fixed; inset: 0; z-index: 5000;
          background: rgba(10,10,10,0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: cf-fade-in 0.2s ease;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          box-sizing: border-box;
        }
        .cf-modal {
          position: relative;
          width: 100%; max-width: 520px;
          background: ${BG_WHITE};
          border-radius: 20px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06);
          animation: cf-slide-up 0.32s cubic-bezier(0.34,1.3,0.64,1);
          overflow: hidden;
          max-height: calc(100svh - 32px);
          display: flex; flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .cf-header {
          flex-shrink: 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a1618 100%);
          padding: 28px 28px 24px;
          position: relative; overflow: hidden;
        }
        .cf-header-ring-1 {
          position: absolute; top: -40px; right: -40px;
          width: 200px; height: 200px; border-radius: 50%;
          border: 48px solid rgba(169,36,39,0.14);
          pointer-events: none;
        }
        .cf-header-ring-2 {
          position: absolute; bottom: -30px; left: 60px;
          width: 120px; height: 120px; border-radius: 50%;
          border: 28px solid rgba(234,179,8,0.12);
          pointer-events: none;
        }
        .cf-close-btn {
          position: absolute; top: 16px; right: 16px; z-index: 2;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: rgba(255,255,255,0.7);
          transition: all 0.15s;
        }
        .cf-close-btn:hover { background: rgba(169,36,39,0.3); color: #fff; border-color: rgba(169,36,39,0.5); }
        .cf-body {
          flex: 1; overflow-y: auto; padding: 24px 28px 28px;
          scrollbar-width: thin; scrollbar-color: ${BORDER_LIGHT} transparent;
        }
        .cf-field { margin-bottom: 14px; }
        .cf-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.72rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: ${TEXT_MID}; margin-bottom: 6px;
        }
        .cf-input-wrap { position: relative; }
        .cf-input-icon {
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: ${TEXT_LIGHT}; pointer-events: none; transition: color 0.15s;
          display: flex; align-items: center;
        }
        .cf-textarea-icon {
          position: absolute; left: 12px; top: 14px;
          color: ${TEXT_LIGHT}; pointer-events: none; transition: color 0.15s;
          display: flex; align-items: center;
        }
        .cf-input {
          width: 100%; box-sizing: border-box;
          padding: 11px 12px 11px 38px;
          border: 1.5px solid ${BORDER_LIGHT};
          border-radius: 10px;
          font-size: 0.91rem; color: ${TEXT_DARK};
          background: ${BG_WHITE};
          font-family: inherit;
          transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
          outline: none;
          -webkit-appearance: none;
        }
        .cf-input::placeholder { color: ${TEXT_LIGHT}; }
        .cf-input:focus {
          border-color: ${ACCENT};
          box-shadow: 0 0 0 3px ${ACCENT_LIGHT};
          background: #fffafa;
        }
        .cf-input:focus ~ .cf-input-icon,
        .cf-input:focus ~ .cf-textarea-icon { color: ${ACCENT}; }
        .cf-input-wrap:focus-within .cf-input-icon,
        .cf-input-wrap:focus-within .cf-textarea-icon { color: ${ACCENT}; }
        .cf-input.error { border-color: #e53e3e; box-shadow: 0 0 0 3px rgba(229,62,62,0.1); }
        .cf-error { font-size: 0.73rem; color: #e53e3e; margin-top: 4px; display: flex; align-items: center; gap: 4px; }
        .cf-select { appearance: none; -webkit-appearance: none; cursor: pointer; }
        .cf-select-chevron {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          pointer-events: none; color: ${TEXT_LIGHT};
        }
        .cf-textarea { padding-top: 12px; padding-bottom: 12px; min-height: 100px; resize: vertical; }
        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .cf-submit-btn {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, ${ACCENT} 0%, #c42d30 100%);
          color: #fff; border: none; border-radius: 12px;
          font-weight: 800; font-size: 0.95rem;
          font-family: inherit; cursor: pointer; letter-spacing: 0.01em;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 6px 24px rgba(169,36,39,0.32);
          transition: all 0.15s; margin-top: 6px;
        }
        .cf-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, ${ACCENT_DARK} 0%, ${ACCENT} 100%);
          box-shadow: 0 10px 32px rgba(169,36,39,0.44);
          transform: translateY(-1px);
        }
        .cf-submit-btn:active:not(:disabled) { transform: translateY(0); }
        .cf-submit-btn:disabled { opacity: 0.75; cursor: not-allowed; }
        .cf-spinner {
          width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: cf-spin 0.7s linear infinite;
        }
        .cf-success-wrap {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; padding: 48px 32px; text-align: center;
        }
        .cf-success-icon {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #1e6e3f, #27a058);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          animation: cf-success 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
          box-shadow: 0 10px 32px rgba(39,160,88,0.28);
        }
        .cf-divider { height: 1px; background: ${BORDER_LIGHT}; margin: 16px 0; }
        .cf-trust-bar {
          display: flex; align-items: center; gap: 16px;
          flex-wrap: wrap; justify-content: center;
          padding: 0 0 2px;
        }
        .cf-trust-item {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.72rem; color: ${TEXT_LIGHT}; font-weight: 500;
        }

        /* ── Mobile ── */
        @media (max-width: 540px) {
          .cf-modal { border-radius: 16px; max-height: calc(100svh - 24px); }
          .cf-header { padding: 22px 20px 18px; }
          .cf-body { padding: 18px 20px 24px; }
          .cf-row { grid-template-columns: 1fr; gap: 0; }
          .cf-label { font-size: 0.68rem; }
          .cf-input { font-size: 0.88rem; padding: 10px 10px 10px 36px; }
          .cf-textarea { min-height: 88px; }
          .cf-submit-btn { font-size: 0.9rem; padding: 13px; }
        }
        @media (max-width: 360px) {
          .cf-trust-bar { gap: 10px; }
          .cf-trust-item { font-size: 0.65rem; }
        }
      `}</style>

      {/* ── Overlay ── */}
      <div
        className="cf-overlay"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-label="Contact Us"
      >
        {/* ── Modal ── */}
        <div className="cf-modal" onClick={(e) => e.stopPropagation()}>
          {/* ── Header ── */}
          <div className="cf-header">
            <div className="cf-header-ring-1" />
            <div className="cf-header-ring-2" />
            <button
              className="cf-close-btn"
              onClick={handleClose}
              aria-label="Close"
            >
              <X size={15} strokeWidth={2.5} />
            </button>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "4px 12px",
                  background: "rgba(169,36,39,0.2)",
                  border: "1px solid rgba(169,36,39,0.35)",
                  borderRadius: 20,
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#ff9b7a",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                <Zap size={10} strokeWidth={2.5} />
                Get in Touch
              </div>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(1.4rem, 4vw, 1.85rem)",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Contact{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #a92427, #d63447, #ff6b6b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Kernn
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: 6,
                  lineHeight: 1.5,
                }}
              >
                Our team typically responds within one business day.
              </p>
            </div>
          </div>

          {/* ── Body ── */}
          <div className="cf-body">
            {submitted ? (
              /* ── Success State ── */
              <div className="cf-success-wrap">
                <div className="cf-success-icon">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path
                      d="M8 17 L14.5 24 L26 11"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="40"
                      strokeDashoffset="0"
                      style={{ animation: "cf-checkpath 0.4s ease 0.3s both" }}
                    />
                  </svg>
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: TEXT_DARK,
                    letterSpacing: "-0.02em",
                    marginBottom: 8,
                  }}
                >
                  Enquiry Submitted!
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: TEXT_MID,
                    lineHeight: 1.7,
                    maxWidth: 300,
                    marginBottom: 28,
                  }}
                >
                  Thank you, <strong>{formData.fullName.split(" ")[0]}</strong>.
                  We've received your enquiry and will get back to you at{" "}
                  <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={handleClose}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 24px",
                    background: ACCENT_LIGHT,
                    border: `1.5px solid ${ACCENT_BDR}`,
                    borderRadius: 10,
                    color: ACCENT,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  Close <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate>
                {/* Row: Name + Mobile */}
                <div className="cf-row">
                  <Field
                    label="Full Name"
                    icon={<User size={14} />}
                    error={errors.fullName}
                  >
                    <input
                      ref={firstInputRef}
                      className={`cf-input${errors.fullName ? " error" : ""}`}
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </Field>
                  <Field
                    label="Mobile Number"
                    icon={<Phone size={14} />}
                    error={errors.mobile}
                  >
                    <input
                      className={`cf-input${errors.mobile ? " error" : ""}`}
                      type="tel"
                      name="mobile"
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </Field>
                </div>

                {/* Email */}
                <Field
                  label="Email Address"
                  icon={<Mail size={14} />}
                  error={errors.email}
                >
                  <input
                    className={`cf-input${errors.email ? " error" : ""}`}
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                  />
                </Field>

                {/* Row: Enquiry About + Category */}
                <div className="cf-row">
                  <Field
                    label="Enquiry About"
                    icon={<Building2 size={14} />}
                    error={errors.enquiryAbout}
                  >
                    <input
                      className={`cf-input${errors.enquiryAbout ? " error" : ""}`}
                      type="text"
                      name="enquiryAbout"
                      placeholder="e.g. ERP Demo"
                      value={formData.enquiryAbout}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field
                    label="Category"
                    icon={<ChevronDown size={14} />}
                    error={errors.type}
                    isSelect
                  >
                    <select
                      className={`cf-input cf-select${errors.type ? " error" : ""}`}
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      style={{ color: formData.type ? TEXT_DARK : TEXT_LIGHT }}
                    >
                      <option value="">Select category</option>
                      <option value="product">Products</option>
                      <option value="service">Services</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="cf-select-chevron">
                      <ChevronDown size={14} />
                    </span>
                  </Field>
                </div>

                {/* Message */}
                <Field
                  label="Your Message"
                  icon={<MessageSquare size={14} />}
                  error={errors.message}
                  isTextarea
                >
                  <textarea
                    className={`cf-input cf-textarea${errors.message ? " error" : ""}`}
                    name="message"
                    placeholder="Tell us more about your requirements…"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Field>

                {/* Divider + Trust */}
                <div className="cf-divider" />
                <div className="cf-trust-bar" style={{ marginBottom: 14 }}>
                  {[
                    [Check, "No spam, ever"],
                    [Check, "Responds in 1 business day"],
                    [Check, "Secure & encrypted"],
                  ].map(([Icon, text]) => (
                    <div className="cf-trust-item" key={text}>
                      <Icon
                        size={11}
                        style={{ color: "#27a058", flexShrink: 0 }}
                        strokeWidth={3}
                      />
                      {text}
                    </div>
                  ))}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="cf-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="cf-spinner" /> Submitting…
                    </>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={2} /> Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Helper Field wrapper ─────────────────────────────────────────────── */
function Field({ label, icon, error, children, isSelect, isTextarea }) {
  return (
    <div className="cf-field">
      <div className="cf-label">
        <span style={{ opacity: 0.6, display: "flex" }}>{icon}</span>
        {label}
      </div>
      <div className="cf-input-wrap">
        {children}
        {!isSelect && !isTextarea && (
          <span className="cf-input-icon">{icon}</span>
        )}
        {isTextarea && <span className="cf-textarea-icon">{icon}</span>}
        {isSelect && (
          <span className="cf-select-chevron">
            <ChevronDown size={14} />
          </span>
        )}
      </div>
      {error && (
        <div className="cf-error">
          <span style={{ fontSize: "0.65rem" }}>●</span> {error}
        </div>
      )}
    </div>
  );
}
