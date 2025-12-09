import { color, motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
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
} from "lucide-react";

import Opscale from "../../assets/productLogos/opscale.png";

export default function MilkDairyManagement() {
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const departments = {
    Procurement: {
      icon: ClipboardList,
      color: ["#3b82f6", "#06b6d4"], // from-blue-500 to-cyan-500
      bgColor: ["#eff6ff", "#cffafe"], // from-blue-50 to-cyan-50
      description:
        "Streamline your procurement operations with intelligent task management, comprehensive reporting, and automated contract handling.",
      modules: [
        {
          icon: FileText,
          name: "Task Management",
          description:
            "Comprehensive task tracking system that enables efficient assignment, monitoring, and completion of procurement-related activities. Track deadlines, assign responsibilities, and monitor progress in real-time with automated notifications and reminders.",
          features: [
            "Task Assignment",
            "Progress Tracking",
            "Deadline Alerts",
            "Priority Management",
          ],
        },
        {
          icon: BarChart3,
          name: "RMRD and Report Management",
          description:
            "Raw Material Receipt and Dispatch management with advanced reporting capabilities. Generate detailed analytics reports on procurement activities, supplier performance, and inventory movements with customizable templates and automated scheduling.",
          features: [
            "Receipt Tracking",
            "Dispatch Management",
            "Analytics Reports",
            "Custom Templates",
          ],
        },
        {
          icon: FileText,
          name: "Contract Management",
          description:
            "Digital contract lifecycle management from creation to renewal. Store all contracts securely, track expiration dates, manage amendments, and ensure compliance with automated alerts for important milestones and renewal deadlines.",
          features: [
            "Digital Contracts",
            "Expiry Alerts",
            "Amendment Tracking",
            "Compliance Management",
          ],
        },
        {
          icon: Package,
          name: "Store Management",
          description:
            "Efficient warehouse and storage facility management system. Track inventory levels, manage stock movements, optimize storage space, and maintain optimal stock levels with automated reorder points and smart inventory forecasting.",
          features: [
            "Inventory Control",
            "Space Optimization",
            "Stock Alerts",
            "Movement Tracking",
          ],
        },
      ],
    },
    "Village Level Agent": {
      icon: Users,
      color: ["#22c55e", "#10b981"], // from-green-500 to-emerald-500
      bgColor: ["#dcfce7", "#bbf7d0"], // from-green-50 to-emerald-50
      description:
        "Empower your village-level operations with seamless milk collection, accurate billing, and real-time quality analysis for complete transparency.",
      modules: [
        {
          icon: Layers,
          name: "Milk Collection System",
          description:
            "Advanced digital milk collection platform that records every transaction at the village level. Capture collection data with precision including quantity, fat content, SNF levels, and farmer details with support for mobile and offline data entry.",
          features: [
            "Digital Recording",
            "Offline Support",
            "Quality Parameters",
            "Farmer Profiles",
          ],
        },
        {
          icon: DollarSign,
          name: "Milk Bills",
          description:
            "Automated billing system that generates accurate payment calculations based on quantity and quality parameters. Create instant digital bills, manage payment schedules, and provide transparent payment breakdowns to farmers with historical transaction records.",
          features: [
            "Auto Calculation",
            "Digital Bills",
            "Payment Schedules",
            "Transaction History",
          ],
        },
        {
          icon: Activity,
          name: "Milk Analysis",
          description:
            "Real-time milk quality analysis and testing system. Record and track fat percentage, SNF, protein content, and detect adulterants. Generate quality certificates and maintain comprehensive testing records for complete traceability.",
          features: [
            "Quality Testing",
            "Adulteration Detection",
            "Quality Certificates",
            "Testing Records",
          ],
        },
      ],
    },
    Production: {
      icon: Factory,
      color: ["#8b5cf6", "#ec4899"], // from-purple-500 to-pink-500
      bgColor: ["#f5f3ff", "#fce7f3"], // from-purple-50 to-pink-50
      description:
        "Optimize your production processes with intelligent planning, real-time monitoring, and comprehensive quality assurance systems.",
      modules: [
        {
          icon: Settings,
          name: "Production",
          description:
            "End-to-end production management system covering planning, scheduling, and execution. Manage production batches, track raw material usage, monitor equipment efficiency, and maintain detailed production logs with batch traceability and waste management.",
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
            "Advanced analytics platform for production performance monitoring. Analyze production efficiency, identify bottlenecks, track KPIs, and generate actionable insights with predictive analytics to optimize production processes and reduce costs.",
          features: [
            "Efficiency Metrics",
            "Bottleneck Analysis",
            "KPI Tracking",
            "Predictive Analytics",
          ],
        },
        {
          icon: Award,
          name: "Quality Reports",
          description:
            "Comprehensive quality assurance and control reporting system. Generate detailed quality reports, track compliance with standards, monitor product consistency, and maintain audit trails for certifications and regulatory compliance requirements.",
          features: [
            "Quality Metrics",
            "Compliance Tracking",
            "Audit Trails",
            "Certification Management",
          ],
        },
      ],
    },
    Sales: {
      icon: ShoppingCart,
      color: ["#f97316", "#ef4444"], // from-orange-500 to-red-500
      bgColor: ["#fff7ed", "#fee2e2"], // from-orange-50 to-red-50
      description:
        "Accelerate your sales operations with intelligent indent management, real-time tracking, and seamless payment integration.",
      modules: [
        {
          icon: FileText,
          name: "Indent",
          description:
            "Digital indent management system for order processing and fulfillment. Create, approve, and track indents in real-time, manage product specifications, quantities, and delivery schedules with automated workflows and approval hierarchies.",
          features: [
            "Digital Orders",
            "Approval Workflows",
            "Specification Management",
            "Delivery Scheduling",
          ],
        },
        {
          icon: TrendingUp,
          name: "Sales Tracking",
          description:
            "Comprehensive sales performance monitoring and analytics platform. Track sales metrics, monitor revenue trends, analyze customer behavior, and generate detailed sales reports with forecasting capabilities and target achievement monitoring.",
          features: [
            "Performance Metrics",
            "Revenue Analysis",
            "Customer Insights",
            "Sales Forecasting",
          ],
        },
        {
          icon: UserCheck,
          name: "Agent Service",
          description:
            "Complete agent and distributor management system. Manage agent profiles, track performance, handle commissions, and monitor territory-wise sales with automated incentive calculations and performance-based rewards management.",
          features: [
            "Agent Profiles",
            "Commission Management",
            "Territory Tracking",
            "Performance Rewards",
          ],
        },
        {
          icon: Navigation,
          name: "Vehicle Tracking",
          description:
            "Real-time vehicle and delivery tracking system. Monitor vehicle locations, track delivery routes, optimize logistics, and ensure timely deliveries with GPS integration, route optimization, and automated delivery confirmations.",
          features: [
            "GPS Tracking",
            "Route Optimization",
            "Delivery Status",
            "Fleet Management",
          ],
        },
        {
          icon: CreditCard,
          name: "Payment Gateway",
          description:
            "Secure integrated payment processing system supporting multiple payment methods. Process online payments, manage transactions, generate receipts, and maintain payment history with PCI-compliant security and automated reconciliation.",
          features: [
            "Multiple Payment Methods",
            "Secure Processing",
            "Auto Reconciliation",
            "Digital Receipts",
          ],
        },
      ],
    },
    "HR Management": {
      icon: UserCheck,
      color: ["#6366f1", "#3b82f6"], // from-indigo-500 to-blue-500
      bgColor: ["#eef2ff", "#e0e7ff"], // from-indigo-50 to-blue-50
      description:
        "Transform your human resource management with digital attendance, smart leave management, and real-time employee location tracking.",
      modules: [
        {
          icon: Users,
          name: "Employees",
          description:
            "Centralized employee information management system. Maintain comprehensive employee profiles, manage documentation, track employment history, and handle organizational hierarchy with role-based access control and document management.",
          features: [
            "Employee Profiles",
            "Document Management",
            "Hierarchy Management",
            "Access Control",
          ],
        },
        {
          icon: Calendar,
          name: "Attendance",
          description:
            "Advanced attendance tracking and management system. Record daily attendance through multiple channels including biometric, mobile apps, and web portals. Generate attendance reports, track working hours, and manage shift schedules with overtime calculations.",
          features: [
            "Multi-channel Tracking",
            "Biometric Integration",
            "Shift Management",
            "Overtime Tracking",
          ],
        },
        {
          icon: Clock,
          name: "Leaves",
          description:
            "Comprehensive leave management system handling all types of employee leaves. Manage leave applications, approvals, and balances with automated workflows, leave policy configuration, and integration with attendance and payroll systems.",
          features: [
            "Leave Applications",
            "Approval Workflows",
            "Balance Tracking",
            "Policy Configuration",
          ],
        },
        {
          icon: FileText,
          name: "Tasks",
          description:
            "Employee task assignment and tracking system. Assign tasks, set deadlines, monitor progress, and evaluate performance with task prioritization, collaborative features, and automated status updates for improved productivity.",
          features: [
            "Task Assignment",
            "Progress Monitoring",
            "Priority Management",
            "Performance Evaluation",
          ],
        },
        {
          icon: MapPin,
          name: "Live Locations",
          description:
            "Real-time employee location tracking system for field staff. Monitor field employee movements, track site visits, verify check-ins, and optimize field operations with geofencing capabilities and automated attendance marking.",
          features: [
            "GPS Tracking",
            "Geofencing",
            "Check-in Verification",
            "Site Visit Tracking",
          ],
        },
      ],
    },
    Logistics: {
      icon: Truck,
      color: ["#fbbf24", "#f97316"], // from-yellow-500 to-orange-500
      bgColor: ["#fef3c7", "#ffedd5"], // from-yellow-50 to-orange-50
      description:
        "Revolutionize your logistics operations with intelligent route planning, fleet management, and automated contract handling.",
      modules: [
        {
          icon: Navigation,
          name: "Route Management",
          description:
            "Intelligent route planning and optimization system. Design efficient delivery routes, optimize fuel consumption, reduce delivery time, and manage route assignments with real-time traffic integration and dynamic route adjustments.",
          features: [
            "Route Optimization",
            "Fuel Efficiency",
            "Traffic Integration",
            "Dynamic Routing",
          ],
        },
        {
          icon: Truck,
          name: "Vehicle Management",
          description:
            "Complete fleet management system for vehicle lifecycle tracking. Monitor vehicle health, schedule maintenance, track fuel consumption, manage insurance and permits, and maintain service records with automated alerts for renewals and servicing.",
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
            "Comprehensive driver information and performance management system. Maintain driver profiles, track licenses and certifications, monitor driving behavior, and manage duty rosters with performance evaluation and training management.",
          features: [
            "Driver Profiles",
            "License Tracking",
            "Performance Monitoring",
            "Duty Rosters",
          ],
        },
        {
          icon: FileText,
          name: "Contracts",
          description:
            "Logistics contract management system for transporters and third-party vendors. Manage transportation contracts, track rates, handle renewals, and ensure compliance with automated rate calculations and contract performance monitoring.",
          features: [
            "Contract Lifecycle",
            "Rate Management",
            "Vendor Management",
            "Performance Tracking",
          ],
        },
      ],
    },
  };

  const heroSectionStyle = {
    position: "relative",
    width: "100vw",
    paddingTop: 140,
    paddingBottom: 140,
    paddingLeft: 24,
    paddingRight: 24,
    overflow: "hidden",

    // Dark premium gradient (kept)
    background:
      "linear-gradient(135deg, #060b18 0%, #0d182f 28%, #162a4d 65%, #090f1e 100%)",

    // subtle glow
    backgroundImage: `
    radial-gradient(circle at 25% 25%, rgba(100,150,255,0.15) 0%, transparent 45%),
    radial-gradient(circle at 75% 75%, rgba(200,120,255,0.15) 0%, transparent 45%)
  `,
  };

  const containerStyle = {
    width: "100%",
    maxWidth: 1150,
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
  };

  const floatingLayerStyle = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  };

  const premiumGridOverlay = {
    position: "absolute",
    inset: 0,
    backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
    backgroundSize: "60px 60px",
    opacity: 0.15,
    pointerEvents: "none",
  };

  /* ----- TEXT ------ */

  const heroTitle = {
    textAlign: "center",
    fontSize: "clamp(2.8rem, 6vw, 4rem)",
    fontWeight: 900,
    marginBottom: 24,

    display: "inline-block",
    width: "100%",
    lineHeight: "1.1",
    padding: "0.2em 0",

    // 🌈 Strong gradient
    background:
      "linear-gradient(135deg, #ffffff 0%, #f3f5ff 30%, #e4c6ff 60%, #ffb7ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    textShadow: `
    0 0 12px rgba(255, 255, 255, 0.35),
    0 0 22px rgba(200, 150, 255, 0.25),
    0 0 38px rgba(255, 160, 255, 0.20)
  `,

    letterSpacing: "-0.5px",
  };

  const heroSubtitle = {
    fontSize: "clamp(1.1rem, 2vw, 1.28rem)",
    color: "rgba(240,245,255,0.92)",
    textAlign: "center",
    maxWidth: 720,
    margin: "0 auto",
    lineHeight: 1.7,
  };

  /* ----- ICON ------ */

  const iconWrapper = {
    display: "flex",
    justifyContent: "center",
    marginBottom: 32,
  };

  const iconInner = {
    backdropFilter: "blur(20px)",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(180,180,255,0.14))",
    borderRadius: 36,
    padding: 26,
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
  };

  /* ------ STATS ------ */

  const statsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: 30,
    marginTop: 60,
    maxWidth: 900,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const statCard = {
    padding: 34,
    borderRadius: 22,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(25px)",
    textAlign: "center",
    cursor: "default",
    position: "relative",
    overflow: "hidden",
  };

  const statNumber = {
    fontSize: "3rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #8fb7ff, #ff8bf2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const statLabel = {
    marginTop: 6,
    fontSize: "0.95rem",
    color: "rgba(235,245,255,0.88)",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  };

  const shimmer = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
    opacity: 0,
  };

  /* ------ PARTICLES ------ */

  const particles = Array.from({ length: 40 }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dx: Math.random() * 15 + 5,
    dy: Math.random() * 20 + 10,
    size: Math.random() * 5 + 3,
    duration: Math.random() * 20 + 12,
    delay: Math.random() * 4,
  }));

  const floatingParticleStyle = (p) => ({
    position: "absolute",
    top: `${p.y}%`,
    left: `${p.x}%`,
    width: p.size,
    height: p.size,
    borderRadius: "50%",
    background: "rgba(150,180,255,0.45)",
    filter: "blur(1.2px)",
  });

  /* ----- BLOBS ----- */

  const dynamicShapesWrapper = {
    position: "absolute",
    inset: 0,
    opacity: 0.45,
  };

  const heroBlobStyle = (pos) => ({
    position: "absolute",
    width: 550,
    height: 550,
    borderRadius: "50%",
    filter: "blur(90px)",
    background:
      "radial-gradient(circle, rgba(90,130,255,0.25), rgba(200,120,255,0.22), transparent)",
    ...pos,
  });

  // ⭐ STATIC STAR STYLE
  const staticStarStyle = (s) => ({
    position: "absolute",
    top: `${s.y}%`,
    left: `${s.x}%`,
    width: s.size,
    height: s.size,
    borderRadius: "50%",
    background: "white",
    opacity: 0.8,
  });

  // ✨ FLOATING GLOW STAR STYLE
  const floatingStarStyle = (s) => ({
    position: "absolute",
    top: `${s.y}%`,
    left: `${s.x}%`,
    width: s.size,
    height: s.size,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0 0 10px rgba(255,255,255,0.9)",
  });

  // 🌠 SHOOTING STAR STYLE
  const shootingStarStyle = {
    position: "absolute",
    width: 2,
    height: 90,
    borderRadius: 2,
    background: "linear-gradient(180deg, white, transparent)",
    opacity: 0.9,
  };

  /* ---------------- ANIMATIONS (unchanged) ---------------- */

  const floatingShapeAnim1 = {
    scale: [1, 1.25, 1],
    x: [0, 50, 0],
    y: [0, 40, 0],
  };

  const floatingShapeAnim2 = {
    scale: [1.2, 1, 1.2],
    x: [0, -60, 0],
    y: [0, -45, 0],
  };

  const floatingShapeAnim3 = {
    rotate: [0, 120, 0],
    scale: [1.1, 1.4, 1.1],
  };

  // ⭐ STATIC TWINKLING STARS
  const staticStars = Array.from({ length: 40 }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));

  // ✨ FLOATING GLOW STARS
  const floatingStars = Array.from({ length: 20 }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    dx: Math.random() * 10 - 5,
    dy: Math.random() * 10 - 5,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 5,
  }));

  // 🌠 SHOOTING STARS
  const shootingStars = Array.from({ length: 5 }, (_, id) => ({
    id,
    startX: Math.random() * 100,
    startY: Math.random() * 50,
    endX: Math.random() * 120 - 10,
    endY: Math.random() * 120 - 10,
    duration: Math.random() * 1.5 + 1.2,
    delay: Math.random() * 8,
  }));

  const departmentSectionStyle = (bgColor, isGradient = false) => ({
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: isGradient ? undefined : bgColor[0],
    backgroundImage: isGradient
      ? `linear-gradient(135deg, ${bgColor[0]}, ${bgColor[1]})`
      : undefined,
    // 👇 full-width background fix
    width: "100vw",
    boxSizing: "border-box",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(135deg, #0b0f1d 0%, #111a33 40%, #1a2b47 70%, #231f3f 100%)",
        width: "100vw", // ensure full width
        overflowX: "hidden", // avoid horizontal scroll from 100vw
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={heroSectionStyle}
      >
        {/* Floating Interactive Particles */}
        <div style={floatingLayerStyle}>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              style={floatingParticleStyle(p)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                x: [p.x, p.x + p.dx, p.x - p.dx, p.x],
                y: [p.y, p.y - p.dy, p.y + p.dy, p.y],
                opacity: [0.18, 0.35, 0.18], // balanced brightness
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>

        {/* Background Dynamic Shapes */}
        <div style={dynamicShapesWrapper}>
          <motion.div
            animate={floatingShapeAnim1}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            style={heroBlobStyle({ top: "-20%", left: "-10%" })}
          />
          <motion.div
            animate={floatingShapeAnim2}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
            style={heroBlobStyle({ bottom: "-22%", right: "-15%" })}
          />
          <motion.div
            animate={floatingShapeAnim3}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
            style={heroBlobStyle({
              top: "45%",
              left: "50%",
              transform: "translateX(-50%)",
            })}
          />
        </div>

        {/* Premium Grid Overlay */}
        <div style={premiumGridOverlay} />

        {/* 🌌 STAR FIELD LAYER */}
        <div style={floatingLayerStyle}>
          {/* ⭐ Static Twinkling Stars */}
          {staticStars.map((s) => (
            <motion.div
              key={"static-" + s.id}
              style={staticStarStyle(s)}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: s.delay,
              }}
            />
          ))}

          {/* ✨ Floating Glowing Stars */}
          {floatingStars.map((s) => (
            <motion.div
              key={"float-" + s.id}
              style={floatingStarStyle(s)}
              initial={{ opacity: 0.4 }}
              animate={{
                x: [0, s.dx, 0],
                y: [0, s.dy, 0],
                opacity: [0.2, 0.9, 0.3],
              }}
              transition={{
                duration: s.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: s.delay,
              }}
            />
          ))}

          {/* 🌠 Shooting Stars (Correct Opposite Tails) */}
          {shootingStars.map((s) => {
            const dx = s.endX - s.startX;
            const dy = s.endY - s.startY;

            // Angle in degrees for movement
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            // Tail angle must face the opposite direction
            const tailAngle = angle + 270;

            // Tail length proportional to movement distance
            const distance = Math.sqrt(dx * dx + dy * dy);

            return (
              <motion.div
                key={"shoot-" + s.id}
                style={{
                  position: "absolute",
                  top: `${s.startY}%`,
                  left: `${s.startX}%`,

                  // The ★ tail
                  width: 2,
                  height: distance * 0.45, // subtle but visible
                  background: "linear-gradient(to top, white, transparent)",
                  borderRadius: 2,
                  opacity: 0.6,

                  // ⭐ rotate trail in opposite direction
                  transform: `rotate(${tailAngle}deg)`,

                  // ⭐ tail grows behind the star
                  transformOrigin: "bottom left",
                }}
                initial={{ opacity: 0 }}
                animate={{
                  top: [`${s.startY}%`, `${s.endY}%`],
                  left: [`${s.startX}%`, `${s.endX}%`],
                  opacity: [0, 1, 0.2],
                }}
                transition={{
                  duration: s.duration,
                  repeat: Infinity,
                  delay: s.delay,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>

        {/* ---------------- CONTENT ---------------- */}
        <div style={containerStyle}>
          {/* Icon Container */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              y: [0, -6, 0], // subtle float
            }}
            transition={{
              duration: 0.6,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.12,
              filter: "drop-shadow(0 0 18px rgba(255,255,255,0.5))",
            }}
            style={iconWrapper}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 18px rgba(255,255,255,0.18)",
                  "0 0 28px rgba(180,160,255,0.35)",
                  "0 0 18px rgba(255,255,255,0.18)",
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={iconInner}
            >
              <img
                src={Opscale}
                alt="Milk Dairy"
                style={{ width: "auto", height: 36 }}
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={heroTitle}
          >
            Milk Dairy Management System
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={heroSubtitle}
          >
            A modern, AI-powered dairy operations suite built for automation,
            transparency, and real-time decision-making — from milk collection
            to distribution.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={statsGrid}
          >
            {[
              { number: "6", label: "Departments" },
              { number: "20+", label: "Smart AI Modules" },
              { number: "100%", label: "Automation" },
              { number: "24/7", label: "Support" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.09, y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                style={statCard}
              >
                <motion.div style={shimmer} whileHover={{ x: "100%" }} />
                <div style={statNumber}>{s.number}</div>
                <div style={statLabel}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Departments and Modules */}
      {Object.entries(departments).map(([deptName, dept], deptIdx) => {
        const isEven = deptIdx % 2 === 0;
        const sectionStyle = departmentSectionStyle(dept.bgColor, !isEven);
        const deptColorStart = dept.color[0];
        const deptColorEnd = dept.color[1];

        return (
          <motion.section
            key={deptName}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={sectionStyle}
          >
            <div
              style={{
                maxWidth: 1120,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {/* Department Header */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: "center", marginBottom: 64 }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: `linear-gradient(90deg, ${deptColorStart}, ${deptColorEnd})`,
                    borderRadius: 24,
                    padding: 16,
                    marginBottom: 24,
                    boxShadow: `0 4px 10px -3px ${deptColorEnd}`,
                  }}
                >
                  <dept.icon
                    style={{ width: 48, height: 48, color: "white" }}
                  />
                </div>

                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.5rem)", // responsive
                    fontWeight: "700",
                    marginBottom: 16,
                    color: "#27272a",
                  }}
                >
                  {deptName}
                </h2>

                <div
                  style={{
                    width: 128,
                    height: 4,
                    background: `linear-gradient(90deg, ${deptColorStart}, ${deptColorEnd})`,
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: 9999,
                    marginBottom: 24,
                  }}
                />

                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#52525b",
                    maxWidth: 480,
                    marginLeft: "auto",
                    marginRight: "auto",
                    lineHeight: 1.5,
                  }}
                >
                  {dept.description}
                </p>
              </motion.div>

              {/* Modules Grid */}
              <motion.div
                variants={staggerContainer}
                style={{
                  display: "grid",
                  gap: 32,
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                }}
              >
                {dept.modules.map((module, moduleIdx) => {
                  const isActive = activeModule === `${deptName}-${moduleIdx}`;

                  return (
                    <motion.div
                      key={moduleIdx}
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                      }}
                      onHoverStart={() =>
                        setActiveModule(`${deptName}-${moduleIdx}`)
                      }
                      onHoverEnd={() => setActiveModule(null)}
                      style={{
                        backgroundColor: "white",
                        borderRadius: 48,
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                        border: "1px solid #f3f4f6",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          gap: 0,
                        }}
                      >
                        {/* Module Icon & Name */}
                        <div
                          style={{
                            flexBasis: "100%",
                            backgroundImage: `linear-gradient(135deg, ${deptColorStart}, ${deptColorEnd})`,
                            padding: 32,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            minWidth: 200,
                          }}
                        >
                          <motion.div
                            animate={isActive ? { rotate: 360 } : {}}
                            transition={{ duration: 0.6 }}
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              backdropFilter: "blur(6px)",
                              borderRadius: 24,
                              padding: 24,
                              marginBottom: 24,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <module.icon style={{ width: 64, height: 64 }} />
                          </motion.div>

                          <h3
                            style={{
                              fontSize: "clamp(1.4rem, 3vw, 1.875rem)", // responsive
                              fontWeight: "700",
                              textAlign: "center",
                              marginBottom: 16,
                            }}
                          >
                            {module.name}
                          </h3>

                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                              height: 4,
                              backgroundColor: "rgba(255,255,255,0.3)",
                              borderRadius: 9999,
                            }}
                          />
                        </div>

                        {/* Module Details */}
                        <div
                          style={{
                            flexBasis: "100%",
                            padding: 32,
                            minWidth: 280,
                          }}
                        >
                          <p
                            style={{
                              color: "#374151",
                              fontSize: "1.05rem",
                              lineHeight: 1.6,
                              marginBottom: 24,
                            }}
                          >
                            {module.description}
                          </p>

                          {/* Features */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 12,
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                color: "#6b7280",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                marginBottom: 16,
                              }}
                            >
                              Key Features
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
                                <motion.div
                                  key={featureIdx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: featureIdx * 0.1 }}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    userSelect: "none",
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundImage: `linear-gradient(90deg, ${deptColorStart}, ${deptColorEnd})`,
                                      borderRadius: "50%",
                                      padding: 6,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                                      transition: "transform 0.3s ease",
                                    }}
                                    className="group"
                                  >
                                    <CheckCircle
                                      style={{
                                        width: 16,
                                        height: 16,
                                        color: "white",
                                      }}
                                    />
                                  </div>
                                  <span
                                    style={{
                                      color: "#374151",
                                      fontWeight: 500,
                                      transition: "color 0.3s ease",
                                    }}
                                  >
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
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

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
          background: "linear-gradient(90deg, #2563eb, #4f46e5, #8b5cf6)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          width: "100vw", // full width
          boxSizing: "border-box",
        }}
      >
        {/* Animated particles */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            pointerEvents: "none",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "white",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div
          style={{
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            style={{ display: "inline-block", marginBottom: 24 }}
          >
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                borderRadius: "50%",
                padding: 16,
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Zap style={{ width: 48, height: 48 }} />
            </div>
          </motion.div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
              fontWeight: "700",
              marginBottom: 24,
            }}
          >
            Ready to Transform Your Dairy Operations?
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              marginBottom: 32,
              color: "rgba(203, 240, 255, 0.8)",
              maxWidth: 512,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            Join leading dairy enterprises using our comprehensive system to
            increase efficiency, transparency, and profitability across all
            operations.
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
                backgroundColor: "white",
                color: "#2563eb",
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: "1.125rem",
                boxShadow: "0 10px 20px rgba(255, 255, 255, 0.4)",
                cursor: "pointer",
                border: "none",
                transition: "box-shadow 0.3s, transform 0.3s",
                width: "100%",
                maxWidth: 280,
              }}
            >
              Schedule a Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
                color: "white",
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: "1.125rem",
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s, transform 0.3s",
                width: "100%",
                maxWidth: 280,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#2563eb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
