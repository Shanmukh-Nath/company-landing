// src/components/PrinciplesSection.jsx
import React, { useState } from "react";
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
    desc: "Our automation platforms are engineered for continuous uptime and operational resilience. With multi-region deployments, real-time monitoring, load balancing, and auto-failover capabilities, we ensure performance even under unexpected conditions. Reliability isn’t just a target—it’s built into our infrastructure from day one.",
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

// Principle Card Component
const PrincipleCard = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 400, damping: 90 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 90 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (event) => {
    if (isHovering) {
      const rect = event.currentTarget.getBoundingClientRect();
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
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ perspective: 1000, zIndex: isHovering ? 10 : 1 }}
    >
      <motion.div
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 40px rgba(169,36,39,0.1),0 0 0 1px rgba(169,36,39,0.2)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ rotateX, rotateY }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            height: "auto",
            textAlign: "center",
            transition: "all 0.3s",
            background: "#fff",
            border: "1px solid #eee",
            position: "relative",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 40,
              left: "50%",
              transform: "translate(-50%, 0)",
              width: 140,
              height: 140,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(169,36,39,0.08) 0%, transparent 60%)",
              zIndex: 0,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: isHovering ? 1.1 : 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />

          <Box
            component="img"
            src={item.illustration}
            alt={item.title}
            sx={{
              width: 200,
              height: 200,
              objectFit: "contain",
              mb: 3,
              zIndex: 1,
              position: "relative",
            }}
          />

          <Typography
            variant="h5"
            sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1 }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.7 }}>
            {item.desc}
          </Typography>
        </Paper>
      </motion.div>
    </motion.div>
  );
};

// Principles Section
export default function PrinciplesSection() {
  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 3, md: 10 },
        background: "linear-gradient(180deg,#fff 0%,#f7f7f7 100%)",
      }}
    >
      {/* Headers */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          textAlign: "center",
          mb: 2,
          color: "#a92427",
          opacity: 0.9,
        }}
      >
        Our Unwavering Commitment
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: 900, textAlign: "center", mb: 8, color: "#1a1a1a" }}
      >
        Foundations of Trust and Innovation
      </Typography>

      {/* Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Grid
          container
          spacing={5}
          justifyContent="center"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" }, // Wrap on mobile, no-wrap on medium+
            gap: { xs: 5, md: 3 },
          }}
        >
          {principles.map((item) => (
            <Grid
              item
              xs={12} // stacked on mobile
              md={4} // 3 per row on medium+
              key={item.title}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <PrincipleCard item={item} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
