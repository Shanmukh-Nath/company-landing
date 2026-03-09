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
  FileText,
  AlertTriangle,
  Globe,
  Lock,
  Gavel,
  UserCheck,
  RefreshCw,
  Phone,
  Cpu,
  ScrollText,
  Scale,
  BadgeCheck,
  ChevronRight,
  Ban,
  CircleDollarSign,
  Handshake,
  ServerCrash,
  ShieldAlert,
  ClipboardList,
  BookOpen,
  Building2,
  Zap,
  ReceiptText,
  FileLock2,
  MessageSquareWarning,
  HeadphonesIcon,
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
  { id: "s1", title: "Acceptance of Terms", number: "01", icon: Handshake },
  { id: "s2", title: "Definitions", number: "02", icon: ScrollText },
  { id: "s3", title: "Services Provided", number: "03", icon: Zap },
  { id: "s4", title: "Account Registration", number: "04", icon: UserCheck },
  {
    id: "s5",
    title: "User Responsibilities",
    number: "05",
    icon: ClipboardList,
  },
  { id: "s6", title: "Prohibited Activities", number: "06", icon: Ban },
  {
    id: "s7",
    title: "Messaging & Notifications",
    number: "07",
    icon: MessageCircle,
  },
  {
    id: "s8",
    title: "Subscription & Billing",
    number: "08",
    icon: CircleDollarSign,
  },
  { id: "s9", title: "Intellectual Property", number: "09", icon: FileLock2 },
  { id: "s10", title: "Confidentiality", number: "10", icon: Lock },
  {
    id: "s11",
    title: "Service Availability & SLA",
    number: "11",
    icon: ServerCrash,
  },
  {
    id: "s12",
    title: "Third-Party Integrations",
    number: "12",
    icon: Building2,
  },
  { id: "s13", title: "Data Processing", number: "13", icon: Cpu },
  {
    id: "s14",
    title: "Disclaimer of Warranties",
    number: "14",
    icon: ShieldAlert,
  },
  { id: "s15", title: "Limitation of Liability", number: "15", icon: Scale },
  { id: "s16", title: "Indemnification", number: "16", icon: Shield },
  { id: "s17", title: "Termination", number: "17", icon: AlertTriangle },
  { id: "s18", title: "Dispute Resolution", number: "18", icon: Gavel },
  { id: "s19", title: "Governing Law", number: "19", icon: BadgeCheck },
  { id: "s20", title: "Modifications to Terms", number: "20", icon: RefreshCw },
  { id: "s21", title: "Grievance Officer", number: "21", icon: HeadphonesIcon },
  { id: "s22", title: "Contact Information", number: "22", icon: Phone },
];

