// ===============================
// HRMS PRODUCT PAGE (FLAGSHIP EDITION)
// PART 1/5 — Imports, Base Styles, Hero
// ===============================

import React, { useEffect } from "react";
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
    primarySoft: "rgba(169,36,39,0.2)",
    textDark: "#111827",
    textSoft: "#6b7280",
    border: "rgba(229,231,235,1)",
    bgSoft: "rgba(248,250,252,1)",
    bgWhite: "#ffffff",
  };

  const page = {
    root: {
      width: "100vw",
      overflowX: "hidden",
      background:
        "radial-gradient(circle at top left,#fff2f2 0,transparent 60%), radial-gradient(circle at bottom right,#ffecec 0,#fff 60%)",
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

  // --------------------------
  // FRAMER MOTION VARIANTS
  // --------------------------

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

  // --------------------------
  // DESIGN: FLOATING VISUAL GRID OVERLAY
  // --------------------------

  const FloatingGrid = () => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(150,50,50,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(150,50,50,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "62px 62px",
        opacity: 0.25,
      }}
    />
  );

  // --------------------------
  // HERO SECTION
  // --------------------------

  const Hero = () => (
    <section style={page.section}>
      <div style={page.container}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)",
            gap: 60,
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* FLOATING RED ORBS */}
          <motion.div
            style={{
              position: "absolute",
              width: 380,
              height: 380,
              borderRadius: "50%",
              top: "-18%",
              left: "-12%",
              background:
                "radial-gradient(circle,rgba(169,36,39,0.22),transparent 70%)",
              filter: "blur(70px)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 16, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              bottom: "-22%",
              right: "-18%",
              background:
                "radial-gradient(circle,rgba(255,110,110,0.18),transparent 75%)",
              filter: "blur(90px)",
            }}
            animate={{
              scale: [1.1, 1, 1.1],
              x: [0, -20, 0],
              y: [0, 18, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Left Content */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 18,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(255,230,230,0.9)",
                  border: "1px solid rgba(169,36,39,0.18)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: COLOR.primary,
                }}
              >
                <ShieldCheck size={14} />
                Enterprise-grade HRMS
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(255,240,240,0.9)",
                  border: "1px solid rgba(169,36,39,0.18)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: COLOR.primary,
                }}
              >
                <MapPin size={14} />
                Multi-country, Multi-entity Ready
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.7rem, 4.6vw, 3.6rem)",
                fontWeight: 900,
                color: "#151515",
                letterSpacing: "-1.2px",
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              The HR Operating System for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(120deg,#a92427,#de4343,#ff8c8c,#ffb9b9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                people, time & payroll
              </span>{" "}
              across your entire organisation.
            </h1>

            <p
              style={{
                fontSize: "1.08rem",
                maxWidth: 540,
                color: "#444",
                lineHeight: 1.7,
                marginBottom: 30,
              }}
            >
              Kernn HRMS is one integrated engine connecting Attendance, Shifts,
              Leave, Tasks and a deeply-modeled, multi-country Payroll suite.
              Built for HR, Finance & Operations to work from the same source of
              truth — finally.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 32,
              }}
            >
              <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                Policy-first architecture
              </span>
              <div
                style={{
                  width: 4,
                  height: 4,
                  background: "#d4d4d4",
                  borderRadius: 999,
                }}
              />
              <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                Realtime cross-module sync
              </span>
              <div
                style={{
                  width: 4,
                  height: 4,
                  background: "#d4d4d4",
                  borderRadius: 999,
                }}
              />
              <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                Fully auditable for compliance
              </span>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <motion.a
                href="#modules"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 18px 45px rgba(169,36,39,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: "14px 28px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg,#a92427,#d63447,#ff7a7a)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.98rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
              >
                Explore HRMS Suite
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#architecture"
                whileHover={{
                  scale: 1.03,
                  background: "rgba(255,250,250,1)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: "13px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(169,36,39,0.36)",
                  background: "rgba(255,255,255,0.96)",
                  color: COLOR.primary,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
              >
                How it works under the hood
              </motion.a>
            </div>
          </motion.div>

          {/* Right Hero Visualization */}
          <motion.div variants={fadeUp} style={{ position: "relative" }}>
            <FloatingGrid />

            <motion.div
              animate={softFloat.animate}
              style={{
                background: "linear-gradient(145deg,#1e1b4b,#0f172a,#0b1020)",
                padding: 26,
                borderRadius: 28,
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
                    "radial-gradient(circle at top left,rgba(255,255,255,0.14),transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              {/* HEADER */}
              <div
                style={{
                  fontSize: "0.84rem",
                  letterSpacing: "0.12em",
                  color: "#c7d2fe",
                  marginBottom: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <LayoutDashboard size={14} />
                HR Control Board
              </div>

              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  marginBottom: 18,
                }}
              >
                Where operations, finance & payroll meet.
              </div>

              {/* BADGES */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                {[
                  {
                    icon: <AlarmClock size={12} />,
                    label: "Live attendance signals",
                  },
                  {
                    icon: <CalendarDays size={12} />,
                    label: "Leave → Payroll impact",
                  },
                  {
                    icon: <ShieldCheck size={12} />,
                    label: "Statutory readiness",
                  },
                ].map((p, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "5px 10px",
                      borderRadius: 999,
                      background: "rgba(15,23,42,0.9)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      fontSize: "0.8rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {p.icon}
                    {p.label}
                  </span>
                ))}
              </div>

              {/* STACKS */}
              <div style={{ display: "grid", gap: 16 }}>
                {[
                  {
                    label: "Workforce today",
                    meta: "91% present • 6% on leave • 3% remote",
                    icon: <Users size={20} />,
                  },
                  {
                    label: "Current pay cycle",
                    meta: "Draft • 97% clean, 3% needs review",
                    icon: <ReceiptIndianRupee size={20} />,
                  },
                  {
                    label: "Payroll compliance",
                    meta: "2 warnings • 0 blockers",
                    icon: <ShieldCheck size={20} />,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background:
                        "linear-gradient(120deg,rgba(15,23,42,0.7),rgba(31,41,55,0.9))",
                      border: "1px solid rgba(148,163,184,0.55)",
                      padding: 14,
                      borderRadius: 20,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "#cbd5e1",
                        }}
                      >
                        {item.meta}
                      </div>
                    </div>
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
  // --------------------------
  // CORE MODULES CONFIG
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
  // CORE MODULES SECTION
  // --------------------------

  const CoreModulesSection = () => (
    <section id="modules" style={page.tight}>
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
            A connected <span style={stylesHighlight}>HRMS stack</span>, not a
            pile of modules.
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
            Attendance powers shifts, shifts impact leave, and all of it flows
            cleanly into payroll and analytics. Kernn HRMS is designed as one
            operating system, not separate tools.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 24,
          }}
          data-modules-grid
        >
          {coreModules.map((m, idx) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: "0 22px 50px rgba(15,23,42,0.12)",
                borderColor: COLOR.primarySoft,
              }}
              style={{
                borderRadius: 22,
                padding: 20,
                background: COLOR.bgWhite,
                border: `1px solid ${COLOR.border}`,
                boxShadow: "0 18px 40px rgba(15,23,42,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                position: "relative",
                overflow: "hidden",
              }}
              data-module-card
            >
              {/* subtle corner ribbon */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 58,
                  height: 58,
                  background:
                    "linear-gradient(135deg,transparent 50%,rgba(169,36,39,0.06) 50%)",
                  borderTopRightRadius: 22,
                }}
              />

              <div
                style={{
                  width: 34,
                  height: 34,
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
                  marginBottom: 2,
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
                    fontWeight: 700,
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
        </motion.div>
      </div>
    </section>
  );

  // small highlight style reused here
  const stylesHighlight = {
    background: "linear-gradient(135deg,#a92427,#d63447,#ff7a7a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // --------------------------
  // ARCHITECTURE / DATA MODEL SECTION
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
          {/* Left narrative column */}
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

          {/* Right visual architecture diagram */}
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

            {/* Top layer: Countries / Entities */}
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

            {/* Middle layer: Locations / Grades / Policies */}
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

            {/* Center policy engine */}
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

            {/* Bottom layer: Events that hit the engine */}
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
  // --------------- END OF MESSAGE 2 ---------------
  // ================================
  // PAYROLL TAGS + RAIL DATA
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

  const [railIndex, setRailIndex] = React.useState(0);

  // ================================
  // DEEP PAYROLL SUITE SECTION
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
        {/* header */}
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

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)",
            gap: 40,
            alignItems: "flex-start",
          }}
          data-two-col
        >
          {/* LEFT: Narrative + Tags */}
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

            {/* TAGS */}
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

          {/* RIGHT DARK PANEL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              borderRadius: 26,
              padding: 24,
              background:
                "radial-gradient(circle at top left,#1f2937,#0a0f1d,#020617)",
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

            {/* Header */}
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

            {/* INTERACTIVE STEP BUTTONS */}
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

            {/* STEP DETAILS */}
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

            {/* Footer line */}
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
  // --------------- END OF MESSAGE 3 ----------------
  // ==============================================
  // DATA FLOW ITEMS
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

  // ==============================================
  // DATA FLOW SECTION
  // ==============================================

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

              {/* Arrow */}
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
  // AI + AUTOMATION INTELLIGENCE SECTION
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

        {/* AI Grid */}
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
  // DEVICE & INTEGRATION LAYER
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

        {/* Device Grid */}
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

  // ------------- END OF MESSAGE 4 -------------
  // ==============================================
  // PERSONA VALUE BLOCKS
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
  // METRICS STRIP
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
  // CTA SECTION
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
  // PAGE RENDER (Final Assembly)
  // ==============================================

  return (
    <div style={page.root}>
      <Hero />
      <CoreModulesSection />
      <ArchitectureSection />
      <PayrollDeepDive />
      <DataFlowSection />
      <AISection />
      <IntegrationSection />
      <PersonaSection />
      <MetricsSection />
      <CTASection />
      <Footer />

      {/* Responsive Tweaks */}
      <style jsx>{`
        @media (max-width: 980px) {
          section {
            padding: 80px 20px !important;
          }
        }
        @media (max-width: 880px) {
          div[data-two-col] {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          div[data-core-modules] {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 720px) {
          div[data-core-modules],
          div[data-persona-grid],
          div[data-metric-grid] {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          div[data-flow-grid] {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}

// -------------- END OF MESSAGE 5/5 --------------
