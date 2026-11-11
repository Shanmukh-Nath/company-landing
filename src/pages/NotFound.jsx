import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Terminal as TerminalIcon,
  Cpu,
  RotateCcw,
  Compass,
  Zap,
  Home as HomeIcon,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  Wifi,
  Volume2,
  VolumeX,
  Activity,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Sliders,
} from "lucide-react";
import Footer from "../components/Footer";

// Brand Palette constants aligned with Kernn Automations
const BRAND = {
  primary: "#A92427",
  primaryGlow: "#E11D48",
  primaryDark: "#7E1C1E",
  primarySoft: "rgba(169, 36, 39, 0.15)",
  bgDeep: "#04060E",
  bgDark: "#0B0E1A",
  bgCard: "rgba(15, 23, 42, 0.75)",
  border: "rgba(169, 36, 39, 0.25)",
  borderGlow: "rgba(225, 29, 72, 0.45)",
  textMain: "#F9FAFB",
  textMuted: "#9CA3AF",
};

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  // ── States ──
  const [activeTab, setActiveTab] = useState("teleport"); // 'teleport' | 'terminal' | 'circuit'
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [particleMode, setParticleMode] = useState("network"); // 'network' | 'vortex' | 'matrix'
  const [nodesRepaired, setNodesRepaired] = useState(0);
  const [recalibrating, setRecalibrating] = useState(false);

  // ── Circuit Mini-Game State ──
  const [circuitAngles, setCircuitAngles] = useState([90, 180, 270]);
  const [circuitSolved, setCircuitSolved] = useState(false);
  const [countdown, setCountdown] = useState(null);

  // ── Interactive Terminal State ──
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "info", text: "KERNN AUTONOMOUS ROUTER // KERNEL v4.8.2-PROD" },
    { type: "error", text: `[CRITICAL_DESYNC] Unmapped path: "${location.pathname}"` },
    { type: "info", text: "Status: Neural mesh active. Enter 'help' or tap shortcuts below." },
  ]);

  const terminalEndRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isDown: false });
  const audioCtxRef = useRef(null);

  // ── Web Audio Synthesizer (Zero-asset client-side synthesis) ──
  const playSound = (type = "beep") => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === "beep") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(640, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === "shockwave") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === "success") {
        // Ascending harmonic chime
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const subOsc = ctx.createOscillator();
          const subGain = ctx.createGain();
          subOsc.type = "sine";
          subOsc.frequency.setValueAtTime(freq, now + i * 0.08);
          subGain.gain.setValueAtTime(0.08, now + i * 0.08);
          subGain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
          subOsc.connect(subGain);
          subGain.connect(ctx.destination);
          subOsc.start(now + i * 0.08);
          subOsc.stop(now + i * 0.08 + 0.25);
        });
      }
    } catch {
      // Audio not permitted by browser policy
    }
  };

  // ── Auto-scroll terminal ──
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  // ── Circuit Solver Countdown ──
  useEffect(() => {
    if (circuitSolved && countdown === null) {
      setCountdown(4);
    }
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      navigate("/");
    }
  }, [circuitSolved, countdown, navigate]);

  // ── Interactive HTML5 Canvas (Neural Anomaly Mesh) ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = width < 768 ? 40 : 75;
    const particles = [];
    const colors = ["#A92427", "#E11D48", "#FB7185", "#38BDF8", "#F97316"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.4 + 0.3,
        matrixChar: ["0", "1", "λ", "§", "k", "e", "r", "n"][Math.floor(Math.random() * 8)],
      });
    }

    // Shockwaves on click
    const shockwaves = [];

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.touches[0].clientX - rect.left;
        mouseRef.current.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX ? e.clientX - rect.left : mouseRef.current.x;
      const y = e.clientY ? e.clientY - rect.top : mouseRef.current.y;
      shockwaves.push({ x, y, radius: 5, maxRadius: 180, alpha: 0.9 });
      setNodesRepaired((prev) => prev + 1);
      playSound("shockwave");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("click", handleClick);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 7;
        sw.alpha -= 0.025;

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(225, 29, 72, ${Math.max(0, sw.alpha)})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
        }
      }

      // Update & Draw particles based on mode
      const mouse = mouseRef.current;

      particles.forEach((p, i) => {
        if (particleMode === "network") {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse gravity/repulsion
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(225, 29, 72, ${(1 - dist / 130) * 0.75})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Node-to-node links
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (pDist < 85) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(169, 36, 39, ${(1 - pDist / 85) * 0.25})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (particleMode === "vortex") {
          // Particles orbit the mouse cursor
          const targetX = mouse.x > 0 ? mouse.x : width / 2;
          const targetY = mouse.y > 0 ? mouse.y : height / 2;
          const angle = Math.atan2(p.y - targetY, p.x - targetX) + 0.035;
          const dist = Math.hypot(p.x - targetX, p.y - targetY) * 0.992 + Math.sin(i) * 0.5;

          p.x = targetX + Math.cos(angle) * (dist < 30 ? 250 : dist);
          p.y = targetY + Math.sin(angle) * (dist < 30 ? 250 : dist);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.3, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (particleMode === "matrix") {
          // Digital automation code rain
          p.y += 3 + p.radius;
          if (p.y > height) {
            p.y = -10;
            p.x = Math.random() * width;
          }
          ctx.font = "12px monospace";
          ctx.fillStyle = p.color;
          ctx.fillText(p.matrixChar, p.x, p.y);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("click", handleClick);
    };
  }, [particleMode]);

  // ── Recalibrate Trigger ──
  const handleRecalibrate = () => {
    setRecalibrating(true);
    playSound("beep");
    setTimeout(() => {
      setRecalibrating(false);
      setNodesRepaired((prev) => prev + 5);
    }, 700);
  };

  // ── Terminal Command Execution ──
  const executeCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    const newHistory = [...terminalHistory, { type: "input", text: `> ${raw}` }];

    playSound("beep");

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "info",
          text: "COMMANDS: home | opscale | edops | hrms | bpo | novathon | ping | status | reboot | matrix | clear",
        });
        break;
      case "home":
      case "cd /":
        newHistory.push({ type: "success", text: "Routing to Headquarters..." });
        setTimeout(() => navigate("/"), 600);
        break;
      case "opscale":
        newHistory.push({ type: "success", text: "Opening Opscale ERP Nexus..." });
        setTimeout(() => navigate("/products/opscale"), 600);
        break;
      case "edops":
        newHistory.push({ type: "success", text: "Launching Edops K-12 Administration..." });
        setTimeout(() => navigate("/products/edops"), 600);
        break;
      case "hrms":
      case "prompthr":
        newHistory.push({ type: "success", text: "Launching PromptHR Core..." });
        setTimeout(() => navigate("/products/hrms"), 600);
        break;
      case "bpo":
        newHistory.push({ type: "success", text: "Loading BPO Services Hub..." });
        setTimeout(() => navigate("/services/bpo"), 600);
        break;
      case "novathon":
        newHistory.push({ type: "success", text: "Opening Novathon™ 2027 Portal..." });
        setTimeout(() => window.open("https://novathon.kernn.ai", "_blank"), 600);
        break;
      case "ping":
        newHistory.push({ type: "info", text: "PING api.kernn.ai: 64 bytes in 8.4ms (TTL=58)" });
        newHistory.push({ type: "info", text: "PING neural.mesh.local: 64 bytes in 0.8ms (TTL=64)" });
        newHistory.push({ type: "success", text: "Packet loss: 0.0% // Neural latency healthy." });
        break;
      case "status":
        newHistory.push({
          type: "info",
          text: `SYS_STATUS: ACTIVE // CORES: 8 // MESH_NODES: ${75 + nodesRepaired} // BUFFER: 100%`,
        });
        break;
      case "matrix":
        setParticleMode("matrix");
        newHistory.push({ type: "success", text: "Switched visual telemetry to Matrix Rain mode." });
        break;
      case "reboot":
        handleRecalibrate();
        newHistory.push({ type: "info", text: "Recalibrating routing nodes..." });
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        newHistory.push({
          type: "error",
          text: `Command not found: '${raw}'. Type 'help' for options.`,
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  // ── Circuit Mini-Game Logic ──
  const rotateConduit = (index) => {
    if (circuitSolved) return;
    playSound("beep");
    const nextAngles = [...circuitAngles];
    nextAngles[index] = (nextAngles[index] + 90) % 360;
    setCircuitAngles(nextAngles);

    // Check if all are aligned at 0 degrees
    if (nextAngles.every((ang) => ang === 0)) {
      setCircuitSolved(true);
      playSound("success");
      setNodesRepaired((p) => p + 10);
    }
  };

  // ── Destination Cards Data ──
  const destinationCards = [
    {
      title: "Headquarters Base",
      subtitle: "Main Landing & Overview",
      badge: "Core Gateway",
      path: "/",
      isExternal: false,
      color: BRAND.primary,
    },
    {
      title: "Opscale ERP Nexus",
      subtitle: "Enterprise Workflow Fabric",
      badge: "Operations AI",
      path: "/products/opscale",
      isExternal: false,
      color: "#2563EB",
    },
    {
      title: "Edops ERP",
      subtitle: "Next-Gen K-12 School DevOps",
      badge: "Education",
      path: "/products/edops",
      isExternal: false,
      color: BRAND.primaryGlow,
    },
    {
      title: "PromptHR",
      subtitle: "Unified Payroll & Human Capital",
      badge: "Human Resources",
      path: "/products/hrms",
      isExternal: false,
      color: "#059669",
    },
    {
      title: "BPO Services",
      subtitle: "Strategic Process Automation",
      badge: "Outsourcing",
      path: "/services/bpo",
      isExternal: false,
      color: "#D97706",
    },
    {
      title: "Novathon™ 2027",
      subtitle: "Hyderabad 24H National Tech Sprint",
      badge: "Hackathon Arena",
      path: "https://novathon.kernn.ai",
      isExternal: true,
      color: "#7C3AED",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `radial-gradient(circle at 50% 15%, rgba(169, 36, 39, 0.18) 0%, ${BRAND.bgDeep} 65%, #020307 100%)`,
        color: BRAND.textMain,
        position: "relative",
        overflow: "hidden",
        pt: { xs: "90px", md: "110px" },
        pb: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Interactive Background Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
          zIndex: 1,
        }}
      />

      {/* Decorative Cyber Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(169, 36, 39, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 36, 39, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Ambient Radial Glow Spots */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(169, 36, 39, 0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(225, 29, 72, 0.15) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Main Content Container ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1180px",
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Top Control Bar: Audio + Mesh Mode + Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {/* Status Capsule */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "20px",
              background: "rgba(15, 23, 42, 0.75)",
              border: "1px solid rgba(169, 36, 39, 0.35)",
              backdropFilter: "blur(12px)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            <motion.span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#E11D48",
                display: "inline-block",
                boxShadow: "0 0 10px #E11D48",
              }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <span style={{ color: "#F9FAFB" }}>ROUTING ANOMALY:</span>
            <span style={{ color: "#E11D48", fontFamily: "monospace" }}>404_DESYNC</span>
          </div>

          {/* Action Pills: Particle Controls & Audio */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Particle Mode Selector */}
            <div
              style={{
                display: "inline-flex",
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "2px",
                backdropFilter: "blur(12px)",
              }}
            >
              {[
                { id: "network", label: "Constellation" },
                { id: "vortex", label: "Gravity" },
                { id: "matrix", label: "Matrix" },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    setParticleMode(mode.id);
                    playSound("beep");
                  }}
                  style={{
                    border: "none",
                    background: particleMode === mode.id ? "rgba(169, 36, 39, 0.3)" : "transparent",
                    color: particleMode === mode.id ? "#FFFFFF" : "#9CA3AF",
                    padding: "4px 10px",
                    borderRadius: "16px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                setAudioEnabled(!audioEnabled);
                if (!audioEnabled) playSound("beep");
              }}
              title={audioEnabled ? "Mute Synthetic Audio" : "Enable Synth Feedback"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "20px",
                background: audioEnabled ? "rgba(16, 185, 129, 0.15)" : "rgba(15, 23, 42, 0.75)",
                border: `1px solid ${audioEnabled ? "rgba(16, 185, 129, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
                color: audioEnabled ? "#10B981" : "#9CA3AF",
                fontSize: "0.72rem",
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                transition: "all 0.2s ease",
              }}
            >
              {audioEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span>{audioEnabled ? "Sound ON" : "Sound OFF"}</span>
            </button>
          </div>
        </div>

        {/* ── Holographic 404 Hero Section ── */}
        <motion.div
          animate={
            recalibrating
              ? {
                  x: [0, -8, 8, -4, 4, 0],
                  filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
                }
              : {}
          }
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            marginBottom: "28px",
            position: "relative",
          }}
        >
          {/* Top Pill Announcement */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 14px",
              borderRadius: "20px",
              background: "rgba(225, 29, 72, 0.12)",
              border: "1px dashed rgba(225, 29, 72, 0.4)",
              color: "#FB7185",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "16px",
            }}
          >
            <ShieldAlert size={14} />
            <span>AUTONOMOUS PIPELINE DESYNC</span>
          </div>

          {/* Huge Dynamic 404 Typography */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <motion.h1
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{
                fontSize: "clamp(6.5rem, 16vw, 12rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                letterSpacing: "-4px",
                background: "linear-gradient(135deg, #FFFFFF 20%, #FB7185 55%, #A92427 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 35px rgba(225, 29, 72, 0.45))",
                userSelect: "none",
              }}
            >
              404
            </motion.h1>

            {/* Glowing Accent Brackets */}
            <span
              style={{
                position: "absolute",
                left: "-35px",
                top: "10%",
                fontSize: "clamp(4rem, 10vw, 7rem)",
                color: "rgba(169, 36, 39, 0.4)",
                fontWeight: 300,
                userSelect: "none",
              }}
            >
              [
            </span>
            <span
              style={{
                position: "absolute",
                right: "-35px",
                top: "10%",
                fontSize: "clamp(4rem, 10vw, 7rem)",
                color: "rgba(169, 36, 39, 0.4)",
                fontWeight: 300,
                userSelect: "none",
              }}
            >
              ]
            </span>
          </div>

          {/* Subtitle Explaining the Anomaly */}
          <p
            style={{
              maxWidth: "600px",
              margin: "16px auto 8px",
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              color: "#D1D5DB",
              lineHeight: 1.6,
            }}
          >
            The Kernn neural router encountered an unmapped endpoint at{" "}
            <code
              style={{
                background: "rgba(169, 36, 39, 0.25)",
                color: "#FDA4AF",
                padding: "2px 8px",
                borderRadius: "4px",
                border: "1px solid rgba(225, 29, 72, 0.3)",
                fontSize: "0.9em",
              }}
            >
              {location.pathname}
            </code>
            . No automated workflow is scheduled here.
          </p>

          {/* Interactive Tap Hint */}
          <div
            style={{
              fontSize: "0.78rem",
              color: "#9CA3AF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginTop: "6px",
            }}
          >
            <Sparkles size={13} color="#FB7185" />
            <span>Click or drag anywhere on the canvas to trigger neural pulse shockwaves</span>
            {nodesRepaired > 0 && (
              <span
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  color: "#10B981",
                  padding: "1px 6px",
                  borderRadius: "10px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                }}
              >
                {nodesRepaired} Pulses Emitted
              </span>
            )}
          </div>
        </motion.div>

        {/* ── Tab Switcher for Navigation Modes ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "24px",
            background: "rgba(15, 23, 42, 0.8)",
            padding: "5px",
            borderRadius: "14px",
            border: "1px solid rgba(169, 36, 39, 0.25)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
          }}
        >
          {[
            { id: "teleport", label: "Teleport Matrix", icon: Compass },
            { id: "terminal", label: "Cyber Terminal", icon: TerminalIcon },
            { id: "circuit", label: "Calibrate Circuits", icon: Zap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  playSound("beep");
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  background: isSelected
                    ? "linear-gradient(135deg, #A92427 0%, #C94043 100%)"
                    : "transparent",
                  color: isSelected ? "#FFFFFF" : "#9CA3AF",
                  boxShadow: isSelected ? "0 4px 15px rgba(169, 36, 39, 0.4)" : "none",
                }}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── TAB 1: Teleport Matrix (Visual Gateway Cards) ── */}
        {activeTab === "teleport" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {destinationCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  playSound("beep");
                  if (card.isExternal) {
                    window.open(card.path, "_blank");
                  } else {
                    navigate(card.path);
                  }
                }}
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(169, 36, 39, 0.22)",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  cursor: "pointer",
                  backdropFilter: "blur(14px)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "115px",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(225, 29, 72, 0.6)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(169, 36, 39, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(169, 36, 39, 0.22)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.6px",
                        color: card.color,
                        background: `${card.color}18`,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        border: `1px solid ${card.color}35`,
                      }}
                    >
                      {card.badge}
                    </span>
                    {card.isExternal ? (
                      <ExternalLink size={14} color="#9CA3AF" />
                    ) : (
                      <ArrowRight size={14} color="#9CA3AF" />
                    )}
                  </div>
                  <h3
                    style={{
                      margin: "0 0 4px",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.8rem",
                      color: "#9CA3AF",
                      lineHeight: 1.4,
                    }}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── TAB 2: Interactive Cyber Terminal ── */}
        {activeTab === "terminal" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "100%",
              maxWidth: "840px",
              background: "rgba(4, 6, 14, 0.9)",
              border: "1px solid rgba(169, 36, 39, 0.35)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(169, 36, 39, 0.15)",
              backdropFilter: "blur(20px)",
              marginBottom: "32px",
            }}
          >
            {/* Terminal Top Window Bar */}
            <div
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#EF4444",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#F59E0B",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#10B981",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "0.74rem",
                    color: "#9CA3AF",
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
                  kernn-autonomous-recovery-shell ~ (zsh)
                </span>
              </div>

              <button
                onClick={() => executeCommand("clear")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#6B7280",
                  fontSize: "0.72rem",
                  cursor: "pointer",
                  fontFamily: "monospace",
                }}
              >
                [clear]
              </button>
            </div>

            {/* Quick Command Action Chips for Instant Taps */}
            <div
              style={{
                padding: "8px 16px",
                background: "rgba(169, 36, 39, 0.06)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.7rem", color: "#9CA3AF", marginRight: "4px" }}>
                Quick dispatch:
              </span>
              {["home", "opscale", "edops", "hrms", "novathon", "ping", "status", "reboot", "help"].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "4px",
                      color: "#FB7185",
                      fontFamily: "monospace",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(169, 36, 39, 0.3)";
                      e.currentTarget.style.borderColor = "#E11D48";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    }}
                  >
                    ${cmd}
                  </button>
                )
              )}
            </div>

            {/* Terminal Body Log */}
            <div
              style={{
                padding: "16px",
                fontFamily: "monospace",
                fontSize: "0.82rem",
                maxHeight: "260px",
                overflowY: "auto",
                lineHeight: 1.6,
              }}
            >
              {terminalHistory.map((item, idx) => {
                let color = "#D1D5DB";
                if (item.type === "input") color = "#38BDF8";
                if (item.type === "error") color = "#FB7185";
                if (item.type === "success") color = "#34D399";
                if (item.type === "info") color = "#9CA3AF";

                return (
                  <div key={idx} style={{ color, marginBottom: "4px" }}>
                    {item.text}
                  </div>
                );
              })}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleTerminalSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 16px",
                background: "rgba(15, 23, 42, 0.6)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span
                style={{
                  color: "#E11D48",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  marginRight: "8px",
                }}
              >
                kernn@mesh:~$
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'home', 'edops', 'novathon' or 'help'..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                }}
                autoFocus
              />
              <button
                type="submit"
                style={{
                  background: "#A92427",
                  border: "none",
                  borderRadius: "6px",
                  color: "#FFFFFF",
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>
          </motion.div>
        )}

        {/* ── TAB 3: Circuit Calibration Puzzle (Easter Egg Mini-Game) ── */}
        {activeTab === "circuit" && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "100%",
              maxWidth: "680px",
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(169, 36, 39, 0.3)",
              borderRadius: "18px",
              padding: "24px",
              backdropFilter: "blur(18px)",
              boxShadow: "0 16px 50px rgba(0, 0, 0, 0.5)",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800 }}>
                Autonomous Route Conduit Re-alignment
              </h3>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "#9CA3AF" }}>
                Tap the three misaligned data rings to rotate and align the circuit at 0°!
              </p>
            </div>

            {/* Rings Container */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "28px",
                padding: "24px 0",
                flexWrap: "wrap",
              }}
            >
              {circuitAngles.map((angle, idx) => {
                const isAligned = angle === 0;
                const labels = ["Node Alpha: Ingestion", "Node Beta: Neural Engine", "Node Gamma: Edge Mesh"];

                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <motion.div
                      onClick={() => rotateConduit(idx)}
                      animate={{ rotate: angle }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: 86,
                        height: 86,
                        borderRadius: "50%",
                        border: `3px dashed ${isAligned ? "#10B981" : "#E11D48"}`,
                        background: isAligned ? "rgba(16, 185, 129, 0.12)" : "rgba(225, 29, 72, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        position: "relative",
                        boxShadow: isAligned ? "0 0 20px rgba(16, 185, 129, 0.4)" : "none",
                      }}
                    >
                      {/* Inner Indicator Pin */}
                      <div
                        style={{
                          width: 8,
                          height: 30,
                          borderRadius: "4px",
                          background: isAligned ? "#10B981" : "#E11D48",
                          position: "absolute",
                          top: 8,
                          boxShadow: `0 0 8px ${isAligned ? "#10B981" : "#E11D48"}`,
                        }}
                      />
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: "#FFFFFF",
                        }}
                      />
                    </motion.div>

                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#FFFFFF" }}>
                        {labels[idx]}
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: isAligned ? "#10B981" : "#FB7185",
                          fontWeight: 700,
                          fontFamily: "monospace",
                        }}
                      >
                        {isAligned ? "ALIGNED (0°)" : `OFFSET (${angle}°)`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Victory Banner */}
            {circuitSolved ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid #10B981",
                  borderRadius: "12px",
                  padding: "16px",
                  marginTop: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    color: "#10B981",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    marginBottom: "4px",
                  }}
                >
                  <CheckCircle2 size={20} />
                  <span>ALL CONDUITS SYNCHRONIZED // ROUTE RESTORED!</span>
                </div>
                <p style={{ margin: "0 0 10px", fontSize: "0.82rem", color: "#D1D5DB" }}>
                  Teleporting to Headquarters in {countdown}s...
                </p>
                <button
                  onClick={() => navigate("/")}
                  style={{
                    background: "#10B981",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 20px",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  Teleport Immediately →
                </button>
              </motion.div>
            ) : (
              <button
                onClick={() => {
                  setCircuitAngles([0, 0, 0]);
                  setCircuitSolved(true);
                  playSound("success");
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#6B7280",
                  fontSize: "0.74rem",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginTop: "8px",
                }}
              >
                Auto-bypass calibration protocol
              </button>
            )}
          </motion.div>
        )}

        {/* ── Primary Immediate Call To Action Button ── */}
        <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              playSound("beep");
              navigate("/");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #A92427 0%, #E11D48 100%)",
              color: "#FFFFFF",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 8px 30px rgba(169, 36, 39, 0.45)",
              letterSpacing: "0.3px",
            }}
          >
            <HomeIcon size={18} />
            <span>Return to Core Base</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRecalibrate}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 24px",
              borderRadius: "12px",
              background: "rgba(15, 23, 42, 0.8)",
              color: "#D1D5DB",
              border: "1px solid rgba(169, 36, 39, 0.35)",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: "pointer",
              backdropFilter: "blur(12px)",
            }}
          >
            <RefreshCw size={16} className={recalibrating ? "animate-spin" : ""} />
            <span>Recalibrate Mesh</span>
          </motion.button>
        </div>
      </div>

      {/* ── Seamless Footer Integration ── */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", marginTop: "60px" }}>
        <Footer />
      </div>
    </Box>
  );
}
