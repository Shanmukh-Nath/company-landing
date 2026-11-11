import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Printer,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileCheck2,
  Building2,
  Calendar,
  Globe,
  Lock,
  Shield,
  CheckCircle2,
  MapPin,
  FileText,
  Sparkles,
  Info,
} from "lucide-react";

import companyLogo from "../assets/smallLogo.png";

/**
 * LegalPrintLayout
 * Full executive-grade statutory print preview layout & PDF exporter
 * for Kernn Automations Private Limited legal instruments.
 */
export default function LegalPrintLayout({
  active,
  onClose,
  documentTitle = "Official Statutory Document",
  documentNumber = "KA-LEGAL-2027",
  effectiveDate = "January 1, 2026",
  lastUpdated = "January 1, 2026",
  printMeta = { ip: "127.0.0.1", time: new Date().toLocaleString() },
  children,
}) {
  const [fontStyle, setFontStyle] = useState("serif"); // 'serif' | 'sans'
  const [watermark, setWatermark] = useState("official"); // 'official' | 'confidential' | 'none'
  const [zoom, setZoom] = useState(100); // 85 | 90 | 100 | 110 | 120
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while print preview modal is open
  useEffect(() => {
    if (!active) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Prevent content jump when scrollbar disappears
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        handleExecutePrint();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, onClose]);

  const handleExecutePrint = () => {
    const originalTitle = document.title;
    // Clearing title suppresses the browser's default website title in print headers
    document.title = "";
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1200);
  };

  const modalContent = (
    <AnimatePresence>
      {active && (
        <div className="legal-print-portal-root">
          {/* ── Global Print & Sheet Isolation CSS ── */}
          <style>{`
            /* Print sheet styling overrides to guarantee paper-white contrast */
            .legal-print-sheet * {
              box-shadow: none !important;
            }

            .legal-print-sheet a {
              color: #0F172A !important;
              text-decoration: underline !important;
            }

            .legal-print-sheet div[style*="background: rgb(26, 26, 26)"],
            .legal-print-sheet div[style*="background:#1a1a1a"],
            .legal-print-sheet div[style*="background: #1a1a1a"],
            .legal-print-sheet div[style*="background: rgb(15, 23, 42)"],
            .legal-print-sheet div[style*="background:#0f172a"] {
              background: #F8FAFC !important;
              border: 1px solid #CBD5E1 !important;
              color: #0F172A !important;
            }

            .legal-print-sheet div[style*="background: rgb(26, 26, 26)"] *,
            .legal-print-sheet div[style*="background:#1a1a1a"] *,
            .legal-print-sheet div[style*="background: #1a1a1a"] * {
              color: #0F172A !important;
            }

            /* ── Tight, Professional Flow: Remove Huge Empty Spaces ── */
            .legal-print-sheet section {
              margin-bottom: 22px !important;
              padding-bottom: 18px !important;
              border-bottom: 1px solid #E2E8F0 !important;
              page-break-inside: auto !important;
              break-inside: auto !important;
            }

            .legal-print-sheet section:last-child {
              border-bottom: none !important;
              margin-bottom: 0 !important;
              padding-bottom: 0 !important;
            }

            .legal-print-sheet h1,
            .legal-print-sheet h2,
            .legal-print-sheet h3,
            .legal-print-sheet h4,
            .legal-print-sheet .section-header {
              page-break-after: avoid !important;
              break-after: avoid !important;
              margin-top: 18px !important;
              margin-bottom: 8px !important;
              color: #0F172A !important;
            }

            .legal-print-sheet p {
              margin-bottom: 8px !important;
              line-height: 1.65 !important;
              orphans: 3 !important;
              widows: 3 !important;
              page-break-inside: auto !important;
              break-inside: auto !important;
            }

            .legal-print-sheet ul,
            .legal-print-sheet ol {
              margin-top: 4px !important;
              margin-bottom: 10px !important;
              padding-left: 24px !important;
            }

            .legal-print-sheet li {
              margin-bottom: 4px !important;
              line-height: 1.5 !important;
              page-break-inside: auto !important;
              break-inside: auto !important;
            }

            .legal-print-sheet table {
              width: 100% !important;
              border-collapse: collapse !important;
              margin: 12px 0 !important;
              page-break-inside: auto !important;
              break-inside: auto !important;
            }

            .legal-print-sheet tr {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }

            .legal-print-sheet th,
            .legal-print-sheet td {
              padding: 6px 10px !important;
              font-size: 8.5pt !important;
              line-height: 1.4 !important;
              color: #000000 !important;
            }

            /* Responsive tweaks for print preview toolbar */
            @media (max-width: 860px) {
              .legal-print-toolbar-center {
                display: none !important;
              }
              .legal-print-sheet {
                padding: 32px 20px !important;
              }
            }

            /* Hide running footer on normal screen */
            .legal-print-running-footer {
              display: none;
            }

            /* ── @MEDIA PRINT DEFINITIONS ── */
            @media print {
              /* Hide all website DOM tree except print portal */
              body > *:not(.legal-print-portal-root),
              #root,
              header,
              nav,
              footer,
              aside,
              .MuiAppBar-root,
              .no-print,
              .legal-print-toolbar,
              .pp-sidebar,
              .rp-sidebar,
              .tos-sidebar,
              .pp-actions-bar,
              .rp-actions-bar,
              .tos-actions-bar,
              .pp-mob-toggle,
              .rp-mob-toggle,
              .tos-mob-toggle,
              button {
                display: none !important;
              }

              body, html {
                background: #FFFFFF !important;
                color: #000000 !important;
                margin: 0 !important;
                padding: 0 !important;
                font-size: 10.5pt !important;
                overflow: visible !important;
                height: auto !important;
              }

              /* ── PAGE DEFINITION & PROPER PAGE NUMBER STYLING ── */
              @page {
                size: A4 portrait;
                margin: 14mm 16mm 16mm 16mm;

                /* Strip browser default top header (website name, date, time) */
                @top-left { content: none !important; }
                @top-center { content: none !important; }
                @top-right { content: none !important; }

                /* Styled corporate running footer with proper page numbering */
                @bottom-left {
                  content: "KERNN AUTOMATIONS PRIVATE LIMITED · STATUTORY RECORD" !important;
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                  font-size: 7.5pt !important;
                  font-weight: 600 !important;
                  letter-spacing: 0.5px !important;
                  color: #64748B !important;
                  border-top: 1px solid #CBD5E1 !important;
                  padding-top: 3.5mm !important;
                }
                @bottom-right {
                  content: "Page " counter(page) " of " counter(pages) !important;
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                  font-size: 8pt !important;
                  font-weight: 700 !important;
                  color: #0F172A !important;
                  border-top: 1px solid #CBD5E1 !important;
                  padding-top: 3.5mm !important;
                }
              }

              .legal-print-portal-root {
                position: static !important;
                display: block !important;
                width: 100% !important;
              }

              .legal-print-backdrop {
                position: static !important;
                background: transparent !important;
                backdrop-filter: none !important;
                padding: 0 !important;
                overflow: visible !important;
                display: block !important;
                inset: auto !important;
              }

              .legal-print-sheet {
                box-shadow: none !important;
                max-width: 100% !important;
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                border-radius: 0 !important;
                transform: none !important;
                display: block !important;
              }

              .legal-print-watermark {
                opacity: 0.04 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }

              /* Section & Heading flow rules: prevent awkward breaks and white spaces */
              h1, h2, h3, h4, .section-header {
                break-after: avoid !important;
                page-break-after: avoid !important;
                color: #000000 !important;
              }

              .avoid-break, tr {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
              }

              table {
                width: 100% !important;
                border-collapse: collapse !important;
              }

              table th, table td {
                color: #000000 !important;
              }

              a {
                color: #000000 !important;
                text-decoration: underline !important;
              }

              /* Universal fallback running footer for older Chromium */
              .legal-print-running-footer {
                position: fixed !important;
                bottom: 0 !important;
                left: 0 !important;
                right: 0 !important;
                height: 8mm !important;
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                border-top: 1px solid #CBD5E1 !important;
                font-size: 7pt !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
                color: #64748B !important;
                background: #FFFFFF !important;
                z-index: 99999 !important;
                padding: 0 4mm !important;
              }
            }
          `}</style>

          {/* ── Fullscreen Scrollable Backdrop Layer ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="legal-print-backdrop"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999999,
              background: "rgba(10, 14, 26, 0.94)",
              backdropFilter: "blur(18px)",
              overflowY: "auto",
              overflowX: "hidden",
              WebkitOverflowScrolling: "touch",
              padding: "86px 16px 80px",
              fontFamily:
                fontStyle === "serif"
                  ? '"Merriweather", "Times New Roman", Georgia, serif'
                  : 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            {/* ── Top Interactive Floating Print Toolbar (.no-print) ── */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="legal-print-toolbar no-print"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "64px",
                background: "rgba(13, 18, 30, 0.96)",
                borderBottom: "1px solid rgba(169, 36, 39, 0.35)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(24px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                zIndex: 1000000,
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                gap: "12px",
              }}
            >
              {/* Left: Document Identity & Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minWidth: "220px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(169, 36, 39, 0.2)",
                    border: "1px solid rgba(169, 36, 39, 0.45)",
                    color: "#FDA4AF",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    letterSpacing: "0.4px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#10B981",
                      boxShadow: "0 0 8px #10B981",
                      display: "inline-block",
                    }}
                  />
                  <span>PRINT PREVIEW</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "240px",
                    }}
                  >
                    {documentTitle}
                  </span>
                  <span
                    style={{
                      color: "#94A3B8",
                      fontSize: "0.7rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {documentNumber} · A4 Statutory Layout
                  </span>
                </div>
              </div>

              {/* Center: Formatting Toggles (Typography, Watermark, Zoom) */}
              <div
                className="legal-print-toolbar-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {/* Font Selector */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "2px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setFontStyle("serif")}
                    title="Formal Legal Gazette Serif"
                    style={{
                      border: "none",
                      background: fontStyle === "serif" ? "#A92427" : "transparent",
                      color: fontStyle === "serif" ? "#FFFFFF" : "#94A3B8",
                      padding: "5px 11px",
                      borderRadius: "6px",
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "Georgia, serif",
                      transition: "all 0.15s ease",
                    }}
                  >
                    Serif
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontStyle("sans")}
                    title="Modern Clear Sans-Serif"
                    style={{
                      border: "none",
                      background: fontStyle === "sans" ? "#A92427" : "transparent",
                      color: fontStyle === "sans" ? "#FFFFFF" : "#94A3B8",
                      padding: "5px 11px",
                      borderRadius: "6px",
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "sans-serif",
                      transition: "all 0.15s ease",
                    }}
                  >
                    Sans
                  </button>
                </div>

                {/* Watermark Selector */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "2px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "#94A3B8",
                      padding: "0 6px",
                      fontWeight: 500,
                    }}
                  >
                    Watermark:
                  </span>
                  {[
                    { id: "official", label: "Official" },
                    { id: "confidential", label: "Confidential" },
                    { id: "none", label: "None" },
                  ].map((wm) => (
                    <button
                      key={wm.id}
                      type="button"
                      onClick={() => setWatermark(wm.id)}
                      style={{
                        border: "none",
                        background:
                          watermark === wm.id
                            ? "rgba(169, 36, 39, 0.45)"
                            : "transparent",
                        color: watermark === wm.id ? "#FFFFFF" : "#94A3B8",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {wm.label}
                    </button>
                  ))}
                </div>

                {/* Zoom Controls */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "2px 6px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setZoom((z) => Math.max(85, z - 10))}
                    title="Zoom Out"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#94A3B8",
                      cursor: "pointer",
                      padding: "3px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "4px",
                    }}
                  >
                    <ZoomOut size={13} />
                  </button>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "#FFFFFF",
                      fontFamily: "monospace",
                      minWidth: "38px",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {zoom}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoom((z) => Math.min(125, z + 10))}
                    title="Zoom In"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#94A3B8",
                      cursor: "pointer",
                      padding: "3px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "4px",
                    }}
                  >
                    <ZoomIn size={13} />
                  </button>
                  {zoom !== 100 && (
                    <button
                      type="button"
                      onClick={() => setZoom(100)}
                      title="Reset Zoom to 100%"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#64748B",
                        cursor: "pointer",
                        padding: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <RotateCcw size={11} />
                    </button>
                  )}
                </div>

                {/* Helpful Print Setting Cue */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "6px",
                    padding: "3px 8px",
                    fontSize: "0.68rem",
                    color: "#CBD5E1",
                  }}
                  title="Under More Settings in the print dialog, unchecking Headers and footers removes the browser URL and time"
                >
                  <Info size={11} color="#38BDF8" />
                  <span>Uncheck 'Headers & footers' in print dialog</span>
                </div>
              </div>

              {/* Right: Primary Print Action & Close */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* ── PRIMARY PRINT / PDF BUTTON ── */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleExecutePrint}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "9px 20px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #A92427 0%, #D63447 100%)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    fontWeight: 700,
                    fontSize: "0.84rem",
                    cursor: "pointer",
                    boxShadow: "0 4px 18px rgba(169, 36, 39, 0.45)",
                    transition: "all 0.15s ease",
                  }}
                >
                  <Printer size={16} strokeWidth={2.2} />
                  <span>Print / Save PDF</span>
                  <span
                    style={{
                      background: "rgba(0, 0, 0, 0.25)",
                      fontSize: "0.68rem",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontFamily: "monospace",
                      fontWeight: 600,
                      opacity: 0.9,
                    }}
                  >
                    Ctrl+P
                  </span>
                </motion.button>

                {/* Close Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  title="Close Print Preview (Esc)"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "9px 15px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#E2E8F0",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <X size={15} strokeWidth={2.2} />
                  <span>Close</span>
                </motion.button>
              </div>
            </motion.div>

            {/* ── Realistic A4 Printable Sheet ── */}
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 25, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="legal-print-sheet"
              style={{
                width: "100%",
                maxWidth: "880px",
                margin: "0 auto",
                display: "block",
                background: "#FFFFFF",
                color: "#0F172A",
                borderRadius: "6px",
                boxShadow:
                  "0 25px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)",
                padding: "54px 64px 60px",
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
                transform: `scale(${zoom / 100})`,
                transformOrigin: "top center",
                transition: "transform 0.15s ease",
              }}
            >
              {/* Subtle Refined Watermark (non-intrusive) */}
              {watermark !== "none" && (
                <div
                  className="legal-print-watermark"
                  style={{
                    position: "absolute",
                    top: "42%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-24deg)",
                    fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                    fontWeight: 800,
                    color: "rgba(169, 36, 39, 0.038)",
                    border: "2px dashed rgba(169, 36, 39, 0.05)",
                    padding: "16px 36px",
                    borderRadius: "12px",
                    pointerEvents: "none",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    zIndex: 1,
                  }}
                >
                  {watermark === "official"
                    ? "KERNN AUTOMATIONS · OFFICIAL STATUTORY RECORD"
                    : "KERNN AUTOMATIONS · STRICTLY CONFIDENTIAL"}
                </div>
              )}

              {/* ── Formal Corporate Letterhead ── */}
              <div
                style={{
                  borderBottom: "3px double #0F172A",
                  paddingBottom: "22px",
                  marginBottom: "28px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Top Crimson Security Bar */}
                <div
                  style={{
                    height: "4px",
                    background: "linear-gradient(90deg, #A92427 0%, #E11D48 50%, #A92427 100%)",
                    borderRadius: "2px",
                    marginBottom: "20px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  {/* Left: Official Company Logo & Registered Address */}
                  <div style={{ flex: "1 1 480px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "10px",
                      }}
                    >
                      <img
                        src={companyLogo}
                        alt="Kernn Automations Official Logo"
                        style={{
                          height: "44px",
                          width: "auto",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                      <div>
                        <h2
                          style={{
                            margin: 0,
                            fontSize: "1.22rem",
                            fontWeight: 900,
                            letterSpacing: "0.5px",
                            color: "#0F172A",
                            textTransform: "uppercase",
                            lineHeight: 1.15,
                          }}
                        >
                          Kernn Automations Private Limited
                        </h2>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "#A92427",
                            fontWeight: 700,
                            letterSpacing: "0.6px",
                            textTransform: "uppercase",
                            marginTop: "2px",
                          }}
                        >
                          Enterprise Autonomous Systems & AI Architecture Division
                        </div>
                      </div>
                    </div>

                    {/* Official T-Hub 2.0 Address & Registration Details */}
                    <div
                      style={{
                        fontSize: "0.76rem",
                        color: "#475569",
                        lineHeight: 1.6,
                        marginTop: "8px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                        <MapPin
                          size={13}
                          color="#A92427"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>
                          <strong>Registered Corporate Office:</strong> T-Hub 2.0, 20 Inorbit Mall
                          Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081, Republic of
                          India
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: "4px",
                          paddingLeft: "19px",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "14px",
                          fontSize: "0.73rem",
                        }}
                      >
                        <span>
                          <strong>CIN:</strong>{" "}
                          <span style={{ fontFamily: "monospace", color: "#0F172A" }}>
                           U62013TS2024PTC185379
                          </span>
                        </span>
                        <span>
                          <strong>RoC:</strong> Hyderabad (Telangana), MCA
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: "2px",
                          paddingLeft: "19px",
                          fontSize: "0.72rem",
                          color: "#64748B",
                        }}
                      >
                        Web: <strong>https://kernn.ai</strong> · Compliance:{" "}
                        <strong>compliance@kernn.ai</strong> · Legal:{" "}
                        <strong>legal@kernn.ai</strong>
                      </div>
                    </div>
                  </div>

                  {/* Right: Document Control Box */}
                  <div
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #CBD5E1",
                      borderRadius: "6px",
                      padding: "10px 14px",
                      fontSize: "0.73rem",
                      lineHeight: 1.65,
                      minWidth: "220px",
                      flex: "0 0 240px",
                    }}
                  >
                    <div>
                      <strong style={{ color: "#0F172A" }}>DOCUMENT REF:</strong>{" "}
                      <span
                        style={{
                          fontFamily: "monospace",
                          color: "#A92427",
                          fontWeight: 700,
                        }}
                      >
                        {documentNumber}
                      </span>
                    </div>
                    <div>
                      <strong style={{ color: "#0F172A" }}>EFFECTIVE DATE:</strong>{" "}
                      {effectiveDate}
                    </div>
                    <div>
                      <strong style={{ color: "#0F172A" }}>LAST REVISED:</strong>{" "}
                      {lastUpdated}
                    </div>
                    <div>
                      <strong style={{ color: "#0F172A" }}>LEGAL STATUS:</strong>{" "}
                      <span
                        style={{
                          color: "#059669",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                        }}
                      >
                        ACTIVE & ENFORCEABLE
                      </span>
                    </div>
                    <div>
                      <strong style={{ color: "#0F172A" }}>CLASSIFICATION:</strong> PUBLIC
                      STATUTORY
                    </div>
                    <div>
                      <strong style={{ color: "#0F172A" }}>JURISDICTION:</strong> HYDERABAD,
                      INDIA
                    </div>
                  </div>
                </div>

                {/* Document Main Heading */}
                <div style={{ marginTop: "24px", textAlign: "center" }}>
                  <h1
                    style={{
                      margin: "0 0 6px",
                      fontSize: "1.9rem",
                      fontWeight: 900,
                      color: "#0F172A",
                      letterSpacing: "-0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {documentTitle}
                  </h1>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#475569",
                      fontStyle: "italic",
                    }}
                  >
                    Official Statutory Instrument · Issued under the Authority of the Directorate of
                    Legal Affairs, Kernn Automations Private Limited
                  </div>
                </div>
              </div>

              {/* ── Actual Legal Document Body ── */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  fontSize: fontStyle === "serif" ? "10.5pt" : "10pt",
                  lineHeight: 1.75,
                  color: "#1E293B",
                }}
              >
                {children}
              </div>

              {/* ── Official Corporate Execution & Attestation Seal Block ── */}
              <div
                style={{
                  marginTop: "44px",
                  paddingTop: "24px",
                  borderTop: "2px solid #CBD5E1",
                  position: "relative",
                  zIndex: 2,
                  breakInside: "avoid",
                  pageBreakInside: "avoid",
                }}
              >
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "#475569",
                    fontStyle: "italic",
                    marginBottom: "20px",
                    lineHeight: 1.5,
                  }}
                >
                  IN WITNESS WHEREOF, Kernn Automations Private Limited has caused this official statutory instrument
                  to be duly executed, authenticated, and promulgated under corporate seal by its authorized
                  representatives.
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    gap: "24px",
                  }}
                >
                  {/* Authorized Signatory Block */}
                  <div style={{ flex: 1, minWidth: "260px" }}>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "40px",
                      }}
                    >
                      FOR AND ON BEHALF OF:
                      <br />
                      <span style={{ color: "#A92427", textTransform: "uppercase", fontSize: "0.85rem" }}>
                        KERNN AUTOMATIONS PRIVATE LIMITED
                      </span>
                    </div>

                    <div
                      style={{
                        borderTop: "1.5px solid #0F172A",
                        paddingTop: "8px",
                        width: "250px",
                        fontSize: "0.78rem",
                        color: "#1E293B",
                        lineHeight: 1.5,
                      }}
                    >
                      <strong>Authorized Signatory</strong>
                      <br />
                      Directorate of Regulatory & Legal Affairs
                      <br />
                      Kernn Automations Private Limited
                      <br />
                      <span style={{ fontSize: "0.72rem", color: "#64748B" }}>
                        T-Hub 2.0, Madhapur, Hyderabad - 500081
                      </span>
                    </div>
                  </div>

                  {/* Official Corporate Seal SVG Stamp */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      style={{
                        transform: "rotate(-10deg)",
                        opacity: 0.9,
                        filter: "drop-shadow(0 2px 4px rgba(169, 36, 39, 0.15))",
                      }}
                    >
                      {/* Outer double circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r="56"
                        fill="none"
                        stroke="#A92427"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#A92427"
                        strokeWidth="1.2"
                        strokeDasharray="4 2"
                      />
                      {/* Center Seal Icon */}
                      <circle cx="60" cy="60" r="24" fill="#A92427" opacity="0.08" />
                      <text
                        x="60"
                        y="55"
                        fill="#A92427"
                        fontSize="17"
                        fontWeight="900"
                        textAnchor="middle"
                        fontFamily="monospace"
                      >
                        KA
                      </text>
                      <text
                        x="60"
                        y="68"
                        fill="#A92427"
                        fontSize="6.5"
                        fontWeight="700"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                        letterSpacing="0.8"
                      >
                        ★ VERIFIED ★
                      </text>
                      {/* Text curved around */}
                      <path
                        id="seal-curve-top"
                        d="M 18,60 A 42,42 0 1,1 102,60"
                        fill="none"
                      />
                      <text fill="#A92427" fontSize="6.8" fontWeight="800" letterSpacing="1.2">
                        <textPath href="#seal-curve-top" startOffset="50%" textAnchor="middle">
                          KERNN AUTOMATIONS PVT LTD
                        </textPath>
                      </text>
                      <path
                        id="seal-curve-bot"
                        d="M 102,60 A 42,42 0 1,1 18,60"
                        fill="none"
                      />
                      <text fill="#A92427" fontSize="6.2" fontWeight="700" letterSpacing="0.9">
                        <textPath href="#seal-curve-bot" startOffset="50%" textAnchor="middle">
                          ★ T-HUB 2.0 HYDERABAD · OFFICIAL SEAL ★
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Audit & Verification Footer */}
                <div
                  style={{
                    marginTop: "24px",
                    paddingTop: "12px",
                    borderTop: "1px dashed #CBD5E1",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    fontSize: "0.68rem",
                    color: "#64748B",
                    fontFamily: "monospace",
                  }}
                >
                  <div>
                    Compliance Digest: SHA-256 · Verifier IP: {printMeta.ip}
                  </div>
                  <div>
                    Timestamp: {printMeta.time} · Registered at RoC Hyderabad
                  </div>
                </div>
              </div>

              {/* Running Print Footer (repeats at bottom of every printed page) */}
              <div className="legal-print-running-footer">
                <span>KERNN AUTOMATIONS PRIVATE LIMITED · {documentNumber}</span>
                <span>PUBLIC STATUTORY RECORD · ROC HYDERABAD</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Normal in-page children rendering */}
      {children}

      {/* Fullscreen print preview modal portaled cleanly into document.body */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
