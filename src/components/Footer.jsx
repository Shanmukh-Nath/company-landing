// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box sx={{ mt: 10 }}>
      {/* Socials + Links */}
      <Box sx={{ background: "#f4f5f7", py: 4 }}>
        <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{ mb: 1 }}
          >
            <IconButton href="https://twitter.com/YOUR_COMPANY" target="_blank">
              <TwitterIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton
              href="https://linkedin.com/company/YOUR_COMPANY"
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ flexWrap: "wrap", fontSize: 14 }}
          >
            <Link underline="none" color="inherit" href="#">
              Home
            </Link>
            <Link underline="none" color="inherit" href="#">
              Contact Us
            </Link>
            <Link underline="none" color="inherit" href="#">
              Security
            </Link>
            <Link underline="none" color="inherit" href="#">
              Compliance
            </Link>
            <Link underline="none" color="inherit" href="#">
              Privacy Policy
            </Link>
            <Link underline="none" color="inherit" href="#">
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* Bottom dark strip */}
      <Box sx={{ background: "#0b0e1a", color: "#fff", py: 5 }}>
        <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()}, Kernn Automations Pvt. Ltd. All Rights
            Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
