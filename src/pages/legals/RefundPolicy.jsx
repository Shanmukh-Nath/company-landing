import { useState, useEffect } from "react";
import {
  Printer,
  Share2,
  Check,
  Link2,
  X,
  Mail,
  MessageCircle,
  Linkedin,
  Twitter,
  Menu,
  Shield,
  AlertTriangle,
  Globe,
  RefreshCw,
  Phone,
  ScrollText,
  ChevronRight,
  BadgeCheck,
  HeadphonesIcon,
  CircleDollarSign,
  Ban,
  FileWarning,
  ReceiptText,
  Zap,
  Scale,
  CreditCard,
  Clock,
  ShieldAlert,
  Building2,
  BookOpen,
  TriangleAlert,
} from "lucide-react";

const ACCENT = "#a92427";
const ACCENT_LIGHT = "rgba(169,36,39,0.08)";
const ACCENT_BDR = "rgba(169,36,39,0.2)";
const TEXT_DARK = "#1a1a1a";
const TEXT_MID = "#555";
const TEXT_LIGHT = "#666";
const BG_WHITE = "#ffffff";
const BG_LIGHT = "#fafafa";
const BG_HERO = "#fef5f5";
const BORDER = "rgba(169,36,39,0.1)";
const BORDER_LIGHT = "#e8e8e8";

const gradientText = {
  background: "linear-gradient(135deg, #a92427 0%, #d63447 50%, #ff6b6b 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  display: "inline",
};

const sections = [
  { id: "overview", title: "Overview", icon: BookOpen },
  { id: "s1", title: "No Refund Policy", number: "01", icon: Ban },
  { id: "s2", title: "Services Covered", number: "02", icon: Building2 },
  { id: "s3", title: "Service Activation", number: "03", icon: Zap },
  {
    id: "s4",
    title: "Subscription Cancellation",
    number: "04",
    icon: RefreshCw,
  },
  {
    id: "s5",
    title: "Exceptions & Legal Requirements",
    number: "05",
    icon: Scale,
  },
  { id: "s6", title: "Billing Disputes", number: "06", icon: ReceiptText },
  { id: "s7", title: "Chargebacks", number: "07", icon: CreditCard },
  {
    id: "s8",
    title: "Failed & Duplicate Payments",
    number: "08",
    icon: CircleDollarSign,
  },
  { id: "s9", title: "Trial Periods", number: "09", icon: Clock },
  { id: "s10", title: "Service Disruptions", number: "10", icon: ShieldAlert },
  {
    id: "s11",
    title: "Third-Party Payment Processors",
    number: "11",
    icon: Shield,
  },
  { id: "s12", title: "Policy Updates", number: "12", icon: FileWarning },
  { id: "s13", title: "Grievance Officer", number: "13", icon: HeadphonesIcon },
  { id: "s14", title: "Contact Information", number: "14", icon: Phone },
];

