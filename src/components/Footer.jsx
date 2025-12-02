// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";

export default function Footer() {
  const linkHover = { color: "#a92427", scale: 1.05 };

  return (
    <Box sx={{ mt: 10 }}>
      {/* Upper Gradient / Glass Section */}
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
          {/* Social Icons */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                href="https://twitter.com/YOUR_COMPANY"
                target="_blank"
                sx={{
                  background: "rgba(255,255,255,0.8)",
                  transition: "all 0.3s ease",
                  "&:hover": { background: "#a92427", color: "#fff" },
                }}
              >
                <TwitterIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                href="https://linkedin.com/company/YOUR_COMPANY"
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
            {[
              "Home",
              "Contact Us",
              "Security",
              "Compliance",
              "Privacy Policy",
              "Terms of Service",
            ].map((link) => (
              <motion.div
                key={link}
                whileHover={linkHover}
                style={{ display: "inline-block" }}
              >
                <Link
                  underline="none"
                  color="#333"
                  href="#"
                  sx={{
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Bottom Dark Strip */}
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
