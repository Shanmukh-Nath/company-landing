import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  PhoneCall,
  Database,
  Activity,
  Globe,
  Shield,
  Users,
  CreditCard,
  ClipboardList,
  FileText,
  HeartPulse,
  Truck,
  ShoppingCart,
  MessageCircle,
  Zap,
  Clock,
  Scale,
  FileSearch,
  Briefcase,
  Target,
  Languages,
  CheckCircle,
} from "lucide-react";

export default function BpoServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brand = {
    accent: "#A92427",
    accentSoft: "rgba(169, 36, 39, 0.12)",
    textDark: "#111827",
    textMid: "#4B5563",
    border: "#E5E7EB",
    bgSoft: "#F5F5F7",
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // --- DATA ---

  const inboundServices = [
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      desc: "Voice, chat, and email support for customer queries, complaints, and general assistance across any industry.",
      tags: ["Voice", "Chat", "Email", "Multi-timezone"],
    },
    {
      icon: PhoneCall,
      title: "Technical Helpdesk (L1 / L2)",
      desc: "First and second-line technical support for software, hardware, devices, and SaaS products.",
      tags: ["Product Support", "SaaS", "Diagnostics", "Ticketing"],
    },
    {
      icon: ShoppingCart,
      title: "Order Taking & Tracking",
      desc: "Inbound order capture, verification, upsell handling, and order status updates.",
      tags: ["E-commerce", "Retail", "Ordering"],
    },
    {
      icon: CreditCard,
      title: "Billing & Accounts Queries",
      desc: "Billing explanation, invoice queries, refunds, adjustments, and collections support via inbound channels.",
      tags: ["Billing L1", "Collections Assist"],
    },
  ];

  const outboundServices = [
    {
      icon: Target,
      title: "Lead Generation & Qualification",
      desc: "Targeted outbound campaigns to identify, qualify, and warm up leads for your sales teams.",
      tags: ["B2B", "B2C", "Inside Sales"],
    },
    {
      icon: PhoneCall,
      title: "Sales, Up-sell & Cross-sell",
      desc: "Outbound calls to convert prospects, increase wallet share, and re-activate dormant customers.",
      tags: ["Revenue Focus", "Retention"],
    },
    {
      icon: Activity,
      title: "Collections & Payment Reminders",
      desc: "Polite, structured outbound collections and reminders with clear scripts and escalation paths.",
      tags: ["Finance", "Utilities", "Telecom"],
    },
    {
      icon: ClipboardList,
      title: "Surveys & Feedback",
      desc: "NPS, CSAT, post-purchase surveys, and customer feedback campaigns across voice and digital.",
      tags: ["Customer Experience", "Insights"],
    },
  ];

  const backOfficeServices = [
    {
      icon: Database,
      title: "Data Entry & Processing",
      desc: "High-volume, accurate data entry, cleansing, and processing from any source or format.",
      tags: ["Forms", "Docs", "Legacy"],
    },
    {
      icon: FileText,
      title: "Document Management & Indexing",
      desc: "Digital document capture, indexing, tagging, and retrieval workflows.",
      tags: ["DMS", "Compliance"],
    },
    {
      icon: ClipboardList,
      title: "Reporting & MIS",
      desc: "Regular MIS prep, dashboard updates, and performance reports for leadership teams.",
      tags: ["MIS", "KPI Packs"],
    },
    {
      icon: ShoppingCart,
      title: "Catalog & Content Operations",
      desc: "Product catalog creation, updates, enrichment, and QA for e-commerce and marketplaces.",
      tags: ["E-com", "Content Ops"],
    },
  ];

  const knowledgeProcessServices = [
    {
      icon: Activity,
      title: "Analytics & Insights (KPO)",
      desc: "Data analysis, trend identification, performance dashboards, and decision-support reporting.",
      tags: ["BI", "Dashboards"],
    },
    {
      icon: FileSearch,
      title: "Research & Market Intelligence",
      desc: "Secondary research, competitor tracking, market mapping, and insight decks.",
      tags: ["Market Research", "Desk Research"],
    },
    {
      icon: Scale,
      title: "Legal Process Outsourcing (LPO)",
      desc: "Contract review, basic drafting support, documentation management, and case data prep.",
      tags: ["LPO", "Contracts"],
    },
    {
      icon: Briefcase,
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "Job posting, CV screening, interview scheduling, and candidate coordination for HR teams.",
      tags: ["RPO", "Talent Ops"],
    },
  ];

  const financeAndHrServices = [
    {
      icon: CreditCard,
      title: "Finance & Accounting BPO",
      desc: "Accounts payable, receivable, invoice processing, reconciliations, and finance back-office.",
      tags: ["AP/AR", "Recons"],
    },
    {
      icon: FileText,
      title: "Payroll Processing",
      desc: "Payroll execution, payslip generation, statutory deduction calculations, and reports.",
      tags: ["HR BPO", "Payroll"],
    },
    {
      icon: Users,
      title: "HR Administration",
      desc: "Employee data updates, letters, query management, and HR helpdesk support.",
      tags: ["HR Ops", "Employee Desk"],
    },
    {
      icon: Clock,
      title: "Time & Attendance Processing",
      desc: "Timesheet validation, attendance consolidation, and overtime calculations.",
      tags: ["Shift-based", "Multi-location"],
    },
  ];

  const industrySpecials = [
    {
      icon: HeartPulse,
      title: "Healthcare & Medical BPO",
      desc: "Appointment scheduling, patient support, basic medical billing assistance, and records coordination.",
      tags: ["Hospitals", "Clinics"],
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain Support",
      desc: "Shipment tracking, dispatch coordination, delivery status updates, and exception handling.",
      tags: ["3PL", "Fleet Ops"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail CX",
      desc: "Order queries, returns and refunds, listing support, and marketplace coordination.",
      tags: ["D2C", "Marketplace"],
    },
    {
      icon: Globe,
      title: "Telecom, SaaS & Tech Support",
      desc: "Onboarding assistance, usage support, plan queries, and feature explanation for tech products.",
      tags: ["SaaS", "ISPs"],
    },
  ];

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          overflowX: "hidden",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* ================= HERO (DARK CINEMATIC) ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "relative",
            width: "100vw",
            minHeight: "100vh",
            paddingTop: 140,
            paddingBottom: 160,
            background:
              "linear-gradient(180deg, #120203 0%, #230406 35%, #32070A 100%)",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-hero
        >
          {/* Background wave */}
          <svg
            style={{
              position: "absolute",
              top: "-40px",
              left: "-40px",
              width: "160%",
              height: "160%",
              transform: "rotate(-8deg)",
              opacity: 0.18,
            }}
            viewBox="0 0 900 600"
          >
            <path
              d="M0 300 C150 250, 300 350, 450 300 C600 250, 750 350, 900 300 L900 600 L0 600 Z"
              fill="url(#grad1)"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A92427" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#D55A5E" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#A92427" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating particles */}
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                borderRadius: "50%",
                background:
                  i % 2 === 0 ? "rgba(255,255,255,0.6)" : "rgba(169,36,39,0.5)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Glass chips */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: Math.random() * 140 + 120,
                height: Math.random() * 50 + 40,
                borderRadius: 24,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                top: `${20 + Math.random() * 60}%`,
                left: `${-10 + Math.random() * 120}%`,
                rotate: Math.random() * 20 - 10,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              maxWidth: 900,
              padding: "0 24px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 18px",
                borderRadius: 999,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 10px #22C55E",
                }}
              />
              BPO · CX · TECH SUPPORT · BACK-OFFICE · KPO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              BPO That Scales With Your
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(120deg, #ffffff 0%, #ffb4b4 40%, #ff7770 70%, #ffe0e0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Growth, Volume & Vision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: "1.1rem",
                maxWidth: 760,
                margin: "0 auto 30px auto",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.8,
              }}
            >
              A modern BPO for companies that want more than cost savings. We
              take on any process—support, data, finance, HR, legal, outbound,
              technical—and build it into a managed, scalable, high-performance
              engine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 18,
                marginTop: 16,
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #ffe1e1 40%, #ffc3c3 100%)",
                  color: brand.accent,
                  padding: "14px 34px",
                  border: "none",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
                }}
              >
                Explore BPO Capabilities
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "transparent",
                  color: "white",
                  padding: "14px 34px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.45)",
                  fontWeight: 500,
                  fontSize: "1rem",
                  cursor: "pointer",
                  backdropFilter: "blur(6px)",
                }}
              >
                We Accept Any BPO Requirement
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              {[
                "Inbound & Outbound Contact Center",
                "Back-Office & Data Operations",
                "KPO · LPO · RPO · HR & Finance BPO",
                "Industry-Specific BPO Pods",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  style={{
                    fontSize: 12,
                    padding: "8px 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.35)",
                    backgroundColor: "rgba(0,0,0,0.25)",
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= STORY: BEFORE & AFTER ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          style={{
            padding: "90px 0 80px",
            background: "linear-gradient(180deg,#FFFFFF 0%,#F9FAFB 100%)",
            boxSizing: "border-box",
          }}
          data-story
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1.1fr)",
              gap: 40,
              alignItems: "flex-start",
            }}
          >
            <motion.div variants={fadeInUp}>
              <h2
                style={{
                  fontSize: "clamp(2.1rem, 3.4vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  marginBottom: 16,
                  color: brand.textDark,
                }}
              >
                Before BPO, every team tries to do everything.
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: brand.textMid,
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Salespeople chase leads while answering support calls. HR teams
                process payroll while handling employee queries. Ops staff track
                shipments and still update Excel sheets at night. Everyone is
                busy, but critical work still waits.
              </p>
              <p
                style={{
                  fontSize: "0.98rem",
                  color: brand.textMid,
                  lineHeight: 1.8,
                }}
              >
                A strong BPO partner doesn&apos;t just reduce cost. It clears
                mental bandwidth, shortens response times, and builds a stable
                backbone for every function you decide to hand over.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 16,
                  marginTop: 24,
                }}
              >
                {[
                  {
                    icon: Clock,
                    title: "Overloaded Teams",
                    desc: "High-value employees stuck in repetitive, low-leverage work.",
                  },
                  {
                    icon: Activity,
                    title: "Fragmented Processes",
                    desc: "Different teams building their own trackers and reports.",
                  },
                  {
                    icon: Shield,
                    title: "Inconsistent Experience",
                    desc: "Customers and employees receiving uneven responses across channels.",
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    style={{
                      padding: 16,
                      borderRadius: 18,
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${brand.border}`,
                      boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
                      display: "flex",
                      gap: 12,
                    }}
                  >
                    <b.icon
                      size={20}
                      style={{ color: brand.accent, marginTop: 2 }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "0.98rem",
                          fontWeight: 600,
                          marginBottom: 4,
                          color: brand.textDark,
                        }}
                      >
                        {b.title}
                      </div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: brand.textMid,
                          lineHeight: 1.6,
                        }}
                      >
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              style={{
                borderRadius: 24,
                padding: 24,
                background:
                  "radial-gradient(circle at top,#F97373 0,transparent 55%), #0B1220",
                color: "#F9FAFB",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(15,23,42,0.55)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 10% 90%,rgba(15,23,42,0.9) 0,transparent 55%)",
                  opacity: 0.7,
                }}
              />
              <div style={{ position: "relative", zIndex: 2 }}>
                <h3
                  style={{
                    fontSize: "0.92rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(209,213,219,0.9)",
                    marginBottom: 8,
                  }}
                >
                  A DAY BEFORE OUTSOURCING
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    marginBottom: 10,
                  }}
                >
                  At 9:00 AM, the support inbox is already overflowing. Calls
                  queue up. Leads from yesterday are still untouched. Finance is
                  waiting for reconciled numbers. HR is behind on queries.
                  Everyone is moving, but nothing really moves.
                </p>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.8,
                    color: "rgba(209,213,219,0.96)",
                  }}
                >
                  With a dedicated BPO fabric, this recurring noise lives on our
                  side. Your teams see dashboards, SLAs, and outcomes—not raw
                  queues and manual trackers.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= SERVICE SPECTRUM SNAPSHOT ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0 70px",
            backgroundColor: "#FFFFFF",
          }}
          data-spectrum
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem,3.3vw,2.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.06em",
                marginBottom: 12,
                color: brand.textDark,
              }}
            >
              One BPO fabric, every kind of work.
            </h2>
            <p
              style={{
                fontSize: "1.02rem",
                color: brand.textMid,
                maxWidth: 700,
                margin: "0 auto 32px auto",
                lineHeight: 1.7,
              }}
            >
              Inbound, outbound, back-office, knowledge work, finance, HR,
              legal, industry pods—our answer is simple:
              <strong> we accept any type of BPO.</strong>
            </p>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
                marginTop: 12,
              }}
            >
              {[
                "Inbound Contact Center",
                "Outbound Sales & Collections",
                "Back-office & Data Ops",
                "KPO · LPO · RPO",
                "Finance & HR BPO",
                "Healthcare, Logistics, Retail, Tech",
              ].map((chip) => (
                <motion.div
                  key={chip}
                  variants={fadeInUp}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: `1px solid ${brand.border}`,
                    backgroundColor: brand.bgSoft,
                    fontSize: 13,
                    color: brand.textMid,
                  }}
                >
                  {chip}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= INBOUND & OUTBOUND IN ONE SECTION ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0",
            backgroundColor: brand.bgSoft,
          }}
          data-inbound-outbound
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1.1fr)",
                gap: 32,
                marginBottom: 40,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    borderRadius: 999,
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${brand.border}`,
                    marginBottom: 12,
                  }}
                >
                  <Headphones size={16} style={{ color: brand.accent }} />
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: brand.textMid,
                    }}
                  >
                    Inbound Contact Center
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    marginBottom: 8,
                    color: brand.textDark,
                  }}
                >
                  Inbound BPO: every call, chat, and email answered.
                </h2>
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: brand.textMid,
                    lineHeight: 1.7,
                  }}
                >
                  Customer support, technical helpdesk, order desks, and billing
                  queries—handled by trained agents with clear scripts and
                  defined SLAs.
                </p>
              </div>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 14px",
                    borderRadius: 999,
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${brand.border}`,
                    marginBottom: 12,
                  }}
                >
                  <PhoneCall size={16} style={{ color: brand.accent }} />
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: brand.textMid,
                    }}
                  >
                    Outbound Contact Center
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    marginBottom: 8,
                    color: brand.textDark,
                  }}
                >
                  Outbound BPO: revenue, feedback & follow-ups.
                </h2>
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: brand.textMid,
                    lineHeight: 1.7,
                  }}
                >
                  From lead generation to collections and surveys, outbound
                  lanes are built for clarity, empathy, and high performance.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                gap: 24,
              }}
            >
              {/* inbound column */}
              <motion.div variants={stagger}>
                {inboundServices.map((svc) => (
                  <motion.div
                    key={svc.title}
                    variants={fadeInUp}
                    style={{
                      marginBottom: 16,
                      padding: 18,
                      borderRadius: 18,
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${brand.border}`,
                      display: "flex",
                      gap: 14,
                    }}
                  >
                    <svc.icon
                      style={{
                        width: 28,
                        height: 28,
                        color: brand.accent,
                        marginTop: 4,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          marginBottom: 4,
                          color: brand.textDark,
                        }}
                      >
                        {svc.title}
                      </div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: brand.textMid,
                          lineHeight: 1.6,
                          marginBottom: 6,
                        }}
                      >
                        {svc.desc}
                      </p>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
                      >
                        {svc.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: 11,
                              padding: "3px 8px",
                              borderRadius: 999,
                              backgroundColor: brand.bgSoft,
                              border: `1px solid ${brand.border}`,
                              color: brand.textMid,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* outbound column */}
              <motion.div variants={stagger}>
                {outboundServices.map((svc) => (
                  <motion.div
                    key={svc.title}
                    variants={fadeInUp}
                    style={{
                      marginBottom: 16,
                      padding: 18,
                      borderRadius: 18,
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${brand.border}`,
                      display: "flex",
                      gap: 14,
                    }}
                  >
                    <svc.icon
                      style={{
                        width: 28,
                        height: 28,
                        color: brand.accent,
                        marginTop: 4,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          marginBottom: 4,
                          color: brand.textDark,
                        }}
                      >
                        {svc.title}
                      </div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: brand.textMid,
                          lineHeight: 1.6,
                          marginBottom: 6,
                        }}
                      >
                        {svc.desc}
                      </p>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
                      >
                        {svc.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: 11,
                              padding: "3px 8px",
                              borderRadius: 999,
                              backgroundColor: brand.bgSoft,
                              border: `1px solid ${brand.border}`,
                              color: brand.textMid,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ================= BACK-OFFICE & DATA ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0",
            backgroundColor: "#FFFFFF",
          }}
          data-backoffice
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Database
                style={{
                  width: 50,
                  height: 50,
                  color: brand.accent,
                  marginBottom: 10,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(2rem,3.3vw,2.4rem)",
                  fontWeight: 800,
                  marginBottom: 10,
                  color: brand.textDark,
                  letterSpacing: "-0.05em",
                }}
              >
                Back-office & Data BPO: the work no one else has time for.
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: brand.textMid,
                  maxWidth: 700,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Data entry, processing, documentation, catalog management,
                MIS—the quiet work that keeps everything else running.
              </p>
            </div>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 24,
              }}
            >
              {backOfficeServices.map((svc) => (
                <motion.div
                  key={svc.title}
                  variants={fadeInUp}
                  style={{
                    borderRadius: 22,
                    border: `1px solid ${brand.border}`,
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
                    padding: 22,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at top, rgba(169,36,39,0.05), transparent 60%)",
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <svc.icon
                      style={{
                        width: 32,
                        height: 32,
                        color: brand.accent,
                        marginBottom: 10,
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: brand.textDark,
                        marginBottom: 6,
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: brand.textMid,
                        lineHeight: 1.6,
                        marginBottom: 8,
                      }}
                    >
                      {svc.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {svc.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 11,
                            padding: "3px 8px",
                            borderRadius: 999,
                            backgroundColor: brand.bgSoft,
                            color: brand.textMid,
                            border: `1px solid ${brand.border}`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= KPO / LPO / RPO ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0",
            backgroundColor: brand.bgSoft,
          }}
          data-kpo
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Activity
                style={{
                  width: 50,
                  height: 50,
                  color: brand.accent,
                  marginBottom: 10,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(2rem,3.3vw,2.4rem)",
                  fontWeight: 800,
                  marginBottom: 10,
                  color: brand.textDark,
                  letterSpacing: "-0.05em",
                }}
              >
                Knowledge, Legal & Recruitment BPO.
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: brand.textMid,
                  maxWidth: 720,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Analytics, research, contracts, hiring pipelines—complex work
                that still benefits from structure and scale.
              </p>
            </div>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {knowledgeProcessServices.map((svc) => (
                <motion.div
                  key={svc.title}
                  variants={fadeInUp}
                  style={{
                    borderRadius: 20,
                    border: `1px solid ${brand.border}`,
                    backgroundColor: "#FFFFFF",
                    padding: 22,
                    boxShadow: "0 12px 26px rgba(15,23,42,0.06)",
                  }}
                >
                  <svc.icon
                    style={{
                      width: 30,
                      height: 30,
                      color: brand.accent,
                      marginBottom: 10,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: brand.textDark,
                      marginBottom: 6,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: brand.textMid,
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {svc.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          padding: "3px 8px",
                          borderRadius: 999,
                          backgroundColor: brand.bgSoft,
                          color: brand.textMid,
                          border: `1px solid ${brand.border}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= FINANCE & HR ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0",
            backgroundColor: "#FFFFFF",
          }}
          data-finance-hr
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <CreditCard
                style={{
                  width: 50,
                  height: 50,
                  color: brand.accent,
                  marginBottom: 10,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(2rem,3.3vw,2.4rem)",
                  fontWeight: 800,
                  marginBottom: 10,
                  color: brand.textDark,
                  letterSpacing: "-0.05em",
                }}
              >
                Finance & HR BPO: the engine room of operations.
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: brand.textMid,
                  maxWidth: 720,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Accurate numbers, clean payroll, responsive HR support—a
                foundation we handle with rigor and empathy.
              </p>
            </div>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {financeAndHrServices.map((svc) => (
                <motion.div
                  key={svc.title}
                  variants={fadeInUp}
                  style={{
                    borderRadius: 20,
                    border: `1px solid ${brand.border}`,
                    backgroundColor: "#FFFFFF",
                    padding: 22,
                    boxShadow: "0 12px 26px rgba(15,23,42,0.06)",
                  }}
                >
                  <svc.icon
                    style={{
                      width: 30,
                      height: 30,
                      color: brand.accent,
                      marginBottom: 10,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: brand.textDark,
                      marginBottom: 6,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: brand.textMid,
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {svc.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          padding: "3px 8px",
                          borderRadius: 999,
                          backgroundColor: brand.bgSoft,
                          color: brand.textMid,
                          border: `1px solid ${brand.border}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= INDUSTRY-SPECIFIC ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0",
            backgroundColor: brand.bgSoft,
          }}
          data-industry
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Globe
                style={{
                  width: 50,
                  height: 50,
                  color: brand.accent,
                  marginBottom: 10,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(2rem,3.3vw,2.4rem)",
                  fontWeight: 800,
                  marginBottom: 10,
                  color: brand.textDark,
                  letterSpacing: "-0.05em",
                }}
              >
                Vertical BPO pods for your industry.
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: brand.textMid,
                  maxWidth: 720,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Healthcare, logistics, retail, tech—each has its own vocabulary,
                workflows, and sensitivities. We design pods to match that
                reality.
              </p>
            </div>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {industrySpecials.map((svc) => (
                <motion.div
                  key={svc.title}
                  variants={fadeInUp}
                  style={{
                    borderRadius: 20,
                    border: `1px solid ${brand.border}`,
                    backgroundColor: "#FFFFFF",
                    padding: 22,
                    boxShadow: "0 12px 26px rgba(15,23,42,0.06)",
                  }}
                >
                  <svc.icon
                    style={{
                      width: 30,
                      height: 30,
                      color: brand.accent,
                      marginBottom: 10,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: brand.textDark,
                      marginBottom: 6,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: brand.textMid,
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {svc.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 11,
                          padding: "3px 8px",
                          borderRadius: 999,
                          backgroundColor: brand.bgSoft,
                          color: brand.textMid,
                          border: `1px solid ${brand.border}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= OMNICHANNEL & AUTOMATION (SECONDARY DARK) ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0",
            background:
              "radial-gradient(circle at top,#FEE2E2 0,transparent 55%),#0F172A",
            color: "#F9FAFB",
          }}
          data-omnichannel
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1.1fr)",
                gap: 32,
                alignItems: "flex-start",
              }}
            >
              <motion.div variants={fadeInUp}>
                <h2
                  style={{
                    fontSize: "clamp(2rem,3.3vw,2.4rem)",
                    fontWeight: 800,
                    marginBottom: 12,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Omnichannel & automation-ready from day one.
                </h2>
                <p
                  style={{
                    fontSize: "1.02rem",
                    color: "rgba(209,213,219,0.92)",
                    lineHeight: 1.8,
                    marginBottom: 14,
                  }}
                >
                  Phone, email, chat, ticketing tools, CRMs, ERPs—we connect to
                  your stack instead of forcing you into ours. Wherever
                  possible, bots and rules handle repetitive work first.
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(156,163,175,0.96)",
                    lineHeight: 1.8,
                  }}
                >
                  When judgment, empathy, or context is needed, our agents step
                  in—equipped with knowledge bases, workflows, and
                  automation-assisted screens.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    gap: 16,
                    marginTop: 18,
                  }}
                >
                  {[
                    {
                      icon: MessageCircle,
                      title: "Omnichannel Contact",
                      text: "Voice, email, chat, social media, and ticketing integrated into a single workflow.",
                    },
                    {
                      icon: Zap,
                      title: "Workflow Automation",
                      text: "Macros, templates, routing rules, and bots to handle repetitive queries first.",
                    },
                    {
                      icon: Shield,
                      title: "Secure Integrations",
                      text: "API-based connections with your systems while respecting security and compliance.",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      style={{
                        padding: 16,
                        borderRadius: 18,
                        background:
                          "linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.6))",
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
                        <c.icon size={18} style={{ color: brand.accent }} />
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#E5E7EB",
                          }}
                        >
                          {c.title}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.86rem",
                          color: "rgba(209,213,219,0.9)",
                          lineHeight: 1.7,
                        }}
                      >
                        {c.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                style={{
                  borderRadius: 22,
                  padding: 22,
                  background:
                    "linear-gradient(135deg,#0F172A 0%,#111827 40%,#020617 100%)",
                  border: "1px solid rgba(148,163,184,0.7)",
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
                  ANY TOOL, ANY STACK
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(243,244,246,0.96)",
                    marginBottom: 10,
                  }}
                >
                  Whether you use modern SaaS CRMs or legacy systems, we adapt
                  our processes to your tools. The goal is not disruption— only
                  better, more consistent execution.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "rgba(156,163,175,0.96)",
                  }}
                >
                  New process tomorrow? New geography? New product line? You
                  don&apos;t start over. You plug another lane into the BPO
                  fabric you already trust.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ================= JOURNEY ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          style={{
            padding: "80px 0",
            backgroundColor: "#FFFFFF",
          }}
          data-journey
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem,3.3vw,2.4rem)",
                fontWeight: 800,
                textAlign: "center",
                marginBottom: 10,
                letterSpacing: "-0.05em",
                color: brand.textDark,
              }}
            >
              Your BPO journey, designed step by step.
            </h2>
            <p
              style={{
                fontSize: "1.02rem",
                color: brand.textMid,
                textAlign: "center",
                maxWidth: 700,
                margin: "0 auto 36px auto",
                lineHeight: 1.7,
              }}
            >
              We don&apos;t just add seats. We design the process, the pod, and
              the playbook—so any future BPO requirement has a place to land.
            </p>

            <motion.div
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: 18,
              }}
            >
              {[
                {
                  label: "Phase 01",
                  title: "Scope & Story Discovery",
                  text: "We map volumes, channels, SLAs, pain points, and your future roadmap.",
                },
                {
                  label: "Phase 02",
                  title: "Solution & Lane Design",
                  text: "We define lanes, seats, skills, schedules, and reporting per BPO area.",
                },
                {
                  label: "Phase 03",
                  title: "Playbooks & Training",
                  text: "We create SOPs, scripts, knowledge bases, and integrate tools.",
                },
                {
                  label: "Phase 04",
                  title: "Pilot, Scale & Expansion",
                  text: "We stabilize, refine, then add more processes into the same fabric.",
                },
              ].map((p, idx) => (
                <motion.div
                  key={p.title}
                  variants={fadeInUp}
                  style={{
                    position: "relative",
                    padding: 20,
                    borderRadius: 20,
                    backgroundColor: brand.bgSoft,
                    border: `1px solid ${brand.border}`,
                    boxShadow: "0 10px 24px rgba(15,23,42,0.04)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 18,
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: "rgba(148,163,184,0.9)",
                    }}
                  >
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "4px 10px",
                      borderRadius: 999,
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${brand.border}`,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {p.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginBottom: 6,
                      color: brand.textDark,
                    }}
                  >
                    {p.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.93rem",
                      color: brand.textMid,
                      lineHeight: 1.7,
                    }}
                  >
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ================= FINAL CTA ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{
            paddingTop: 80,
            paddingBottom: 80,
            background: brand.accent,
            color: "#FFFFFF",
            position: "relative",
            overflow: "hidden",
            width: "100vw",
            boxSizing: "border-box",
          }}
          data-cta
        >
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
              <Headphones style={{ width: 48, height: 48, color: "white" }} />
            </motion.div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: 18,
                letterSpacing: "-0.06em",
              }}
            >
              Ready to hand over your BPO workload—of any kind?
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
              Share what you&apos;re dealing with—support, data, finance, HR,
              legal, industry operations, or something entirely custom.
              We&apos;ll shape a BPO pod that fits and grows with you.
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
                  backgroundColor: "#FFFFFF",
                  color: brand.accent,
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
                Schedule a BPO Consultation
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: brand.accent,
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "transparent",
                  border: `2px solid #FFFFFF`,
                  color: "#FFFFFF",
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
                Share Your BPO Requirements
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* RESPONSIVE TWEAKS */}
      <style jsx>{`
        @media (max-width: 1024px) {
          [data-story] > div,
          [data-inbound-outbound] > div,
          [data-omnichannel] > div,
          [data-journey] > div {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          [data-hero] {
            padding-top: 120px !important;
            padding-bottom: 90px !important;
          }
          [data-hero] h1 {
            font-size: 2.4rem !important;
          }
          [data-hero] p {
            font-size: 1rem !important;
          }
          section {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }

        @media (max-width: 480px) {
          [data-hero] h1 {
            font-size: 2.1rem !important;
          }
        }
      `}</style>
    </>
  );
}
