import { useState, useEffect, useRef } from "react";
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
  ShieldCheck,
  Database,
  Eye,
  Globe,
  Lock,
  Server,
  Users,
  FileText,
  AlertTriangle,
  Baby,
  MapPin,
  RefreshCw,
  Phone,
  Cpu,
  GitMerge,
  ScrollText,
  Scale,
  UserCheck,
  Cookie,
  Plug,
  Building2,
  Bot,
  Siren,
  CalendarDays,
  HeadphonesIcon,
  BadgeCheck,
  ChevronRight,
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
  { id: "overview", title: "Overview", icon: Eye },
  { id: "s1", title: "Information We Collect", number: "01", icon: Database },
  { id: "s2", title: "How We Use Information", number: "02", icon: Cpu },
  { id: "s3", title: "Legal Basis for Processing", number: "03", icon: Scale },
  {
    id: "s4",
    title: "WhatsApp Business Messaging",
    number: "04",
    icon: MessageCircle,
  },
  { id: "s5", title: "Data Storage & Security", number: "05", icon: Lock },
  { id: "s6", title: "Data Sharing & Transfers", number: "06", icon: GitMerge },
  {
    id: "s7",
    title: "International Data Transfers",
    number: "07",
    icon: Globe,
  },
  { id: "s8", title: "Data Retention", number: "08", icon: CalendarDays },
  { id: "s9", title: "Your Rights", number: "09", icon: UserCheck },
  { id: "s10", title: "Cookies & Tracking", number: "10", icon: Cookie },
  { id: "s11", title: "Third-Party Services", number: "11", icon: Plug },
  { id: "s12", title: "Business Data & ERP", number: "12", icon: Building2 },
  { id: "s13", title: "AI & Automation", number: "13", icon: Bot },
  { id: "s14", title: "Incident Response", number: "14", icon: Siren },
  { id: "s15", title: "Children's Privacy", number: "15", icon: Baby },
  { id: "s16", title: "California Privacy Rights", number: "16", icon: MapPin },
  { id: "s17", title: "GDPR Compliance", number: "17", icon: BadgeCheck },
  {
    id: "s18",
    title: "India IT Act Compliance",
    number: "18",
    icon: ScrollText,
  },
  { id: "s19", title: "Grievance Officer", number: "19", icon: HeadphonesIcon },
  { id: "s20", title: "Updates to This Policy", number: "20", icon: RefreshCw },
  { id: "s21", title: "Contact Information", number: "21", icon: Phone },
];

