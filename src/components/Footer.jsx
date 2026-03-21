// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const linkHover = { color: "#a92427", scale: 1.05 };

  const footerLinks = [
    { label: "Home", action: () => navigate("/") },
    { label: "Contact Us", action: () => navigate("/#contact") }, // or trigger modal if needed
    { label: "Privacy Policy", action: () => navigate("/privacy-policy") },
    { label: "Terms of Service", action: () => navigate("/terms-of-service") },
    { label: "Refund Policy", action: () => navigate("/refund-policy") },
  ];

  return (
    <Box sx={{ mt: 10 }}>
      {/* Upper Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #fff0f0 0%, #fde8e8 100%)",
          backdropFilter: "blur(8px)",
          py: { xs: 5, md: 6 },
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          boxShadow: "0 -4px 30px rgba(169,36,39,0.05)",
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Social */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                href="https://www.linkedin.com/company/kernn-automations/"
                target="_blank"
                sx={{
                  background: "rgba(255,255,255,0.8)",
                  transition: "all 0.3s ease",
                  "&:hover": { background: "#a92427", color: "#fff" },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </motion.div>
          </Stack>

          {/* Links */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            spacing={3}
            sx={{ flexWrap: "wrap", fontSize: 14 }}
          >
            {footerLinks.map((link) => (
              <motion.div
                key={link.label}
                whileHover={linkHover}
                style={{ display: "inline-block", cursor: "pointer" }}
              >
                <Link
                  underline="none"
                  color="#333"
                  onClick={link.action}
                  sx={{
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Bottom Strip */}
      <Box
        sx={{
          background: "#0b0e1a",
          color: "#fff",
          py: { xs: 4, md: 5 },
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 0 } }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()}, Kernn Automations Pvt. Ltd. All Rights
            Reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              opacity: 0.6,
              fontSize: "0.75rem",
            }}
          >
            Made with ❤️ by Kernn Team
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