export default function TermsOfService() {
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
          title: "Kernn Automations — Terms of Service",
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
              className="tos-table-row"
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

/* ===== PRINT DOCUMENT MODE ===== */

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

/* hide UI */

.print-mode .tos-sidebar,
.print-mode .tos-actions-bar,
.print-mode .tos-mob-toggle {
  display: none !important;
}

.print-mode main {
  margin-left: 0 !important;
}

/* text readability */

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

.print-mode .tos-header {
  background: none !important;
}

/* metadata boxes */

.print-mode .tos-meta-bar div {
  background: none !important;
  border: 1px solid #ccc !important;
}

/* header */

.tos-print-header {
  display: none;
}

.print-mode .tos-print-header {
  display: block;
  position: fixed;
  top: 8mm;
  left: 0;
  right: 0;
  text-align: center;
  font-family: "Times New Roman", serif;
  font-size: 11pt;
  font-weight: 700;
}

/* footer */

.tos-print-meta {
  display: none;
}

.print-mode .tos-print-meta {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 8mm;
  left: 22mm;
  right: 22mm;
  font-family: "Times New Roman", serif;
  font-size: 9pt;
}

/* page numbers */


/* watermark */

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
}
        .tos-sidebar-item:hover { background: ${ACCENT_LIGHT} !important; }
        .tos-sidebar-item.active { background: ${ACCENT_LIGHT} !important; color: ${ACCENT} !important; border-color: ${ACCENT_BDR} !important; }
        .tos-btn-print:hover { border-color: ${ACCENT} !important; color: ${ACCENT} !important; background: ${ACCENT_LIGHT} !important; }
        .tos-btn-share:hover { background: #921f22 !important; box-shadow: 0 12px 32px rgba(169,36,39,0.42) !important; }
        .tos-table-row:hover td { background: ${ACCENT_LIGHT} !important; }
        .tos-overview-card:hover { transform: translateY(-4px) !important; box-shadow: 0 10px 32px rgba(169,36,39,0.12) !important; border-color: ${ACCENT_BDR} !important; }
        .tos-share-opt:hover { border-color: ${ACCENT} !important; color: ${ACCENT} !important; background: ${ACCENT_LIGHT} !important; }
        .tos-copy-btn.copied { background: #1e6e3f !important; }

        @media (max-width: 900px) {

  main {
    margin-left: 0 !important;
  }
          .tos-sidebar { position: fixed !important; left: 0; top: 80px; height: calc(100vh - 80px) !important; transform: translateX(-100%); transition: transform 0.25s cubic-bezier(.4,0,.2,1); z-index: 250; box-shadow: 6px 0 40px rgba(0,0,0,0.14); }
          .tos-sidebar.open { transform: translateX(0) !important; }
          .tos-mob-toggle { display: flex !important; }
          .tos-header { padding: 40px 20px 32px !important; }
          .tos-actions-bar { padding: 10px 20px !important; }
          .tos-actions-left { display: none !important; }
          .tos-article { padding: 0 20px 60px !important; }
          .tos-overview-grid { grid-template-columns: 1fr 1fr !important; }
          .tos-contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .tos-overview-grid { grid-template-columns: 1fr !important; }
          .tos-contact-grid { grid-template-columns: 1fr !important; }
          .tos-meta-bar { flex-wrap: wrap !important; }
        }
          @media (max-width: 900px) {
  table {
    display: block;
    overflow-x: auto;
  }
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
          className={`tos-sidebar no-print${sidebarOpen ? " open" : ""}`}
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
              Terms of Service · 2026
            </div>
          </div>
          <nav style={{ padding: "0 8px" }}>
            {sections.map(({ id, title, number, icon: Icon }) => {
              const isActive = active === id;
              return (
                <div
                  key={id}
                  className={`tos-sidebar-item${isActive ? " active" : ""}`}
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
        <main
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: 268,
          }}
        >
          {printMode && (
            <>
              <div className="tos-print-header">
                Kernn Automations Private Limited — Terms of Service
              </div>

              <div className="tos-print-meta">
                Printed from IP: {printMeta.ip} | Generated: {printMeta.time}
                <span className="tos-print-pages"></span>
              </div>
            </>
          )}
          {/* ── HERO ── */}
          <header
            className="tos-header"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #1a1a2e 100%)",
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
            {/* ring 1 — large, top-right */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 300,
                height: 300,
                borderRadius: "50%",
                border: "60px solid rgba(234,179,8,0.18)",
                pointerEvents: "none",
              }}
            />
            {/* ring 2 — small, bottom-left */}
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: 120,
                width: 180,
                height: 180,
                borderRadius: "50%",
                border: "40px solid rgba(16,185,129,0.15)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
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
                <Gavel size={12} strokeWidth={2.5} />
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
                Terms of
                <br />
                <span style={gradientText}>Service</span>
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
                These Terms govern your access to and use of all products,
                platforms, and services provided by Kernn Automations Private
                Limited.
              </p>

              <div
                className="tos-meta-bar"
                style={{ display: "flex", gap: 10 }}
              >
                {[
                  ["Effective Date", "January 1, 2026"],
                  ["Last Updated", "January 1, 2026"],
                  ["Version", "2.0"],
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
            className="tos-actions-bar no-print"
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
              className="tos-actions-left"
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
              Kernn Automations Private Limited — Official Terms of Service
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                className="tos-btn-print"
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
                className="tos-btn-share"
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
            className="tos-article"
            style={{ padding: "0 60px 80px", width: "100%", margin: "0 auto" }}
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
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and Kernn Automations Private Limited
                ("Kernn", "we", "our", or "us"). By accessing or using any of
                our products or services, you agree to be bound by these Terms.
                Please read them carefully before proceeding.
              </P>
              <div
                className="tos-overview-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 14,
                  marginTop: 24,
                }}
              >
                {[
                  [
                    Handshake,
                    "Binding Agreement",
                    "These Terms form a legal contract between you and Kernn Automations.",
                  ],
                  [
                    Scale,
                    "Fair Use",
                    "Use our services lawfully and in compliance with applicable regulations.",
                  ],
                  [
                    CircleDollarSign,
                    "Transparent Billing",
                    "Clear pricing, billing cycles, and cancellation terms — no surprises.",
                  ],
                  [
                    Gavel,
                    "Indian Law",
                    "Governed by Indian law with disputes resolved through arbitration.",
                  ],
                ].map(([Icon, title, text]) => (
                  <div
                    key={title}
                    className="tos-overview-card"
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

            {/* S1 — Acceptance */}
            <section id="s1" style={sec}>
              <SectionHeader number="01" title="Acceptance of Terms" />
              <P>
                By accessing, registering for, or using any product, service,
                website, or application provided by Kernn Automations Private
                Limited, you ("User", "you", or "your") acknowledge that you
                have read, understood, and agree to be bound by these Terms of
                Service and our Privacy Policy, which is incorporated herein by
                reference.
              </P>
              <P>
                If you are accepting these Terms on behalf of a company or other
                legal entity, you represent and warrant that you have the
                authority to bind that entity to these Terms. If you do not have
                such authority, or if you do not agree with any part of these
                Terms, you must not use our services.
              </P>
              <H3>1.1 Age Requirement</H3>
              <P>
                You must be at least 18 years of age to use our services. By
                accepting these Terms, you confirm that you meet this
                requirement. Our services are designed for business use only and
                are not intended for individuals under the age of 18.
              </P>
              <H3>1.2 Continued Use</H3>
              <P>
                Your continued use of our services after any modifications to
                these Terms constitutes acceptance of the revised Terms. We
                recommend reviewing these Terms periodically.
              </P>
              <Callout>
                These Terms were last updated on January 1, 2026. If you have
                any questions before accepting, please contact us at
                legal@kernn.ai before using our services.
              </Callout>
            </section>

            {/* S2 — Definitions */}
            <section id="s2" style={sec}>
              <SectionHeader number="02" title="Definitions" />
              <P>
                The following defined terms are used throughout these Terms of
                Service:
              </P>
              <InfoTable
                headers={["Term", "Definition"]}
                rows={[
                  [
                    "Company / Kernn",
                    "Kernn Automations Private Limited, a company incorporated under the Companies Act, 2013.",
                  ],
                  [
                    "Services",
                    "All software products, platforms, APIs, mobile applications, and tools provided by Kernn, including ERP systems, automation tools, and communication integrations.",
                  ],
                  [
                    "User / Customer",
                    "Any individual or business entity that registers for, accesses, or uses the Services.",
                  ],
                  [
                    "Account",
                    "The registered profile created by a User to access the Services.",
                  ],
                  [
                    "Subscription",
                    "A paid plan granting access to specified Services for a defined billing period.",
                  ],
                  [
                    "Content",
                    "Any data, text, files, information, or other materials uploaded, submitted, or created through the Services.",
                  ],
                  [
                    "Platform",
                    "Kernn's web-based, mobile, and API-accessible software infrastructure.",
                  ],
                  [
                    "DPA",
                    "Data Processing Agreement governing how Kernn processes personal data on behalf of customers.",
                  ],
                  [
                    "SLA",
                    "Service Level Agreement specifying uptime, support, and performance commitments.",
                  ],
                  [
                    "Confidential Info",
                    "Non-public information disclosed by either party in connection with these Terms.",
                  ],
                ]}
              />
            </section>

            {/* S3 — Services */}
            <section id="s3" style={sec}>
              <SectionHeader number="03" title="Services Provided" />
              <P>
                Kernn Automations provides enterprise software solutions
                designed to help businesses automate, manage, and optimize their
                operations. Our current and future services include, but are not
                limited to:
              </P>
              <H3>3.1 Core Platform Services</H3>
              <UL
                items={[
                  <>
                    <strong>ERP Systems:</strong> End-to-end enterprise resource
                    planning including inventory management, procurement, sales,
                    finance, and reporting modules.
                  </>,
                  <>
                    <strong>Business Automation Tools:</strong> Workflow
                    automation engines, robotic process automation (RPA), and
                    scheduled task management.
                  </>,
                  <>
                    <strong>Analytics & Reporting:</strong> Real-time
                    dashboards, custom reports, predictive analytics, and
                    business intelligence tools.
                  </>,
                  <>
                    <strong>HR & Payroll Management:</strong> Employee
                    onboarding, attendance, leave management, payroll
                    processing, and compliance reporting.
                  </>,
                  <>
                    <strong>Communication Services:</strong> Transactional
                    messaging via WhatsApp Business API, SMS, and email
                    integrations.
                  </>,
                ]}
              />
              <H3>3.2 Service Modifications</H3>
              <P>
                Kernn reserves the right to modify, enhance, or discontinue any
                service or feature at any time. We will provide reasonable
                notice for material changes that affect your use of paid
                services. We are not liable to you or any third party for any
                modification or discontinuation of services.
              </P>
              <H3>3.3 Beta Features</H3>
              <P>
                We may offer certain features as "beta" or "preview" services.
                These are provided as-is, may be discontinued at any time, and
                are not subject to the standard SLA commitments. Your use of
                beta features is entirely at your own risk.
              </P>
              <Callout>
                Our service catalog is continuously evolving. Visit
                kernn.ai/products for the most current list of available
                features and modules.
              </Callout>
            </section>

            {/* S4 — Account Registration */}
            <section id="s4" style={sec}>
              <SectionHeader number="04" title="Account Registration" />
              <P>
                To access most of our services, you must create and maintain an
                account. By registering, you agree to the following obligations:
              </P>
              <H3>4.1 Accurate Information</H3>
              <UL
                items={[
                  "Provide complete, accurate, and truthful information during registration.",
                  "Promptly update your account information to keep it accurate and current.",
                  "Provide a valid business email address and, where required, valid GST/business registration details.",
                  "Complete KYC (Know Your Customer) verification where required for certain service tiers.",
                ]}
              />
              <H3>4.2 Account Security</H3>
              <UL
                items={[
                  "You are responsible for maintaining the confidentiality of your login credentials.",
                  "You must enable multi-factor authentication (MFA) when available and encouraged to do so.",
                  "You must immediately notify us of any unauthorized access or suspected security breach at security@kernn.ai.",
                  "Kernn is not liable for any loss or damage arising from your failure to secure your account credentials.",
                  "You must not share your account credentials with unauthorized individuals.",
                ]}
              />
              <H3>4.3 Business Accounts</H3>
              <P>
                Accounts registered by businesses are considered organizational
                accounts. The individual who registers the account is the
                Account Owner and is responsible for all activity under the
                account, including actions taken by employees, contractors, or
                agents who are granted access.
              </P>
              <Callout type="warning">
                Accounts found to contain false or misleading registration
                information may be suspended or terminated without prior notice.
              </Callout>
            </section>

            {/* S5 — User Responsibilities */}
            <section id="s5" style={sec}>
              <SectionHeader number="05" title="User Responsibilities" />
              <P>
                By using our services, you agree to the following
                responsibilities and obligations:
              </P>
              <H3>5.1 Lawful Use</H3>
              <UL
                items={[
                  "Use our services only for lawful purposes and in compliance with all applicable laws, regulations, and ordinances.",
                  "Comply with all applicable Indian laws including the IT Act 2000, GST regulations, and the Companies Act.",
                  "Comply with applicable international laws if using our services to conduct cross-border operations.",
                  "Maintain all necessary licenses, permits, and authorizations required for your business operations.",
                ]}
              />
              <H3>5.2 Data Accuracy</H3>
              <UL
                items={[
                  "You are solely responsible for the accuracy and legality of all data you input into the Platform.",
                  "Ensure that data submitted to the Platform does not infringe upon third-party rights.",
                  "Maintain your own backups of critical business data as a prudent business practice.",
                ]}
              />
              <H3>5.3 Acceptable Use</H3>
              <UL
                items={[
                  "Use the Platform only for your legitimate internal business operations.",
                  "Not attempt to reverse engineer, decompile, or disassemble any part of the Platform.",
                  "Not access the Platform through automated means (bots, scrapers) except through our official API with proper authorization.",
                  "Ensure that all personnel using the Platform are aware of and comply with these Terms.",
                ]}
              />
            </section>

            {/* S6 — Prohibited Activities */}
            <section id="s6" style={sec}>
              <SectionHeader number="06" title="Prohibited Activities" />
              <P>
                The following activities are strictly prohibited and may result
                in immediate account suspension or termination, legal action,
                and reporting to relevant authorities:
              </P>
              <H3>6.1 Platform Abuse</H3>
              <UL
                items={[
                  <>
                    <strong>Unauthorized Access:</strong> Attempting to gain
                    unauthorized access to any part of the Platform, other user
                    accounts, or Kernn's infrastructure.
                  </>,
                  <>
                    <strong>System Interference:</strong> Introducing malware,
                    viruses, or any code designed to disrupt, damage, or gain
                    unauthorized access to the Platform.
                  </>,
                  <>
                    <strong>DDoS Attacks:</strong> Deliberately overloading
                    servers or infrastructure through denial-of-service attacks
                    or similar means.
                  </>,
                  <>
                    <strong>Scraping:</strong> Systematic extraction of data
                    from the Platform without express written permission from
                    Kernn.
                  </>,
                  <>
                    <strong>Credential Abuse:</strong> Sharing login credentials
                    with unauthorized parties or using another user's account.
                  </>,
                ]}
              />
              <H3>6.2 Messaging Abuse</H3>
              <UL
                items={[
                  "Sending unsolicited bulk messages, spam, or unauthorized marketing communications through our messaging integrations.",
                  "Using our WhatsApp Business API integration to send messages that violate Meta's Business Messaging Policy.",
                  "Impersonating Kernn, its employees, or other users in communications.",
                  "Sending communications containing illegal content, hate speech, harassment, or fraudulent information.",
                ]}
              />
              <H3>6.3 Legal Violations</H3>
              <UL
                items={[
                  "Using the Platform to facilitate money laundering, tax evasion, or other financial crimes.",
                  "Processing or storing data in violation of applicable data protection laws.",
                  "Using the Platform in connection with any illegal business activity.",
                  "Violating any export control laws or regulations.",
                ]}
              />
              <Callout type="warning">
                Kernn reserves the right to report suspected illegal activities
                to appropriate law enforcement authorities without prior notice
                to the User.
              </Callout>
            </section>

            {/* S7 — Messaging */}
            <section id="s7" style={sec}>
              <SectionHeader number="07" title="Messaging & Notifications" />
              <P>
                Kernn's platforms include integrations with messaging services
                including the WhatsApp Business Platform (Meta Platforms, Inc.),
                SMS gateways, and email delivery systems.
              </P>
              <H3>7.1 User Responsibilities for Messaging</H3>
              <UL
                items={[
                  "You are responsible for obtaining all necessary consents from message recipients before sending communications through our Platform.",
                  "You must comply with applicable anti-spam laws, including India's TRAI regulations, GDPR, and CAN-SPAM Act where applicable.",
                  "You must provide clear opt-out mechanisms in all marketing communications.",
                  "You are responsible for the content of all messages sent through our Platform.",
                ]}
              />
              <H3>7.2 WhatsApp Business API</H3>
              <P>
                Use of the WhatsApp Business API through our Platform is subject
                to Meta's WhatsApp Business Policy in addition to these Terms.
                You must ensure that all WhatsApp message templates comply with
                Meta's content policies and are pre-approved before use.
              </P>
              <H3>7.3 Messaging Limits</H3>
              <P>
                Messaging volumes are subject to the limits specified in your
                subscription plan. Exceeding these limits may result in
                additional charges or temporary suspension of messaging
                functionality. Kernn is not liable for delays or failures in
                message delivery caused by third-party carriers or Meta's
                infrastructure.
              </P>
              <Callout>
                Kernn monitors messaging activity for compliance purposes.
                Accounts found sending prohibited content will be immediately
                suspended and may be reported to relevant authorities.
              </Callout>
            </section>

            {/* S8 — Billing */}
            <section id="s8" style={sec}>
              <SectionHeader number="08" title="Subscription & Billing" />
              <P>
                Access to Kernn's services is provided on a subscription basis.
                By subscribing to a paid plan, you agree to the following
                billing terms:
              </P>
              <H3>8.1 Subscription Plans</H3>
              <P>
                Kernn offers multiple subscription tiers with varying features,
                usage limits, and pricing. The details of each plan are
                available at kernn.ai/pricing. Kernn reserves the right to
                modify pricing with 30 days' notice to existing subscribers.
              </P>
              <InfoTable
                headers={["Billing Term", "Details"]}
                rows={[
                  [
                    "Billing Cycle",
                    "Monthly or annual, as selected at the time of subscription.",
                  ],
                  [
                    "Auto-Renewal",
                    "Subscriptions automatically renew unless cancelled before the renewal date.",
                  ],
                  [
                    "Payment Methods",
                    "Credit/debit cards, UPI, net banking, and bank transfers via our payment processors.",
                  ],
                  [
                    "GST",
                    "All prices are exclusive of GST unless stated otherwise. Applicable GST will be added at checkout.",
                  ],
                  [
                    "Failed Payments",
                    "A 7-day grace period is provided. Services may be suspended if payment is not resolved.",
                  ],
                  [
                    "Refund Policy",
                    "Prepaid annual subscriptions may be refunded on a pro-rata basis within 30 days of purchase.",
                  ],
                  [
                    "Overage Charges",
                    "Usage beyond plan limits will be billed at the applicable overage rates in the next billing cycle.",
                  ],
                ]}
              />
              <H3>8.2 Cancellation</H3>
              <P>
                You may cancel your subscription at any time through your
                account settings or by contacting support@kernn.ai. Cancellation
                takes effect at the end of the current billing period. No
                refunds are issued for partial billing periods unless covered by
                our refund policy.
              </P>
              <H3>8.3 Price Changes</H3>
              <P>
                Kernn will provide at least 30 days' notice before implementing
                any price increases for existing subscriptions. Continued use
                after the price change takes effect constitutes acceptance of
                the new pricing.
              </P>
            </section>

            {/* S9 — IP */}
            <section id="s9" style={sec}>
              <SectionHeader number="09" title="Intellectual Property" />
              <P>
                All intellectual property rights in and to the Kernn Platform
                and Services are and remain the exclusive property of Kernn
                Automations Private Limited.
              </P>
              <H3>9.1 Kernn's Intellectual Property</H3>
              <UL
                items={[
                  "All software, algorithms, code, designs, user interfaces, and documentation comprising the Platform.",
                  "All trademarks, service marks, logos, and brand elements associated with Kernn Automations.",
                  "All proprietary methodologies, processes, and know-how developed by Kernn.",
                  "All derivative works and improvements to the Platform created by Kernn.",
                ]}
              />
              <H3>9.2 License Grant</H3>
              <P>
                Subject to your compliance with these Terms and payment of
                applicable fees, Kernn grants you a limited, non-exclusive,
                non-transferable, non-sublicensable, revocable license to access
                and use the Platform solely for your internal business purposes
                during the subscription term.
              </P>
              <H3>9.3 Restrictions</H3>
              <UL
                items={[
                  "You may not copy, modify, distribute, sell, or lease any part of the Platform or its underlying software.",
                  "You may not reverse engineer or attempt to extract the source code of the Platform.",
                  "You may not remove, alter, or obscure any proprietary notices on the Platform.",
                  "You may not use Kernn's trademarks or branding without prior written consent.",
                ]}
              />
              <H3>9.4 Your Content</H3>
              <P>
                You retain all ownership rights to the business data and content
                you input into the Platform. You grant Kernn a limited license
                to process your data solely to provide the Services as described
                in the DPA incorporated into your service agreement.
              </P>
            </section>

            {/* S10 — Confidentiality */}
            <section id="s10" style={sec}>
              <SectionHeader number="10" title="Confidentiality" />
              <P>
                Each party may receive confidential information from the other
                in the course of the business relationship established by these
                Terms.
              </P>
              <H3>10.1 Obligations</H3>
              <UL
                items={[
                  "Each party agrees to hold the other's Confidential Information in strict confidence.",
                  "Confidential Information shall only be disclosed to employees or contractors with a need to know and who are bound by equivalent confidentiality obligations.",
                  "Confidential Information shall not be used for any purpose other than the performance of these Terms.",
                  "These obligations survive the termination of these Terms for a period of 5 years.",
                ]}
              />
              <H3>10.2 Exclusions</H3>
              <P>
                The confidentiality obligations do not apply to information
                that: (a) is or becomes publicly known through no breach of
                these Terms; (b) was rightfully known before disclosure; (c) is
                independently developed; or (d) must be disclosed by law or
                court order.
              </P>
              <H3>10.3 Kernn's Confidentiality</H3>
              <P>
                Kernn treats all customer business data as confidential and does
                not share it with other customers or use it for Kernn's own
                commercial purposes beyond providing the contracted Services.
              </P>
            </section>

            {/* S11 — SLA */}
            <section id="s11" style={sec}>
              <SectionHeader number="11" title="Service Availability & SLA" />
              <P>
                Kernn is committed to providing reliable and performant
                services. The following uptime commitments apply to paid
                subscription plans:
              </P>
              <InfoTable
                headers={[
                  "Plan Tier",
                  "Uptime SLA",
                  "Support Response Time",
                  "Scheduled Maintenance",
                ]}
                rows={[
                  [
                    "Starter",
                    "99.5%",
                    "48 business hours",
                    "Monthly, with 72-hour notice",
                  ],
                  [
                    "Professional",
                    "99.9%",
                    "12 business hours",
                    "Monthly, with 48-hour notice",
                  ],
                  [
                    "Enterprise",
                    "99.95%",
                    "4 business hours",
                    "Quarterly, with 7-day notice",
                  ],
                ]}
              />
              <H3>11.1 Exclusions</H3>
              <P>
                SLA commitments do not apply to: (a) scheduled maintenance
                windows; (b) outages caused by third-party service providers
                beyond our reasonable control; (c) force majeure events; (d)
                outages caused by your actions or misconfigurations.
              </P>
              <H3>11.2 Service Credits</H3>
              <P>
                In the event of an SLA breach, eligible customers may request
                service credits as specified in their Enterprise Agreement.
                Service credits are your sole remedy for SLA failures and do not
                entitle you to a cash refund.
              </P>
              <H3>11.3 Maintenance</H3>
              <P>
                Kernn will provide advance notice of scheduled maintenance that
                may affect service availability. Emergency maintenance may be
                performed without advance notice where required to protect
                platform security or stability.
              </P>
            </section>

            {/* S12 — Third-Party */}
            <section id="s12" style={sec}>
              <SectionHeader number="12" title="Third-Party Integrations" />
              <P>
                The Platform supports integrations with various third-party
                services and applications. Your use of third-party integrations
                is subject to the following conditions:
              </P>
              <UL
                items={[
                  "Third-party integrations are provided for your convenience and are not endorsed by Kernn.",
                  "Your use of any third-party service is governed by that service's own terms and privacy policy.",
                  "Kernn is not responsible for the availability, accuracy, or security of third-party services.",
                  "You are responsible for ensuring that your use of third-party integrations complies with applicable laws.",
                  "Kernn may add, modify, or remove third-party integrations at any time.",
                  "API access to third-party services through the Platform may be subject to rate limits imposed by the respective third party.",
                ]}
              />
              <Callout>
                Notably, use of the WhatsApp Business API integration is
                additionally governed by Meta Platforms' terms of service and
                Acceptable Use Policy.
              </Callout>
            </section>

            {/* S13 — Data Processing */}
            <section id="s13" style={sec}>
              <SectionHeader number="13" title="Data Processing" />
              <P>
                Kernn processes personal data on your behalf as a Data Processor
                in accordance with our Privacy Policy and the Data Processing
                Agreement (DPA) incorporated into your service agreement.
              </P>
              <H3>13.1 Data Ownership</H3>
              <P>
                You retain full ownership of all business data and personal data
                you input into the Platform. Kernn does not claim ownership over
                your data.
              </P>
              <H3>13.2 Data Processing Agreement</H3>
              <P>
                Enterprise customers and any customer whose use involves
                processing personal data of third parties must execute a Data
                Processing Agreement with Kernn. The DPA governs how we process
                personal data and our obligations under GDPR, India's DPDP Act,
                and other applicable regulations.
              </P>
              <H3>13.3 Data Portability</H3>
              <P>
                Upon request, and within 30 days of your written request, Kernn
                will provide a machine-readable export of your data in a
                standard format. Upon termination, your data will be retained
                for 90 days and then securely deleted unless you request an
                export beforehand.
              </P>
              <H3>13.4 Data Security</H3>
              <P>
                Kernn implements industry-standard security measures including
                AES-256 encryption, TLS in transit, role-based access controls,
                and regular security audits. Details are available in our
                Security Documentation.
              </P>
            </section>

            {/* S14 — Disclaimer */}
            <section id="s14" style={sec}>
              <SectionHeader number="14" title="Disclaimer of Warranties" />
              <P>
                To the maximum extent permitted by applicable law, Kernn
                provides the Services on an "as is" and "as available" basis,
                without warranties of any kind, whether express, implied, or
                statutory.
              </P>
              <UL
                items={[
                  <>
                    <strong>No Implied Warranties:</strong> Kernn expressly
                    disclaims all implied warranties, including warranties of
                    merchantability, fitness for a particular purpose, and
                    non-infringement.
                  </>,
                  <>
                    <strong>No Guarantee of Results:</strong> Kernn does not
                    warrant that the Services will meet your specific business
                    requirements or produce any particular result.
                  </>,
                  <>
                    <strong>No Error-Free Operation:</strong> Kernn does not
                    warrant that the Services will be uninterrupted, error-free,
                    or free from viruses or other harmful components.
                  </>,
                  <>
                    <strong>Third-Party Content:</strong> Kernn is not
                    responsible for any third-party content, integrations, or
                    services accessed through the Platform.
                  </>,
                ]}
              />
              <Callout type="warning">
                Some jurisdictions do not allow the exclusion of implied
                warranties. In such jurisdictions, the above exclusions apply to
                the fullest extent permitted by law.
              </Callout>
            </section>

            {/* S15 — Liability */}
            <section id="s15" style={sec}>
              <SectionHeader number="15" title="Limitation of Liability" />
              <P>
                To the maximum extent permitted by applicable law, in no event
                shall Kernn Automations Private Limited, its directors,
                employees, agents, or affiliates be liable for any of the
                following:
              </P>
              <H3>15.1 Excluded Damages</H3>
              <UL
                items={[
                  "Indirect, incidental, special, consequential, punitive, or exemplary damages.",
                  "Loss of profits, revenue, business, data, goodwill, or anticipated savings.",
                  "Damages arising from unauthorized access to or alteration of your data.",
                  "Damages resulting from the conduct of any third party on or through the Services.",
                  "Damages arising from service interruptions beyond Kernn's reasonable control.",
                ]}
              />
              <H3>15.2 Liability Cap</H3>
              <P>
                Kernn's total aggregate liability to you for all claims arising
                under or in connection with these Terms shall not exceed the
                total fees paid by you to Kernn in the twelve (12) months
                immediately preceding the event giving rise to the claim.
              </P>
              <H3>15.3 Essential Basis</H3>
              <P>
                You acknowledge that the limitations of liability in this
                section are an essential element of the agreement between the
                parties, and that Kernn would not have provided the Services
                without these limitations.
              </P>
              <Callout type="warning">
                Nothing in these Terms excludes or limits liability for death or
                personal injury caused by negligence, fraud or fraudulent
                misrepresentation, or any other liability that cannot be
                excluded under applicable law.
              </Callout>
            </section>

            {/* S16 — Indemnification */}
            <section id="s16" style={sec}>
              <SectionHeader number="16" title="Indemnification" />
              <P>
                You agree to indemnify, defend, and hold harmless Kernn
                Automations Private Limited and its officers, directors,
                employees, agents, licensors, and service providers from and
                against any claims, liabilities, damages, judgments, awards,
                losses, costs, expenses, or fees (including reasonable legal
                fees) arising out of or relating to:
              </P>
              <UL
                items={[
                  "Your violation of these Terms of Service.",
                  "Your use of the Services in a manner not permitted by these Terms.",
                  "Your violation of any applicable law, regulation, or third-party right.",
                  "Any data, content, or information you submit to the Platform.",
                  "Any messaging activity conducted through the Platform on your behalf.",
                  "Your negligence or willful misconduct.",
                ]}
              />
              <P>
                Kernn reserves the right to assume exclusive control of the
                defense of any matter subject to indemnification by you, at your
                expense. You agree to cooperate fully with Kernn's defense of
                such claims.
              </P>
            </section>

            {/* S17 — Termination */}
            <section id="s17" style={sec}>
              <SectionHeader number="17" title="Termination" />
              <H3>17.1 Termination by You</H3>
              <P>
                You may terminate your account and subscription at any time by:
                (a) cancelling your subscription through your account settings;
                or (b) providing written notice to support@kernn.ai. Termination
                takes effect at the end of the current billing period.
              </P>
              <H3>17.2 Termination by Kernn</H3>
              <P>
                Kernn may suspend or terminate your access to the Services
                immediately and without prior notice if:
              </P>
              <UL
                items={[
                  "You breach any provision of these Terms and fail to cure the breach within 7 days of notice.",
                  "You engage in activities that Kernn reasonably believes pose a security risk to the Platform or other users.",
                  "You engage in illegal activities or violate applicable laws.",
                  "You fail to pay fees when due and do not resolve the issue within the grace period.",
                  "Kernn is required to do so by applicable law or a court order.",
                ]}
              />
              <H3>17.3 Effect of Termination</H3>
              <UL
                items={[
                  "Your access to the Services will be disabled immediately upon termination.",
                  "All licenses granted to you under these Terms will immediately cease.",
                  "Your data will be retained for 90 days following termination, after which it will be permanently deleted.",
                  "Provisions of these Terms that by their nature should survive termination will continue to apply.",
                  "Outstanding fees remain payable following termination.",
                ]}
              />
              <Callout>
                Before terminating, we encourage you to export your data. Kernn
                is not responsible for data loss following the 90-day retention
                period after termination.
              </Callout>
            </section>

            {/* S18 — Dispute Resolution */}
            <section id="s18" style={sec}>
              <SectionHeader number="18" title="Dispute Resolution" />
              <P>
                In the event of any dispute, controversy, or claim arising out
                of or relating to these Terms, or the breach, termination, or
                invalidity thereof, the parties agree to follow the process
                below:
              </P>
              <H3>18.1 Informal Resolution</H3>
              <P>
                Before initiating any formal legal proceedings, the aggrieved
                party must first attempt to resolve the dispute informally by
                sending written notice to the other party describing the dispute
                in reasonable detail. The parties will have 30 days to attempt
                to resolve the dispute through good-faith negotiation.
              </P>
              <H3>18.2 Arbitration</H3>
              <P>
                If the dispute is not resolved through informal negotiation, it
                shall be referred to and finally resolved by binding arbitration
                in accordance with the Arbitration and Conciliation Act, 1996
                (India). The arbitration shall be conducted by a sole arbitrator
                mutually agreed upon by the parties, or appointed in accordance
                with the Act. The seat and venue of arbitration shall be
                Hyderabad, Telangana, India. The language of arbitration shall
                be English.
              </P>
              <H3>18.3 Exceptions</H3>
              <P>
                Notwithstanding the above, either party may seek urgent interim
                or injunctive relief from a court of competent jurisdiction to
                prevent irreparable harm pending the outcome of arbitration.
                Nothing in this section shall prevent Kernn from pursuing
                collection of unpaid fees through legal proceedings.
              </P>
            </section>

            {/* S19 — Governing Law */}
            <section id="s19" style={sec}>
              <SectionHeader number="19" title="Governing Law" />
              <P>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of India, without regard to its
                conflict of law provisions.
              </P>
              <UL
                items={[
                  <>
                    <strong>Applicable Laws:</strong> These Terms are subject to
                    the Information Technology Act, 2000; the Indian Contract
                    Act, 1872; the Companies Act, 2013; and all other applicable
                    Indian statutes and regulations.
                  </>,
                  <>
                    <strong>Jurisdiction:</strong> Subject to the arbitration
                    clause, the courts of Hyderabad, Telangana, India shall have
                    exclusive jurisdiction over any disputes that are exempt
                    from or arise outside the scope of the arbitration
                    agreement.
                  </>,
                  <>
                    <strong>International Use:</strong> Users accessing the
                    Services from outside India are responsible for compliance
                    with local laws. Kernn makes no representation that the
                    Services are appropriate or legally available in all
                    jurisdictions.
                  </>,
                ]}
              />
            </section>

            {/* S20 — Modifications */}
            <section id="s20" style={sec}>
              <SectionHeader number="20" title="Modifications to Terms" />
              <P>
                Kernn reserves the right to modify these Terms at any time. We
                are committed to transparent communication of all material
                changes.
              </P>
              <UL
                items={[
                  "Updated Terms will be published on this page with a revised effective date.",
                  "For material changes, we will provide at least 30 days' notice via email and/or in-app notification.",
                  "If you do not agree to the revised Terms, you must stop using the Services and cancel your subscription before the effective date.",
                  "Continued use of the Services after the effective date of the revised Terms constitutes your acceptance.",
                  "Prior versions of these Terms are available upon request by contacting legal@kernn.ai.",
                ]}
              />
              <Callout>
                We recommend bookmarking this page and reviewing these Terms
                periodically. You can always access the current version at
                kernn.ai/terms.
              </Callout>
            </section>

            {/* S21 — Grievance Officer */}
            <section id="s21" style={sec}>
              <SectionHeader number="21" title="Grievance Officer" />
              <P>
                In accordance with the Information Technology Act, 2000 and
                applicable rules, we have designated a Grievance Officer to
                address complaints and concerns related to these Terms.
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
                Complaints must be submitted in writing with sufficient detail
                to allow investigation. We aim to acknowledge all complaints
                within 5 business days and resolve them within 30 days.
              </P>
            </section>

            {/* S22 — Contact */}
            <section id="s22" style={{ ...sec, borderBottom: "none" }}>
              <SectionHeader number="22" title="Contact Information" />
              <P>
                For questions, concerns, or requests regarding these Terms of
                Service, please contact us through the appropriate channel:
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
                  className="tos-contact-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                  }}
                >
                  {[
                    [Mail, "Legal Queries", "legal@kernn.ai", true],
                    [Shield, "Data Protection", "dpo@kernn.ai", true],
                    [
                      AlertTriangle,
                      "Security Issues",
                      "security@kernn.ai",
                      true,
                    ],
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
                  Companies Act, 2013, registered in India. These Terms are
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
        className="tos-mob-toggle no-print"
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
                  Share these Terms
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
                className={`tos-copy-btn${copied ? " copied" : ""}`}
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
                      `mailto:?subject=Kernn%20Terms%20of%20Service&body=${encodeURIComponent(window.location.href)}`,
                    );
                    setShareOpen(false);
                  },
                ],
                [
                  MessageCircle,
                  "WhatsApp",
                  () => {
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent("Kernn Automations Terms of Service: " + window.location.href)}`,
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
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Kernn Automations Terms of Service")}`,
                      "_blank",
                    );
                    setShareOpen(false);
                  },
                ],
              ].map(([Icon, label, action]) => (
                <button
                  key={label}
                  className="tos-share-opt"
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