export default function RefundPolicy() {
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [printLoading, setPrintLoading] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const [printMeta, setPrintMeta] = useState({
    ip: "",
    time: "",
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -70% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handlePrint = async () => {
    setPrintLoading(true);
    setPrintMode(true);

    let ip = "Unknown";

    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      ip = data.ip;
    } catch {}

    const time = new Date().toLocaleString();

    setPrintMeta({
      ip,
      time,
    });

    setTimeout(() => {
      window.print();
      setPrintMode(false);
      setPrintLoading(false);
    }, 500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Kernn Automations — Refund Policy",
          url: window.location.href,
        });
      } catch (e) {
        if (e.name !== "AbortError") setShareOpen(true);
      }
    } else {
      setShareOpen(true);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      const inp = document.createElement("input");
      inp.value = window.location.href;
      document.body.appendChild(inp);
      inp.select();
      document.execCommand("copy");
      document.body.removeChild(inp);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  /* ── micro-components ───────────────────────────────────────────────── */
  const SectionHeader = ({ number, title }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 28,
      }}
    >
      {number && (
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: ACCENT,
            background: ACCENT_LIGHT,
            border: `1px solid ${ACCENT_BDR}`,
            borderRadius: 6,
            padding: "4px 10px",
            letterSpacing: "0.06em",
            flexShrink: 0,
          }}
        >
          {number}
        </span>
      )}
      <h2
        style={{
          fontSize: "1.65rem",
          fontWeight: 800,
          color: TEXT_DARK,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );

  const Callout = ({ children, type = "info" }) => {
    const isWarning = type === "warning";
    return (
      <div
        style={{
          background: isWarning ? "rgba(245,158,11,0.06)" : ACCENT_LIGHT,
          border: `1px solid ${isWarning ? "rgba(245,158,11,0.25)" : ACCENT_BDR}`,
          borderLeft: `3px solid ${isWarning ? "#f59e0b" : ACCENT}`,
          borderRadius: "0 10px 10px 0",
          padding: "14px 18px",
          margin: "20px 0",
        }}
      >
        <p
          style={{
            fontSize: "0.88rem",
            color: TEXT_MID,
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          {children}
        </p>
      </div>
    );
  };

  const InfoTable = ({ headers, rows }) => (
    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.87rem",
        }}
      >
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  background: BG_HERO,
                  padding: "10px 14px",
                  textAlign: "left",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: TEXT_MID,
                  border: `1px solid ${BORDER_LIGHT}`,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="rp-table-row"
              style={{ background: i % 2 === 0 ? BG_WHITE : BG_LIGHT }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "10px 14px",
                    border: `1px solid ${BORDER_LIGHT}`,
                    color: TEXT_DARK,
                    verticalAlign: "top",
                    lineHeight: 1.6,
                    fontWeight: j === 0 ? 600 : 400,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const P = ({ children, mt }) => (
    <p
      style={{
        fontSize: "0.95rem",
        color: TEXT_MID,
        lineHeight: 1.85,
        marginBottom: 12,
        marginTop: mt || 0,
      }}
    >
      {children}
    </p>
  );
  const UL = ({ items }) => (
    <ul style={{ paddingLeft: "1.4rem", margin: "10px 0 14px" }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontSize: "0.92rem",
            color: TEXT_MID,
            lineHeight: 1.75,
            marginBottom: 5,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
  const H3 = ({ children }) => (
    <h3
      style={{
        fontSize: "1.05rem",
        fontWeight: 700,
        color: TEXT_DARK,
        margin: "22px 0 8px",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h3>
  );

  const sec = {
    marginBottom: 52,
    paddingBottom: 52,
    borderBottom: `1px solid ${BORDER_LIGHT}`,
    scrollMarginTop: 90,
  };

  return (
    <>
      <style>{`
@media print {
  .no-print { display: none !important; }
}

/* ================= PRINT DOCUMENT MODE ================= */

@page {
  size: A4;
  margin: 30mm 22mm 25mm 22mm;

  @bottom-right {
    content: "Page " counter(page) " of " counter(pages);
    font-family: "Times New Roman", serif;
    font-size: 9pt;
    color: #333;
  }
}

.print-mode * {
  box-shadow: none !important;
}

.print-mode .rp-sidebar,
.print-mode .rp-actions-bar,
.print-mode .rp-mob-toggle {
  display: none !important;
}

.print-mode main {
  margin-left: 0 !important;
}

.print-mode .rp-header {
  background: none !important;
  color: #000 !important;
}

.print-mode h1,
.print-mode h2,
.print-mode h3,
.print-mode p,
.print-mode span,
.print-mode li {
  color: #000 !important;
}

.print-mode .rp-meta-bar div {
  color: #000 !important;
  background: none !important;
  border: 1px solid #ccc !important;
}

.print-mode .rp-header p {
  color: #000 !important;
}

.print-mode table th,
.print-mode table td {
  color: #000 !important;
}

.print-mode h1 span {
  -webkit-text-fill-color: #000 !important;
  color: #000 !important;
}

.print-mode section {
  page-break-inside: avoid;
}

.print-mode .rp-article {
  padding: 0 !important;
}
        .rp-sidebar-item:hover { background: ${ACCENT_LIGHT} !important; }
        .rp-sidebar-item.active { background: ${ACCENT_LIGHT} !important; color: ${ACCENT} !important; border-color: ${ACCENT_BDR} !important; }
        .rp-btn-print:hover { border-color: ${ACCENT} !important; color: ${ACCENT} !important; background: ${ACCENT_LIGHT} !important; }
        .rp-btn-share:hover { background: #921f22 !important; box-shadow: 0 12px 32px rgba(169,36,39,0.42) !important; }
        .rp-table-row:hover td { background: ${ACCENT_LIGHT} !important; }
        .rp-overview-card:hover { transform: translateY(-4px) !important; box-shadow: 0 10px 32px rgba(169,36,39,0.12) !important; border-color: ${ACCENT_BDR} !important; }
        .rp-share-opt:hover { border-color: ${ACCENT} !important; color: ${ACCENT} !important; background: ${ACCENT_LIGHT} !important; }
        .rp-copy-btn.copied { background: #1e6e3f !important; }
        main {
  margin-left: 0 !important;
}

.rp-article {
  padding: 0 20px 60px !important;
}

.rp-header {
  padding: 40px 20px 32px !important;
}
        @media (max-width: 900px) {
          .rp-sidebar { position: fixed !important; left: 0; top: 80px; height: calc(100vh - 80px) !important; transform: translateX(-100%); transition: transform 0.25s cubic-bezier(.4,0,.2,1); z-index: 250; box-shadow: 6px 0 40px rgba(0,0,0,0.14); }
          .rp-sidebar.open { transform: translateX(0) !important; }
          .rp-mob-toggle { display: flex !important; }
          .rp-header { padding: 40px 20px 32px !important; }
          .rp-actions-bar { padding: 10px 20px !important; }
          .rp-actions-left { display: none !important; }
          .rp-article { padding: 0 20px 60px !important; }
          .rp-overview-grid { grid-template-columns: 1fr 1fr !important; }
          .rp-contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
          @media (max-width: 900px) {
  table {
    display: block;
    overflow-x: auto;
  }
}
        @media (max-width: 520px) {
          .rp-overview-grid { grid-template-columns: 1fr !important; }
          .rp-contact-grid { grid-template-columns: 1fr !important; }
          .rp-meta-bar { flex-wrap: wrap !important; }
        }
          .print-mode .rp-article {
  padding: 0 !important;
}
  /* PRINT FOOTER */

/* PRINT HEADER */

.rp-print-header {
  display: none;
}

.print-mode .rp-print-header {
  display: block;
  position: fixed;
  top: 8mm;
  left: 0;
  right: 0;
  text-align: center;
  font-family: "Times New Roman", serif;
  font-size: 11pt;
  font-weight: 700;
  color: #000;
}

/* PRINT FOOTER */

.rp-print-meta {
  display: none;
}

.print-mode .rp-print-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 8mm;
  left: 22mm;
  right: 22mm;
  font-family: "Times New Roman", serif;
  font-size: 9pt;
  color: #333;
}

/* PAGE NUMBERS */



/* WATERMARK */

.print-mode::before {
  content: "Kernn Automations Confidential";
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-30deg);
  font-size: 70px;
  font-weight: 900;
  color: rgba(0,0,0,0.1);
  pointer-events: none;
  z-index: 100;
}
      `}</style>

      {/* ═══ ROOT ══════════════════════════════════════════════════════════ */}
      <div
        className={printMode ? "print-mode" : ""}
        style={{
          display: "flex",
          minHeight: "calc(100vh - 80px)",
          background: BG_LIGHT,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* ═══ SIDEBAR ═══════════════════════════════════════════════════ */}
        <aside
          className={`rp-sidebar no-print${sidebarOpen ? " open" : ""}`}
          style={{
            width: 268,
            flexShrink: 0,
            background: BG_WHITE,
            borderRight: `1px solid ${BORDER_LIGHT}`,
            position: "fixed",
            top: 80,
            left: 0,
            height: "calc(100vh - 80px)",
            overflowY: "auto",
            padding: "20px 0",
            scrollbarWidth: "thin",
            scrollbarColor: `${BORDER_LIGHT} transparent`,
          }}
        >
          <div
            style={{
              padding: "0 18px 18px",
              borderBottom: `1px solid ${BORDER_LIGHT}`,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 3,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: ACCENT,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  color: TEXT_DARK,
                  letterSpacing: "-0.02em",
                }}
              >
                Kernn Automations
              </span>
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: TEXT_LIGHT,
                fontWeight: 600,
                paddingLeft: 16,
              }}
            >
              Refund Policy · 2026
            </div>
          </div>
          <nav style={{ padding: "0 8px" }}>
            {sections.map(({ id, title, number, icon: Icon }) => {
              const isActive = active === id;
              return (
                <div
                  key={id}
                  className={`rp-sidebar-item${isActive ? " active" : ""}`}
                  onClick={() => scrollTo(id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "7px 10px",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    fontSize: "0.79rem",
                    color: isActive ? ACCENT : TEXT_LIGHT,
                    fontWeight: isActive ? 600 : 400,
                    border: `1px solid ${isActive ? ACCENT_BDR : "transparent"}`,
                    marginBottom: 2,
                  }}
                >
                  <Icon size={12} style={{ flexShrink: 0, opacity: 0.75 }} />
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.63rem",
                      color: isActive ? ACCENT : "#bbb",
                      minWidth: 16,
                      flexShrink: 0,
                    }}
                  >
                    {number || "·"}
                  </span>
                  <span style={{ lineHeight: 1.3, flex: 1 }}>{title}</span>
                  {isActive && (
                    <ChevronRight
                      size={10}
                      style={{ flexShrink: 0, color: ACCENT }}
                    />
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="no-print"
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.32)",
              zIndex: 200,
            }}
          />
        )}

        {/* ═══ MAIN ══════════════════════════════════════════════════════ */}
        <main style={{ flex: 1, minWidth: 0, marginLeft: 268 }}>
          {printMode && (
            <>
              <div className="rp-print-header">
                Kernn Automations Private Limited — Refund Policy
              </div>

              <div className="rp-print-meta">
                Printed from IP: {printMeta.ip} | Generated: {printMeta.time}
                <span className="rp-print-pages"></span>
              </div>
            </>
          )}
          {/* ── HERO ── */}
          <header
            className="rp-header"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #1a1622 100%)",
              padding: "68px 60px 52px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* grid overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                backgroundImage: `linear-gradient(rgba(169,36,39,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(169,36,39,0.04) 1px,transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
            />
            {/* ring 1 — large, top-right: violet */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 300,
                height: 300,
                borderRadius: "50%",
                border: "60px solid rgba(139,92,246,0.18)",
                pointerEvents: "none",
              }}
            />
            {/* ring 2 — small, bottom-left: amber */}
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: 120,
                width: 180,
                height: 180,
                borderRadius: "50%",
                border: "40px solid rgba(245,158,11,0.16)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              {/* eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 14px",
                  background: ACCENT_LIGHT,
                  border: `1px solid ${ACCENT_BDR}`,
                  borderRadius: 30,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: ACCENT,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                <CircleDollarSign size={12} strokeWidth={2.5} />
                Legal Document · Kernn Automations Pvt. Ltd.
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.4rem,5vw,3.6rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                  marginBottom: 16,
                  maxWidth: 560,
                }}
              >
                Refund
                <br />
                <span style={gradientText}>Policy</span>
              </h1>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "rgba(255,255,255,0.52)",
                  maxWidth: 520,
                  lineHeight: 1.7,
                  marginBottom: 30,
                }}
              >
                This policy outlines the terms and conditions governing
                payments, refunds, and billing disputes for all services
                provided by Kernn Automations Private Limited.
              </p>

              <div className="rp-meta-bar" style={{ display: "flex", gap: 10 }}>
                {[
                  ["Effective Date", "January 1, 2026"],
                  ["Last Updated", "January 1, 2026"],
                  ["Version", "1.0"],
                  ["Jurisdiction", "India"],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      padding: "8px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.6rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "rgba(255,255,255,0.33)",
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* ── ACTIONS BAR ── */}
          <div
            className="rp-actions-bar no-print"
            style={{
              background: BG_WHITE,
              borderBottom: `1px solid ${BORDER_LIGHT}`,
              padding: "11px 60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "sticky",
              top: 80,
              zIndex: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="rp-actions-left"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.77rem",
                color: TEXT_LIGHT,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: ACCENT,
                }}
              />
              Kernn Automations Private Limited — Official Refund Policy
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                className="rp-btn-print"
                onClick={handlePrint}
                disabled={printLoading}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 18px",
                  borderRadius: 8,
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: printLoading ? "wait" : "pointer",
                  border: `1.5px solid ${BORDER_LIGHT}`,
                  background: BG_WHITE,
                  color: TEXT_DARK,
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                  opacity: printLoading ? 0.6 : 1,
                }}
              >
                <Printer size={15} strokeWidth={2} />
                {printLoading ? "Preparing…" : "Print"}
              </button>
              <button
                className="rp-btn-share"
                onClick={handleShare}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 20px",
                  borderRadius: 8,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: ACCENT,
                  color: "#fff",
                  boxShadow: "0 6px 20px rgba(169,36,39,0.28)",
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                }}
              >
                <Share2 size={15} strokeWidth={2} />
                Share
              </button>
            </div>
          </div>

          {/* ═══ ARTICLE ══════════════════════════════════════════════════ */}
          <article
            className="rp-article"
            style={{ padding: "0 60px 80px", width: "100%" }}
          >
            {/* ── OVERVIEW ── */}
            <section
              id="overview"
              style={{
                padding: "44px 0 36px",
                borderBottom: `1px solid ${BORDER_LIGHT}`,
                marginBottom: 44,
              }}
            >
              <h2
                style={{
                  fontSize: "1.55rem",
                  fontWeight: 800,
                  color: TEXT_DARK,
                  letterSpacing: "-0.03em",
                  marginBottom: 14,
                }}
              >
                At a Glance
              </h2>
              <P>
                This Refund Policy outlines the terms regarding payments and
                refunds for all services provided by Kernn Automations Private
                Limited. By purchasing or subscribing to our products or
                services, you acknowledge that you have read, understood, and
                agree to the terms stated in this policy.
              </P>

              {/* No-refund banner */}
              <div
                style={{
                  background: "rgba(169,36,39,0.05)",
                  border: `1.5px solid ${ACCENT_BDR}`,
                  borderRadius: 12,
                  padding: "18px 22px",
                  marginTop: 24,
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: ACCENT_LIGHT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ACCENT,
                    flexShrink: 0,
                  }}
                >
                  <TriangleAlert size={20} strokeWidth={2} />
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "0.92rem",
                      color: ACCENT,
                      marginBottom: 4,
                    }}
                  >
                    Important — No Refund Policy
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: TEXT_MID,
                      lineHeight: 1.7,
                    }}
                  >
                    All payments made to Kernn Automations Private Limited are{" "}
                    <strong>final and non-refundable</strong> unless otherwise
                    required by applicable law or explicitly stated in this
                    policy. Please review this document carefully before making
                    a purchase.
                  </div>
                </div>
              </div>

              <div
                className="rp-overview-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 14,
                  marginTop: 8,
                }}
              >
                {[
                  [
                    Ban,
                    "No Refunds",
                    "All payments are final once services are provisioned.",
                  ],
                  [
                    Scale,
                    "Legal Exceptions",
                    "Refunds required by applicable consumer protection law will be honoured.",
                  ],
                  [
                    Clock,
                    "7-Day Disputes",
                    "Billing errors must be reported within 7 days of the transaction.",
                  ],
                  [
                    BadgeCheck,
                    "Transparent Terms",
                    "Clear, upfront terms with no hidden conditions or surprise charges.",
                  ],
                ].map(([Icon, title, text]) => (
                  <div
                    key={title}
                    className="rp-overview-card"
                    style={{
                      background: BG_WHITE,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "20px 18px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: ACCENT_LIGHT,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                        color: ACCENT,
                      }}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div
                      style={{
                        fontSize: "0.81rem",
                        fontWeight: 700,
                        color: TEXT_DARK,
                        marginBottom: 5,
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.77rem",
                        color: TEXT_LIGHT,
                        lineHeight: 1.5,
                      }}
                    >
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* S1 — No Refund Policy */}
            <section id="s1" style={sec}>
              <SectionHeader number="01" title="No Refund Policy" />
              <P>
                All payments made to Kernn Automations Private Limited for any
                product or service are <strong>final and non-refundable</strong>
                . Once a payment has been successfully processed, the
                corresponding services will be initiated or provisioned and no
                refunds shall be issued under any circumstances, except as
                explicitly stated in Section 5 of this policy.
              </P>
              <H3>1.1 Rationale</H3>
              <P>
                Upon receipt of payment, Kernn immediately begins allocating
                infrastructure, software licenses, API access, and operational
                resources to deliver the contracted services. This immediate
                allocation of resources constitutes the basis for our no-refund
                position, as the cost of service delivery begins at the moment
                of payment confirmation.
              </P>
              <H3>1.2 Scope</H3>
              <P>This no-refund policy applies regardless of:</P>
              <UL
                items={[
                  "Whether or not the service has been actively used after payment.",
                  "Whether the cancellation request is made immediately after payment.",
                  "Whether the purchase was made by mistake or inadvertently.",
                  "Any dissatisfaction with the service, provided the service was delivered as described.",
                  "Changes in your business requirements or operational needs after purchase.",
                ]}
              />
              <Callout type="warning">
                We strongly recommend that prospective customers review all
                product descriptions, feature lists, and pricing details
                thoroughly before making a purchase. Our sales team is available
                at support@kernn.ai to answer questions prior to purchase.
              </Callout>
            </section>

            {/* S2 — Services Covered */}
            <section id="s2" style={sec}>
              <SectionHeader number="02" title="Services Covered" />
              <P>
                This Refund Policy applies to all services and products provided
                by Kernn Automations Private Limited, including but not limited
                to:
              </P>
              <InfoTable
                headers={["Service Category", "Examples", "Refundable?"]}
                rows={[
                  [
                    "ERP Subscriptions",
                    "OpScale ERP, inventory, sales, finance modules",
                    "No",
                  ],
                  [
                    "HR & Payroll Software",
                    "HRMS platform, attendance, payroll processing",
                    "No",
                  ],
                  [
                    "Automation Tools",
                    "Workflow automation, RPA, scheduled tasks",
                    "No",
                  ],
                  [
                    "Communication Services",
                    "WhatsApp Business API integration, SMS, email",
                    "No",
                  ],
                  [
                    "Mobile Applications",
                    "iOS and Android enterprise apps",
                    "No",
                  ],
                  [
                    "Cloud Licensing",
                    "Software access licenses, API keys",
                    "No",
                  ],
                  [
                    "Implementation Services",
                    "Onboarding, configuration, customization",
                    "No",
                  ],
                  [
                    "Training Services",
                    "User training, admin training sessions",
                    "No",
                  ],
                  [
                    "Support Plans",
                    "Premium support tiers, SLA upgrades",
                    "No",
                  ],
                ]}
              />
              <P mt="12px">
                The above list is illustrative and not exhaustive. Any payment
                made to Kernn for any product, service, or professional
                engagement is subject to this policy.
              </P>
            </section>

            {/* S3 — Service Activation */}
            <section id="s3" style={sec}>
              <SectionHeader number="03" title="Service Activation" />
              <P>
                Upon receipt of a valid payment, Kernn immediately initiates the
                service provisioning process. This process may include:
              </P>
              <UL
                items={[
                  <>
                    <strong>Account Activation:</strong> Creation and
                    configuration of your organizational account on the
                    Platform.
                  </>,
                  <>
                    <strong>License Allocation:</strong> Assignment of software
                    licenses to your account and registered users.
                  </>,
                  <>
                    <strong>Infrastructure Provisioning:</strong> Allocation of
                    dedicated or shared cloud infrastructure, database
                    instances, and storage.
                  </>,
                  <>
                    <strong>API Access:</strong> Generation and activation of
                    API credentials, WhatsApp Business API setup, and
                    third-party integration configuration.
                  </>,
                  <>
                    <strong>Onboarding Initiation:</strong> Assignment of an
                    implementation team and commencement of onboarding
                    procedures.
                  </>,
                  <>
                    <strong>Data Environment Setup:</strong> Creation of your
                    isolated tenant environment and initial data configuration.
                  </>,
                ]}
              />
              <P>
                Because these processes begin immediately and consume real
                operational resources, refunds cannot be provided once payment
                is confirmed — irrespective of the stage of service delivery at
                the time of any cancellation request.
              </P>
              <Callout>
                If you encounter technical issues during or immediately after
                service activation, please contact our support team at
                support@kernn.ai before assuming the service is not functioning
                as intended. Most activation issues are resolvable within 24
                hours.
              </Callout>
            </section>

            {/* S4 — Subscription Cancellation */}
            <section id="s4" style={sec}>
              <SectionHeader number="04" title="Subscription Cancellation" />
              <P>
                You may cancel your subscription at any time. However,
                cancellation does not entitle you to a refund of any amounts
                already paid. The following terms govern subscription
                cancellations:
              </P>
              <H3>4.1 How to Cancel</H3>
              <UL
                items={[
                  "Log into your account and navigate to Subscription Settings.",
                  "Select the subscription you wish to cancel and follow the cancellation workflow.",
                  "Alternatively, submit a written cancellation request to support@kernn.ai from your registered email address.",
                  "Cancellation requests submitted by any other means may not be processed.",
                ]}
              />
              <H3>4.2 Effect of Cancellation</H3>
              <InfoTable
                headers={[
                  "Billing Type",
                  "Cancellation Timing",
                  "Access Until",
                  "Refund",
                ]}
                rows={[
                  [
                    "Monthly Subscription",
                    "Any time before renewal date",
                    "End of current billing month",
                    "None",
                  ],
                  [
                    "Annual Subscription",
                    "Any time before renewal date",
                    "End of current annual term",
                    "None",
                  ],
                  [
                    "Annual Subscription",
                    "Within 30 days of purchase",
                    "End of current annual term",
                    "Pro-rata (see §5)",
                  ],
                  [
                    "One-time Payment",
                    "After payment processed",
                    "As per license term",
                    "None",
                  ],
                  [
                    "Implementation Fee",
                    "After work has commenced",
                    "N/A",
                    "None",
                  ],
                ]}
              />
              <H3>4.3 Auto-Renewal</H3>
              <P>
                All subscriptions automatically renew at the end of each billing
                period unless cancelled at least 24 hours before the renewal
                date. You will receive a renewal reminder email 7 days before
                your subscription renews. Failure to cancel before the renewal
                date will result in the subscription being renewed and payment
                being charged, with no refund available for that period.
              </P>
              <Callout type="warning">
                Cancellation of your subscription does not automatically delete
                your account or data. Your data will be retained for 90 days
                following the end of your subscription period, after which it
                will be permanently deleted.
              </Callout>
            </section>

            {/* S5 — Exceptions */}
            <section id="s5" style={sec}>
              <SectionHeader
                number="05"
                title="Exceptions & Legal Requirements"
              />
              <P>
                While our general policy is no-refund, we recognize that certain
                circumstances may warrant exceptions. The following exceptions
                apply:
              </P>
              <H3>5.1 Legal Obligation</H3>
              <P>
                Where applicable consumer protection laws, regulatory
                requirements, or court orders in a relevant jurisdiction mandate
                a refund, Kernn will comply fully with such legal obligations.
                Customers seeking a refund on this basis should provide
                documentation of the applicable legal requirement.
              </P>
              <H3>5.2 Annual Subscription Pro-Rata Refund</H3>
              <P>
                Customers who have subscribed to an annual plan may request a
                pro-rata refund of the unused portion of their subscription
                under the following strict conditions:
              </P>
              <UL
                items={[
                  "The refund request must be submitted within 30 days of the original purchase date.",
                  "The account must not have materially used the platform (i.e., data uploaded, transactions processed, or messages sent must be minimal).",
                  "The request must be submitted in writing to billing@kernn.ai with the subject line 'Annual Subscription Refund Request'.",
                  "Kernn reserves the right to assess actual usage before approving any pro-rata refund.",
                  "Approved pro-rata refunds will be calculated based on the number of unused complete months remaining.",
                ]}
              />
              <H3>5.3 Service Non-Delivery</H3>
              <P>
                If Kernn is unable to deliver a purchased service due to a
                technical failure or error solely attributable to Kernn, and the
                issue cannot be resolved within a reasonable timeframe, a full
                or partial refund may be considered at Kernn's sole discretion.
                This exception does not apply to service interruptions or
                degradation that fall within the agreed SLA parameters.
              </P>
              <H3>5.4 Duplicate Payments</H3>
              <P>
                If a duplicate payment is made for the same order due to a
                technical error, the duplicate charge will be refunded in full.
                See Section 8 for details.
              </P>
              <Callout>
                All refund requests under the exceptions outlined in this
                section must be submitted in writing to billing@kernn.ai and are
                subject to review and approval by Kernn's billing team. Approval
                is not guaranteed except where required by law.
              </Callout>
            </section>

            {/* S6 — Billing Disputes */}
            <section id="s6" style={sec}>
              <SectionHeader number="06" title="Billing Disputes" />
              <P>
                If you believe a payment has been charged incorrectly or you
                have been billed for a service you did not authorize, please
                follow the dispute process outlined below before initiating any
                chargeback or payment reversal with your bank or card provider.
              </P>
              <H3>6.1 Dispute Submission Process</H3>
              <UL
                items={[
                  <>
                    <strong>Step 1:</strong> Contact our billing team at
                    billing@kernn.ai within <strong>7 calendar days</strong> of
                    the transaction date.
                  </>,
                  <>
                    <strong>Step 2:</strong> Include your account email,
                    transaction ID or invoice number, the amount disputed, and a
                    clear description of the issue.
                  </>,
                  <>
                    <strong>Step 3:</strong> Our billing team will acknowledge
                    your dispute within 2 business days.
                  </>,
                  <>
                    <strong>Step 4:</strong> Investigation will be completed
                    within 10 business days. You will be notified of the outcome
                    in writing.
                  </>,
                  <>
                    <strong>Step 5:</strong> If the dispute is upheld, a
                    correction or credit will be applied to your account within
                    5 business days of the decision.
                  </>,
                ]}
              />
              <H3>6.2 Dispute Deadline</H3>
              <P>
                Billing disputes must be raised within{" "}
                <strong>7 calendar days</strong> of the transaction. Disputes
                raised after this period may not be accepted unless there are
                exceptional circumstances at Kernn's discretion. We encourage
                customers to review invoices promptly upon receipt.
              </P>
              <H3>6.3 Investigation Outcomes</H3>
              <InfoTable
                headers={["Outcome", "Action Taken"]}
                rows={[
                  [
                    "Billing error confirmed",
                    "Full correction or refund of the erroneously charged amount.",
                  ],
                  [
                    "Partial error confirmed",
                    "Correction of the disputed portion; valid charges retained.",
                  ],
                  [
                    "No error found",
                    "Detailed explanation provided; original charge stands.",
                  ],
                  [
                    "Insufficient information",
                    "Request for additional documentation; decision deferred.",
                  ],
                ]}
              />
            </section>

            {/* S7 — Chargebacks */}
            <section id="s7" style={sec}>
              <SectionHeader number="07" title="Chargebacks" />
              <P>
                A chargeback is a payment reversal initiated by a customer
                through their bank or card issuer. While chargebacks are a
                legitimate consumer protection mechanism, initiating a
                chargeback without first contacting Kernn is considered a
                violation of this policy.
              </P>
              <H3>7.1 Our Position on Chargebacks</H3>
              <UL
                items={[
                  "All chargeback requests will be contested by Kernn's billing team with full transaction evidence and service delivery documentation.",
                  "Initiating a chargeback for a valid transaction — where service was delivered as described — will be vigorously disputed.",
                  "Kernn will provide card networks and banks with all relevant evidence including service delivery logs, usage records, signed agreements, and communication history.",
                ]}
              />
              <H3>7.2 Consequences of Unauthorized Chargebacks</H3>
              <P>
                If a chargeback is initiated without prior communication with
                Kernn's support team, or if a chargeback is found to be
                unjustified, the following consequences may apply:
              </P>
              <UL
                items={[
                  "Immediate suspension of your account and all associated services.",
                  "Permanent termination of your account and future access to Kernn services.",
                  "Recovery of service costs and associated chargeback fees through legal means.",
                  "Reporting of fraudulent chargeback activity to relevant financial authorities.",
                ]}
              />
              <H3>7.3 Preferred Resolution</H3>
              <P>
                We strongly encourage all customers to contact us at
                billing@kernn.ai before initiating any chargeback. In most
                cases, billing issues can be resolved amicably and more quickly
                through direct communication than through the chargeback
                process.
              </P>
              <Callout type="warning">
                Initiating a chargeback does not guarantee a refund and may
                result in permanent account termination. Please contact us first
                — we are committed to resolving billing issues fairly and
                promptly.
              </Callout>
            </section>

            {/* S8 — Failed & Duplicate */}
            <section id="s8" style={sec}>
              <SectionHeader number="08" title="Failed & Duplicate Payments" />
              <H3>8.1 Failed Payments</H3>
              <P>
                If a payment fails after being partially processed or if funds
                are debited but service is not provisioned due to a technical
                error on our payment gateway, the following process applies:
              </P>
              <UL
                items={[
                  "Failed payments where funds were debited will be automatically refunded within 5–7 business days to the original payment method.",
                  "If an automatic refund does not occur within 7 business days, contact billing@kernn.ai with your transaction reference.",
                  "Kernn is not responsible for bank-side delays in processing refunds of failed payments.",
                ]}
              />
              <H3>8.2 Duplicate Payments</H3>
              <P>
                If you are charged twice for the same subscription or service
                due to a technical error:
              </P>
              <UL
                items={[
                  "Contact billing@kernn.ai within 7 days of the duplicate charge with both transaction IDs.",
                  "After verification, the duplicate charge will be refunded in full within 5–7 business days.",
                  "Kernn's billing team will also investigate and fix the underlying cause to prevent recurrence.",
                ]}
              />
              <H3>8.3 Currency & Exchange Rate Differences</H3>
              <P>
                Kernn is not responsible for any currency conversion losses,
                exchange rate differences, or international transaction fees
                applied by your bank or card issuer. These charges are outside
                Kernn's control and are not refundable.
              </P>
            </section>

            {/* S9 — Trial Periods */}
            <section id="s9" style={sec}>
              <SectionHeader number="09" title="Trial Periods" />
              <P>
                Kernn may from time to time offer free trial periods for certain
                services. The following terms apply to all trial offerings:
              </P>
              <H3>9.1 Free Trials</H3>
              <UL
                items={[
                  "Free trials provide access to specified features of the Platform at no charge for the trial duration.",
                  "No payment information is required to start a free trial unless explicitly stated.",
                  "Free trials automatically expire at the end of the trial period unless upgraded to a paid subscription.",
                  "Data and configurations created during a free trial may be retained if you upgrade to a paid plan within the specified window.",
                ]}
              />
              <H3>9.2 Trial-to-Paid Conversion</H3>
              <P>
                If a free trial requires a payment method at signup and is set
                to automatically convert to a paid subscription, Kernn will
                notify you at least 3 days before the trial ends. You may cancel
                before the conversion date to avoid being charged. Once the
                trial period ends and payment is processed, the standard
                no-refund policy applies.
              </P>
              <H3>9.3 Paid Pilots</H3>
              <P>
                Enterprise customers may sometimes engage in paid pilot
                programs. Unless a specific refund clause is included in the
                pilot agreement signed by both parties, the standard no-refund
                policy applies to paid pilot fees.
              </P>
              <Callout>
                If you believe you were charged after a free trial without
                adequate notice, please contact billing@kernn.ai within 7 days
                and we will review your case.
              </Callout>
            </section>

            {/* S10 — Service Disruptions */}
            <section id="s10" style={sec}>
              <SectionHeader number="10" title="Service Disruptions" />
              <P>
                In the event of service disruptions, outages, or degraded
                performance, the following terms govern any remedies available
                to you:
              </P>
              <H3>10.1 Scheduled Maintenance</H3>
              <P>
                Scheduled maintenance windows are communicated in advance and do
                not constitute service failures. No refunds or credits are
                issued for planned maintenance downtime.
              </P>
              <H3>10.2 Unplanned Outages</H3>
              <P>
                For unplanned outages that breach the uptime commitments
                specified in your Service Level Agreement (SLA), eligible
                Enterprise customers may request service credits as outlined in
                their Enterprise Agreement. Service credits are the exclusive
                remedy for SLA breaches and do not constitute cash refunds.
              </P>
              <H3>10.3 Force Majeure</H3>
              <P>
                Kernn is not liable for service disruptions caused by
                circumstances beyond our reasonable control, including but not
                limited to: natural disasters, acts of government, cyberattacks
                on third-party infrastructure, internet backbone failures, or
                failures of third-party service providers (including cloud
                providers and payment gateways). No refunds or credits will be
                issued for force majeure events.
              </P>
              <InfoTable
                headers={["Disruption Type", "Remedy Available"]}
                rows={[
                  ["Scheduled maintenance", "None — advance notice provided"],
                  [
                    "Unplanned outage within SLA",
                    "None — within contractual tolerance",
                  ],
                  [
                    "Unplanned outage breaching SLA",
                    "Service credits (Enterprise plans only)",
                  ],
                  ["Force majeure event", "None — outside Kernn's control"],
                  [
                    "Service non-delivery by Kernn",
                    "Possible refund at Kernn's discretion (see §5.3)",
                  ],
                ]}
              />
            </section>

            {/* S11 — Third-Party */}
            <section id="s11" style={sec}>
              <SectionHeader
                number="11"
                title="Third-Party Payment Processors"
              />
              <P>
                Kernn uses third-party payment processors (including Razorpay,
                Stripe, and others) to securely handle all payment transactions.
                The following terms apply:
              </P>
              <UL
                items={[
                  "Kernn does not store your full card details. All payment data is processed and stored by our payment processors in compliance with PCI-DSS standards.",
                  "Transaction processing fees charged by payment processors are non-refundable even in cases where a valid refund is approved.",
                  "Kernn is not responsible for errors, delays, or failures caused by third-party payment processors.",
                  "If a payment is declined or fails due to a processor error, contact billing@kernn.ai and we will assist in completing the transaction through an alternate method.",
                  "Refunds processed by Kernn are subject to the processing timelines of the relevant payment processor, which may take 5–10 business days to reflect in your account.",
                ]}
              />
              <Callout>
                For any payment-related queries, always contact Kernn's billing
                team at billing@kernn.ai first. Do not contact the payment
                processor directly, as they will not have access to your service
                account details.
              </Callout>
            </section>

            {/* S12 — Policy Updates */}
            <section id="s12" style={sec}>
              <SectionHeader number="12" title="Policy Updates" />
              <P>
                Kernn Automations reserves the right to modify or update this
                Refund Policy at any time. Changes will take effect as follows:
              </P>
              <UL
                items={[
                  "Updated policy will be published on this page with a revised effective date.",
                  "Material changes will be communicated via email to registered account holders at least 14 days before taking effect.",
                  "Continued use of Kernn's services after the updated policy's effective date constitutes acceptance of the revised terms.",
                  "Transactions completed prior to a policy update remain subject to the policy in effect at the time of the transaction.",
                  "Prior versions of this policy are available on request by contacting legal@kernn.ai.",
                ]}
              />
              <Callout>
                We recommend bookmarking this page and reviewing this policy
                before each subscription renewal. The current version is always
                available at kernn.ai/refund-policy.
              </Callout>
            </section>

            {/* S13 — Grievance Officer */}
            <section id="s13" style={sec}>
              <SectionHeader number="13" title="Grievance Officer" />
              <P>
                In accordance with the Information Technology Act, 2000 and
                applicable consumer protection regulations, we have designated a
                Grievance Officer to address billing complaints and concerns
                from customers.
              </P>
              <div
                style={{
                  background: BG_LIGHT,
                  border: `1px solid ${BORDER_LIGHT}`,
                  borderLeft: `4px solid ${ACCENT}`,
                  borderRadius: "0 12px 12px 0",
                  padding: "24px 28px",
                  marginTop: 16,
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    color: TEXT_DARK,
                    marginBottom: 16,
                  }}
                >
                  Grievance Officer Details
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  {[
                    ["Name", "Designated Grievance Officer"],
                    ["Organization", "Kernn Automations Private Limited"],
                    ["Email", "grievance@kernn.ai"],
                    ["Response Time", "Within 30 days of receipt"],
                    ["Address", "Registered Office, India"],
                    ["Available", "Mon–Fri, 10:00–17:00 IST"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div
                        style={{
                          fontSize: "0.66rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: TEXT_LIGHT,
                          marginBottom: 3,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.87rem",
                          fontWeight: 600,
                          color: TEXT_DARK,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <P mt="14px">
                Billing complaints must be submitted in writing with full
                transaction details to enable thorough investigation. We aim to
                acknowledge all complaints within 5 business days and resolve
                them within 30 days.
              </P>
            </section>

            {/* S14 — Contact */}
            <section id="s14" style={{ ...sec, borderBottom: "none" }}>
              <SectionHeader number="14" title="Contact Information" />
              <P>
                For billing inquiries, refund requests, or questions about this
                Refund Policy, please reach out through the appropriate channel:
              </P>
              <div
                style={{
                  background: TEXT_DARK,
                  borderRadius: 16,
                  padding: "32px 36px",
                  marginTop: 20,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.14)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 24,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Kernn Automations Private Limited
                </div>
                <div
                  className="rp-contact-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                  }}
                >
                  {[
                    [
                      CircleDollarSign,
                      "Billing Queries",
                      "billing@kernn.ai",
                      true,
                    ],
                    [Shield, "Data Protection", "dpo@kernn.ai", true],
                    [AlertTriangle, "Disputes", "billing@kernn.ai", true],
                    [HeadphonesIcon, "Grievances", "grievance@kernn.ai", true],
                    [Phone, "Support", "support@kernn.ai", true],
                    [Globe, "Website", "https://kernn.ai", false],
                  ].map(([Icon, label, value, isEmail]) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: ACCENT_LIGHT,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: ACCENT,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <Icon size={14} strokeWidth={2} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.64rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "rgba(255,255,255,0.32)",
                            marginBottom: 3,
                          }}
                        >
                          {label}
                        </div>
                        <a
                          href={isEmail ? `mailto:${value}` : value}
                          style={{
                            fontSize: "0.84rem",
                            fontWeight: 600,
                            color: "#ff9b7a",
                            textDecoration: "none",
                          }}
                        >
                          {value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 18,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.28)",
                    lineHeight: 1.6,
                  }}
                >
                  Kernn Automations Private Limited is incorporated under the
                  Companies Act, 2013, registered in India. This policy is
                  governed by Indian law and subject to the exclusive
                  jurisdiction of courts in Hyderabad, Telangana, India.
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>

      {/* ═══ MOBILE FAB ══════════════════════════════════════════════════════ */}
      <button
        className="rp-mob-toggle no-print"
        onClick={() => setSidebarOpen((v) => !v)}
        style={{
          display: "none",
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 300,
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: ACCENT,
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 6px 24px rgba(169,36,39,0.38)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* ═══ SHARE MODAL ══════════════════════════════════════════════════════ */}
      {shareOpen && (
        <div
          className="no-print"
          onClick={() => setShareOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(26,26,26,0.62)",
            backdropFilter: "blur(6px)",
            zIndex: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: BG_WHITE,
              borderRadius: 16,
              padding: 28,
              width: 380,
              maxWidth: "calc(100vw - 32px)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.22)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShareOpen(false)}
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: BG_LIGHT,
                border: `1px solid ${BORDER_LIGHT}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: TEXT_LIGHT,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = ACCENT_LIGHT;
                e.currentTarget.style.color = ACCENT;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = BG_LIGHT;
                e.currentTarget.style.color = TEXT_LIGHT;
              }}
            >
              <X size={13} strokeWidth={2.5} />
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: ACCENT_LIGHT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: ACCENT,
                }}
              >
                <Share2 size={17} strokeWidth={2} />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "0.98rem",
                    color: TEXT_DARK,
                  }}
                >
                  Share this Policy
                </div>
                <div style={{ fontSize: "0.74rem", color: TEXT_LIGHT }}>
                  Copy link or share via platform
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: BG_LIGHT,
                border: `1px solid ${BORDER_LIGHT}`,
                borderRadius: 10,
                padding: "10px 14px",
                margin: "18px 0 14px",
              }}
            >
              <Link2 size={12} style={{ color: TEXT_LIGHT, flexShrink: 0 }} />
              <span
                style={{
                  flex: 1,
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  color: TEXT_LIGHT,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {window.location.href}
              </span>
              <button
                className={`rp-copy-btn${copied ? " copied" : ""}`}
                onClick={handleCopyLink}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: copied ? "#1e6e3f" : TEXT_DARK,
                  color: "#fff",
                  border: "none",
                  borderRadius: 7,
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                {copied ? (
                  <>
                    <Check size={12} strokeWidth={2.5} /> Copied!
                  </>
                ) : (
                  <>
                    <Link2 size={12} /> Copy
                  </>
                )}
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {[
                [
                  Mail,
                  "Email",
                  () => {
                    window.open(
                      `mailto:?subject=Kernn%20Refund%20Policy&body=${encodeURIComponent(window.location.href)}`,
                    );
                    setShareOpen(false);
                  },
                ],
                [
                  MessageCircle,
                  "WhatsApp",
                  () => {
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent("Kernn Automations Refund Policy: " + window.location.href)}`,
                      "_blank",
                    );
                    setShareOpen(false);
                  },
                ],
                [
                  Linkedin,
                  "LinkedIn",
                  () => {
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                      "_blank",
                    );
                    setShareOpen(false);
                  },
                ],
                [
                  Twitter,
                  "Twitter / X",
                  () => {
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Kernn Automations Refund Policy")}`,
                      "_blank",
                    );
                    setShareOpen(false);
                  },
                ],
              ].map(([Icon, label, action]) => (
                <button
                  key={label}
                  className="rp-share-opt"
                  onClick={action}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    border: `1px solid ${BORDER_LIGHT}`,
                    background: BG_WHITE,
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: TEXT_MID,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
