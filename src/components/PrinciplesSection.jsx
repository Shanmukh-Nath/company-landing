// src/components/PrinciplesSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import mcpServer from "../assets/mcp_server.svg";
import secure_server from "../assets/secure_server.svg";
import ai from "../assets/ai.svg";

// --- Principles Data ---
const principles = [
  {
    title: "Privacy First & Compliance",
    desc: "We place data protection at the core of everything we build. Our systems follow strict global standards like GDPR and HIPAA, with end-to-end encryption and tightly controlled access. Every workflow is designed with privacy as a mandatory requirement—not an afterthought. Clients can trust that their information is always handled with integrity and transparency.",
    illustration: secure_server,
  },
  {
    title: "Reliable & Fault-Tolerant Systems",
    desc: "Our automation platforms are engineered for continuous uptime and operational resilience. With multi-region deployments, real-time monitoring, load balancing, and auto-failover capabilities, we ensure performance even under unexpected conditions. Reliability isn't just a target—it's built into our infrastructure from day one.",
    illustration: mcpServer,
  },
  {
    title: "Ethical & Human-Centric Automation",
    desc: "We design automation that enhances human capability rather than replacing it. Every solution goes through ethical review, ensuring fairness, transparency, and auditability. Our systems prioritize accountability, safeguard against bias, and empower teams to make informed decisions—keeping humans firmly in control.",
    illustration: ai,
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

// Principle Card Component - FIXED MOBILE RENDERING
const PrincipleCard = ({ item, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const cardRef = useRef(null);

  // ✅ HYDRATION FIX: Only run on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ MOBILE DETECTION: Server-safe
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  // 3D Motion Values - only create on client
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 400, damping: 90 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 90 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (event) => {
    if (isHovering && !isMobile && cardRef.current && isClient) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normalizedX = (event.clientX - centerX) / (rect.width / 2);
      const normalizedY = (event.clientY - centerY) / (rect.height / 2);
      x.set(normalizedX);
      y.set(normalizedY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isMobile && isClient) {
      x.set(0);
      y.set(0);
    }
  };

  // ✅ MOBILE: Show immediately, Desktop: Animate on scroll
  if (!isClient) {
    return (
      <div style={{ opacity: 1, visibility: "visible" }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 4,
            background: "#fff",
            border: "1px solid #eee",
          }}
        >
          <Box
            component="img"
            src={item.illustration}
            sx={{ width: 140, height: 140, mb: 2, mx: "auto" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: "#1a1a1a",
              mb: 1.5,
              textAlign: "center",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", textAlign: "center", px: 2 }}
          >
            {item.desc}
          </Typography>
        </Paper>
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      initial={isMobile ? "visible" : "hidden"}
      whileInView={isMobile ? false : "visible"}
      viewport={{ once: true, amount: 0.4 }}
      onMouseEnter={() => !isMobile && setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        perspective: isMobile ? "none" : 1000,
        zIndex: isHovering && !isMobile ? 10 : 1,
      }}
    >
      <motion.div
        whileHover={
          !isMobile
            ? {
                y: -8,
                boxShadow:
                  "0 20px 40px rgba(169,36,39,0.1),0 0 0 1px rgba(169,36,39,0.2)",
              }
            : {
                y: -4,
                scale: 1.02,
              }
        }
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            height: "100%", // ✅ Equal height for horizontal layout
            textAlign: "center",
            transition: "all 0.3s",
            background: "#fff",
            border: "1px solid #eee",
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: { xs: 20, md: 40 },
              left: "50%",
              transform: "translate(-50%, 0)",
              width: { xs: 100, md: 140 },
              height: { xs: 100, md: 140 },
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(169,36,39,0.08) 0%, transparent 60%)",
              zIndex: 0,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: isHovering && !isMobile ? 1.1 : 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />

          <Box
            component="img"
            src={item.illustration}
            alt={item.title}
            sx={{
              width: { xs: 140, md: 200 },
              height: { xs: 140, md: 200 },
              objectFit: "contain",
              mb: { xs: 2, md: 3 },
              zIndex: 1,
              position: "relative",
              mx: "auto",
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontWeight: 800,
                color: "#1a1a1a",
                mb: 1.5,
                lineHeight: 1.3,
                px: { xs: 1, md: 0 },
              }}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#555",
                lineHeight: 1.7,
                px: { xs: 2, md: 0 },
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </motion.div>
  );
};

// Principles Section - ✅ HORIZONTAL DESKTOP LAYOUT
export default function PrinciplesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 10 },
        background: "linear-gradient(180deg,#fff 0%,#f7f7f7 100%)",
        overflowX: "hidden", // ✅ Framer Motion mobile fix [web:30]
      }}
    >
      {/* Headers */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          textAlign: "center",
          mb: { xs: 1.5, md: 2 },
          color: "#a92427",
          opacity: 0.9,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Our Unwavering Commitment
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          textAlign: "center",
          mb: { xs: 6, md: 8 },
          color: "#1a1a1a",
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
          lineHeight: 1.2,
          px: { xs: 2, md: 0 },
        }}
      >
        Foundations of Trust and Innovation
      </Typography>

      {/* ✅ HORIZONTAL GRID: Desktop=3-side-by-side, Mobile=stacked */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 6 }} // ✅ Wider spacing for horizontal desktop
          sx={{
            // ✅ Perfect horizontal layout
            gridTemplateColumns: {
              xs: "1fr", // Mobile: 1 column (vertical stack)
              sm: "repeat(2, 1fr)", // Tablet: 2 columns
              md: "repeat(3, 1fr)", // Desktop: 3 horizontal cards
            },
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {principles.map((item, index) => (
            <Grid
              item
              xs={12}
              key={item.title}
              sx={{
                display: "flex",
                justifyContent: "center",
                px: 1,
                height: { md: "100%" }, // ✅ Equal height on desktop
              }}
            >
              <PrincipleCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