export default function PrivacyPolicy() {
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [printLoading, setPrintLoading] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const [printMeta, setPrintMeta] = useState({
    ip: "Loading...",
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

    setPrintMeta({ ip, time });

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
          title: "Kernn Automations — Privacy Policy",
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

  /* ── micro-components ─────────────────────────────────────── */
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

  const Callout = ({ children }) => (
    <div
      style={{
        background: ACCENT_LIGHT,
        border: `1px solid ${ACCENT_BDR}`,
        borderLeft: `3px solid ${ACCENT}`,
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
              className="pp-table-row"
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

  const RightsGrid = ({ items }) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px,1fr))",
        gap: 14,
        margin: "16px 0",
      }}
    >
      {items.map(([title, text]) => (
        <div
          key={title}
          className="pp-right-card"
          style={{
            border: `1px solid ${BORDER_LIGHT}`,
            borderRadius: 12,
            padding: "16px 18px",
            background: BG_WHITE,
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
        >
          <div
            style={{
              fontSize: "0.87rem",
              fontWeight: 700,
              color: TEXT_DARK,
              marginBottom: 5,
            }}
          >
            {title}
          </div>
          <div
            style={{ fontSize: "0.81rem", color: TEXT_LIGHT, lineHeight: 1.55 }}
          >
            {text}
          </div>
        </div>
      ))}
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
          .pp-sidebar { display: none !important; }
          .pp-article { padding: 20px !important; }
          h2 { page-break-after: avoid; }
        }
        .pp-sidebar-item:hover { background: ${ACCENT_LIGHT} !important; }
        .pp-sidebar-item.active { background: ${ACCENT_LIGHT} !important; color: ${ACCENT} !important; border-color: ${ACCENT_BDR} !important; }
        .pp-btn-print:hover { border-color: ${ACCENT} !important; color: ${ACCENT} !important; background: ${ACCENT_LIGHT} !important; }
        .pp-btn-share:hover { background: #921f22 !important; box-shadow: 0 12px 32px rgba(169,36,39,0.42) !important; }
        .pp-table-row:hover td { background: ${ACCENT_LIGHT} !important; }
        .pp-right-card:hover { border-color: ${ACCENT} !important; box-shadow: 0 4px 16px ${ACCENT_LIGHT} !important; }
        .pp-share-opt:hover { border-color: ${ACCENT} !important; color: ${ACCENT} !important; background: ${ACCENT_LIGHT} !important; }
        .pp-overview-card:hover { transform: translateY(-4px) !important; box-shadow: 0 10px 32px rgba(169,36,39,0.12) !important; border-color: ${ACCENT_BDR} !important; }
        .pp-copy-btn.copied { background: #1e6e3f !important; }
        @media (max-width: 900px) {
          .pp-sidebar { position: fixed !important; left: 0; top: 80px; height: calc(100vh - 80px) !important; transform: translateX(-100%); transition: transform 0.25s cubic-bezier(.4,0,.2,1); z-index: 250; box-shadow: 6px 0 40px rgba(0,0,0,0.14); }
          .pp-sidebar.open { transform: translateX(0) !important; }
          .pp-mob-toggle { display: flex !important; }
          .pp-header { padding: 40px 20px 32px !important; }
          .pp-actions-bar { padding: 10px 20px !important; }
          .pp-actions-left { display: none !important; }
          .pp-article { padding: 0 20px 60px !important; }
          .pp-overview-grid { grid-template-columns: 1fr 1fr !important; }
          .pp-contact-grid { grid-template-columns: 1fr 1fr !important; }
          main {
    margin-left: 0 !important;
  width: 100% !important;
}

.pp-article {
  padding: 0 18px 60px !important;
}

.pp-header {
  padding: 36px 20px 30px !important;
}

.pp-overview-grid {
  grid-template-columns: 1fr !important;
}

.pp-contact-grid {
  grid-template-columns: 1fr !important;
}
  table {
  display: block;
  overflow-x: auto;
}
        }
        @media (max-width: 520px) {
          .pp-overview-grid { grid-template-columns: 1fr !important; }
          .pp-contact-grid { grid-template-columns: 1fr !important; }
          .pp-meta-bar { flex-wrap: wrap !important; }
        }
          /* ================= PRINT LEGAL DOCUMENT ================= */

@page {
  size: A4;
  margin: 28mm 22mm 28mm 22mm;
}

.print-mode * {
  color: #000 !important;
  background: none !important;
  box-shadow: none !important;
}

.print-mode .pp-sidebar,
.print-mode .pp-actions-bar,
.print-mode .pp-mob-toggle,
.print-mode button {
  display: none !important;
}

.print-mode main {
  margin-left: 0 !important;
}

.print-mode .pp-header {
  background: none !important;
  padding: 0 !important;
  margin-bottom: 30px;
}

.print-mode h1 {
  font-size: 32px !important;
  text-align: center;
  font-family: "Times New Roman", serif;
}

.print-mode h1 span {
  -webkit-text-fill-color: #000 !important;
  color: #000 !important;
  background: none !important;
}

.print-mode h2 {
  font-family: "Times New Roman", serif;
  font-size: 18px !important;
  margin-top: 28px;
  border-bottom: 1px solid #000;
  padding-bottom: 6px;
}

.print-mode h3 {
  font-family: "Times New Roman", serif;
  font-size: 15px;
  margin-top: 16px;
}

.print-mode p,
.print-mode li {
  font-family: "Times New Roman", serif;
  font-size: 12pt;
  line-height: 1.7;
}
  

.print-mode table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11pt;
}

.print-mode table th,
.print-mode table td {
  border: 1px solid #000;
  padding: 6px 8px;
}

.print-mode .pp-article {
  padding: 0 !important;
}

.print-mode section {
  page-break-inside: avoid;
}
  /* -------- Legal Footer -------- */

.pp-print-meta {
  display: none;
}

.print-mode .pp-print-meta {
  display: block;
  position: fixed;
  bottom: 5mm;
  left: 0;
  right: 0;
  text-align: center;
  font-family: "Times New Roman", serif;
  font-size: 9pt;
  color: #333;
}

/* -------- Page Numbers -------- */

@page {
  @bottom-right {
    content: "Page " counter(page) " of " counter(pages);
    font-size: 9pt;
    font-family: "Times New Roman", serif;
  }
}

/* -------- Watermark -------- */

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
  .print-mode::after {
  content: "Kernn Automations Private Limited — Privacy Policy";
  position: fixed;
  top: 100mm;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 9pt;
  font-family: "Times New Roman", serif;
  color: #333;
  opacity: 0.6;
}
      `}</style>

      {/* ═══ ROOT ═══════════════════════════════════════════════════════════ */}
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
        {/* ═══ SIDEBAR ════════════════════════════════════════════════════ */}
        <aside
          className={`pp-sidebar no-print${sidebarOpen ? " open" : ""}`}
          style={{
            width: 268,
            flexShrink: 0,
            background: BG_WHITE,
            borderRight: `1px solid ${BORDER_LIGHT}`,
            position: "fixed",
            left: 0,
            top: 80,
            height: "calc(100vh - 80px)",
            overflowY: "auto",
            padding: "20px 0",
            scrollbarWidth: "thin",
            scrollbarColor: `${BORDER_LIGHT} transparent`,
          }}
        >
          {/* Brand */}
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
              Privacy Policy · 2026
            </div>
          </div>

          {/* Nav items */}
          <nav style={{ padding: "0 8px" }}>
            {sections.map(({ id, title, number, icon: Icon }) => {
              const isActive = active === id;
              return (
                <div
                  key={id}
                  className={`pp-sidebar-item${isActive ? " active" : ""}`}
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

        {/* Overlay */}
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

        {/* ═══ MAIN CONTENT ════════════════════════════════════════════════ */}
        <main
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: window.innerWidth <= 900 ? 0 : 268,
          }}
        >
          {printMode && (
            <div className="pp-print-meta">
              Printed by: {printMeta.ip} | Generated: {printMeta.time} |
              Document: Kernn Privacy Policy
            </div>
          )}
          {/* ── HERO ── */}
          <header
            className="pp-header"
            style={{
              background: "linear-gradient(180deg, #1a1a1a 0%, #2a1618 100%)",
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
                border: "60px solid rgba(169, 36, 39, 0.45)",
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
                border: "40px solid rgba(214, 52, 71, 0.30)",
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
                <ScrollText size={12} strokeWidth={2.5} />
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
                Privacy
                <br />
                <span style={gradientText}>Policy</span>
              </h1>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "rgba(255,255,255,0.52)",
                  maxWidth: 500,
                  lineHeight: 1.7,
                  marginBottom: 30,
                }}
              >
                This policy governs how we collect, process, store, and protect
                your personal and business information across all Kernn
                platforms and services.
              </p>

              {/* Meta pills */}
              <div className="pp-meta-bar" style={{ display: "flex", gap: 10 }}>
                {[
                  ["Effective Date", "January 1, 2026"],
                  ["Last Updated", "January 1, 2026"],
                  ["Version", "3.0"],
                  ["Jurisdiction", "India (Global)"],
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
            className="pp-actions-bar no-print"
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
              className="pp-actions-left"
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
              Kernn Automations Private Limited — Official Privacy Policy
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                className="pp-btn-print"
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
                className="pp-btn-share"
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

          {/* ═══ ARTICLE ═════════════════════════════════════════════════════ */}
          <article
            className="pp-article"
            style={{
              padding: "0 60px 80px",
              margin: "0 auto",
              width: "100%",
            }}
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
                Kernn Automations Private Limited is committed to protecting the
                privacy and security of all personal and business data entrusted
                to us. This Privacy Policy applies to all products and services
                offered under the Kernn brand, including our ERP platforms,
                business automation tools, AI-powered analytics, and WhatsApp
                Business integrations.
              </P>
              <div
                className="pp-overview-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 14,
                  marginTop: 24,
                }}
              >
                {[
                  [
                    Lock,
                    "Data Security",
                    "AES-256 encryption protects your data at rest and in transit.",
                  ],
                  [
                    Shield,
                    "No Data Selling",
                    "We never sell personal or business data to third parties.",
                  ],
                  [
                    UserCheck,
                    "Your Controls",
                    "Access, correct, export, or delete your data at any time.",
                  ],
                  [
                    Globe,
                    "Global Compliance",
                    "GDPR, India DPDP Act, CCPA, and more.",
                  ],
                ].map(([Icon, title, text]) => (
                  <div
                    key={title}
                    className="pp-overview-card"
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

            {/* S1 — Information We Collect */}
            <section id="s1" style={sec}>
              <SectionHeader number="01" title="Information We Collect" />
              <P>
                We collect information necessary to deliver, improve, and secure
                our services — only what is reasonably necessary and
                proportionate to the purpose for which it is used.
              </P>
              <H3>1.1 Information You Provide Directly</H3>
              <UL
                items={[
                  <>
                    <strong>Identity Data:</strong> Full name, designation,
                    employee ID, and government-issued identification where
                    legally required.
                  </>,
                  <>
                    <strong>Contact Data:</strong> Email address, mobile number,
                    business phone, WhatsApp number, and mailing address.
                  </>,
                  <>
                    <strong>Account Credentials:</strong> Username, hashed
                    passwords, security questions, and two-factor authentication
                    data.
                  </>,
                  <>
                    <strong>Business Registration Data:</strong> Company name,
                    registered address, GST/VAT/TIN number, and incorporation
                    certificate.
                  </>,
                  <>
                    <strong>Financial Data:</strong> Bank account details, UPI
                    IDs, tokenized card numbers, billing address, and invoicing
                    preferences.
                  </>,
                  <>
                    <strong>Communication Content:</strong> Messages, support
                    tickets, feedback submissions, and survey responses.
                  </>,
                ]}
              />
              <H3>1.2 Information Generated Through Use</H3>
              <UL
                items={[
                  <>
                    <strong>ERP Transaction Data:</strong> Purchase orders,
                    sales invoices, inventory records, ledger entries, payroll
                    data, and audit trails.
                  </>,
                  <>
                    <strong>Usage Data:</strong> Feature interactions, session
                    durations, page views, button clicks, and workflow execution
                    records.
                  </>,
                  <>
                    <strong>Device & Technical Data:</strong> IP address,
                    browser type, operating system, screen resolution, and time
                    zone.
                  </>,
                  <>
                    <strong>Log Data:</strong> Server-side access logs, API
                    request logs, error logs, and security event logs.
                  </>,
                  <>
                    <strong>Geolocation Data:</strong> Approximate location
                    derived from IP address; precise location only when
                    explicitly enabled.
                  </>,
                ]}
              />
              <H3>1.3 Information from Third Parties</H3>
              <UL
                items={[
                  "Identity verification data from KYC service providers",
                  "Credit risk and business verification data from authorized bureaus",
                  "Public business registry information from government databases",
                  "Integration data from connected third-party platforms",
                ]}
              />
              <Callout>
                We do not collect sensitive personal information such as
                biometric data, genetic data, religious or political beliefs, or
                health data unless specifically required and with your explicit
                written consent.
              </Callout>
            </section>

            {/* S2 — How We Use Information */}
            <section id="s2" style={sec}>
              <SectionHeader number="02" title="How We Use Information" />
              <P>
                We use collected information for specific, explicit, and
                legitimate business purposes only.
              </P>
              <InfoTable
                headers={["Purpose", "Data Used", "Legal Basis"]}
                rows={[
                  [
                    "Service Delivery",
                    "Account, identity, transaction data",
                    "Contract performance",
                  ],
                  [
                    "Billing & Invoicing",
                    "Financial, contact data",
                    "Contract, legal obligation",
                  ],
                  [
                    "Customer Support",
                    "Communication, usage data",
                    "Legitimate interest",
                  ],
                  [
                    "WhatsApp Messaging",
                    "Contact, transaction data",
                    "Consent / Contract",
                  ],
                  [
                    "Security Monitoring",
                    "Log, device, usage data",
                    "Legitimate interest",
                  ],
                  [
                    "Product Improvement",
                    "Usage analytics (anonymized)",
                    "Legitimate interest",
                  ],
                  [
                    "Legal Compliance",
                    "Identity, financial data",
                    "Legal obligation",
                  ],
                  [
                    "Fraud Prevention",
                    "Device, behavioral data",
                    "Legitimate interest",
                  ],
                  ["Marketing (opt-in)", "Contact, preference data", "Consent"],
                ]}
              />
              <P>
                We may also use information to conduct internal research,
                develop new features, and generate aggregated benchmarking
                reports — always in a manner that does not identify individual
                users.
              </P>
            </section>

            {/* S3 — Legal Basis */}
            <section id="s3" style={sec}>
              <SectionHeader number="03" title="Legal Basis for Processing" />
              <P>
                Under GDPR and India's DPDP Act, 2023, we are required to have a
                valid legal basis for processing personal data. The grounds we
                rely on include:
              </P>
              <UL
                items={[
                  <>
                    <strong>Contractual Necessity:</strong> Processing is
                    necessary to perform the contract we have with you.
                  </>,
                  <>
                    <strong>Legitimate Interests:</strong> Processing is in our
                    legitimate business interests (fraud prevention, security),
                    not overridden by your rights.
                  </>,
                  <>
                    <strong>Legal Obligation:</strong> Processing is necessary
                    to comply with applicable laws such as the Companies Act,
                    GST regulations, or RBI guidelines.
                  </>,
                  <>
                    <strong>Consent:</strong> Where required by law, we obtain
                    your explicit and informed consent. You may withdraw at any
                    time without affecting prior processing.
                  </>,
                  <>
                    <strong>Vital Interests:</strong> Processing may be
                    necessary to protect the vital interests of a person in
                    emergency situations.
                  </>,
                  <>
                    <strong>Public Task:</strong> Where required to assist in
                    tasks carried out in the public interest, such as regulatory
                    investigations.
                  </>,
                ]}
              />
              <Callout>
                We document our legal basis for each processing category. You
                may request a copy by contacting our Data Protection Officer at
                dpo@kernn.ai.
              </Callout>
            </section>

            {/* S4 — WhatsApp */}
            <section id="s4" style={sec}>
              <SectionHeader number="04" title="WhatsApp Business Messaging" />
              <P>
                Kernn Automations integrates the WhatsApp Business Platform
                (Meta Platforms, Inc.) to enable businesses to send
                transactional information, operational alerts, and service
                notifications.
              </P>
              <H3>4.1 Types of Messages Sent</H3>
              <UL
                items={[
                  "Transaction confirmations, invoices, and payment receipts",
                  "Inventory alerts, low-stock notifications, and purchase order updates",
                  "Shipment tracking and delivery status updates",
                  "Appointment reminders and service scheduling confirmations",
                  "Two-factor authentication (2FA) and security alerts",
                  "Account onboarding and setup instructions",
                  "Customer service responses initiated by the end user",
                ]}
              />
              <H3>4.2 Consent and Opt-Out</H3>
              <P>
                Marketing or promotional messages are sent only with explicit
                opt-in consent. Recipients may opt out at any time by replying
                "STOP" or through opt-out mechanisms in each message.
              </P>
              <H3>4.3 Data Shared with WhatsApp</H3>
              <P>
                To deliver messages, we share the recipient's mobile number and
                message content with Meta Platforms, Inc. We do not share any
                additional personal data beyond what is strictly necessary.
              </P>
              <Callout>
                Our WhatsApp Business Account is verified and approved by Meta.
                All template messages are pre-approved per Meta's Business
                Messaging Policy.
              </Callout>
              <H3>4.4 Message Retention</H3>
              <P>
                Outbound message logs (recipient number, template ID, timestamp,
                delivery status) are retained for up to 12 months for compliance
                and dispute resolution purposes.
              </P>
            </section>

            {/* S5 — Security */}
            <section id="s5" style={sec}>
              <SectionHeader number="05" title="Data Storage & Security" />
              <P>
                We implement a multi-layered security architecture to protect
                your data against unauthorized access, disclosure, alteration,
                and destruction.
              </P>
              <H3>5.1 Encryption</H3>
              <UL
                items={[
                  <>
                    <strong>At Rest:</strong> All stored data is encrypted using
                    AES-256 encryption.
                  </>,
                  <>
                    <strong>In Transit:</strong> All data transmissions use TLS
                    1.2 or higher (TLS 1.3 preferred).
                  </>,
                  <>
                    <strong>Database Level:</strong> Sensitive fields
                    (passwords, financial credentials) use bcrypt hashing with
                    salt.
                  </>,
                  <>
                    <strong>Backups:</strong> All backup files are encrypted and
                    stored in geographically redundant locations.
                  </>,
                ]}
              />
              <H3>5.2 Access Controls</H3>
              <UL
                items={[
                  "Role-based access control (RBAC) limits data access to authorized personnel only",
                  "Privileged access management (PAM) for administrative and database access",
                  "Multi-factor authentication (MFA) required for all internal systems",
                  "Principle of least privilege applied across all systems",
                ]}
              />
              <H3>5.3 Infrastructure</H3>
              <P>
                Our services are hosted on enterprise-grade cloud infrastructure
                with SOC 2 Type II certification, physical security controls,
                and 24/7 monitoring. Data centers are located in India and/or
                regions with adequate data protection standards.
              </P>
              <H3>5.4 Security Testing</H3>
              <UL
                items={[
                  "Regular vulnerability assessments and penetration testing by third-party security firms",
                  "Automated SAST/DAST in our CI/CD pipeline",
                  "Annual security audits by independent auditors",
                ]}
              />
              <Callout>
                We encourage users to use strong passwords, enable MFA, and
                report suspected security issues to security@kernn.ai.
              </Callout>
            </section>

            {/* S6 — Sharing */}
            <section id="s6" style={sec}>
              <SectionHeader number="06" title="Data Sharing & Transfers" />
              <P>
                We do not sell, rent, or trade your personal or business data.
                We may share information with carefully vetted third parties
                under strict contractual data protection obligations.
              </P>
              <H3>6.1 Service Providers (Data Processors)</H3>
              <InfoTable
                headers={["Category", "Purpose", "Examples"]}
                rows={[
                  [
                    "Cloud Infrastructure",
                    "Hosting, storage, compute",
                    "AWS, Azure, GCP",
                  ],
                  [
                    "Payment Processors",
                    "Billing, subscription management",
                    "Razorpay, Stripe",
                  ],
                  [
                    "Messaging Platforms",
                    "WhatsApp, SMS, email delivery",
                    "Meta, Twilio, SendGrid",
                  ],
                  [
                    "Analytics",
                    "Performance monitoring, error tracking",
                    "Sentry (anonymized)",
                  ],
                  [
                    "Identity Verification",
                    "KYC, fraud prevention",
                    "Licensed Indian KYC providers",
                  ],
                ]}
              />
              <H3>6.2 Legal Disclosures</H3>
              <P>
                We may disclose information to government authorities or courts
                when required by applicable law. We will notify affected users
                where legally permitted.
              </P>
              <H3>6.3 Business Transactions</H3>
              <P>
                In the event of a merger or acquisition, user data may be
                transferred to the acquiring entity. We will provide notice
                prior to any such transfer and ensure equivalent privacy
                protections.
              </P>
              <H3>6.4 Aggregated Data</H3>
              <P>
                We may share aggregated, anonymized data for industry
                benchmarking or research where no individual or business can be
                identified.
              </P>
            </section>

            {/* S7 — International */}
            <section id="s7" style={sec}>
              <SectionHeader number="07" title="International Data Transfers" />
              <P>
                When we transfer personal data outside India or the EEA, we
                ensure appropriate safeguards are in place to protect the data.
              </P>
              <UL
                items={[
                  <>
                    <strong>Standard Contractual Clauses (SCCs):</strong> For
                    transfers to non-adequate countries, we use EU-approved
                    SCCs.
                  </>,
                  <>
                    <strong>Adequacy Decisions:</strong> Transfers to countries
                    recognized as providing adequate data protection.
                  </>,
                  <>
                    <strong>Binding Corporate Rules:</strong> Where applicable
                    for intra-group transfers.
                  </>,
                  <>
                    <strong>India DPDP Compliance:</strong> We restrict
                    cross-border transfers to countries notified by the Indian
                    Government as providing adequate protection.
                  </>,
                ]}
              />
              <Callout>
                You may request a copy of the transfer safeguards we rely on by
                contacting our DPO at dpo@kernn.ai.
              </Callout>
            </section>

            {/* S8 — Retention */}
            <section id="s8" style={sec}>
              <SectionHeader number="08" title="Data Retention" />
              <P>
                We retain data only for as long as necessary to fulfill the
                purposes described in this policy, comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </P>
              <InfoTable
                headers={["Data Category", "Retention Period", "Basis"]}
                rows={[
                  [
                    "Account & Identity Data",
                    "Duration of contract + 5 years",
                    "Legal obligation (Companies Act)",
                  ],
                  [
                    "Financial & Billing Records",
                    "7 years from transaction date",
                    "GST Act, Income Tax Act",
                  ],
                  [
                    "ERP Transaction Data",
                    "7 years from financial year end",
                    "Statutory requirement",
                  ],
                  [
                    "WhatsApp Message Logs",
                    "12 months",
                    "Operational / dispute resolution",
                  ],
                  [
                    "Security & Access Logs",
                    "12–24 months",
                    "Security monitoring",
                  ],
                  [
                    "Marketing Consent Records",
                    "Until withdrawal + 3 years",
                    "Proof of consent",
                  ],
                  [
                    "Support Tickets",
                    "3 years from closure",
                    "Legitimate interest",
                  ],
                  [
                    "Anonymized Analytics",
                    "Indefinitely",
                    "Aggregated, non-personal",
                  ],
                ]}
              />
              <P>
                Upon expiry, data is securely deleted or anonymized using
                industry-standard destruction procedures. You may request early
                deletion subject to legal and contractual obligations.
              </P>
            </section>

            {/* S9 — Rights */}
            <section id="s9" style={sec}>
              <SectionHeader number="09" title="Your Rights" />
              <P>
                Depending on your location and applicable data protection laws,
                you may have the following rights regarding your personal data.
              </P>
              <RightsGrid
                items={[
                  [
                    "Right of Access",
                    "Request a copy of the personal data we hold about you.",
                  ],
                  [
                    "Right to Rectification",
                    "Request correction of inaccurate or incomplete data.",
                  ],
                  [
                    "Right to Erasure",
                    "Request deletion where there is no overriding legal reason to retain it.",
                  ],
                  [
                    "Right to Restriction",
                    "Request that we restrict processing in certain circumstances.",
                  ],
                  [
                    "Right to Portability",
                    "Receive your data in a structured, machine-readable format.",
                  ],
                  [
                    "Right to Object",
                    "Object to processing based on legitimate interests or direct marketing.",
                  ],
                  [
                    "Withdraw Consent",
                    "Withdraw consent at any time where processing is based on consent.",
                  ],
                  [
                    "Right to Complain",
                    "Lodge a complaint with the relevant data protection authority.",
                  ],
                ]}
              />
              <P mt="16px">
                To exercise any of these rights, submit a written request to
                privacy@kernn.ai. We will respond within 30 days. Identity
                verification may be required before processing requests. No fee
                is charged unless requests are manifestly unfounded or
                excessive.
              </P>
            </section>

            {/* S10 — Cookies */}
            <section id="s10" style={sec}>
              <SectionHeader
                number="10"
                title="Cookies & Tracking Technologies"
              />
              <P>
                Our websites and web applications use cookies and similar
                tracking technologies to enhance user experience, analyze usage
                patterns, and deliver personalized content.
              </P>
              <H3>10.1 Types of Cookies</H3>
              <UL
                items={[
                  <>
                    <strong>Strictly Necessary Cookies:</strong> Required for
                    the website to function. Cannot be disabled. Examples:
                    session tokens, CSRF protection.
                  </>,
                  <>
                    <strong>Performance Cookies:</strong> Collect anonymized
                    data about how users interact with our website to improve
                    performance.
                  </>,
                  <>
                    <strong>Functional Cookies:</strong> Remember your
                    preferences such as language, region, and display settings.
                  </>,
                  <>
                    <strong>Analytics Cookies:</strong> Help us understand user
                    journeys within our applications.
                  </>,
                  <>
                    <strong>Marketing Cookies (opt-in only):</strong> Used to
                    measure campaign effectiveness. Only placed with explicit
                    consent.
                  </>,
                ]}
              />
              <H3>10.2 Cookie Consent</H3>
              <P>
                Non-essential cookies are placed only with your consent via our
                cookie consent banner. You may withdraw or modify consent at any
                time through browser settings or our cookie preference center.
              </P>
              <H3>10.3 Third-Party Tracking</H3>
              <P>
                We do not permit third-party advertising networks to place
                tracking cookies on our platforms. Any analytics tools we use
                are configured to anonymize IP addresses and disable cross-site
                tracking.
              </P>
            </section>

            {/* S11 — Third Party */}
            <section id="s11" style={sec}>
              <SectionHeader
                number="11"
                title="Third-Party Services & Integrations"
              />
              <P>
                Kernn's platforms support integrations with third-party
                applications to extend functionality for enterprise customers.
                When you connect a third-party service, data may flow between
                Kernn and that service as configured by your organization.
              </P>
              <UL
                items={[
                  "We act as a data processor on behalf of your organization for data processed through third-party integrations you configure.",
                  "You are responsible for ensuring that third-party services you integrate comply with applicable data protection laws.",
                  "We do not control the privacy practices of third-party applications.",
                  "Integration access tokens are stored encrypted and scoped to minimum permissions necessary.",
                  "You may revoke integration access at any time through your account settings.",
                ]}
              />
              <P>
                Our website may contain links to external sites. These links do
                not constitute an endorsement, and we are not responsible for
                the privacy practices of those sites.
              </P>
            </section>

            {/* S12 — ERP */}
            <section id="s12" style={sec}>
              <SectionHeader number="12" title="Business Data & ERP Systems" />
              <P>
                Kernn's ERP and business automation platforms are used by
                organizations to manage financial records, HR information,
                inventory, customer databases, and operational data.
              </P>
              <H3>12.1 Data Controller vs. Processor</H3>
              <P>
                For data that your organization inputs into Kernn's ERP systems,
                your organization acts as the <strong>Data Controller</strong>{" "}
                and Kernn acts as the <strong>Data Processor</strong>. Our
                processing activities are governed by the Data Processing
                Agreement (DPA) in your service agreement.
              </P>
              <H3>12.2 Business Confidentiality</H3>
              <P>
                All business data entered into our ERP systems is treated as
                confidential. We do not use customer business data for our own
                commercial purposes, share it with other customers, or use it to
                train AI models without explicit contractual authorization.
              </P>
              <H3>12.3 Data Isolation</H3>
              <P>
                Each organization's data is logically isolated using
                tenant-level access controls and encryption keys. Kernn
                employees may access business data only for legitimate support
                or compliance purposes, and such access is logged and subject to
                oversight.
              </P>
              <H3>12.4 HR & Employee Data</H3>
              <P>
                Where Kernn's HR modules process employee personal data on
                behalf of your organization, such processing is governed by your
                DPA and applicable employment law.
              </P>
            </section>

            {/* S13 — AI */}
            <section id="s13" style={sec}>
              <SectionHeader
                number="13"
                title="AI, Automation & Machine Learning"
              />
              <P>
                Kernn's platforms incorporate artificial intelligence and
                machine learning capabilities to automate workflows, generate
                insights, and improve service performance. We are committed to
                responsible AI use that respects privacy and human rights.
              </P>
              <H3>13.1 How We Use AI</H3>
              <UL
                items={[
                  "Demand forecasting and inventory optimization using anonymized aggregate data",
                  "Anomaly detection for fraud and security threat identification",
                  "Natural language processing for document parsing and data extraction",
                  "Automated report generation based on your organization's own data",
                  "Predictive analytics using your business's historical transaction data",
                ]}
              />
              <H3>13.2 AI Training Data</H3>
              <P>
                We do not use identifiable personal data or confidential
                business data from customers to train our general AI models
                without explicit contractual authorization. Model training uses
                anonymized, aggregated, or synthetically generated data.
              </P>
              <H3>13.3 Automated Decision-Making</H3>
              <P>
                Where our AI tools make automated decisions that produce
                significant effects on individuals, we provide the right to
                request human review and an explanation of the automated
                decision.
              </P>
              <Callout>
                We maintain an AI ethics framework requiring all AI features to
                be reviewed for bias, fairness, and privacy impact prior to
                deployment. Contact us if you have concerns about a specific
                AI-driven feature.
              </Callout>
            </section>

            {/* S14 — Incident Response */}
            <section id="s14" style={sec}>
              <SectionHeader number="14" title="Security Incident Response" />
              <P>
                We have established a formal incident response program to
                detect, contain, and respond to data breaches and security
                events effectively.
              </P>
              <H3>14.1 Detection & Containment</H3>
              <P>
                Our 24/7 security monitoring systems and SIEM infrastructure are
                designed to detect anomalous activity. Upon detection, our
                incident response team activates containment procedures to
                minimize impact.
              </P>
              <H3>14.2 Notification</H3>
              <UL
                items={[
                  <>
                    <strong>72-hour notification:</strong> We will notify
                    affected customers within 72 hours of becoming aware of a
                    breach likely to result in risk to individuals' rights, as
                    required by GDPR and DPDP Act.
                  </>,
                  "Notifications will include: nature of the incident, categories affected, likely consequences, and measures taken.",
                  "We will also notify the appropriate supervisory authority (CERT-In, Data Protection Board of India) within prescribed timeframes.",
                ]}
              />
              <H3>14.3 Post-Incident Review</H3>
              <P>
                Following any significant security incident, we conduct a
                thorough root cause analysis and implement corrective measures.
                A summary of significant incidents is provided to our Board.
              </P>
              <P>
                To report a suspected security vulnerability, contact:{" "}
                <strong>security@kernn.ai</strong>
              </P>
            </section>

            {/* S15 — Children */}
            <section id="s15" style={sec}>
              <SectionHeader number="15" title="Children's Privacy" />
              <P>
                Kernn's services are designed exclusively for businesses and
                professional users. Our platforms are not intended for
                individuals under the age of 18 years.
              </P>
              <UL
                items={[
                  "We do not knowingly collect personal information from minors.",
                  "Our registration process requires users to confirm they are 18 years of age or older.",
                  "If we become aware of data inadvertently collected from a minor, we will promptly delete such data.",
                  "Parents or guardians who believe their child's data has been collected should contact us at privacy@kernn.ai.",
                ]}
              />
            </section>

            {/* S16 — California */}
            <section id="s16" style={sec}>
              <SectionHeader
                number="16"
                title="California Privacy Rights (CCPA/CPRA)"
              />
              <P>
                California residents may have additional rights under the
                California Consumer Privacy Act (CCPA) as amended by the
                California Privacy Rights Act (CPRA).
              </P>
              <H3>16.1 California-Specific Rights</H3>
              <UL
                items={[
                  <>
                    <strong>Right to Know:</strong> Request disclosure of
                    personal information collected, used, disclosed in the
                    preceding 12 months.
                  </>,
                  <>
                    <strong>Right to Delete:</strong> Request deletion of
                    personal information we collected, subject to exceptions.
                  </>,
                  <>
                    <strong>Right to Opt-Out of Sale/Sharing:</strong> We do not
                    sell or share personal information as defined under CCPA. No
                    opt-out is needed.
                  </>,
                  <>
                    <strong>Right to Correct:</strong> Request correction of
                    inaccurate personal information.
                  </>,
                  <>
                    <strong>Right to Limit Sensitive PI:</strong> We do not use
                    sensitive personal information for purposes beyond those
                    permitted.
                  </>,
                  <>
                    <strong>Non-Discrimination:</strong> We will not
                    discriminate against you for exercising your CCPA rights.
                  </>,
                ]}
              />
              <P>
                To submit a verifiable California privacy request, contact
                privacy@kernn.ai or our designated number listed on our website.
              </P>
            </section>

            {/* S17 — GDPR */}
            <section id="s17" style={sec}>
              <SectionHeader number="17" title="GDPR Compliance (EEA & UK)" />
              <P>
                For users located in the EEA or the United Kingdom, GDPR and UK
                GDPR apply. Kernn Automations is committed to full compliance
                with these regulations.
              </P>
              <H3>17.1 Data Controller Information</H3>
              <P>
                Kernn Automations Private Limited acts as the Data Controller
                for personal data of EEA/UK users collected through our websites
                and direct service relationships.
              </P>
              <H3>17.2 Data Protection Officer (DPO)</H3>
              <P>
                We have designated a Data Protection Officer responsible for
                overseeing our data protection strategy. The DPO can be
                contacted at <strong>dpo@kernn.ai</strong>.
              </P>
              <H3>17.3 Supervisory Authority</H3>
              <P>
                EEA users may lodge complaints with their local supervisory
                authority. UK users may contact the Information Commissioner's
                Office (ICO). Indian users may contact the Data Protection Board
                of India once operational.
              </P>
              <H3>17.4 Privacy by Design</H3>
              <P>
                We implement privacy by design and by default in all new
                features and services. Data Protection Impact Assessments
                (DPIAs) are conducted for high-risk processing activities prior
                to implementation.
              </P>
            </section>

            {/* S18 — India */}
            <section id="s18" style={sec}>
              <SectionHeader
                number="18"
                title="India IT Act & DPDP Act Compliance"
              />
              <P>
                As an Indian company, Kernn Automations complies with India's IT
                Act 2000, SPDI Rules 2011, and the Digital Personal Data
                Protection Act, 2023 (DPDP Act).
              </P>
              <H3>18.1 DPDP Act Obligations</H3>
              <UL
                items={[
                  "We provide clear, itemized notice of data processing at the time of collection.",
                  "We obtain free, specific, informed, unconditional, and unambiguous consent before processing.",
                  "We appoint a Consent Manager where required under the DPDP Act framework.",
                  "We have implemented Data Fiduciary obligations as required by the DPDP Act.",
                  "We maintain records of processing activities as required.",
                  "We notify the Data Protection Board of India of significant data breaches within prescribed timelines.",
                ]}
              />
              <H3>18.2 CERT-In Compliance</H3>
              <P>
                We comply with CERT-In's Directions on Information Security
                Practices, including mandatory incident reporting within 6 hours
                for designated categories of incidents, and maintenance of ICT
                infrastructure logs for a rolling 180-day period.
              </P>
            </section>

            {/* S19 — Grievance */}
            <section id="s19" style={sec}>
              <SectionHeader number="19" title="Grievance Officer" />
              <P>
                In accordance with the IT Act, 2000 and DPDP Act, 2023, we have
                designated a Grievance Officer to address data protection
                complaints and concerns from Indian residents.
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
                    ["Name", "Karthik Makkena"],
                    ["Organization", "Kernn Automations Private Limited"],
                    ["Email", "grievance@kernn.ai"],
                    ["Response Time", "Within 30 days of receipt"],
                    [
                      "Address",
                      "T-Hub 2.0, Plot No 1/C, Sy No 83/1, Raidurgam, panmaktha, Knowledge City, Serilingampally, Hyderabad, Telangana, India - 500081.",
                    ],
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
                We aim to acknowledge all complaints within 5 business days and
                resolve them within 30 days. If unsatisfied with our response,
                you may escalate to the relevant regulatory authority.
              </P>
            </section>

            {/* S20 — Updates */}
            <section id="s20" style={sec}>
              <SectionHeader number="20" title="Updates to This Policy" />
              <P>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal obligations, or regulatory
                requirements.
              </P>
              <UL
                items={[
                  "We will post the revised policy on this page with an updated effective date.",
                  "For material changes, we will provide prominent notice via email and/or in-app notification at least 30 days prior to the change taking effect.",
                  "Continued use of our services after the effective date constitutes acceptance of the updated terms.",
                  "Prior versions of this policy are available upon request.",
                ]}
              />
              <Callout>
                We recommend reviewing this policy periodically. You can always
                find the current version at kernn.ai/privacy.
              </Callout>
            </section>

            {/* S21 — Contact */}
            <section id="s21" style={{ ...sec, borderBottom: "none" }}>
              <SectionHeader number="21" title="Contact Information" />
              <P>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please reach out through
                the appropriate channel:
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
                  className="pp-contact-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                  }}
                >
                  {[
                    [Mail, "General Privacy", "privacy@kernn.ai", true],
                    [Shield, "Data Protection Officer", "dpo@kernn.ai", true],
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
                  Companies Act, 2013, registered in India. This policy is
                  governed by Indian law and subject to the exclusive
                  jurisdiction of courts in India.
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>

      {/* ═══ MOBILE FAB ══════════════════════════════════════════════════════ */}
      <button
        className="pp-mob-toggle no-print"
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
          transition: "transform 0.2s",
        }}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* ═══ SHARE MODAL ═════════════════════════════════════════════════════ */}
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
            {/* close */}
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

            {/* header */}
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

            {/* URL row */}
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
                className={`pp-copy-btn${copied ? " copied" : ""}`}
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

            {/* share options */}
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
                      `mailto:?subject=Kernn%20Privacy%20Policy&body=${encodeURIComponent(window.location.href)}`,
                    );
                    setShareOpen(false);
                  },
                ],
                [
                  MessageCircle,
                  "WhatsApp",
                  () => {
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent("Kernn Automations Privacy Policy: " + window.location.href)}`,
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
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Kernn Automations Privacy Policy")}`,
                      "_blank",
                    );
                    setShareOpen(false);
                  },
                ],
              ].map(([Icon, label, action]) => (
                <button
                  key={label}
                  className="pp-share-opt"
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
