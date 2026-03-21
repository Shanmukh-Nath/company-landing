import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  ClickAwayListener,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion, AnimatePresence } from "framer-motion";

import ContactForm from "./ContactForm";

import companyLogo from "../assets/smallLogo.png";
import milkDairyImg from "../assets/productImages/milk-dairy.jpg";
import hrmsImg from "../assets/productImages/hrms.jpg";
import inventoryImg from "../assets/productImages/inventory.jpg";
import scmImg from "../assets/productImages/scm.jpg";
import bpoImg from "../assets/productImages/bpo.jpg";
import artificial from "../assets/productImages/artificial.jpg";

export default function Header() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyoOBwhhiqd4sv_-YfG6LX4mrg7SW3D7Pm9USQ-hPt1LpEBBjB46MpqWdA2qElpnmJWxg/exec";

  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverMenu, setHoverMenu] = useState("");
  const [clickedMenu, setClickedMenu] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoHover, setLogoHover] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const careersRef = useRef(null);
  const legalsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isMobile]);

  const dropDownAnim = {
    initial: { opacity: 0, y: -15, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  };

  const previewPanelAnim = {
    initial: { opacity: 0, width: 0 },
    animate: {
      opacity: 1,
      width: 320,
      transition: {
        width: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2, delay: 0.1 },
      },
    },
    exit: { opacity: 0, width: 0, transition: { duration: 0.2 } },
  };

  const arrowVariants = {
    idle: { rotate: 0 },
    open: { rotate: 180 },
  };

  const logoVariants = {
    idle: { rotate: 0, scale: 1 },
    hover: {
      rotate: [0, -5, 5, -5, 0],
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  const navItems = [
    {
      label: "Products",
      ref: productsRef,
      hasPreview: true,
      submenu: [
        {
          label: "Opscale ERP Nexus",
          path: "/products/opscale",
          image: artificial,
          description:
            "An enterprise-wide ERP fabric integrating core operations with automation, unified data, and configurable workflows for limitless scalability.",
        },
        {
          label: "PromptHR",
          path: "/products/hrms",
          image: hrmsImg,
          description:
            "Complete HR solution for attendance, payroll, leave management, and employee self-service.",
        },
      ],
    },
    {
      label: "Services",
      ref: servicesRef,
      hasPreview: true,
      submenu: [
        {
          label: "BPO Services",
          path: "/services/bpo",
          image: bpoImg,
          description:
            "Expert business process outsourcing to enhance efficiency and reduce operational costs.",
        },
      ],
    },
    {
      label: "Careers",
      ref: careersRef,
      hasPreview: false,
      submenu: [
        { label: "Apply for Jobs", link: "https://careers.kernn.ai" },
        { label: "Verify Documents", link: "https://docs.kernn.ai" },
      ],
    },
    {
      label: "Legals",
      ref: legalsRef,
      hasPreview: false,
      submenu: [
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms of Service", path: "/terms-of-service" },
        { label: "Refund Policy", path: "/refund-policy" },
      ],
    },
  ];

  // ── Desktop handlers (untouched) ──
  const handleHover = (menu, ref) => {
    if (isMobile) return;
    setAnchorEl(ref.current);
    setHoverMenu(menu);
  };
  const handleClick = (menu, ref) => {
    if (isMobile) return;
    setAnchorEl(ref.current);
    setClickedMenu((prev) => (prev === menu ? "" : menu));
  };
  const handleClose = () => {
    if (isMobile) return;
    setHoverMenu("");
    setClickedMenu("");
    setAnchorEl(null);
    setHoveredItem(null);
  };
  const isOpen = (menu) => hoverMenu === menu || clickedMenu === menu;

  const handleFormSubmit = async (data) => {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Thank you! Your enquiry has been submitted.");
      setContactOpen(false);
    } catch (err) {
      console.log(err);
      alert("Error sending your request. Please try again.");
    }
  };

  // ── Animated hamburger lines ──
  const HamburgerIcon = ({ isOpen: open }) => (
    <Box
      sx={{
        width: 22,
        height: 16,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          style={{
            display: "block",
            height: 2,
            borderRadius: 2,
            background: "linear-gradient(90deg, #a92427, #c94043)",
            transformOrigin: "center",
          }}
          animate={
            open
              ? i === 0
                ? { rotate: 45, y: 7, width: "100%" }
                : i === 1
                  ? { opacity: 0, scaleX: 0 }
                  : { rotate: -45, y: -7, width: "100%" }
              : {
                  rotate: 0,
                  y: 0,
                  opacity: 1,
                  scaleX: 1,
                  width: i === 1 ? "70%" : "100%",
                }
          }
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      ))}
    </Box>
  );

  // ── Mobile drawer content ──
  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 28,
        staggerChildren: 0.06,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.22, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 340, damping: 26 },
    },
  };

  const renderMobileMenu = (
    <Box
      sx={{
        width: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(160deg, #ffffff 0%, #fef5f5 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background blob */}
      <Box
        sx={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(169,36,39,0.07) 0%, transparent 70%)",
          top: -80,
          right: -80,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(169,36,39,0.05) 0%, transparent 70%)",
          bottom: 60,
          left: -60,
          pointerEvents: "none",
        }}
      />

      {/* Drawer header */}
      <Box
        sx={{
          px: 2.5,
          pt: 2.5,
          pb: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(169,36,39,0.08)",
        }}
      >
        {/*<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={companyLogo} alt="Logo" style={{ width: 32, height: 32 }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.95rem",
              background: "linear-gradient(135deg, #a92427, #c94043)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.3px",
            }}
          >
            Kernn Automations
          </Typography>
        </Box>
        <motion.div whileTap={{ scale: 0.88 }}>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            size="small"
            sx={{
              color: "#a92427",
              background: "rgba(169,36,39,0.06)",
              borderRadius: "8px",
              "&:hover": { background: "rgba(169,36,39,0.12)" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </motion.div>*/}
      </Box>

      {/* Nav items */}
      <Box sx={{ flex: 1, overflowY: "auto", px: 1.5, pt: 1.5, pb: 2 }}>
        <motion.div
          variants={{
            visible: {
              transition: { staggerChildren: 0.07, delayChildren: 0.05 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, idx) => (
            <motion.div key={item.label} variants={itemVariants}>
              <Accordion
                disableGutters
                elevation={0}
                sx={{
                  background: "transparent",
                  "&:before": { display: "none" },
                  mb: 0.5,
                  borderRadius: "10px !important",
                  overflow: "hidden",
                  "&.Mui-expanded": {
                    background: "rgba(169,36,39,0.04)",
                    border: "1px solid rgba(169,36,39,0.1)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "#a92427", fontSize: "1.1rem" }}
                    />
                  }
                  sx={{
                    px: 2,
                    py: 0.5,
                    minHeight: 48,
                    "& .MuiAccordionSummary-content": { my: 0 },
                    "&:hover": { background: "rgba(169,36,39,0.04)" },
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.97rem",
                      color: "#1a1a1a",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 1, pt: 0, pb: 1 }}>
                  {item.submenu.map((sub, subIdx) => (
                    <motion.div
                      key={sub.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: subIdx * 0.05 }}
                    >
                      <ListItem
                        button
                        onClick={() => {
                          if (sub.path) navigate(sub.path);
                          else if (sub.link) window.open(sub.link, "_blank");
                          setMobileMenuOpen(false);
                        }}
                        sx={{
                          py: 1,
                          px: 1.5,
                          borderRadius: "8px",
                          mb: 0.25,
                          transition: "all 0.18s ease",
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 3,
                            height: 0,
                            background: "#a92427",
                            borderRadius: "0 2px 2px 0",
                            transition: "height 0.18s ease",
                          },
                          "&:hover": {
                            background: "rgba(169,36,39,0.06)",
                            pl: 2.5,
                            "&::before": { height: "60%" },
                          },
                          "&:active": { background: "rgba(169,36,39,0.1)" },
                        }}
                      >
                        <ListItemText
                          primary={sub.label}
                          secondary={sub.description || null}
                          primaryTypographyProps={{
                            fontWeight: 500,
                            fontSize: "0.9rem",
                            color: "#333",
                          }}
                          secondaryTypographyProps={{
                            fontSize: "0.76rem",
                            color: "#888",
                            sx: {
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              mt: 0.25,
                            },
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </Box>

      {/* Bottom CTA */}
      <Box
        sx={{
          px: 2,
          pb: 3,
          pt: 1.5,
          borderTop: "1px solid rgba(169,36,39,0.08)",
        }}
      >
        <motion.div
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Box
            onClick={() => {
              setContactOpen(true);
              setMobileMenuOpen(false);
            }}
            sx={{
              cursor: "pointer",
              px: 3,
              py: 1.4,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #a92427 0%, #c94043 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.95rem",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(169,36,39,0.28)",
              letterSpacing: "0.01em",
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                transition: "left 0.5s ease",
              },
              "&:hover::after": { left: "100%" },
            }}
          >
            Contact Us
          </Box>
        </motion.div>

        {/* Subtle brand tagline */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.72rem",
            color: "rgba(169,36,39,0.4)",
            mt: 1.5,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Kernn Automations
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled
            ? "rgba(255,255,255,0.5)"
            : "linear-gradient(135deg, #ffffff 0%, #fef5f5 100%)",
          backdropFilter: isScrolled ? "blur(5px)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isScrolled ? "0 4px 20px rgba(169,36,39,0.08)" : "none",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 6 },
            py: 1.5,
          }}
        >
          {/* Logo (unchanged) */}
          <motion.div
            onHoverStart={() => !isMobile && setLogoHover(true)}
            onHoverEnd={() => !isMobile && setLogoHover(false)}
            whileHover={!isMobile ? { scale: 1.02 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                padding: "8px 16px 8px 8px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                "&:hover": { background: "rgba(169,36,39,0.04)" },
              }}
              onClick={() => navigate("/")}
            >
              <motion.img
                src={companyLogo}
                alt="Logo"
                style={{ width: 45, height: 45, marginRight: 10 }}
                variants={logoVariants}
                animate={logoHover ? "hover" : "idle"}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #a92427 0%, #c94043 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  userSelect: "none",
                  letterSpacing: "-0.5px",
                }}
              >
                Kernn Automations
              </Typography>
            </Box>
          </motion.div>

          {/* ── Mobile: animated hamburger button ── */}
          {isMobile && (
            <motion.div whileTap={{ scale: 0.88 }}>
              <IconButton
                aria-label={mobileMenuOpen ? "close menu" : "open menu"}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "10px",
                  background: mobileMenuOpen
                    ? "rgba(169,36,39,0.1)"
                    : "rgba(169,36,39,0.05)",
                  border: "1px solid rgba(169,36,39,0.12)",
                  transition: "background 0.2s ease",
                  "&:hover": { background: "rgba(169,36,39,0.12)" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HamburgerIcon isOpen={mobileMenuOpen} />
              </IconButton>
            </motion.div>
          )}

          {/* Desktop nav (completely untouched) */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.32 }}
                  >
                    <Box
                      onMouseEnter={() => handleHover(item.label, item.ref)}
                      onMouseLeave={handleClose}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        position: "relative",
                      }}
                      ref={item.ref}
                    >
                      <Box
                        onClick={() => handleClick(item.label, item.ref)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          px: 2,
                          py: 1,
                          borderRadius: "8px",
                          color: isOpen(item.label) ? "#a92427" : "#333",
                          fontWeight: isOpen(item.label) ? 600 : 500,
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: isOpen(item.label) ? "80%" : "0%",
                            height: "2px",
                            background:
                              "linear-gradient(90deg, transparent, #a92427, transparent)",
                            transition: "width 0.3s ease",
                          },
                          "&:hover": {
                            color: "#a92427",
                            background: "rgba(169, 36, 39, 0.04)",
                            "&::before": { width: "80%" },
                          },
                        }}
                      >
                        {item.label}
                        <motion.span
                          style={{ display: "inline-flex", marginLeft: 2 }}
                          variants={arrowVariants}
                          animate={isOpen(item.label) ? "open" : "idle"}
                          transition={{ duration: 0.28 }}
                        >
                          <ArrowDropDownIcon />
                        </motion.span>
                      </Box>

                      <AnimatePresence mode="wait">
                        {isOpen(item.label) && anchorEl && (
                          <Popper
                            open
                            anchorEl={anchorEl}
                            placement="bottom-start"
                            disablePortal
                            modifiers={[
                              { name: "offset", options: { offset: [0, 8] } },
                            ]}
                            sx={{ zIndex: 1500, mt: 1 }}
                          >
                            <motion.div {...dropDownAnim}>
                              <ClickAwayListener onClickAway={handleClose}>
                                <Paper
                                  elevation={0}
                                  sx={{
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    border: "1px solid rgba(169, 36, 39, 0.1)",
                                    boxShadow:
                                      "0 8px 32px rgba(169, 36, 39, 0.12)",
                                    background: "rgba(255,255,255,0.98)",
                                    backdropFilter: "blur(10px)",
                                    display: "flex",
                                  }}
                                >
                                  <MenuList sx={{ minWidth: 260, py: 1 }}>
                                    {item.submenu.map((sub, subIndex) => (
                                      <motion.div
                                        key={sub.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: subIndex * 0.05 }}
                                      >
                                        <MenuItem
                                          onMouseEnter={() =>
                                            item.hasPreview &&
                                            setHoveredItem(sub)
                                          }
                                          onClick={() => {
                                            if (sub.path) navigate(sub.path);
                                            else if (sub.link)
                                              window.open(sub.link, "_blank");
                                            handleClose();
                                          }}
                                          sx={{
                                            mx: 1,
                                            my: 0.5,
                                            borderRadius: "8px",
                                            px: 2,
                                            py: 1.5,
                                            fontSize: "0.95rem",
                                            transition: "all 0.2s ease",
                                            position: "relative",
                                            backgroundColor:
                                              hoveredItem === sub
                                                ? "rgba(169,36,39,0.08)"
                                                : "transparent",
                                            "&::before": {
                                              content: '""',
                                              position: "absolute",
                                              left: 0,
                                              top: "50%",
                                              transform: "translateY(-50%)",
                                              width: "3px",
                                              height:
                                                hoveredItem === sub
                                                  ? "70%"
                                                  : "0%",
                                              background: "#a92427",
                                              borderRadius: "0 2px 2px 0",
                                              transition: "height 0.2s ease",
                                            },
                                            "&:hover": {
                                              background:
                                                "linear-gradient(90deg, rgba(169,36,39,0.08), rgba(169,36,39,0.02))",
                                              color: "#a92427",
                                              pl: 3,
                                            },
                                          }}
                                        >
                                          {sub.label}
                                        </MenuItem>
                                      </motion.div>
                                    ))}
                                  </MenuList>

                                  <AnimatePresence mode="wait">
                                    {item.hasPreview && hoveredItem && (
                                      <motion.div
                                        key={hoveredItem.label}
                                        {...previewPanelAnim}
                                        style={{
                                          borderLeft:
                                            "1px solid rgba(169,36,39,0.1)",
                                          overflow: "hidden",
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            p: 2,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 1.5,
                                          }}
                                        >
                                          <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                              delay: 0.15,
                                              duration: 0.3,
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                width: "100%",
                                                height: 160,
                                                borderRadius: "8px",
                                                overflow: "hidden",
                                                boxShadow:
                                                  "0 4px 12px rgba(169,36,39,0.15)",
                                                position: "relative",
                                                "&::after": {
                                                  content: '""',
                                                  position: "absolute",
                                                  top: 0,
                                                  left: 0,
                                                  right: 0,
                                                  bottom: 0,
                                                  background:
                                                    "linear-gradient(180deg, transparent 60%, rgba(169,36,39,0.1))",
                                                },
                                              }}
                                            >
                                              <img
                                                src={hoveredItem.image}
                                                alt={hoveredItem.label}
                                                style={{
                                                  width: "100%",
                                                  height: "100%",
                                                  objectFit: "cover",
                                                }}
                                              />
                                            </Box>
                                          </motion.div>
                                          <motion.div
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                              delay: 0.2,
                                              duration: 0.3,
                                            }}
                                          >
                                            <Typography
                                              variant="h6"
                                              sx={{
                                                fontSize: "1rem",
                                                fontWeight: 700,
                                                color: "#a92427",
                                                lineHeight: 1.3,
                                              }}
                                            >
                                              {hoveredItem.label}
                                            </Typography>
                                          </motion.div>
                                          <motion.div
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                              delay: 0.25,
                                              duration: 0.3,
                                            }}
                                          >
                                            <Typography
                                              variant="body2"
                                              sx={{
                                                fontSize: "0.875rem",
                                                color: "#666",
                                                lineHeight: 1.5,
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                              }}
                                            >
                                              {hoveredItem.description}
                                            </Typography>
                                          </motion.div>
                                        </Box>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </Paper>
                              </ClickAwayListener>
                            </motion.div>
                          </Popper>
                        )}
                      </AnimatePresence>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  onClick={() => setContactOpen(true)}
                  sx={{
                    cursor: "pointer",
                    px: 3,
                    py: 1,
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, #a92427 0%, #c94043 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(169, 36, 39, 0.3)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transition: "left 0.5s ease",
                    },
                    "&:hover": {
                      boxShadow: "0 6px 25px rgba(169, 36, 39, 0.4)",
                      transform: "translateY(-2px)",
                      "&::before": { left: "100%" },
                    },
                  }}
                >
                  Contact Us
                </Box>
              </motion.div>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <ContactForm
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        onSubmit={handleFormSubmit}
      />

      {/* ── Enhanced Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            mt: "72px",
            height: "calc(100% - 72px)",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "0px",
            overflow: "hidden",
            boxShadow: "-8px 0 40px rgba(169,36,39,0.12)",
          },
        }}
        SlideProps={{
          // Framer-motion handles the inner animation; MUI slide is kept for a11y
          timeout: { enter: 320, exit: 220 },
        }}
      >
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="drawer"
              initial={{ x: 40, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 28 },
              }}
              exit={{ x: 40, opacity: 0, transition: { duration: 0.18 } }}
              style={{ height: "100%" }}
            >
              {renderMobileMenu}
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
}
