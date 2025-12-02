import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";

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
          <GiElectric />
        </FeatureIcon>
      ),
      text: "Lightning Fast",
      desc: "Engineered for ultra-high responsiveness with optimized system architecture. Experience seamless automation workflows that react instantly, no matter the load.",
    },
    {
      icon: (
        <FeatureIcon>
          <GrSecure />
        </FeatureIcon>
      ),
      text: "Secure by Design",
      desc: "Built with end-to-end enterprise-grade security as the foundation, not an afterthought. Your data, identity, and operations remain protected at every layer of the system.",
    },
    {
      icon: (
        <FeatureIcon>
          <TbTargetArrow />
        </FeatureIcon>
      ),
      text: "Precision Engineering",
      desc: "Developed using industry-standard best practices to ensure unmatched accuracy. Every module, workflow, and integration is crafted to deliver consistent, reliable outcomes.",
    },
    {
      icon: (
        <FeatureIcon>
          <IoRocket />
        </FeatureIcon>
      ),
      text: "Scalable Solutions",
      desc: "Designed to expand effortlessly as your needs grow—from startups to large enterprises. Scale infrastructure, users, and workflows without disruptions or performance drops.",
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
    },

    scrollIndicator: {
      position: "absolute",
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
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
      left: "50%",
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
      flexWrap: "nowrap",
    },

    featureCard: {
      background: "#ffffff",
      padding: "40px 30px",
      borderRadius: "24px",
      border: "1px solid rgba(169, 36, 39, 0.1)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
      textAlign: "center",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
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
    <div style={styles.wrapper}>
      {/* ---------------- HERO SECTION ---------------- */}
      <section ref={heroRef} style={styles.heroSection}>
        <div style={styles.gridOverlay} />

        {/* Floating shapes */}
        <motion.div
          style={{ ...styles.floatingShape, ...styles.shape1 }}
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
        <style>
          {`
            @keyframes rotate3D {
              0% { transform: rotateX(0deg) rotateY(0deg); }
              100% { transform: rotateX(360deg) rotateY(360deg); }
            }
          `}
        </style>

        <motion.div
          style={{
            ...styles.cube3D,
            ...styles.cubeLeft,
            border: "2px solid rgba(169, 36, 39, 0.3)",
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        <motion.div
          style={{
            ...styles.cube3D,
            ...styles.cubeRight,
            border: "2px solid rgba(169, 36, 39, 0.2)",
          }}
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />

        <motion.div style={{ ...styles.heroContent, opacity, scale }}>
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
            that drive efficiency, reduce costs, and unlock unprecedented growth
            opportunities across industries.
          </motion.p>

          <motion.div
            style={styles.ctaContainer}
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
      <section id="features" style={styles.featuresSection}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>
            Why <span style={styles.heroGradient}>Kernn Automations</span>?
          </h2>
          <p style={styles.sectionSubtitle}>
            We combine innovation, reliability, and cutting-edge technology to
            deliver automation solutions that propel your business forward.
          </p>
        </motion.div>

        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              style={styles.featureCard}
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

      {/* ---------------- STATS SECTION ---------------- */}
      <section style={styles.statsSection}>
        <div style={styles.statsOverlay} />

        <motion.div
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

        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              style={styles.statCard}
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
      <section style={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p style={styles.ctaText}>
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
  );
}
