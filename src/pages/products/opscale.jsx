import { color, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Truck,
  BarChart3,
  ClipboardList,
  Factory,
  ShoppingCart,
  UserCheck,
  MapPin,
  FileText,
  Package,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Settings,
  Activity,
  Layers,
  Navigation,
  CreditCard,
  Milk,
  Ruler,
  Grid,
} from "lucide-react";

import Footer from "../../components/Footer";

import Opscale from "../../assets/productLogos/opscale.png";

export default function OpscaleERPNexus() {
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- BRAND COLORS & STYLES ---
  const brandColors = {
    primary: "#FFFFFF",
    accent: "#A92427",
    accentSoft: "rgba(169, 36, 39, 0.15)",
    secondaryBg: "#F5F5F7",
    textDark: "#1C1C1C",
    textLight: "#4B5563",
    borderLight: "#E5E7EB",
    darkBg: "#050813",
  };

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // --- CORE SUITES (General ERP Functions) ---
  const coreSuites = {
    "E-Procurement": {
      icon: ClipboardList,
      color: ["#A92427", "#E63946"],
      bgColor: brandColors.secondaryBg,
      description:
        "Intelligent sourcing, contract, and Raw Material Receipt and Dispatch (RMRD) management, ensuring cost efficiency and compliance across the supply chain.",
      modules: [
        {
          icon: FileText,
          name: "Task Management",
          description:
            "Comprehensive task tracking system for efficient assignment, monitoring, and completion of all procurement-related activities. Automate deadlines and responsibility alerts.",
          features: [
            "Task Assignment",
            "Progress Tracking",
            "Deadline Alerts",
            "Priority Management",
          ],
        },
        {
          icon: BarChart3,
          name: "RMRD and Reports",
          description:
            "Raw Material Receipt and Dispatch tracking with advanced reporting. Generate deep analytics on supplier performance and inventory movements.",
          features: [
            "Receipt Tracking",
            "Dispatch Management",
            "Analytics Reports",
            "Custom Templates",
          ],
        },
        {
          icon: FileText,
          name: "Contract Lifecycle",
          description:
            "Digital contract lifecycle management from creation to renewal. Secure storage, expiration tracking, and compliance alerts.",
          features: [
            "Digital Contracts",
            "Expiry Alerts",
            "Amendment Tracking",
            "Compliance Management",
          ],
        },
        {
          icon: Package,
          name: "Inventory Store",
          description:
            "Efficient warehouse and storage facility management. Track inventory levels, stock movements, and optimize space.",
          features: [
            "Inventory Control",
            "Space Optimization",
            "Stock Alerts",
            "Movement Tracking",
          ],
        },
      ],
    },
    "Resource & HR Management": {
      icon: Users,
      color: ["#A92427", "#FF6B6B"],
      bgColor: brandColors.secondaryBg,
      description:
        "Transforming human capital management with digital profiles, biometric-ready attendance, smart leave management, and real-time field tracking.",
      modules: [
        {
          icon: Users,
          name: "Employee Profiles",
          description:
            "Centralized system for comprehensive employee profiles, documentation, and organizational hierarchy management with access control.",
          features: [
            "Employee Profiles",
            "Document Management",
            "Hierarchy Management",
            "Access Control",
          ],
        },
        {
          icon: Calendar,
          name: "Digital Attendance",
          description:
            "Advanced attendance tracking via biometric, mobile apps, or web portals. Manage shifts and calculate overtime automatically.",
          features: [
            "Multi-channel Tracking",
            "Biometric Integration",
            "Shift Management",
            "Overtime Tracking",
          ],
        },
        {
          icon: Clock,
          name: "Leave Management",
          description:
            "Comprehensive system for managing all types of employee leaves, including automated application, approval workflows, and balance tracking.",
          features: [
            "Leave Applications",
            "Approval Workflows",
            "Balance Tracking",
            "Policy Configuration",
          ],
        },
        {
          icon: MapPin,
          name: "Field Location Tracking",
          description:
            "Real-time GPS tracking for field staff. Monitor movements, verify check-ins, and optimize field operations with geofencing.",
          features: [
            "GPS Tracking",
            "Geofencing",
            "Check-in Verification",
            "Site Visit Tracking",
          ],
        },
      ],
    },
    Production: {
      icon: Factory,
      color: ["#A92427", "#F3722C"],
      bgColor: brandColors.secondaryBg,
      description:
        "Optimize manufacturing processes with intelligent planning, real-time monitoring, batch traceability, and comprehensive quality assurance systems.",
      modules: [
        {
          icon: Settings,
          name: "Batch Production",
          description:
            "End-to-end production management covering planning, scheduling, and execution. Track material usage, equipment efficiency, and waste.",
          features: [
            "Batch Management",
            "Resource Planning",
            "Equipment Monitoring",
            "Waste Tracking",
          ],
        },
        {
          icon: BarChart3,
          name: "Production Analysis",
          description:
            "Advanced analytics for performance monitoring. Analyze efficiency, identify bottlenecks, track KPIs, and generate predictive insights.",
          features: [
            "Efficiency Metrics",
            "Bottleneck Analysis",
            "KPI Tracking",
            "Predictive Analytics",
          ],
        },
        {
          icon: Award,
          name: "Quality Assurance",
          description:
            "Comprehensive quality control and reporting. Track compliance, monitor product consistency, and maintain audit trails for certifications.",
          features: [
            "Quality Metrics",
            "Compliance Tracking",
            "Audit Trails",
            "Certification Management",
          ],
        },
      ],
    },
    "Sales & Distribution": {
      icon: ShoppingCart,
      color: ["#A92427", "#6A4C93"],
      bgColor: brandColors.secondaryBg,
      description:
        "Accelerate sales operations with intelligent order (indent) management, comprehensive tracking, agent services, and integrated payment solutions.",
      modules: [
        {
          icon: FileText,
          name: "Indent/Order Processing",
          description:
            "Digital indent management system for order creation, approval workflows, and fulfillment tracking with automated specification and quantity management.",
          features: [
            "Digital Orders",
            "Approval Workflows",
            "Specification Management",
            "Delivery Scheduling",
          ],
        },
        {
          icon: TrendingUp,
          name: "Sales Tracking & CRM",
          description:
            "Comprehensive sales performance monitoring, revenue trend analysis, customer behavior insights, and detailed sales reports with forecasting.",
          features: [
            "Performance Metrics",
            "Revenue Analysis",
            "Customer Insights",
            "Sales Forecasting",
          ],
        },
        {
          icon: UserCheck,
          name: "Agent & Channel Service",
          description:
            "Complete management for agents and distributors including profile management, commission tracking, and performance-based rewards.",
          features: [
            "Agent Profiles",
            "Commission Management",
            "Territory Tracking",
            "Performance Rewards",
          ],
        },
        {
          icon: CreditCard,
          name: "Payment Gateway",
          description:
            "Secure, integrated payment processing supporting multiple methods. Manage transactions, generate receipts, and automate reconciliation.",
          features: [
            "Multiple Payment Methods",
            "Secure Processing",
            "Auto Reconciliation",
            "Digital Receipts",
          ],
        },
      ],
    },
    Logistics: {
      icon: Truck,
      color: ["#A92427", "#FFC300"],
      bgColor: brandColors.secondaryBg,
      description:
        "Revolutionize your transportation with intelligent route planning, end-to-end fleet and driver management, and automated contract handling.",
      modules: [
        {
          icon: Navigation,
          name: "Route Optimization",
          description:
            "Intelligent route planning to minimize delivery time and optimize fuel consumption. Includes real-time traffic integration and dynamic adjustments.",
          features: [
            "Route Optimization",
            "Fuel Efficiency",
            "Traffic Integration",
            "Dynamic Routing",
          ],
        },
        {
          icon: Truck,
          name: "Vehicle Fleet Management",
          description:
            "Complete fleet lifecycle management. Monitor health, schedule maintenance, track fuel, and manage essential documents (insurance, permits).",
          features: [
            "Maintenance Scheduling",
            "Fuel Tracking",
            "Document Management",
            "Health Monitoring",
          ],
        },
        {
          icon: UserCheck,
          name: "Driver Management",
          description:
            "Comprehensive system to maintain driver profiles, track licenses, monitor driving behavior, and manage duty rosters and training.",
          features: [
            "Driver Profiles",
            "License Tracking",
            "Performance Monitoring",
            "Duty Rosters",
          ],
        },
        {
          icon: FileText,
          name: "Logistics Contracts",
          description:
            "Management system for transporter and vendor contracts. Track rates, handle renewals, and monitor performance against agreements.",
          features: [
            "Contract Lifecycle",
            "Rate Management",
            "Vendor Management",
            "Performance Tracking",
          ],
        },
      ],
    },
    "Financial Operations": {
      icon: DollarSign,
      color: ["#A92427", "#3C6E71"],
      bgColor: brandColors.secondaryBg,
      description:
        "Integrated financial hub for billing, payments, and accounting visibility, seamlessly connecting to all operational data for real-time reporting.",
      modules: [
        {
          icon: DollarSign,
          name: "Automated Billing",
          description:
            "System for generating accurate, automated bills and invoices based on services rendered or goods sold. Manages payment schedules and provides transparent breakdowns.",
          features: [
            "Invoice Generation",
            "Payment Schedules",
            "Automated Tax",
            "Transaction History",
          ],
        },
        {
          icon: Activity,
          name: "Payables & Receivables",
          description:
            "Track all money owed to and by the company in real-time. Optimize cash flow and manage vendor/customer debts efficiently.",
          features: [
            "Debt Monitoring",
            "Cash Flow Insights",
            "Vendor Reconciliation",
            "A/R Aging Reports",
          ],
        },
        {
          icon: BarChart3,
          name: "Financial Reporting",
          description:
            "Generate P&L, balance sheets, and custom financial reports. Integrate with operations data for meaningful, contextualized insights.",
          features: [
            "P&L Statements",
            "Balance Sheets",
            "Budget Analysis",
            "Contextual Reporting",
          ],
        },
      ],
    },
  };

  // --- STYLING HELPERS ---
  const heroSectionStyle = {
    position: "relative",
    width: "100vw",
    minHeight: "100vh",
    paddingTop: 140,
    paddingBottom: 140,
    background:
      "radial-gradient(circle at top, rgba(255,255,255,0.08) 0, transparent 60%), linear-gradient(135deg, #050813 0%, #17040A 40%, #2B0508 100%)",
    color: "#fff",
    overflow: "hidden",
    boxSizing: "border-box",
  };

  const departmentSectionStyle = (bgColor) => ({
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: bgColor,
    width: "100vw",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  });

  const storySectionStyle = (bg, isDark = false) => ({
    paddingTop: 100,
    paddingBottom: 100,
    background: bg,
    width: "100vw",
    boxSizing: "border-box",
    color: isDark ? "#E5E7EB" : brandColors.textDark,
    position: "relative",
    overflow: "hidden",
  });

  const moduleCardStyle = {
    backgroundColor: brandColors.primary,
    border: `1px solid ${brandColors.borderLight}`,
    borderRadius: 24,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  const pageWrapperStyle = {
    minHeight: "100vh",
    backgroundColor: brandColors.primary,
    width: "100vw",
    overflowX: "hidden",
  };

  // --- JSX ---
  return (
    <>
      <div style={pageWrapperStyle}>
        {/* ================= 1. CINEMATIC HERO: THE ADAPTIVE NEXUS ================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={heroSectionStyle}
          data-hero
        >
          {/* Background orbits / glows */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 10% 0%, rgba(255,255,255,0.04) 0, transparent 55%), radial-gradient(circle at 80% 100%, rgba(169,36,39,0.35) 0, transparent 60%)",
              opacity: 0.9,
              pointerEvents: "none",
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              top: "-80px",
              right: "-40px",
              boxShadow: "0 0 120px rgba(169,36,39,0.6)",
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            style={{
              position: "absolute",
              width: 320,
              height: 320,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              bottom: "-60px",
              left: "-10px",
              boxShadow: "0 0 90px rgba(255,255,255,0.2)",
            }}
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating particles */}
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                borderRadius: "50%",
                background:
                  i % 2 === 0
                    ? "rgba(255,255,255,0.5)"
                    : brandColors.accentSoft,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px",
              position: "relative",
              zIndex: 5,
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1.2fr)",
              gap: 48,
              alignItems: "center",
            }}
          >
            {/* Left: Story hero content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeInUp}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, rgba(169,36,39,0.3), rgba(255,255,255,0.05))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    boxShadow: "0 0 14px #22C55E",
                  }}
                />
                LIVE | Adaptive ERP Nexus
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                style={{
                  fontSize: "clamp(3rem, 5vw, 4.25rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-1.5px",
                  marginBottom: 20,
                }}
              >
                Opscale:
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(120deg, #ffffff 0%, #ffb4b4 45%, #ff7770 70%, #ffe0e0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  The Adaptive ERP Nexus
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                style={{
                  fontSize: "1.08rem",
                  maxWidth: 620,
                  color: "rgba(243,244,246,0.86)",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                Before Opscale, enterprise systems were rigid silos — finance,
                procurement, HR, logistics, production — each moving on its own
                track. Opscale doesn&apos;t just connect them; it turns them
                into a single adaptive story engine for your business, where
                every transaction, approval, and movement is part of one
                orchestrated narrative.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                  marginBottom: 26,
                }}
              >
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(3,7,18,0.6)",
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Layers size={16} />
                  <span>6 Core Suites</span>
                </div>
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.16)",
                    backgroundColor: "rgba(3,7,18,0.5)",
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Settings size={16} />
                  <span>20+ Foundational Modules</span>
                </div>
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.16)",
                    backgroundColor: "rgba(3,7,18,0.5)",
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Ruler size={16} />
                  <span>Infinite Configuration Canvas</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                  alignItems: "center",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: "14px 28px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #ffe1e1 46%, #ffb1b1 100%)",
                    color: brandColors.accent,
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    boxShadow:
                      "0 16px 40px rgba(15,23,42,0.65), 0 0 0 1px rgba(255,255,255,0.4)",
                  }}
                >
                  Follow the Opscale Story
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: "13px 22px",
                    borderRadius: 999,
                    backgroundColor: "transparent",
                    border: "1px solid rgba(255,255,255,0.5)",
                    color: "rgba(249,250,251,0.9)",
                    fontWeight: 500,
                    fontSize: "0.92rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span>See Core Suites in Action</span>
                  <Navigation size={16} />
                </motion.button>
              </motion.div>

              {/* Hero stats */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))",
                  gap: 18,
                  marginTop: 40,
                  maxWidth: 620,
                }}
              >
                {[
                  { number: "6", label: "Core Suites" },
                  { number: "20+", label: "Foundational Modules" },
                  { number: "∞", label: "Customization Paths" },
                  { number: "0", label: "Legacy Constraints" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    variants={fadeInUp}
                    whileHover={{ y: -4, scale: 1.02 }}
                    style={{
                      padding: "16px 18px",
                      borderRadius: 18,
                      border: "1px solid rgba(148,163,184,0.35)",
                      background:
                        "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.5))",
                      boxShadow: "0 14px 35px rgba(15,23,42,0.75)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        marginBottom: 3,
                      }}
                    >
                      {s.number}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(209,213,219,0.9)",
                      }}
                    >
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Glass narrative card with logo & short story */}
            <motion.div
              variants={fadeInRight}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-40px -60px auto auto",
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.12) 0, transparent 55%)",
                  opacity: 0.9,
                  pointerEvents: "none",
                }}
              />
              <motion.div
                style={{
                  borderRadius: 28,
                  padding: 26,
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(15,23,42,0.6))",
                  border: "1px solid rgba(148,163,184,0.6)",
                  maxWidth: 420,
                  width: "100%",
                  boxShadow:
                    "0 22px 60px rgba(15,23,42,0.95), 0 0 0 1px rgba(255,255,255,0.08)",
                  backdropFilter: "blur(18px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      padding: 10,
                      borderRadius: 18,
                      border: "1px solid rgba(248,250,252,0.4)",
                      backgroundColor: "rgba(15,23,42,0.7)",
                    }}
                  >
                    <img
                      src={Opscale}
                      alt="Opscale Logo"
                      style={{ height: 32, width: "auto" }}
                    />
                  </div>
                  <div style={{ fontSize: 13, color: "#E5E7EB" }}>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: 2,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Opscale ERP Nexus
                    </div>
                    <div style={{ opacity: 0.7 }}>
                      One narrative fabric for your entire enterprise.
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(229,231,235,0.86)",
                    lineHeight: 1.7,
                  }}
                >
                  Every Opscale deployment begins with one question:
                  <br />
                  <span style={{ opacity: 0.85 }}>
                    &quot;What story is your enterprise trying to tell?&quot;
                  </span>{" "}
                  From there, we map each decision, approval, and transaction
                  into a living system of suites and modules that adapt as fast
                  as your business does.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                    gap: 12,
                    marginTop: 4,
                  }}
                >
                  <div
                    style={{
                      padding: "10px 12px",
                      borderRadius: 16,
                      background:
                        "linear-gradient(135deg, rgba(37,99,235,0.16), rgba(15,23,42,0.9))",
                      border: "1px solid rgba(59,130,246,0.4)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#BFDBFE",
                        marginBottom: 4,
                      }}
                    >
                      STORY ENGINE
                    </div>
                    <div style={{ fontSize: 12, color: "#E5E7EB" }}>
                      Map core suites to your real-world journey.
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "10px 12px",
                      borderRadius: 16,
                      background:
                        "linear-gradient(135deg, rgba(248,113,113,0.16), rgba(15,23,42,0.9))",
                      border: "1px solid rgba(248,113,113,0.4)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#FECACA",
                        marginBottom: 4,
                      }}
                    >
                      ADAPTIVE SCHEMA
                    </div>
                    <div style={{ fontSize: 12, color: "#E5E7EB" }}>
                      Redesign fields, flows, and logic in real-time.
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= 2. BEFORE OPSCALE: THE MAZE OF SYSTEMS (PROBLEM STORY) ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          style={storySectionStyle(
            "linear-gradient(180deg,#FFFFFF 0%,#F9FAFB 100%)"
          )}
          data-problem
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1.2fr)",
              gap: 40,
              alignItems: "center",
            }}
          >
            <motion.div variants={fadeInLeft}>
              <h2
                style={{
                  fontSize: "clamp(2.1rem, 3.4vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  marginBottom: 18,
                  color: brandColors.textDark,
                }}
              >
                Before Opscale, every department wrote its own story.
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: brandColors.textLight,
                  lineHeight: 1.8,
                  marginBottom: 18,
                }}
              >
                Procurement negotiates contracts in one system, HR records
                people data in another, production tracks batches in a third,
                and finance stitches numbers together at month-end. Every
                decision is delayed by spreadsheets, disconnected approvals, and
                missing context.
              </p>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: brandColors.textLight,
                  lineHeight: 1.8,
                  marginBottom: 18,
                }}
              >
                The result? Leaders read partial stories: a procurement tale
                with no financial epilogue, a production chapter with no
                logistics outcome. Opscale was built to fix this — by turning
                your ERP into a continuous, adaptive narrative.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                  gap: 18,
                  marginTop: 20,
                }}
              >
                {[
                  {
                    icon: FileText,
                    title: "Fragmented Data",
                    desc: "Key information scattered across tools, emails, and offline files.",
                  },
                  {
                    icon: Clock,
                    title: "Slow Decisions",
                    desc: "Approvals delayed by manual follow-ups and unclear ownership.",
                  },
                  {
                    icon: Shield,
                    title: "Compliance Risk",
                    desc: "No single audit trail across procurement, HR, and finance.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: 18,
                      borderRadius: 18,
                      border: `1px solid ${brandColors.borderLight}`,
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <item.icon
                      size={20}
                      style={{ color: brandColors.accent, marginTop: 2 }}
                    />
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          marginBottom: 4,
                          fontSize: "0.98rem",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          color: brandColors.textLight,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              style={{
                position: "relative",
                padding: 32,
                borderRadius: 24,
                background:
                  "radial-gradient(circle at top,#F97373 0,transparent 60%),#0B1220",
                color: "#F9FAFB",
                boxShadow: "0 22px 50px rgba(15,23,42,0.55)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 10% 90%,rgba(15,23,42,0.8) 0,transparent 50%)",
                  opacity: 0.75,
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                    color: "rgba(209,213,219,0.86)",
                  }}
                >
                  A DAY BEFORE OPSCALE
                </h3>
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "rgba(243,244,246,0.9)",
                    lineHeight: 1.8,
                    marginBottom: 18,
                  }}
                >
                  At 9:00 AM, a large indent is raised by sales in a
                  spreadsheet. Procurement only sees it at 1:00 PM, production
                  hears about it in the evening, and finance reconciles
                  everything weeks later. Every handoff is manual, every update
                  is a phone call.
                </p>
                <p
                  style={{
                    fontSize: "0.96rem",
                    color: "rgba(209,213,219,0.92)",
                    lineHeight: 1.8,
                  }}
                >
                  Opscale turns this delayed relay into a live, shared
                  narrative: the moment an indent is created, every suite that
                  needs to respond is already in motion.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= 3. FROM CHAOS TO NEXUS: THE VISION ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          style={storySectionStyle(
            "linear-gradient(135deg,#0B1120 0%,#111827 50%,#020617 100%)",
            true
          )}
          data-vision
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1.2fr)",
              gap: 40,
              alignItems: "center",
            }}
          >
            <motion.div variants={fadeInLeft}>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 3.6vw, 2.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  marginBottom: 16,
                  color: "#F9FAFB",
                }}
              >
                From disconnected tools to a living, adaptive ERP story.
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "rgba(209,213,219,0.9)",
                  lineHeight: 1.9,
                  marginBottom: 18,
                }}
              >
                Opscale doesn&apos;t start with modules. It starts with your
                reality — how raw material moves, how people work, how cash
                flows, and how decisions are made. The platform then configures
                its suites, modules, and workflows to match that reality,
                instead of forcing you into someone else&apos;s template.
              </p>
              <p
                style={{
                  fontSize: "0.98rem",
                  color: "rgba(156,163,175,0.95)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                Underneath, a powerful adaptive schema engine, a
                hyper-automation core, and a rigorous data integrity layer work
                together as your &quot;ERP narrative spine&quot; — ensuring
                every suite you switch on writes to the same coherent story.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                  gap: 18,
                  marginTop: 10,
                }}
              >
                {[
                  {
                    icon: Ruler,
                    label: "Adaptive Schema",
                    text: "Redesign fields, forms, and relationships without rewriting code.",
                  },
                  {
                    icon: Zap,
                    label: "Hyper-Automation",
                    text: "Trigger actions the moment signals appear across suites.",
                  },
                  {
                    icon: Shield,
                    label: "Data Integrity",
                    text: "One version of truth, always audit-ready, across every module.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: 16,
                      borderRadius: 18,
                      background:
                        "linear-gradient(135deg,rgba(15,23,42,0.8),rgba(15,23,42,0.6))",
                      border: "1px solid rgba(148,163,184,0.5)",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <item.icon
                        size={18}
                        style={{ color: brandColors.accent }}
                      />
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#E5E7EB",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.86rem",
                        marginTop: 8,
                        color: "rgba(209,213,219,0.9)",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              style={{
                position: "relative",
                borderRadius: 28,
                padding: 28,
                background:
                  "radial-gradient(circle at 0% 0%,rgba(248,113,113,0.4) 0,transparent 60%), radial-gradient(circle at 100% 100%,rgba(129,140,248,0.45) 0,transparent 55%), #020617",
                boxShadow: "0 26px 70px rgba(0,0,0,0.9)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg,rgba(15,23,42,0.85),rgba(15,23,42,0.6))",
                  opacity: 0.55,
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <h3
                  style={{
                    fontSize: "0.92rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(229,231,235,0.9)",
                    marginBottom: 10,
                  }}
                >
                  OPSCALE CORE BLUEPRINT
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
                    gap: 18,
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(243,244,246,0.92)",
                        lineHeight: 1.8,
                        marginBottom: 12,
                      }}
                    >
                      At the center, the Opscale Nexus orchestrates:
                    </p>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 18,
                        listStyle: "disc",
                        fontSize: "0.9rem",
                        color: "rgba(209,213,219,0.9)",
                        lineHeight: 1.8,
                      }}
                    >
                      <li>6 Core Suites mapped to your departments.</li>
                      <li>
                        20+ Foundational Modules pre-wired to work together.
                      </li>
                      <li>
                        An adaptive configuration layer that bends to specific
                        industries like dairy, logistics, manufacturing, and
                        more.
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{
                      borderRadius: 18,
                      padding: 14,
                      background:
                        "linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.5))",
                      border: "1px solid rgba(148,163,184,0.6)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.86rem",
                        color: "rgba(209,213,219,0.92)",
                        lineHeight: 1.7,
                      }}
                    >
                      Think of it as your ERP storyboard: every suite and module
                      is a scene, but the Opscale Nexus is the director ensuring
                      each scene leads seamlessly to the next.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= 4. THE TRIPLE PILLAR ARCHITECTURE ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          style={departmentSectionStyle(brandColors.primary)}
          data-pillars
        >
          <div style={{ maxWidth: 1150, margin: "0 auto", padding: "0 24px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                textAlign: "center",
                marginBottom: 16,
                color: brandColors.textDark,
                letterSpacing: "-0.06em",
              }}
            >
              The Triple Pillar Architecture
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: brandColors.textLight,
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 60px auto",
                lineHeight: 1.7,
              }}
            >
              Opscale is built on three universal principles that guarantee
              future-proof, precise, and adaptable operations across all
              industries.
            </p>
            <motion.div
              variants={staggerContainer}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 32,
              }}
            >
              {[
                {
                  icon: Shield,
                  title: "Data Precision & Compliance",
                  desc: "Ensures data integrity and regulatory readiness across all modules with comprehensive audit trails, role-based access, and automated compliance checks.",
                },
                {
                  icon: Zap,
                  title: "Hyper-Automation Engine",
                  desc: "Automated workflows for repetitive tasks, real-time alerts, and AI-driven predictive insights to minimize manual intervention and decision latency.",
                },
                {
                  icon: Ruler,
                  title: "The Adaptive Schema",
                  desc: "Instantly configure fields, logic, UI elements, and complex workflows using a no-code designer, allowing the platform to match your unique business processes perfectly.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 18px 30px rgba(15,23,42,0.14)",
                    y: -4,
                  }}
                  style={{
                    padding: 34,
                    borderRadius: 20,
                    backgroundColor: brandColors.secondaryBg,
                    borderLeft: `5px solid ${brandColors.accent}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <p.icon
                    style={{
                      width: 48,
                      height: 48,
                      color: brandColors.accent,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: brandColors.textDark,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: brandColors.textLight,
                      lineHeight: 1.6,
                      fontSize: "0.98rem",
                    }}
                  >
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= 5. OPSCALE IN A DAY: A CROSS-SUITE STORY ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          style={storySectionStyle("#F5F5F7")}
          data-storyline
        >
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.3vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.06em",
                marginBottom: 14,
                color: brandColors.textDark,
                textAlign: "center",
              }}
            >
              One day. One story. Every suite in motion.
            </h2>
            <p
              style={{
                fontSize: "1.02rem",
                color: brandColors.textLight,
                textAlign: "center",
                maxWidth: 720,
                margin: "0 auto 46px auto",
                lineHeight: 1.7,
              }}
            >
              Follow a single order as it travels through Opscale&apos;s core
              suites. Every module you saw in the spec is now a character in
              your live operational narrative.
            </p>

            <motion.div
              variants={staggerContainer}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: 24,
              }}
            >
              {[
                {
                  time: "09:00",
                  label: "Sales & Distribution",
                  title: "Indent is born.",
                  desc: "A sales executive raises a digital indent with precise specifications and quantities using the Indent/Order Processing module.",
                  modules: ["Indent/Order Processing", "Sales Tracking & CRM"],
                },
                {
                  time: "09:07",
                  label: "E-Procurement",
                  title: "Procurement wakes up.",
                  desc: "The moment the indent is logged, Procurement sees the requirement and launches Task Management and RMRD analytics.",
                  modules: ["Task Management", "RMRD and Reports"],
                },
                {
                  time: "10:15",
                  label: "Production",
                  title: "Batch takes shape.",
                  desc: "Batch Production plans capacity, checks inventory via Inventory Store, and sets up quality checks in the Quality Assurance module.",
                  modules: [
                    "Batch Production",
                    "Inventory Store",
                    "Quality Assurance",
                  ],
                },
                {
                  time: "14:30",
                  label: "Logistics",
                  title: "Movement is orchestrated.",
                  desc: "Route Optimization and Vehicle Fleet Management modules decide how, when, and which vehicle moves goods, with drivers assigned instantly.",
                  modules: [
                    "Route Optimization",
                    "Vehicle Fleet Management",
                    "Driver Management",
                  ],
                },
                {
                  time: "17:00",
                  label: "Resource & HR",
                  title: "People, shifts, and presence.",
                  desc: "Field staff attendance, shift assignments, and site visits are automatically registered through Digital Attendance and Field Location Tracking.",
                  modules: [
                    "Digital Attendance",
                    "Leave Management",
                    "Field Location Tracking",
                  ],
                },
                {
                  time: "18:45",
                  label: "Financial Operations",
                  title: "The story closes in finance.",
                  desc: "Automated Billing, Payables & Receivables, and Financial Reporting capture the transaction end-to-end with one consistent financial story.",
                  modules: [
                    "Automated Billing",
                    "Payables & Receivables",
                    "Financial Reporting",
                  ],
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.time + step.label}
                  variants={fadeInUp}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 14px 30px rgba(15,23,42,0.12)",
                  }}
                  style={{
                    borderRadius: 22,
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${brandColors.borderLight}`,
                    padding: 22,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(169,36,39,0.12), transparent 70%)",
                      right: -40,
                      top: -40,
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: brandColors.textLight,
                        }}
                      >
                        {step.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: 12,
                          padding: "4px 10px",
                          borderRadius: 999,
                          backgroundColor: brandColors.secondaryBg,
                          color: brandColors.textDark,
                        }}
                      >
                        {step.time}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        marginBottom: 6,
                        color: brandColors.textDark,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: brandColors.textLight,
                        lineHeight: 1.7,
                        marginBottom: 10,
                      }}
                    >
                      {step.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        marginTop: 4,
                      }}
                    >
                      {step.modules.map((m) => (
                        <span
                          key={m}
                          style={{
                            fontSize: 11,
                            padding: "4px 10px",
                            borderRadius: 999,
                            backgroundColor: brandColors.secondaryBg,
                            color: brandColors.textLight,
                            border: `1px solid ${brandColors.borderLight}`,
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= 6. OPSCALE CORE SUITES (YOUR EXISTING MODULES) ================= */}
        {Object.entries(coreSuites).map(([suiteName, suite], suiteIdx) => {
          const isEven = suiteIdx % 2 === 0;
          const sectionBgColor = isEven
            ? brandColors.primary
            : brandColors.secondaryBg;

          return (
            <motion.section
              key={suiteName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              style={departmentSectionStyle(sectionBgColor)}
              data-suites
            >
              <div
                style={{
                  maxWidth: 1120,
                  margin: "0 auto",
                  padding: "0 24px",
                }}
              >
                {/* Suite Header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: brandColors.accent,
                      borderRadius: 9999,
                      padding: "8px 24px",
                      marginBottom: 24,
                      boxShadow: `0 6px 16px -4px ${brandColors.accent}80`,
                      gap: 10,
                    }}
                  >
                    <suite.icon
                      style={{
                        width: 20,
                        height: 20,
                        color: "white",
                      }}
                    />
                    <span
                      style={{
                        color: "white",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontSize: "0.9rem",
                      }}
                    >
                      Core Suite
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                      fontWeight: 800,
                      marginBottom: 10,
                      color: brandColors.textDark,
                      letterSpacing: "-0.06em",
                    }}
                  >
                    {suiteName}
                  </h2>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: brandColors.textLight,
                      maxWidth: 620,
                      marginLeft: "auto",
                      marginRight: "auto",
                      lineHeight: 1.6,
                    }}
                  >
                    {suite.description}
                  </p>
                </div>

                {/* Modules Grid */}
                <motion.div
                  variants={staggerContainer}
                  style={{
                    display: "grid",
                    gap: 32,
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  }}
                >
                  {suite.modules.map((module, moduleIdx) => {
                    const isActive =
                      activeModule === `${suiteName}-${moduleIdx}`;
                    return (
                      <motion.div
                        key={moduleIdx}
                        variants={fadeInUp}
                        whileHover={{
                          scale: 1.02,
                          y: -5,
                          boxShadow: `0 18px 40px rgba(15,23,42,0.18), 0 0 0 2px ${brandColors.accentSoft}`,
                        }}
                        onHoverStart={() =>
                          setActiveModule(`${suiteName}-${moduleIdx}`)
                        }
                        onHoverEnd={() => setActiveModule(null)}
                        style={{
                          ...moduleCardStyle,
                          borderLeft: isActive
                            ? `6px solid ${brandColors.accent}`
                            : `1px solid ${brandColors.borderLight}`,
                          paddingLeft: isActive ? 26 : 32,
                        }}
                      >
                        <div
                          style={{
                            padding: 32,
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                            minHeight: 180,
                          }}
                        >
                          <module.icon
                            style={{
                              width: 36,
                              height: 36,
                              color: brandColors.accent,
                            }}
                          />
                          <h3
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 700,
                              color: brandColors.textDark,
                            }}
                          >
                            {module.name}
                          </h3>
                          <p
                            style={{
                              color: brandColors.textLight,
                              fontSize: "1rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {module.description}
                          </p>
                        </div>

                        {/* Features Area */}
                        <div
                          style={{
                            backgroundColor: isEven
                              ? brandColors.secondaryBg
                              : brandColors.primary,
                            padding: 28,
                            borderTop: `1px dashed ${brandColors.borderLight}`,
                          }}
                        >
                          <h4
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              color: brandColors.accent,
                              textTransform: "uppercase",
                              letterSpacing: "0.12em",
                              marginBottom: 16,
                            }}
                          >
                            Core Capabilities
                          </h4>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fit, minmax(140px, 1fr))",
                              gap: 12,
                            }}
                          >
                            {module.features.map((feature, featureIdx) => (
                              <div
                                key={featureIdx}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                }}
                              >
                                <CheckCircle
                                  style={{
                                    width: 16,
                                    height: 16,
                                    color: brandColors.accent,
                                  }}
                                />
                                <span
                                  style={{
                                    color: brandColors.textLight,
                                    fontWeight: 500,
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.section>
          );
        })}

        {/* ================= 7. UNIFIED DATA FABRIC & SECURITY ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          style={storySectionStyle(
            "radial-gradient(circle at top,#FEE2E2 0,transparent 55%),#0F172A",
            true
          )}
          data-architecture
        >
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1.1fr)",
                gap: 40,
                alignItems: "center",
              }}
            >
              <motion.div variants={fadeInLeft}>
                <h2
                  style={{
                    fontSize: "clamp(2rem,3.4vw,2.5rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.06em",
                    marginBottom: 14,
                    color: "#F9FAFB",
                  }}
                >
                  One data fabric. Every module, same truth.
                </h2>
                <p
                  style={{
                    fontSize: "1.02rem",
                    color: "rgba(209,213,219,0.92)",
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  Whether you&apos;re configuring MDMS for dairy, optimizing a
                  logistics network, or running a multi-plant manufacturing
                  operation, Opscale ensures all suites sit on a unified,
                  secure, and compliant data fabric.
                </p>
                <p
                  style={{
                    fontSize: "0.96rem",
                    color: "rgba(148,163,184,0.95)",
                    lineHeight: 1.8,
                    marginBottom: 18,
                  }}
                >
                  Permissions, audit trails, and compliance mappings work across
                  modules — not beside them. A field captured in village
                  collection can appear in boardroom reports with zero
                  copy-paste and full traceability.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    gap: 16,
                    marginTop: 10,
                  }}
                >
                  {[
                    {
                      icon: Shield,
                      title: "Role-based Access",
                      text: "Granular control over who sees and edits what, at every suite and module.",
                    },
                    {
                      icon: FileText,
                      title: "End-to-end Audit Trails",
                      text: "Every document, every approval, and every edit fully traceable.",
                    },
                    {
                      icon: Award,
                      title: "Compliance Ready",
                      text: "Industry-specific compliance hooks ready to be tailored to your needs.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        padding: 16,
                        borderRadius: 18,
                        background:
                          "linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.7))",
                        border: "1px solid rgba(148,163,184,0.7)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 6,
                        }}
                      >
                        <item.icon
                          size={18}
                          style={{ color: brandColors.accent }}
                        />
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#E5E7EB",
                          }}
                        >
                          {item.title}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.86rem",
                          color: "rgba(209,213,219,0.9)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                style={{
                  borderRadius: 28,
                  padding: 24,
                  background:
                    "linear-gradient(145deg,rgba(15,23,42,0.9),rgba(15,23,42,0.5))",
                  border: "1px solid rgba(148,163,184,0.7)",
                  boxShadow: "0 24px 60px rgba(15,23,42,0.85)",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(209,213,219,0.9)",
                    marginBottom: 10,
                  }}
                >
                  DATA FABRIC SNAPSHOT
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
                    gap: 20,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(243,244,246,0.95)",
                        lineHeight: 1.7,
                        marginBottom: 10,
                      }}
                    >
                      Every core suite writes into the same story graph:
                    </p>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 18,
                        listStyle: "disc",
                        fontSize: "0.86rem",
                        color: "rgba(209,213,219,0.9)",
                        lineHeight: 1.7,
                      }}
                    >
                      <li>
                        Procurement events enrich cost and vendor history.
                      </li>
                      <li>
                        HR events update capacity, availability, and
                        cost-of-work.
                      </li>
                      <li>
                        Logistics and production events feed real-time
                        operational KPIs.
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{
                      borderRadius: 18,
                      padding: 14,
                      background:
                        "linear-gradient(145deg,rgba(15,23,42,0.9),rgba(15,23,42,0.6))",
                      border: "1px solid rgba(148,163,184,0.7)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.84rem",
                        color: "rgba(209,213,219,0.9)",
                        lineHeight: 1.7,
                      }}
                    >
                      The result: finance never has to reconstruct the story at
                      month-end. It&apos;s already there — live, connected, and
                      ready to be sliced by any dimension you care about.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ================= 8. VERTICAL SPECIALIZATION: MDMS STORY ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          style={departmentSectionStyle(brandColors.primary)}
          data-mdms
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Milk
                style={{
                  width: 64,
                  height: 64,
                  color: brandColors.accent,
                  marginBottom: 16,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: "800",
                  marginBottom: 10,
                  color: brandColors.textDark,
                  letterSpacing: "-0.06em",
                }}
              >
                MDMS: Opscale&apos;s Pre-Built Vertical Accelerator
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: brandColors.textLight,
                  maxWidth: 680,
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.7,
                }}
              >
                Leveraging the Opscale Nexus, our{" "}
                <strong>Milk Dairy Management System</strong> is a
                comprehensive, production-ready configuration that is
                immediately deployable to address the unique challenges of the
                dairy supply chain.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              style={{
                display: "grid",
                gap: 32,
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              }}
            >
              {[
                {
                  icon: Layers,
                  name: "Village Collection & Data Purity",
                  desc: "Advanced mobile platform for precise milk collection, including quantity, fat, and SNF data capture with offline support and farmer profiles.",
                  features: [
                    "Digital Recording",
                    "Offline Support",
                    "Quality Parameters",
                    "Farmer Profiles",
                  ],
                },
                {
                  icon: DollarSign,
                  name: "Automated Milk Bills & Payouts",
                  desc: "Instant and transparent billing based on quantity and quality parameters. Manages payment schedules and provides detailed transaction history for farmers.",
                  features: [
                    "Auto Calculation",
                    "Digital Bills",
                    "Payment Schedules",
                    "Transaction History",
                  ],
                },
                {
                  icon: Activity,
                  name: "Real-Time Milk Analysis",
                  desc: "Testing system for fat percentage, SNF, and adulterant detection, generating quality certificates and maintaining comprehensive testing records for traceability.",
                  features: [
                    "Quality Testing",
                    "Adulteration Detection",
                    "Quality Certificates",
                    "Testing Records",
                  ],
                },
              ].map((module, index) => (
                <motion.div
                  key={module.name}
                  variants={fadeInUp}
                  style={{
                    ...moduleCardStyle,
                    border: `1px solid ${brandColors.accent}40`,
                    borderTop: `6px solid ${brandColors.accent}`,
                  }}
                >
                  <div style={{ padding: 32 }}>
                    <module.icon
                      style={{
                        width: 36,
                        height: 36,
                        color: brandColors.accent,
                        marginBottom: 16,
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: brandColors.textDark,
                        marginBottom: 12,
                      }}
                    >
                      {module.name}
                    </h3>
                    <p
                      style={{
                        color: brandColors.textLight,
                        lineHeight: 1.7,
                        fontSize: "0.98rem",
                      }}
                    >
                      {module.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: brandColors.secondaryBg,
                      padding: 24,
                      borderTop: `1px dashed ${brandColors.accent}50`,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 10,
                      }}
                    >
                      {module.features.map((feature, featureIdx) => (
                        <div
                          key={featureIdx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <CheckCircle
                            style={{
                              width: 14,
                              height: 14,
                              color: brandColors.accent,
                            }}
                          />
                          <span
                            style={{
                              color: brandColors.textDark,
                              fontSize: "0.9rem",
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= 9. THE OMNICHANNEL ACCESS ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          style={departmentSectionStyle(brandColors.secondaryBg)}
          data-omnichannel
        >
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Grid
                style={{
                  width: 64,
                  height: 64,
                  color: brandColors.accent,
                  marginBottom: 16,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: "800",
                  marginBottom: 12,
                  color: brandColors.textDark,
                  letterSpacing: "-0.06em",
                }}
              >
                The Opscale Omnichannel Access
              </h2>
              <p
                style={{
                  color: brandColors.textLight,
                  maxWidth: 600,
                  margin: "0 auto",
                  fontSize: "1.02rem",
                  lineHeight: 1.7,
                }}
              >
                Connect your entire ecosystem, from the field to the boardroom,
                through secure, optimized access layers.
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 32,
              }}
            >
              {[
                {
                  icon: MapPin,
                  title: "Mobile-First Data Entry",
                  desc: "Optimized for field staff, ensuring data capture with offline support and geo-location for accuracy, even in low-connectivity areas.",
                },
                {
                  icon: Layers,
                  title: "Web Portal & Dashboard",
                  desc: "A centralized control panel providing administrators and managers with real-time analytics, reporting, and full system configuration access.",
                },
                {
                  icon: Zap,
                  title: "API Integration Layer",
                  desc: "Seamless, secure connection with legacy accounting systems (e.g., Tally), third-party devices, and IoT sensors.",
                },
              ].map((channel, i) => (
                <motion.div
                  key={channel.title}
                  variants={fadeInUp}
                  style={{
                    padding: 30,
                    backgroundColor: brandColors.primary,
                    borderRadius: 16,
                    border: `1px solid ${brandColors.borderLight}`,
                    boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
                  }}
                >
                  <channel.icon
                    style={{
                      width: 32,
                      height: 32,
                      color: brandColors.accent,
                      marginBottom: 12,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: brandColors.textDark,
                      marginBottom: 8,
                    }}
                  >
                    {channel.title}
                  </h3>
                  <p
                    style={{
                      color: brandColors.textLight,
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {channel.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= 10. IMPLEMENTATION JOURNEY (STORY OF GO-LIVE) ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          style={storySectionStyle("#FFFFFF")}
          data-journey
        >
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem,3.3vw,2.5rem)",
                fontWeight: 800,
                textAlign: "center",
                marginBottom: 10,
                letterSpacing: "-0.06em",
              }}
            >
              Your Opscale journey, told in phases.
            </h2>
            <p
              style={{
                fontSize: "1.02rem",
                color: brandColors.textLight,
                textAlign: "center",
                maxWidth: 680,
                margin: "0 auto 40px auto",
                lineHeight: 1.7,
              }}
            >
              From the first discovery call to the day your teams can&apos;t
              imagine working without Opscale, each phase is intentional and
              mapped to suites, modules, and measurable outcomes.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1.1fr)",
                gap: 32,
                alignItems: "flex-start",
              }}
            >
              <motion.div
                variants={staggerContainer}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr)",
                  gap: 12,
                }}
              >
                {[
                  {
                    step: "Phase 01",
                    title: "Narrative Discovery",
                    text: "We map your current systems, pain points, and operational story — from village collection or procurement to payout and reporting.",
                  },
                  {
                    step: "Phase 02",
                    title: "Suite & Module Blueprint",
                    text: "We select and configure the core suites and foundational modules that will power your first Opscale release.",
                  },
                  {
                    step: "Phase 03",
                    title: "Adaptive Schema & Workflows",
                    text: "Fields, forms, approvals, and automations are defined to mirror your exact processes — not a generic template.",
                  },
                  {
                    step: "Phase 04",
                    title: "Pilot, Training & Hypercare",
                    text: "Real teams use Opscale in a controlled environment while we monitor metrics and fine-tune the narrative.",
                  },
                  {
                    step: "Phase 05",
                    title: "Scale Across Verticals",
                    text: "Once the story works in one unit (e.g., dairy MDMS), it can be adapted and replicated across other divisions.",
                  },
                ].map((phase) => (
                  <motion.div
                    key={phase.step}
                    variants={fadeInUp}
                    style={{
                      padding: 18,
                      borderRadius: 18,
                      border: `1px solid ${brandColors.borderLight}`,
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 8px 20px rgba(15,23,42,0.03)",
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        minWidth: 72,
                        padding: "8px 10px",
                        borderRadius: 999,
                        backgroundColor: brandColors.secondaryBg,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: brandColors.textLight,
                        textAlign: "center",
                      }}
                    >
                      {phase.step}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          marginBottom: 4,
                          color: brandColors.textDark,
                        }}
                      >
                        {phase.title}
                      </div>
                      <p
                        style={{
                          fontSize: "0.93rem",
                          color: brandColors.textLight,
                          lineHeight: 1.7,
                        }}
                      >
                        {phase.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInRight}
                style={{
                  borderRadius: 24,
                  padding: 24,
                  background:
                    "linear-gradient(135deg,#0F172A 0%,#111827 40%,#020617 100%)",
                  color: "#F9FAFB",
                  boxShadow: "0 20px 50px rgba(15,23,42,0.8)",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(209,213,219,0.9)",
                    marginBottom: 8,
                  }}
                >
                  WHAT TEAMS FEEL
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(243,244,246,0.96)",
                    marginBottom: 12,
                  }}
                >
                  In Phase 1, teams finally see their frustrations mapped out
                  visually. In Phase 3, they&apos;re surprised at how closely
                  the digital workflows match their real-life flow. And by Phase
                  5, &quot;checking Opscale&quot; becomes the default way to
                  know what&apos;s happening in the business.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "rgba(156,163,175,0.96)",
                  }}
                >
                  The result isn&apos;t just a new ERP. It&apos;s a shared,
                  living story of how work gets done — visible, measurable, and
                  constantly improvable.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ================= 11. FINAL CTA: DEFINE YOUR ADAPTIVE ENTERPRISE ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            paddingTop: 80,
            paddingBottom: 80,
            background: brandColors.accent,
            color: brandColors.primary,
            position: "relative",
            overflow: "hidden",
            width: "100vw",
            boxSizing: "border-box",
          }}
          data-cta
        >
          {/* CTA background glows */}
          <motion.div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)",
              top: -160,
              left: -80,
              opacity: 0.7,
            }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            style={{
              position: "absolute",
              width: 360,
              height: 360,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,0,0,0.25), transparent 60%)",
              bottom: -140,
              right: -60,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div
            style={{
              maxWidth: 640,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              position: "relative",
              zIndex: 10,
              padding: "0 24px",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              style={{ display: "inline-block", marginBottom: 24 }}
            >
              <Settings style={{ width: 48, height: 48, color: "white" }} />
            </motion.div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                fontWeight: "800",
                marginBottom: 18,
                letterSpacing: "-0.06em",
              }}
            >
              Ready to architect your adaptive enterprise with Opscale?
            </h2>

            <p
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                marginBottom: 36,
                color: "rgba(255, 255, 255, 0.92)",
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.7,
              }}
            >
              Start with our specialized MDMS or configure Opscale from the
              ground up to fit your unique business model, one suite and one
              live story at a time.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: brandColors.primary,
                  color: brandColors.accent,
                  padding: "16px 32px",
                  borderRadius: 9999,
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  boxShadow: `0 16px 32px -8px rgba(0, 0, 0, 0.45)`,
                  cursor: "pointer",
                  border: "none",
                  width: "100%",
                  maxWidth: 280,
                }}
              >
                Schedule a Live Demo
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: brandColors.primary,
                  color: brandColors.accent,
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "transparent",
                  border: `2px solid ${brandColors.primary}`,
                  color: brandColors.primary,
                  padding: "16px 32px",
                  borderRadius: 9999,
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: 280,
                  transition:
                    "background-color 0.3s, color 0.3s, transform 0.3s",
                }}
              >
                Explore MDMS Case Study
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
      {/* ================= RESPONSIVE TWEAKS ================= */}
      <style jsx>{`
        @media (max-width: 1024px) {
          [data-hero] > div {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          [data-hero] {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }

          [data-hero] h1 {
            font-size: 2.4rem !important;
          }

          [data-hero] p {
            font-size: 1rem !important;
          }

          [data-hero] > div {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          [data-problem] > div,
          [data-vision] > div,
          [data-architecture] > div,
          [data-journey] > div {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          [data-storyline] > div {
            padding: 0 18px !important;
          }
        }

        @media (max-width: 480px) {
          [data-hero] h1 {
            font-size: 2rem !important;
          }

          section {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
