import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";

import {
  MonitorSmartphone,
  Globe,
  Activity,
  FileText,
  Shield,
  Headphones,
  TrendingUp,
  Settings,
  FileMinus,
  Languages,
  ChartNetwork,
  ShieldCheck,
  Shredder,
  Cog,
  Workflow,
  GitMerge,
} from "lucide-react";

import FeatureIcon from "../components/FeatureIcon";
import PrinciplesSection from "../components/PrinciplesSection";
import Footer from "../components/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const features = [
    {
      icon: (
        <FeatureIcon>
          <MonitorSmartphone size={48} />
        </FeatureIcon>
      ),
      text: "MultiDevice Support",
      desc: "Access your platform seamlessly across desktop, tablet, and mobile devices. Work anytime, anywhere, without interruptions or compatibility issues.",
    },
    {
      icon: (
        <FeatureIcon>
          <Languages size={48} />
        </FeatureIcon>
      ),
      text: "MultiLanguage Support",
      desc: "Reach a global audience with full multilingual support. Users can interact in their preferred language, enhancing accessibility and engagement.",
    },
    {
      icon: (
        <FeatureIcon>
          <Activity size={48} />
        </FeatureIcon>
      ),
      text: "Tracking and Analysis",
      desc: "Monitor activities and workflows in real-time. Gain actionable insights from detailed tracking to optimize efficiency and performance.",
    },
    {
      icon: (
        <FeatureIcon>
          <ChartNetwork size={48} />
        </FeatureIcon>
      ),
      text: "Analysis and Reports",
      desc: "Generate comprehensive, easy-to-understand reports. Transform raw data into meaningful insights to drive smarter decisions.",
    },
    {
      icon: (
        <FeatureIcon>
          <ShieldCheck size={48} />
        </FeatureIcon>
      ),
      text: "Fully Secured",
      desc: "Your data is protected with enterprise-grade security protocols and encryption. We ensure privacy, integrity, and compliance at every level.",
    },
    {
      icon: (
        <FeatureIcon>
          <Headphones size={48} />
        </FeatureIcon>
      ),
      text: "24/7 Assistance",
      desc: "Receive round-the-clock support from our dedicated team. Any issues or queries are addressed promptly, ensuring uninterrupted operations.",
    },
    {
      icon: (
        <FeatureIcon>
          <TrendingUp size={48} />
        </FeatureIcon>
      ),
      text: "Increase your Productivity",
      desc: "Automate repetitive tasks and streamline workflows. Focus on what matters most while the system handles the rest efficiently.",
    },
    {
      icon: (
        <FeatureIcon>
          <Settings size={48} />
        </FeatureIcon>
      ),
      text: "Decrease the Manual Workflow",
      desc: "Minimize human intervention by automating processes. Reduce errors and save time with smoother, faster operations.",
    },
    {
      icon: (
        <FeatureIcon>
          <Shredder size={48} />
        </FeatureIcon>
      ),
      text: "Eliminates the Paper Work",
      desc: "Go fully digital with secure and organized documentation. Reduce clutter and improve accessibility while protecting sensitive information.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "System Uptime", delay: 0.1 },
    { value: "24/7", label: "Support Available", delay: 0.2 },
    { value: "2+", label: "Years Experience", delay: 0.3 },
  ];

  const styles = {
    wrapper: {
      width: "100%",
      marginTop: "80px",
      background: "#ffffff",
      overflow: "hidden",
    },

    heroSection: {
      height: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 20px",
      background:
        "linear-gradient(180deg, #ffffff 0%, #fef5f5 50%, #ffffff 100%)",
      overflow: "hidden",
    },

    gridOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(rgba(169, 36, 39, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(169, 36, 39, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
      pointerEvents: "none",
    },

    floatingShape: {
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
    },

    shape1: {
      width: "600px",
      height: "600px",
      background:
        "radial-gradient(circle, rgba(169, 36, 39, 0.15), transparent 70%)",
      top: "-200px",
      left: "-150px",
      filter: "blur(60px)",
    },

    shape2: {
      width: "500px",
      height: "500px",
      background:
        "radial-gradient(circle, rgba(255, 100, 100, 0.1), transparent 70%)",
      bottom: "-150px",
      right: "-100px",
      filter: "blur(70px)",
    },

    shape3: {
      width: "400px",
      height: "400px",
      background:
        "radial-gradient(circle, rgba(200, 50, 50, 0.08), transparent 70%)",
      top: "50%",
      right: "10%",
      filter: "blur(50px)",
    },

    heroContent: {
      top: "-15%",
      maxWidth: "1000px",
      zIndex: 10,
      position: "relative",
    },

    badge: {
      display: "inline-block",
      padding: "8px 20px",
      background: "rgba(169, 36, 39, 0.1)",
      border: "1px solid rgba(169, 36, 39, 0.2)",
      borderRadius: "30px",
      fontSize: "0.85rem",
      fontWeight: 600,
      color: "#a92427",
      marginBottom: "24px",
      letterSpacing: "0.5px",
    },

    heroTitle: {
      fontSize: "4.5rem",
      fontWeight: 900,
      color: "#1a1a1a",
      lineHeight: 1.1,
      marginBottom: "28px",
      letterSpacing: "-2px",
    },

    heroGradient: {
      background:
        "linear-gradient(135deg, #a92427 0%, #d63447 50%, #ff6b6b 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block",
    },

    heroSub: {
      fontSize: "1.3rem",
      color: "#555",
      maxWidth: "750px",
      margin: "0 auto",
      lineHeight: 1.7,
      fontWeight: 400,
    },

    ctaContainer: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40px",
      flexWrap: "wrap",
    },

    heroBtn: {
      display: "inline-block",
      padding: "16px 36px",
      borderRadius: "12px",
      background: "#a92427",
      color: "#fff",
      fontWeight: 700,
      fontSize: "1.05rem",
      textDecoration: "none",
      boxShadow: "0 10px 30px rgba(169, 36, 39, 0.3)",
      border: "none",
      cursor: "pointer",
      width: "max-content",
    },

    heroBtnSecondary: {
      display: "inline-block",
      padding: "16px 36px",
      borderRadius: "12px",
      background: "transparent",
      color: "#a92427",
      fontWeight: 700,
      fontSize: "1.05rem",
      textDecoration: "none",
      border: "2px solid #a92427",
      cursor: "pointer",
      width: "max-content",
    },

    scrollIndicator: {
      top: "75%",
      position: "absolute",
      bottom: "40px",
      left: "45%",
      transform: "translateX(10%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      color: "#a92427",
      fontSize: "0.85rem",
      fontWeight: 600,
    },

    mouse: {
      width: "28px",
      height: "44px",
      border: "2px solid #a92427",
      borderRadius: "20px",
      position: "relative",
    },

    mouseWheel: {
      width: "4px",
      height: "8px",
      background: "#a92427",
      borderRadius: "4px",
      position: "absolute",
      top: "8px",
      left: "43%",
      transform: "translateX(-50%)",
    },

    featuresSection: {
      padding: "120px 20px",
      background: "#ffffff",
      position: "relative",
    },

    sectionTitle: {
      fontSize: "3rem",
      fontWeight: 800,
      textAlign: "center",
      marginBottom: "20px",
      color: "#1a1a1a",
      letterSpacing: "-1px",
      width: "100%",
    },

    sectionSubtitle: {
      fontSize: "1.2rem",
      textAlign: "center",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto 80px",
      lineHeight: 1.6,
    },

    featuresGrid: {
      display: "flex",
      gap: "30px",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      flexWrap: "wrap",
    },

    featureCard: {
      flex: "0 0 25%",
      background: "#ffffff",
      padding: "40px 30px",
      borderRadius: "24px",
      border: "1px solid rgba(169, 36, 39, 0.1)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
      textAlign: "center",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      minWidth: "250px",
    },

    featureIcon: {
      fontSize: "3.5rem",
      marginBottom: "20px",
      display: "block",
      filter: "grayscale(0.3)",
    },

    featureTitle: {
      fontSize: "1.3rem",
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: "12px",
    },

    featureDesc: {
      fontSize: "0.95rem",
      color: "#666",
      lineHeight: 1.6,
    },

    customizationSection: {
      padding: "120px 20px",
      background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
      position: "relative",
      overflow: "hidden",
    },

    customizationContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },

    customizationContent: {
      textAlign: "center",
    },

    customizationBadge: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px", // spacing between icon and text
      padding: "10px 20px",
      background: "rgba(169, 36, 39, 0.08)",
      border: "1px solid rgba(169, 36, 39, 0.2)",
      borderRadius: "30px",
      fontSize: "0.9rem",
      fontWeight: 600,
      color: "#a92427",
      marginBottom: "24px",
      letterSpacing: "0.5px",
      width: "fit-content", // prevents stretching full width
      whiteSpace: "nowrap", // keeps text on one line
    },

    customizationTitle: {
      fontSize: "3rem",
      fontWeight: 800,
      color: "#1a1a1a",
      marginBottom: "24px",
      letterSpacing: "-1px",
      lineHeight: 1.2,
    },

    customizationText: {
      fontSize: "1.2rem",
      color: "#666",
      maxWidth: "900px",
      margin: "0 auto 60px",
      lineHeight: 1.8,
      fontWeight: 400,
    },

    customizationGrid: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "left",
    },

    customizationItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "20px",
      padding: "30px",
      background: "#ffffff",
      borderRadius: "16px",
      border: "1px solid rgba(169, 36, 39, 0.1)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
      transition: "all 0.3s ease",
    },

    customizationIcon: {
      width: "50px",
      height: "50px",
      borderRadius: "12px",
      background:
        "linear-gradient(135deg, rgba(169, 36, 39, 0.1), rgba(169, 36, 39, 0.05))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#a92427",
      flexShrink: 0,
    },

    customizationItemTitle: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: "8px",
    },

    customizationItemDesc: {
      fontSize: "1rem",
      color: "#666",
      lineHeight: 1.6,
      margin: 0,
    },

    statsSection: {
      padding: "100px 20px",
      background: "linear-gradient(135deg, #a92427 0%, #c94043 100%)",
      position: "relative",
      overflow: "hidden",
    },

    statsOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
      pointerEvents: "none",
    },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },

    statCard: {
      textAlign: "center",
      color: "#ffffff",
    },

    statValue: {
      fontSize: "3.5rem",
      fontWeight: 900,
      marginBottom: "12px",
      letterSpacing: "-1px",
    },

    statLabel: {
      fontSize: "1.1rem",
      fontWeight: 500,
      opacity: 0.95,
      letterSpacing: "0.5px",
    },

    ctaSection: {
      padding: "120px 20px",
      background: "#fafafa",
      textAlign: "center",
      position: "relative",
    },

    ctaTitle: {
      fontSize: "3rem",
      fontWeight: 800,
      color: "#1a1a1a",
      marginBottom: "24px",
      letterSpacing: "-1px",
    },

    ctaText: {
      fontSize: "1.2rem",
      color: "#666",
      maxWidth: "600px",
      margin: "0 auto 40px",
      lineHeight: 1.7,
    },

    cube3D: {
      position: "absolute",
      width: "120px",
      height: "120px",
      transformStyle: "preserve-3d",
      animation: "rotate3D 20s infinite linear",
    },

    cubeLeft: {
      top: "15%",
      left: "8%",
    },

    cubeRight: {
      bottom: "20%",
      right: "10%",
    },
  };

  return (
    <>
      <style jsx>{`
        section {
          width: 100vw !important;
        }
        @media (max-width: 768px) {
          /* Hero Section Mobile */
          div[data-hero] {
            padding: 0 16px !important;
            align-items: flex-start !important;
            padding-top: 120px !important;
          }
          div[data-hero-content] h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
            letter-spacing: -1px !important;
            margin-bottom: 20px !important;
          }
          div[data-hero-content] p {
            font-size: 1.1rem !important;
            max-width: 100% !important;
            padding: 0 8px !important;
          }
          div[data-hero-content] div[data-cta] {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }
          div[data-hero-content] div[data-cta] a {
            width: 100% !important;
            max-width: 280px !important;
            margin: 0 auto !important;
            padding: 14px 24px !important;
            font-size: 1rem !important;
          }
          div[data-scroll-indicator] {
            display: none !important;
          }
          div[data-hero-content] {
            top: 0 !important;
            max-width: 100% !important;
          }

          h2 {
            font-size: 2rem !important;
          }

          /* Features Section Mobile */
          section[data-features] {
            padding: 80px 16px !important;
          }
          div[data-section-title] {
            font-size: 2.2rem !important;
          }
          div[data-section-subtitle] {
            font-size: 1.1rem !important;
            margin-bottom: 60px !important;
          }
          div[data-features-grid] {
            flex-direction: column !important;
            gap: 20px !important;
            padding: 0 8px !important;
          }
          div[data-features-grid] > div {
            flex: 1 1 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
          }
          div[data-feature-card] span {
            font-size: 2.5rem !important;
          }
          div[data-feature-card] h3 {
            font-size: 1.2rem !important;
          }
          div[data-feature-card] p {
            font-size: 0.9rem !important;
          }
          div[data-feature-card] {
            padding: 32px 24px !important;
          }

          /* Customization Section Mobile */
          section[data-customization] {
            padding: 80px 16px !important;
          }
          div[data-customization-title] {
            font-size: 2.2rem !important;
            line-height: 1.3 !important;
          }
          div[data-customization-text] {
            font-size: 1.1rem !important;
            padding: 0 8px !important;
          }

          /* Stats Section Mobile */
          section[data-stats] {
            padding: 80px 16px !important;
          }
          div[data-stats-title] {
            font-size: 2.2rem !important;
            margin-bottom: 60px !important;
          }
          div[data-stats-grid] {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 30px !important;
          }
          div[data-stat-card] div {
            font-size: 2.8rem !important;
          }
          div[data-stat-card] div + div {
            font-size: 1rem !important;
          }

          /* CTA Section Mobile */
          section[data-cta] {
            padding: 80px 16px !important;
          }
          div[data-cta-title] {
            font-size: 2.2rem !important;
          }
          div[data-cta-text] {
            font-size: 1.1rem !important;
          }
          div[data-cta] a {
            padding: 16px 32px !important;
            font-size: 1rem !important;
          }

          /* Floating elements hide on mobile */
          div[data-shape] {
            display: none !important;
          }
          div[data-cube] {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          div[data-hero-content] h1 {
            font-size: 2rem !important;
          }
          div[data-section-title],
          div[data-customization-title],
          div[data-cta-title],
          div[data-stats-title] {
            font-size: 1.9rem !important;
          }
          div[data-hero-content] div[data-cta] a {
            padding: 12px 20px !important;
          }
        }

        @keyframes rotate3D {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>

      <div style={styles.wrapper}>
        {/* ---------------- HERO SECTION ---------------- */}
        <section ref={heroRef} style={styles.heroSection} data-hero>
          <div style={styles.gridOverlay} />

          {/* Floating shapes */}
          <motion.div
            style={{ ...styles.floatingShape, ...styles.shape1 }}
            data-shape
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
          />

          <motion.div
            style={{ ...styles.floatingShape, ...styles.shape2 }}
            data-shape
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut",
            }}
          />

          <motion.div
            style={{ ...styles.floatingShape, ...styles.shape3 }}
            data-shape
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
            }}
          />

          {/* Floating 3D cubes */}
          <motion.div
            style={{
              ...styles.cube3D,
              ...styles.cubeLeft,
              border: "2px solid rgba(169, 36, 39, 0.3)",
            }}
            data-cube
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          <motion.div
            style={{
              ...styles.cube3D,
              ...styles.cubeRight,
              border: "2px solid rgba(169, 36, 39, 0.2)",
            }}
            data-cube
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />

          <motion.div
            style={{ ...styles.heroContent, opacity, scale }}
            data-hero-content
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* <span style={styles.badge}>
                <IoRocketOutline size={14} /> Innovating the Future
              </span> */}
            </motion.div>

            <motion.h1
              style={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Intelligent Automation
              <br />
              for <span style={styles.heroGradient}>Modern Enterprises</span>
            </motion.h1>

            <motion.p
              style={styles.heroSub}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transforming businesses through cutting-edge automation solutions
              that drive efficiency, reduce costs, and unlock unprecedented
              growth opportunities across industries.
            </motion.p>

            <motion.div
              style={styles.ctaContainer}
              data-cta
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href="#features"
                style={styles.heroBtn}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 40px rgba(169, 36, 39, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Solutions
              </motion.a>

              <motion.a
                href="#contact"
                style={styles.heroBtnSecondary}
                whileHover={{
                  scale: 1.05,
                  background: "rgba(169, 36, 39, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            style={styles.scrollIndicator}
            data-scroll-indicator
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div style={styles.mouse}>
              <motion.div
                style={styles.mouseWheel}
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            <span>Scroll to explore</span>
          </motion.div>
        </section>

        {/* ---------------- FEATURES SECTION ---------------- */}
        <section id="features" style={styles.featuresSection} data-features>
          <motion.div
            data-section-title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.sectionTitle}>
              Why <span style={styles.heroGradient}>Kernn Automations</span>?
            </h2>
            <p data-section-subtitle style={styles.sectionSubtitle}>
              We combine innovation, reliability, and cutting-edge technology to
              deliver automation solutions that propel your business forward.
            </p>
          </motion.div>

          <div style={styles.featuresGrid} data-features-grid>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                style={styles.featureCard}
                data-feature-card
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(169, 36, 39, 0.15)",
                  borderColor: "rgba(169, 36, 39, 0.3)",
                }}
              >
                <motion.span
                  style={styles.featureIcon}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.span>
                <h3 style={styles.featureTitle}>{feature.text}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>

                {/* Animated corner accent */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(169, 36, 39, 0.05) 50%)",
                    borderTopRightRadius: "24px",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------------- CUSTOMIZATION SECTION ---------------- */}
        <section style={styles.customizationSection} data-customization>
          <div style={styles.customizationContainer}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={styles.customizationContent}
            >
              <span style={styles.customizationBadge}>
                <Settings size={16} style={{ marginRight: "8px" }} />
                Tailored Solutions
              </span>
              <h2 data-customization-title style={styles.customizationTitle}>
                Built Around{" "}
                <span style={styles.heroGradient}>Your Business</span>, Not the
                Other Way Around
              </h2>
              <p data-customization-text style={styles.customizationText}>
                From subtle interface adjustments like button placements and
                color schemes to comprehensive workflow transformations, every
                solution is meticulously crafted to align with your
                organization's unique processes. We don't believe in
                one-size-fits-all—we build systems that adapt to you.
              </p>
              <div style={styles.customizationGrid}>
                <motion.div
                  style={styles.customizationItem}
                  data-customization-item
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div style={styles.customizationIcon} data-customization-icon>
                    <Cog size={24} />
                  </div>
                  <div>
                    <h4
                      style={styles.customizationItemTitle}
                      data-customization-item-title
                    >
                      Interface Customization
                    </h4>
                    <p style={styles.customizationItemDesc}>
                      Personalize every visual element to match your brand
                      identity
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  style={styles.customizationItem}
                  data-customization-item
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div style={styles.customizationIcon} data-customization-icon>
                    <Workflow size={24} />
                  </div>
                  <div>
                    <h4
                      style={styles.customizationItemTitle}
                      data-customization-item-title
                    >
                      Workflow Engineering
                    </h4>
                    <p style={styles.customizationItemDesc}>
                      Complete process redesign to mirror your operational
                      excellence
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  style={styles.customizationItem}
                  data-customization-item
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div style={styles.customizationIcon} data-customization-icon>
                    <GitMerge size={24} />
                  </div>
                  <div>
                    <h4
                      style={styles.customizationItemTitle}
                      data-customization-item-title
                    >
                      Seamless Integration
                    </h4>
                    <p style={styles.customizationItemDesc}>
                      Connect with your existing systems without disruption
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------------- STATS SECTION ---------------- */}
        <section style={styles.statsSection} data-stats>
          <div style={styles.statsOverlay} />

          <motion.div
            data-stats-title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                ...styles.sectionTitle,
                color: "#ffffff",
                marginBottom: "80px",
              }}
            >
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div style={styles.statsGrid} data-stats-grid>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                style={styles.statCard}
                data-stat-card
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  style={styles.statValue}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: stat.delay + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div style={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------------- CTA SECTION ---------------- */}
        <section style={styles.ctaSection} data-cta>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 data-cta-title style={styles.ctaTitle}>
              Ready to Transform Your Business?
            </h2>
            <p data-cta-text style={styles.ctaText}>
              Join hundreds of forward-thinking companies that have already
              revolutionized their operations with Kernn Automations.
            </p>

            <motion.a
              href="#contact"
              style={{ ...styles.heroBtn, display: "inline-block" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(169, 36, 39, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.a>
          </motion.div>

          {/* Floating particles effect */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                borderRadius: "50%",
                background: "rgba(169, 36, 39, 0.3)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </section>

        {/* PRINCIPLES + FOOTER */}
        <PrinciplesSection />
        <Footer />
      </div>
    </>
  );
}
