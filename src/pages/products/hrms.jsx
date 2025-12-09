// ===============================
// HRMS PRODUCT PAGE (FLAGSHIP v2)
// New Layout + Storytelling + Premium Styling
// ===============================

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  CalendarDays,
  Clock,
  ClipboardList,
  Users,
  ShieldCheck,
  Workflow,
  Banknote,
  ReceiptIndianRupee,
  FileText,
  Layers,
  BarChart3,
  Building2,
  CheckCircle2,
  ArrowRight,
  AlarmClock,
  MapPin,
  Lock,
  LineChart,
  Waypoints,
  Cpu,
  Network,
  Satellite,
  Fingerprint,
  Smartphone,
  Wifi,
  Activity,
  CircuitBoard,
  LayoutDashboard,
} from "lucide-react";

import Footer from "../../components/Footer";

export default function HRMSProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --------------------------
  // GLOBAL STYLE SYSTEM
  // --------------------------

  const COLOR = {
    primary: "#a92427",
    primaryDark: "#7e1c1e",
    primarySoft: "rgba(169,36,39,0.18)",
    textDark: "#111827",
    textSoft: "#6b7280",
    border: "rgba(229,231,235,1)",
    bgSoft: "rgba(248,250,252,1)",
    bgWhite: "#ffffff",
    darkBg: "#020617",
  };

  const page = {
    root: {
      width: "100vw",
      overflowX: "hidden",
      background:
        "radial-gradient(circle at top left,#fff4f4 0,transparent 55%), radial-gradient(circle at bottom right,#ffe9e9 0,#ffffff 58%)",
    },
    section: {
      padding: "110px 24px",
    },
    tight: {
      padding: "80px 24px",
    },
    container: {
      maxWidth: 1180,
      margin: "0 auto",
    },
  };

  const stylesHighlight = {
    background: "linear-gradient(135deg,#a92427,#d63447,#ff7a7a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // --------------------------
  // FRAMER MOTION VARIANTS
  // --------------------------

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const softFloat = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // =========================================
  // HERO: HR OPERATING SYSTEM BOARD
  // =========================================

  const Hero = () => (
    <section
      style={{
        padding: "120px 24px 110px",
        background:
          "radial-gradient(circle at top,#111827 0,#020617 45%,#020617 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient lights */}
      <motion.div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          top: "-18%",
          left: "-10%",
          background:
            "radial-gradient(circle,rgba(248,113,113,0.32),transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 14, 0],
          y: [0, -16, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: 580,
          height: 580,
          borderRadius: "50%",
          bottom: "-25%",
          right: "-10%",
          background:
            "radial-gradient(circle,rgba(148,163,253,0.28),transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          scale: [1.1, 0.96, 1.1],
          x: [0, -18, 0],
          y: [0, 18, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.16,
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.22) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div style={page.container}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
            gap: 60,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* LEFT: Story */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(248,250,252,0.2)",
                background: "rgba(15,23,42,0.8)",
                fontSize: "0.8rem",
                marginBottom: 18,
                backdropFilter: "blur(12px)",
              }}
            >
              <ShieldCheck size={14} />
              <span
                style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                Kernn HRMS • HR Operating System
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.8rem,4.6vw,3.7rem)",
                fontWeight: 900,
                letterSpacing: "-1.3px",
                lineHeight: 1.05,
                marginBottom: 18,
              }}
            >
              One <span style={stylesHighlight}>HR brain</span> for attendance,
              shifts, leave{" "}
              <span style={{ display: "block" }}>
                and payroll across every unit.
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#e5e7eb",
                maxWidth: 540,
                lineHeight: 1.8,
                marginBottom: 26,
              }}
            >
              Replace scattered spreadsheets and disconnected biometrics with a
              single policy-aware HR engine. Attendance, shifts, tasks, leave
              and a deeply modeled payroll suite — living on one operating
              canvas.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 24,
              }}
            >
              {[
                "Multi-country, multi-entity ready",
                "Policy → event → payslip traceability",
                "Attendance, leave & payroll in one run rail",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(15,23,42,0.9)",
                    border: "1px solid rgba(148,163,184,0.8)",
                    fontSize: "0.78rem",
                    color: "#e5e7eb",
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#f97373,#fecaca,#ffffff)",
                    }}
                  />
                  {t}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              <motion.a
                href="#story"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 26px 60px rgba(0,0,0,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: "14px 26px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg,#a92427,#d63447,#ff7a7a)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Follow the HR story
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#payroll"
                whileHover={{
                  scale: 1.03,
                  background: "rgba(15,23,42,0.9)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: "13px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.8)",
                  background: "rgba(15,23,42,0.7)",
                  color: "#e5e7eb",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                See the payroll rail
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: HR OS BOARD MOSAIC */}
          <motion.div
            variants={fadeUp}
            style={{ position: "relative", zIndex: 2 }}
          >
            <motion.div
              animate={softFloat.animate}
              style={{
                borderRadius: 30,
                padding: 22,
                background:
                  "radial-gradient(circle at top left,#111827,#020617)",
                border: "1px solid rgba(148,163,184,0.6)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle shine */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at top left,rgba(248,250,252,0.16),transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              {/* Top strip */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: "0.82rem",
                    color: "#9ca3af",
                  }}
                >
                  <LayoutDashboard size={16} />
                  <span>HR Command Centre</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background:
                          i === 0 ? "#f97373" : i === 1 ? "#facc15" : "#4ade80",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Mosaic grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.25fr 1fr",
                  gap: 12,
                }}
              >
                {/* LEFT COLUMN - bigger panels */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "minmax(0,1.1fr) minmax(0,0.9fr)",
                    gap: 12,
                  }}
                >
                  {/* Workforce today card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      borderRadius: 18,
                      padding: 14,
                      background:
                        "linear-gradient(135deg,rgba(15,23,42,0.9),rgba(30,64,175,0.9))",
                      border: "1px solid rgba(148,163,184,0.7)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.8rem",
                        color: "#e5e7eb",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <Users size={16} />
                        Workforce today
                      </span>
                      <span
                        style={{
                          padding: "3px 8px",
                          borderRadius: 999,
                          background: "rgba(15,23,42,0.9)",
                          border: "1px solid rgba(148,163,184,0.7)",
                          fontSize: "0.72rem",
                        }}
                      >
                        Live
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        marginTop: 4,
                      }}
                    >
                      {[
                        { label: "Present", val: "91%", tone: "#4ade80" },
                        { label: "On leave", val: "6%", tone: "#facc15" },
                        { label: "Remote", val: "3%", tone: "#38bdf8" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          style={{
                            flex: 1,
                            borderRadius: 999,
                            padding: "6px 8px",
                            background: "rgba(15,23,42,0.9)",
                            border: "1px solid rgba(148,163,184,0.6)",
                            fontSize: "0.75rem",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 2,
                            }}
                          >
                            <span style={{ color: "#cbd5f5" }}>{s.label}</span>
                            <span style={{ fontWeight: 700 }}>{s.val}</span>
                          </div>
                          <div
                            style={{
                              height: 4,
                              borderRadius: 999,
                              background: "rgba(15,23,42,0.9)",
                            }}
                          >
                            <div
                              style={{
                                width: s.val,
                                height: "100%",
                                borderRadius: 999,
                                background: s.tone,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Attendance and shifts pill row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.1fr 0.9fr",
                      gap: 10,
                    }}
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      style={{
                        borderRadius: 16,
                        padding: 10,
                        background: "rgba(15,23,42,0.95)",
                        border: "1px solid rgba(148,163,184,0.7)",
                        fontSize: "0.78rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <CalendarDays size={14} />
                          Attendance signals
                        </span>
                        <span style={{ color: "#22c55e" }}>Stable</span>
                      </div>
                      <div
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.75rem",
                        }}
                      >
                        27 missing punches • 11 late entries flagged for review
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -3 }}
                      style={{
                        borderRadius: 16,
                        padding: 10,
                        background: "rgba(15,23,42,0.95)",
                        border: "1px solid rgba(148,163,184,0.7)",
                        fontSize: "0.78rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 4,
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <Clock size={14} />
                          Shifts & rosters
                        </span>
                      </div>
                      <div
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.75rem",
                        }}
                      >
                        94% coverage published • 3 teams in draft
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* RIGHT COLUMN - stack of cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "minmax(0,1.05fr) minmax(0,0.95fr)",
                    gap: 10,
                  }}
                >
                  {/* Payroll card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    style={{
                      borderRadius: 18,
                      padding: 12,
                      background:
                        "linear-gradient(135deg,rgba(15,23,42,0.9),rgba(12,148,136,0.9))",
                      border: "1px solid rgba(148,163,184,0.8)",
                      fontSize: "0.8rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <ReceiptIndianRupee size={15} />
                        Current pay cycle
                      </span>
                      <span
                        style={{
                          padding: "3px 7px",
                          borderRadius: 999,
                          background: "rgba(15,23,42,0.8)",
                          border: "1px solid rgba(148,163,184,0.7)",
                          fontSize: "0.7rem",
                        }}
                      >
                        Draft
                      </span>
                    </div>
                    <div style={{ color: "#e5e7eb" }}>
                      97% employees clean •{" "}
                      <span style={{ color: "#fed7aa" }}>3%</span> needs review
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                        marginTop: 2,
                      }}
                    >
                      {["Tax", "Statutory", "Bank files"].map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "3px 7px",
                            borderRadius: 999,
                            background: "rgba(15,23,42,0.9)",
                            border: "1px solid rgba(148,163,184,0.7)",
                            fontSize: "0.7rem",
                            color: "#d1fae5",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Leave + Compliance row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1.05fr",
                      gap: 10,
                    }}
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      style={{
                        borderRadius: 16,
                        padding: 10,
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.7)",
                        fontSize: "0.78rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <ClipboardList size={14} />
                          Leave & holidays
                        </span>
                      </div>
                      <div style={{ color: "#e5e7eb" }}>
                        18 pending approvals • next holiday in 4 days
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -3 }}
                      style={{
                        borderRadius: 16,
                        padding: 10,
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.7)",
                        fontSize: "0.78rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <ShieldCheck size={14} />
                          Payroll compliance
                        </span>
                        <span style={{ color: "#bbf7d0", fontWeight: 600 }}>
                          98% score
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          display: "flex",
                          gap: 6,
                          fontSize: "0.72rem",
                          color: "#e5e7eb",
                        }}
                      >
                        <span>PF</span>·<span>ESI</span>·<span>PT</span>·
                        <span>WPS</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom task strip */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    style={{
                      marginTop: 6,
                      borderRadius: 16,
                      padding: 9,
                      background: "rgba(15,23,42,0.98)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      fontSize: "0.75rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#e5e7eb",
                      }}
                    >
                      <Workflow size={14} />
                      Pending approvals
                    </span>
                    <span style={{ color: "#fde68a" }}>
                      9 attendance • 6 leave • 2 payroll overrides
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // ===================================================
  // STORY SECTION: FROM CHAOS TO HR OPERATING SYSTEM
  // ===================================================

  const StorySection = () => (
    <section id="story" style={page.section}>
      <div style={page.container}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: 850,
              color: COLOR.textDark,
              letterSpacing: "-0.9px",
              marginBottom: 10,
            }}
          >
            The story of how{" "}
            <span style={stylesHighlight}>HR, attendance & payroll</span>{" "}
            finally share one brain.
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 720,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Most organisations don’t have “an HRMS problem”. They have a
            <strong> fragmentation problem</strong> — time, shifts, leave and
            payroll live in separate tools. Kernn HRMS is a story of collapsing
            those islands into one operating system.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 26,
          }}
          data-story-grid
        >
          {[
            {
              label: "Chapter 1",
              title: "Scattered signals everywhere.",
              desc: "Biometric IDs in one system, GPS punches in another, leave on email, payroll in spreadsheets. HR teams spend nights reconciling events that should have met by design.",
              bullets: [
                "Manual reconciliation before every payroll run",
                "Different truths for HR, Finance & Operations",
                "No way to audit how a payslip was born",
              ],
            },
            {
              label: "Chapter 2",
              title: "One policy graph to rule them all.",
              desc: "Kernn starts with countries, entities, locations, grades and employees as a single policy-aware model. Attendance, shifts, leave, tasks and payroll all plug into this graph.",
              bullets: [
                "Policy → event → payout all linked",
                "Versioned rule changes with retro safety",
                "Real-time impact on employees and cost",
              ],
            },
            {
              label: "Chapter 3",
              title: "An HR operating system, not just HR software.",
              desc: "Now HR, Payroll, Finance, Managers and Employees interact with the same brain — through dashboards, self-service, approvals and a transparent payroll rail.",
              bullets: [
                "HR views exceptions instead of hunting for them",
                "Payroll teams trust the engine and its logs",
                "Employees understand time, leave & salary easily",
              ],
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: "0 28px 60px rgba(15,23,42,0.12)",
              }}
              style={{
                borderRadius: 24,
                padding: 24,
                background: COLOR.bgWhite,
                border: `1px solid ${COLOR.border}`,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: COLOR.primary,
                }}
              >
                {card.label}
              </div>
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 750,
                  color: COLOR.textDark,
                }}
              >
                {card.title}
              </div>
              <p
                style={{
                  fontSize: "0.93rem",
                  color: COLOR.textSoft,
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  fontSize: "0.88rem",
                  color: COLOR.textSoft,
                  lineHeight: 1.6,
                }}
              >
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // --------------------------
  // CORE MODULES CONFIG (same content)
  // --------------------------

  const coreModules = [
    {
      icon: <CalendarDays size={18} />,
      label: "Time & Attendance",
      tag: "Rules first, devices later",
      desc: "Define buffers, flexi rules, source priorities and regularization workflows once, apply them across biometric, mobile, geo-fence and web.",
      chips: [
        "Multi-source capture",
        "Shift-aware rules",
        "Regularization queues",
      ],
    },
    {
      icon: <Clock size={18} />,
      label: "Shift Management",
      tag: "Complex rosters made simple",
      desc: "Model rotating shifts, night allowances, week-offs and location-wise rosters with simulation previews before publishing.",
      chips: ["Rotation templates", "Grace & OT rules", "What-if previews"],
    },
    {
      icon: <ClipboardList size={18} />,
      label: "Task Management",
      tag: "Execution layer for HRMS",
      desc: "Tie tasks to employees, roles and locations – and optionally to attendance or payroll metrics for real accountability.",
      chips: ["Role-based boards", "Due-date SLA", "KPI alignment"],
    },
    {
      icon: <Users size={18} />,
      label: "Leaves & Holidays",
      tag: "Policy-grade leave engine",
      desc: "Country-aware leave types, accruals, carry forwards, sandwich rules and public holiday calendars that sync with attendance & payroll.",
      chips: [
        "Custom leave types",
        "Holiday calendars",
        "Multi-level approvals",
      ],
    },
    {
      icon: <LayoutDashboard size={18} />,
      label: "HR Workspace",
      tag: "One pane for HR teams",
      desc: "Single view of employees, movements, approvals, alerts and exceptions across attendance, leave, tasks and payroll.",
      chips: ["Exception dashboards", "Drill-down views", "Bulk actions"],
    },
    {
      icon: <ReceiptIndianRupee size={18} />,
      label: "Payroll Suite",
      tag: "Multi-country, fully modeled",
      desc: "From components & structures to tax engine, loans, reimbursements, runs and disbursement – all inside Kernn HRMS.",
      chips: ["Tax & statutory", "Loans & bonus", "Bank & payslip engine"],
    },
  ];

  // --------------------------
  // CORE MODULES SECTION (NEW LAYOUT)
  // --------------------------

  const CoreModulesSection = () => (
    <section id="modules" style={page.tight}>
      <div style={page.container}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <h2
            style={{
              fontSize: "2.35rem",
              fontWeight: 820,
              color: COLOR.textDark,
              letterSpacing: "-0.9px",
              marginBottom: 10,
            }}
          >
            A connected <span style={stylesHighlight}>HRMS stack</span>, not a
            pile of modules.
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 660,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Attendance powers shifts, shifts impact leave, and every event flows
            cleanly into payroll and analytics. Kernn HRMS is designed as one
            operating system — each module is a chapter in the same story.
          </p>
        </div>

        {/* Two-column staggered layout instead of 3-flat grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)",
            gap: 26,
          }}
          data-core-modules-grid
        >
          <div style={{ display: "grid", gap: 20 }}>
            {coreModules.slice(0, 3).map((m, idx) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
                  borderColor: COLOR.primarySoft,
                }}
                style={{
                  borderRadius: 22,
                  padding: 20,
                  background: COLOR.bgWhite,
                  border: `1px solid ${COLOR.border}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  position: "relative",
                  overflow: "hidden",
                }}
                data-module-card
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 60,
                    height: 60,
                    background:
                      "linear-gradient(135deg,transparent 50%,rgba(169,36,39,0.06) 50%)",
                    borderTopRightRadius: 22,
                  }}
                />
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,rgba(169,36,39,0.06),rgba(169,36,39,0.02))",
                    color: COLOR.primary,
                    marginBottom: 4,
                  }}
                >
                  {m.icon}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: COLOR.primary,
                    marginBottom: 4,
                  }}
                >
                  Module {idx + 1}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.12rem",
                      fontWeight: 760,
                      color: COLOR.textDark,
                    }}
                  >
                    {m.label}
                  </div>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 999,
                      fontSize: "0.72rem",
                      background: COLOR.bgSoft,
                      color: "#6b7280",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: COLOR.textSoft,
                    lineHeight: 1.6,
                  }}
                >
                  {m.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: 4,
                  }}
                >
                  {m.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        padding: "3px 8px",
                        borderRadius: 999,
                        background: "#f9fafb",
                        border: `1px solid ${COLOR.border}`,
                        fontSize: "0.78rem",
                        color: "#4b5563",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: "grid", gap: 20, alignSelf: "stretch" }}>
            {coreModules.slice(3).map((m, idx) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
                  borderColor: COLOR.primarySoft,
                }}
                style={{
                  borderRadius: 22,
                  padding: 20,
                  background: COLOR.bgWhite,
                  border: `1px solid ${COLOR.border}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 60,
                    height: 60,
                    background:
                      "linear-gradient(135deg,transparent 50%,rgba(169,36,39,0.06) 50%)",
                    borderTopRightRadius: 22,
                  }}
                />
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,rgba(169,36,39,0.06),rgba(169,36,39,0.02))",
                    color: COLOR.primary,
                    marginBottom: 4,
                  }}
                >
                  {m.icon}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: COLOR.primary,
                    marginBottom: 4,
                  }}
                >
                  Module {3 + idx + 1}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.12rem",
                      fontWeight: 760,
                      color: COLOR.textDark,
                    }}
                  >
                    {m.label}
                  </div>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 999,
                      fontSize: "0.72rem",
                      background: COLOR.bgSoft,
                      color: "#6b7280",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: COLOR.textSoft,
                    lineHeight: 1.6,
                  }}
                >
                  {m.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginTop: 4,
                  }}
                >
                  {m.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        padding: "3px 8px",
                        borderRadius: 999,
                        background: "#f9fafb",
                        border: `1px solid ${COLOR.border}`,
                        fontSize: "0.78rem",
                        color: "#4b5563",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  // --------------------------
  // ARCHITECTURE SECTION (content preserved)
  // --------------------------

  const ArchitectureSection = () => (
    <section
      id="architecture"
      style={{
        ...page.section,
        background: "#f9fafb",
      }}
    >
      <div style={page.container}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 50,
          }}
        >
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 800,
              color: COLOR.textDark,
              letterSpacing: "-0.8px",
              marginBottom: 10,
            }}
          >
            An <span style={stylesHighlight}>HR engine</span> modeled like your
            organisation, not a spreadsheet.
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Countries, entities, locations, grades and employees are all part of
            one policy-aware graph. Every attendance punch, shift, leave and
            payout is resolved against this model.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
            gap: 40,
            alignItems: "flex-start",
          }}
          data-two-col
        >
          {/* Left narrative */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: COLOR.textDark,
                marginBottom: 10,
              }}
            >
              From policy to payout, everything is evaluated in layers.
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: COLOR.textSoft,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Kernn HRMS starts at the top: countries and entities. It then
              flows down through locations, departments and grades – so any
              update to a rule is instantly reflected wherever it&apos;s
              applicable.
            </p>

            <ul
              style={{
                fontSize: "0.9rem",
                color: COLOR.textSoft,
                paddingLeft: 18,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <li style={{ marginBottom: 6 }}>
                Country-aware calendars, statutory profiles and work-week
                templates.
              </li>
              <li style={{ marginBottom: 6 }}>
                Entity & location layers for local policies, allowances and
                holiday differences.
              </li>
              <li style={{ marginBottom: 6 }}>
                Grade & role-based constructs for shift rules, overtime,
                benefits and approvals.
              </li>
              <li style={{ marginBottom: 6 }}>
                Employee profiles that inherit rules from the stack, but support
                controlled overrides.
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 16,
              }}
            >
              {[
                "Multi-country policy engine",
                "Versioned rule changes",
                "Retro-safe recalculations",
                "Entity & location aware",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "4px 9px",
                    borderRadius: 999,
                    border: "1px dashed #d1d5db",
                    background: "#f9fafb",
                    fontSize: "0.8rem",
                    color: "#4b5563",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right dark visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              borderRadius: 26,
              padding: 22,
              background: "radial-gradient(circle at top left,#111827,#020617)",
              color: "white",
              boxShadow: "0 26px 60px rgba(15,23,42,0.55)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top left,rgba(248,250,252,0.1),transparent 55%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: 8,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Network size={14} />
              System layout
            </div>

            <div
              style={{
                fontSize: "1.16rem",
                fontWeight: 800,
                marginBottom: 14,
              }}
            >
              A layered graph of entities, rules and events.
            </div>

            {/* Top layer */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              {["Countries", "Entities"].map((label) => (
                <div
                  key={label}
                  style={{
                    flex: "1 1 120px",
                    borderRadius: 999,
                    padding: "8px 12px",
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(148,163,184,0.8)",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg,#a92427,#f97373,#fecaca)",
                      flexShrink: 0,
                    }}
                  />
                  {label}
                </div>
              ))}
            </div>

            {/* Middle layer */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {[
                { icon: <MapPin size={14} />, label: "Locations" },
                { icon: <Layers size={14} />, label: "Grades & bands" },
                { icon: <ShieldCheck size={14} />, label: "Policies" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderRadius: 16,
                    padding: 10,
                    background:
                      "linear-gradient(135deg,rgba(15,23,42,0.9),rgba(30,64,175,0.85))",
                    border: "1px solid rgba(148,163,184,0.75)",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg,rgba(248,250,252,0.16),rgba(148,163,184,0.18))",
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Policy engine */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: 18,
                padding: 12,
                background:
                  "linear-gradient(135deg,rgba(169,36,39,0.3),rgba(15,23,42,0.95))",
                border: "1px solid rgba(248,250,252,0.3)",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                Policy resolution engine
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#e5e7eb",
                }}
              >
                Every punch, leave, task and component is evaluated against
                country, entity, location, grade and employee overrides in the
                right order.
              </div>
            </motion.div>

            {/* Bottom layer */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,minmax(0,1fr))",
                gap: 8,
                marginBottom: 10,
              }}
            >
              {[
                { icon: <CalendarDays size={14} />, label: "Attendance" },
                { icon: <Clock size={14} />, label: "Shifts" },
                { icon: <ClipboardList size={14} />, label: "Tasks" },
                { icon: <ReceiptIndianRupee size={14} />, label: "Payroll" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderRadius: 999,
                    padding: "7px 9px",
                    background: "rgba(15,23,42,0.9)",
                    border: "1px solid rgba(148,163,184,0.7)",
                    fontSize: "0.76rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: "0.78rem",
                color: "#9ca3af",
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 6,
              }}
            >
              <Activity size={13} />
              Every event is logged with which rule-set, version and override
              was used – for full auditability.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // ================================
  // PAYROLL DATA & RUN STEPS
  // ================================

  const payrollTags = [
    "Earnings, deductions, reimbursements & contributions",
    "Calculation modes: fixed, %, slab, conditional",
    "Attendance-linked earnings & penalties",
    "Country templates: IN, US, UK, UAE, SG",
    "Versioned salary structures",
    "Statutory profiles & wage rules per region",
    "Tax regimes, slabs, exemptions & proofs",
    "Retro calculations with safety",
    "Variable pay & bonus cycles",
    "Loan/Advance with EMI & recovery",
    "Reimbursements with policy routing",
    "Run engine approvals & audit logs",
    "Payslip designer with drag-drop blocks",
  ];

  const payrollRunSteps = [
    {
      title: "Pre-payroll validation",
      desc: "Cycle selection, coverage checks, missing data, attendance & leave sync, statutory eligibility checks.",
      icon: <AlarmClock size={15} />,
    },
    {
      title: "Compute earnings & deductions",
      desc: "Applies salary structures, attendance linkage, slab logic, tax engine and statutory caps in precise order.",
      icon: <Banknote size={15} />,
    },
    {
      title: "Review, simulate & adjust",
      desc: "Compare variances, push bulk actions (arrears, bonuses), simulate new structures or tax regimes safely.",
      icon: <FileText size={15} />,
    },
    {
      title: "Approve, lock & disburse",
      desc: "Multi-level approvals, secure locking, bank file generation, payslip publishing & audit trail stamping.",
      icon: <Lock size={15} />,
    },
  ];

  const [railIndex, setRailIndex] = useState(0);

  // ================================
  // PAYROLL DEEP DIVE SECTION
  // ================================

  const PayrollDeepDive = () => (
    <section
      id="payroll"
      style={{
        ...page.section,
        background: "#f9fafb",
        position: "relative",
      }}
    >
      <div style={page.container}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 800,
              color: COLOR.textDark,
              marginBottom: 10,
              letterSpacing: "-0.8px",
            }}
          >
            <span style={stylesHighlight}>Payroll, tax & compliance</span>{" "}
            engineered to the last rule.
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A fully modeled payroll engine with components, structures,
            statutory logic, tax rules, reimbursements, loans, retro runs and a
            transparent step-by-step run rail — not a black box.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)",
            gap: 40,
            alignItems: "flex-start",
          }}
          data-two-col
        >
          {/* LEFT narrative */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3
              style={{
                fontSize: "1.32rem",
                fontWeight: 800,
                marginBottom: 14,
                color: COLOR.textDark,
              }}
            >
              Define components, structures & tax rules once — reuse across the
              organisation.
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: COLOR.textSoft,
                marginBottom: 14,
              }}
            >
              Kernn Payroll models your organisation with precision. Salary
              components carry behavior (proration, periodicity, attendance
              dependence, taxability). Structures bind these components to
              grades, locations and pay cycles — with version history and full
              auditability.
            </p>

            <ul
              style={{
                fontSize: "0.9rem",
                color: COLOR.textSoft,
                paddingLeft: 18,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <li style={{ marginBottom: 6 }}>
                Components aware of PF/ESI, WPS, PT, Social Security,
                region-wise caps & exemptions.
              </li>
              <li style={{ marginBottom: 6 }}>
                Salary structures with inheritance, overrides and historical
                versioning.
              </li>
              <li style={{ marginBottom: 6 }}>
                Tax engine supporting multiple regimes, proofs, exemptions,
                rebates & investment declarations.
              </li>
              <li style={{ marginBottom: 6 }}>
                Retro adjustments automatically triggered when rules or data
                change.
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 16,
              }}
            >
              {payrollTags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "4px 9px",
                    borderRadius: 999,
                    background: "#ffffff",
                    border: "1px dashed #d1d5db",
                    fontSize: "0.78rem",
                    color: "#4b5563",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT dark rail card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              borderRadius: 26,
              padding: 24,
              background: "radial-gradient(circle at top left,#1f2937,#020617)",
              color: "white",
              boxShadow: "0 26px 60px rgba(15,23,42,0.55)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top left,rgba(255,255,255,0.1),transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: 8,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Layers size={14} />
              Payroll Run Spine
            </div>

            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                marginBottom: 14,
              }}
            >
              A guided, transparent rail from attendance → bank file.
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#d1d5db",
                marginBottom: 18,
              }}
            >
              Each step is visible, reversible, version-tracked and leaves a
              compliance-ready audit trail.
            </p>

            {/* Step buttons */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 18,
                flexWrap: "wrap",
              }}
            >
              {payrollRunSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setRailIndex(i)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    border:
                      railIndex === i
                        ? "1px solid #fff"
                        : "1px solid rgba(148,163,184,0.4)",
                    background:
                      railIndex === i
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(15,23,42,0.4)",
                    color: railIndex === i ? "#fff" : "#cbd5f5",
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {step.icon}
                  {step.title}
                </button>
              ))}
            </div>

            {/* Step content */}
            <motion.div
              key={railIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{
                borderRadius: 18,
                padding: 16,
                background:
                  "linear-gradient(135deg,rgba(15,23,42,0.6),rgba(31,41,55,0.9))",
                border: "1px solid rgba(148,163,184,0.6)",
              }}
            >
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                {payrollRunSteps[railIndex].title}
              </div>
              <div
                style={{
                  fontSize: "0.84rem",
                  color: "#d1d5db",
                  lineHeight: 1.6,
                }}
              >
                {payrollRunSteps[railIndex].desc}
              </div>
            </motion.div>

            <div
              style={{
                marginTop: 14,
                fontSize: "0.78rem",
                color: "#9ca3af",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <CheckCircle2 size={13} />
              Every step logs what rules, versions & overrides were applied.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // ==============================================
  // DATA FLOW SECTION (same content, new layout)
  // ==============================================

  const flowItems = [
    {
      title: "Policies",
      desc: "Define HR, attendance, shift, leave, payroll & tax rules at entity, country and grade level.",
      icon: <Building2 size={18} />,
    },
    {
      title: "Workflows",
      desc: "Attach approvals, SLAs, escalations & notifications to each rule — no manual follow-ups.",
      icon: <Workflow size={18} />,
    },
    {
      title: "Execution",
      desc: "Employees clock time, request leave, complete tasks; systems collect biometric, GPS & WiFi signals.",
      icon: <Waypoints size={18} />,
    },
    {
      title: "Payroll",
      desc: "Run calculations that automatically apply policy logic, statutory rules and attendance impact.",
      icon: <ReceiptIndianRupee size={18} />,
    },
    {
      title: "Insights",
      desc: "Costs, productivity, compliance & attrition trends delivered to leadership in real time.",
      icon: <BarChart3 size={18} />,
    },
  ];

  const DataFlowSection = () => (
    <section style={page.tight}>
      <div style={page.container}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              letterSpacing: "-0.8px",
              color: COLOR.textDark,
            }}
          >
            See how data <span style={stylesHighlight}>actually moves</span> in
            your HRMS.
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 650,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Kernn is designed as a flow — policies feed workflows, workflows
            drive execution, execution powers payroll and insights.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
          data-flow-grid
        >
          {flowItems.map((f, idx) => (
            <React.Fragment key={f.title}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                style={{
                  flex: "1 1 180px",
                  borderRadius: 18,
                  padding: 18,
                  background: COLOR.bgWhite,
                  border: `1px solid ${COLOR.border}`,
                  boxShadow: "0 14px 30px rgba(15,23,42,0.06)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,rgba(169,36,39,0.1),rgba(169,36,39,0.02))",
                    color: COLOR.primary,
                    marginBottom: 10,
                  }}
                >
                  {f.icon}
                </div>

                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: 6,
                    color: COLOR.textDark,
                  }}
                >
                  {f.title}
                </div>

                <div
                  style={{
                    fontSize: "0.85rem",
                    color: COLOR.textSoft,
                    lineHeight: 1.6,
                  }}
                >
                  {f.desc}
                </div>
              </motion.div>

              {idx < flowItems.length - 1 && (
                <div
                  style={{
                    flex: "0 0 auto",
                    alignSelf: "center",
                    color: "#d1d5db",
                  }}
                >
                  <ArrowRight size={22} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );

  // ==============================================
  // AI + AUTOMATION SECTION (content preserved)
  // ==============================================

  const aiPoints = [
    {
      title: "Anomaly & pattern detection",
      desc: "Flags unusual clock-ins, overtime spikes, attendance misuse & sudden leave bursts.",
      icon: <Activity size={20} />,
    },
    {
      title: "Rule intelligence",
      desc: "Suggests improvements to attendance buffers, leave rules and payroll structures.",
      icon: <Cpu size={20} />,
    },
    {
      title: "Predictive insights",
      desc: "Forecasts attrition risk, workload hotspots, cost overruns & compliance issues.",
      icon: <LineChart size={20} />,
    },
    {
      title: "Automated nudges",
      desc: "Sends reminders for missing punches, pending approvals, document expiries & deadlines.",
      icon: <CheckCircle2 size={20} />,
    },
  ];

  const AISection = () => (
    <section style={{ ...page.section, background: "#fdf2f2" }}>
      <div style={page.container}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 800,
              color: COLOR.textDark,
              letterSpacing: "-0.8px",
            }}
          >
            Your HRMS gets{" "}
            <span style={stylesHighlight}>smarter every month.</span>
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Kernn’s intelligence layer continuously learns patterns across
            attendance, leaves, tasks, performance & payroll to drive proactive,
            automation-first operations.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,minmax(0,1fr))",
            gap: 24,
          }}
          data-ai-grid
        >
          {aiPoints.map((p, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 45px rgba(169,36,39,0.15)",
                borderColor: "rgba(169,36,39,0.35)",
              }}
              style={{
                borderRadius: 22,
                padding: 22,
                background: COLOR.bgWhite,
                border: `1px solid ${COLOR.border}`,
                boxShadow: "0 12px 32px rgba(15,23,42,0.05)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg,rgba(169,36,39,0.1),rgba(169,36,39,0.02))",
                  color: COLOR.primary,
                  marginBottom: 10,
                }}
              >
                {p.icon}
              </div>

              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: COLOR.textDark,
                  marginBottom: 6,
                }}
              >
                {p.title}
              </div>

              <div
                style={{
                  fontSize: "0.88rem",
                  color: COLOR.textSoft,
                  lineHeight: 1.6,
                }}
              >
                {p.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ==============================================
  // DEVICE & INTEGRATION LAYER (content preserved)
  // ==============================================

  const deviceBlocks = [
    {
      title: "Biometric devices",
      desc: "Seamless sync with fingerprint, face & RFID devices with millisecond-latency data push.",
      icon: <Fingerprint size={22} />,
    },
    {
      title: "Mobile GPS & Geo-fence",
      desc: "Track employee punch-ins from approved zones, sites or remote locations securely.",
      icon: <Smartphone size={22} />,
    },
    {
      title: "WiFi-based attendance",
      desc: "Auto-detect if employees are connected to office WiFi for presence verification.",
      icon: <Wifi size={22} />,
    },
    {
      title: "IoT & Satellite feeds",
      desc: "Field teams can clock-in via satellite connectivity or IoT devices in remote regions.",
      icon: <Satellite size={22} />,
    },
    {
      title: "ERP & Accounting",
      desc: "Two-way sync with Tally, Zoho Books, QuickBooks, SAP, Oracle & custom ERPs.",
      icon: <Network size={22} />,
    },
    {
      title: "Open APIs",
      desc: "A full REST API suite for integrating hiring systems, CRMs, payroll partners & more.",
      icon: <CircuitBoard size={22} />,
    },
  ];

  const IntegrationSection = () => (
    <section style={page.section}>
      <div style={page.container}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              color: COLOR.textDark,
              letterSpacing: "-0.8px",
            }}
          >
            Connect every device, every app —{" "}
            <span style={stylesHighlight}>effortlessly.</span>
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 670,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Whether you run biometric hardware, remote teams, construction
            sites, retail stores or global offices — Kernn connects every
            system, every signal into one clean attendance & HR data layer.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 24,
          }}
          data-integration-grid
        >
          {deviceBlocks.map((b, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.1)",
                borderColor: "rgba(169,36,39,0.3)",
              }}
              style={{
                borderRadius: 22,
                padding: 22,
                background: COLOR.bgWhite,
                border: `1px solid ${COLOR.border}`,
                boxShadow: "0 12px 32px rgba(15,23,42,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg,rgba(169,36,39,0.1),rgba(169,36,39,0.02))",
                  color: COLOR.primary,
                }}
              >
                {b.icon}
              </div>

              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: COLOR.textDark,
                }}
              >
                {b.title}
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: COLOR.textSoft,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ==============================================
  // PERSONAS SECTION (content preserved)
  // ==============================================

  const personas = [
    {
      tag: "HR & People Ops",
      title: "Policies that are finally enforceable",
      points: [
        "Model complex attendance, shift & leave rules without Excel workarounds.",
        "Flag exceptions early — missing punches, flexi abuse, leave spikes.",
        "Use tasks to automate onboarding, confirmations & offboarding workflows.",
      ],
    },
    {
      tag: "Payroll & Finance Teams",
      title: "A transparent, controllable payroll engine",
      points: [
        "Trace every amount back to components, rules & statutory logic.",
        "Run projections, what-if analysis & retro jobs safely.",
        "Export-ready registers, tax statements & reports for auditors.",
      ],
    },
    {
      tag: "Employees & Managers",
      title: "Self-service that explains itself",
      points: [
        "Clear visibility into attendance, leave, tasks & payslips.",
        "Mobile-first approvals with detailed context.",
        "Breakdown of salary, tax & deductions in plain language.",
      ],
    },
  ];

  const PersonaSection = () => (
    <section style={{ ...page.section, background: "#fdf2f2" }}>
      <div style={page.container}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 800,
              color: COLOR.textDark,
            }}
          >
            Built for{" "}
            <span style={stylesHighlight}>
              HR, Finance & your entire workforce
            </span>
            .
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: COLOR.textSoft,
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every team gets the clarity, automation and control they deserve —
            without losing the single source of truth.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 24,
          }}
          data-persona-grid
        >
          {personas.map((p, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.1)",
              }}
              style={{
                borderRadius: 22,
                padding: 24,
                background: COLOR.bgWhite,
                border: `1px solid ${COLOR.border}`,
                boxShadow: "0 12px 32px rgba(15,23,42,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: COLOR.primary,
                  marginBottom: 8,
                }}
              >
                {p.tag}
              </div>

              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: COLOR.textDark,
                  marginBottom: 12,
                }}
              >
                {p.title}
              </div>

              <ul
                style={{
                  fontSize: "0.9rem",
                  color: COLOR.textSoft,
                  lineHeight: 1.7,
                  paddingLeft: 18,
                  margin: 0,
                }}
              >
                {p.points.map((pt) => (
                  <li key={pt} style={{ marginBottom: 6 }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ==============================================
  // METRICS SECTION (content preserved)
  // ==============================================

  const metrics = [
    {
      label: "Attendance accuracy",
      value: "99.9%",
      icon: <Clock size={18} />,
    },
    {
      label: "Payroll errors reduced",
      value: "-80%",
      icon: <CheckCircle2 size={18} />,
    },
    {
      label: "Manual HR tasks automated",
      value: "65%",
      icon: <Workflow size={18} />,
    },
    {
      label: "Decision-ready reports",
      value: "Real-time",
      icon: <LineChart size={18} />,
    },
  ];

  const MetricsSection = () => (
    <section style={page.tight}>
      <div style={page.container}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,minmax(0,1fr))",
            gap: 20,
          }}
          data-metric-grid
        >
          {metrics.map((s, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{
                y: -4,
                boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
              }}
              style={{
                borderRadius: 20,
                padding: 20,
                background: COLOR.bgWhite,
                border: `1px solid ${COLOR.border}`,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.85rem",
                  color: COLOR.textSoft,
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg,rgba(169,36,39,0.08),rgba(169,36,39,0.02))",
                    color: COLOR.primary,
                  }}
                >
                  {s.icon}
                </span>
                {s.label}
              </div>

              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: COLOR.textDark,
                }}
              >
                {s.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ==============================================
  // ROLLOUT JOURNEY SECTION (NEW)
  // ==============================================

  const rolloutSteps = [
    {
      title: "1. Discovery & policy mapping",
      desc: "We map your current HR, attendance, leave and payroll policies — and the exceptions you actually deal with.",
    },
    {
      title: "2. Configuration & simulation",
      desc: "Policies, structures and workflows are configured in Kernn, then tested on historical data for accuracy.",
    },
    {
      title: "3. Parallel runs & training",
      desc: "We run Kernn alongside your existing process so HR, payroll & finance teams gain confidence and muscle memory.",
    },
    {
      title: "4. Go-live & continuous tuning",
      desc: "Switch to Kernn as source of truth — with monitoring, ongoing rule tuning and new automations every month.",
    },
  ];

  const RolloutSection = () => (
    <section
      style={{
        ...page.section,
        background: "linear-gradient(135deg,#111827,#020617)",
        color: "white",
      }}
    >
      <div style={page.container}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: 820,
              letterSpacing: "-0.9px",
            }}
          >
            From messy reality to{" "}
            <span style={stylesHighlight}>live HR operating system</span>.
          </h2>
          <p
            style={{
              fontSize: "1.02rem",
              color: "#e5e7eb",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Kernn doesn&apos;t ask you to start from scratch. We begin where you
            are — and move you to a fully modeled, auditable HRMS in deliberate,
            safe steps.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,minmax(0,1fr))",
            gap: 20,
          }}
          data-rollout-grid
        >
          {rolloutSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              whileHover={{
                y: -4,
                boxShadow: "0 22px 50px rgba(0,0,0,0.6)",
              }}
              style={{
                borderRadius: 22,
                padding: 20,
                background:
                  "radial-gradient(circle at top left,rgba(248,250,252,0.08),rgba(15,23,42,1))",
                border: "1px solid rgba(148,163,184,0.4)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  marginBottom: 6,
                }}
              >
                Phase {idx + 1}
              </div>
              <div
                style={{
                  fontSize: "1.02rem",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontSize: "0.88rem",
                  color: "#e5e7eb",
                  lineHeight: 1.6,
                }}
              >
                {step.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // ==============================================
  // CTA SECTION (final)
  // ==============================================

  const CTASection = () => (
    <section
      style={{
        padding: "90px 24px",
        background: "linear-gradient(135deg,#1f2937,#111827 50%,#020617)",
        color: "white",
      }}
    >
      <div style={page.container}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 999,
              border: "1px solid rgba(248,250,252,0.25)",
              marginBottom: 16,
              background:
                "radial-gradient(circle,rgba(248,250,252,0.14),transparent)",
            }}
          >
            <Users size={26} />
          </div>

          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              marginBottom: 16,
              letterSpacing: "-0.8px",
            }}
          >
            Ready to map your HR, attendance & payroll reality to Kernn?
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: "#e5e7eb",
              maxWidth: 560,
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Share your current workflows — we’ll show you exactly how Kernn
            models them from policies to payslips.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 22px 50px rgba(15,23,42,0.55)",
              }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "14px 26px",
                borderRadius: 999,
                background: "linear-gradient(135deg,#a92427,#d63447,#ff7a7a)",
                color: "white",
                fontWeight: 700,
                fontSize: "0.98rem",
                textDecoration: "none",
              }}
            >
              Schedule Product Tour
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                background: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 24px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.35)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Talk to Solutions Team
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );

  // ==============================================
  // PAGE RENDER
  // ==============================================

  return (
    <div style={page.root}>
      <Hero />
      <StorySection />
      <CoreModulesSection />
      <ArchitectureSection />
      <PayrollDeepDive />
      <DataFlowSection />
      <AISection />
      <IntegrationSection />
      <PersonaSection />
      <MetricsSection />
      <RolloutSection />
      <CTASection />
      <Footer />

      {/* Responsive Tweaks */}
      <style jsx>{`
        @media (max-width: 980px) {
          section {
            padding: 80px 20px !important;
          }
          section[id="story"] {
            padding-top: 70px !important;
          }
        }
        @media (max-width: 880px) {
          div[data-two-col] {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          section:first-of-type > div > div {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 768px) {
          div[data-story-grid],
          div[data-core-modules-grid],
          div[data-ai-grid],
          div[data-persona-grid],
          div[data-metric-grid],
          div[data-integration-grid],
          div[data-rollout-grid] {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          div[data-flow-grid] {
            flex-direction: column !important;
          }
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
