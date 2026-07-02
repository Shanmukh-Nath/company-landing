import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import {
  Building2,
  School,
  GitFork,
  Briefcase,
  Fingerprint,
  CalendarDays,
  Lock,
  Key,
  ShieldCheck,
  History,
  EyeOff,
  Sliders,
  Settings,
  Palette,
  Plug,
  Database,
  GraduationCap,
  Clock,
  Layers,
  BookOpen,
  FileText,
  Compass,
  CalendarClock,
  CalendarRange,
  Shuffle,
  Activity,
  DoorOpen,
  UserCheck,
  FilePlus,
  Contact,
  Grid,
  ArrowUpRight,
  AlertTriangle,
  Sprout,
  ClipboardSignature,
  DraftingCompass,
  Award,
  CheckSquare,
  BarChart3,
  BellRing,
  Wallet,
  Settings2,
  CreditCard,
  Percent,
  AlertCircle,
  RefreshCw,
  Users,
  UserPlus,
  CalendarCheck,
  IndianRupee,
  TrendingUp,
  Package,
  ListCollapse,
  Boxes,
  FileSignature,
  Truck,
  ClipboardCheck,
  Calendar,
  Calculator,
  FileSpreadsheet,
  Edit3,
  LineChart,
  FileBadge,
  FolderGit,
  BadgeCheck,
  FileClock,
  QrCode,
  Library,
  ArrowLeftRight,
  DollarSign,
  ClipboardList,
  Bus,
  Car,
  MapPin,
  Navigation,
  Home,
  Bed,
  Utensils,
  Wrench,
  Heart,
  Syringe,
  Stethoscope,
  MessageSquare,
  Megaphone,
  Send,
  MessagesSquare,
  LayoutDashboard,
  FileDown,
  PieChart,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Unplug,
  RotateCw,
  Search,
} from "lucide-react";

import Footer from "../../components/Footer";
import EdopsLogo from "../../assets/productLogos/edops-logo.svg";

// Brand Color Palette (Kernn brick red theme)
const BRAND = {
  primary: "#A92427",       // Official Red
  primaryGlow: "#C94043",   // Glow highlight
  primaryDark: "#7E1C1E",   // Deep Maroon
  primarySoft: "rgba(169, 36, 39, 0.15)",
  primaryUltraSoft: "rgba(169, 36, 39, 0.05)",
  bgDeep: "#04060E",        // Deep Obsidian Black
  bgDark: "#0B0E1A",        // Dark Indigo-Navy
  bgCard: "rgba(15, 23, 42, 0.6)",
  border: "rgba(169, 36, 39, 0.2)",
  borderGlow: "rgba(201, 64, 67, 0.4)",
  textMain: "#F9FAFB",
  textMuted: "#9CA3AF",
  textMutedDark: "#6B7280",
  lightBg: "#FFFFFF",
  lightBgSoft: "#FDF2F2",
  lightTextMain: "#111827",
  lightTextMuted: "#4B5563",
  lightTextMutedDark: "#9CA3AF",
  lightBorder: "#E5E7EB",
  lightBorderGlow: "rgba(169, 36, 39, 0.2)",
};

// 7 Stages Lifecycle Data
const lifecycleStages = [
  {
    id: 1,
    title: "Admission & Onboarding",
    description: "The student's entry point. Streamlining online enquiries, customizable form submissions, document verification, biometric data capture, and immediate generation of digital student profile cards.",
    benefits: ["Online custom enquiry forms", "Biometric/RFID registration", "Dynamic merit list engine"],
    color: BRAND.primary,
  },
  {
    id: 2,
    title: "Academic Design",
    description: "The baseline setup of the curriculum. Assigning term durations, organizing classes & sections, mapping compulsory & elective subjects, syllabus scheduling, and building conflict-free drag-and-drop timetables.",
    benefits: ["Drag-and-drop timetable builder", "Syllabus chapter tracking", "Class & teacher assignment checks"],
    color: BRAND.primaryGlow,
  },
  {
    id: 3,
    title: "Daily School Operations",
    description: "Day-to-day coordination. Real-time class roll-call via mobile, automated parent SMS/WhatsApp alerts for absentees, instant teacher substitution allocation on sudden leaves, and daily lesson logs.",
    benefits: ["Instant WhatsApp parent alerts", "Absence substitution recommendation", "Biometric staff logs"],
    color: BRAND.primaryDark,
  },
  {
    id: 4,
    title: "Evaluation & Progression",
    description: "Academic testing and compliance. Scheduling exams, allocating invigilator duties, mapping CBSE/ICSE board-compliant grading structures, rechecking processes, and issuing QR-verifiable digital report cards.",
    benefits: ["CBSE-compliant grading engine", "QR-verifiable transfer certificate (TC)", "Invigilator duty charts"],
    color: BRAND.primary,
  },
  {
    id: 5,
    title: "Financial Operations",
    description: "The fiscal engine. Handling UPI & net banking fee collections, scholarship concessions, automated notifications for dues & defaulters, staff payroll computations (PF/ESIC/TDS), and inventory audits.",
    benefits: ["Integrated Razorpay/PayU checkout", "PF/ESIC/TDS payroll auto-runs", "3-way vendor invoice matching"],
    color: BRAND.primaryDark,
  },
  {
    id: 6,
    title: "Logistical Support",
    description: "Essential student facilities. GPS vehicle tracking with geofenced arrival alerts, library catalog ISBN lookup and barcode circulations, hostel bed maps, mess trackers, and infirmary wellness files.",
    benefits: ["Live GPS map tracking with geofences", "Hostel Bed-swap portals", "Allergies & wellness infirmary registers"],
    color: BRAND.primary,
  },
  {
    id: 7,
    title: "Governance & Analytics",
    description: "Administration oversight. Unified system logs auditing every user action, row-level data access restrictions, scheduled spreadsheet reports, role-based controls (RBAC), and multi-tier approval checks.",
    benefits: ["DPDP Act / GDPR compliance audit logs", "Revenue & Collection analytics charts", "Multi-stage leave and indent approvals"],
    color: BRAND.primaryGlow,
  },
];

// Modules Details Registry - SEQUENTIALLY re-numbered 01 to 20 across lifecycle stages
const modulesData = [
  // Stage 1: Admission & Onboarding
  {
    id: "01",
    name: "Student Information System (SIS)",
    icon: UserCheck,
    stage: 1,
    description: "Online application processing, 360-degree interactive profile boards, family linkages, and sibling cards.",
    submodules: [
      {
        name: "Admission Engine",
        icon: FilePlus,
        description: "Online enquiry, web forms, application tracking, and merit lists.",
        features: ["Digital enquiry trackers", "Vibrant application tracking", "Automated merit list generation"]
      },
      {
        name: "360° Student Profile",
        icon: Contact,
        description: "Academic, fee, attendance, disciplinary, and family sibling linkage cards.",
        features: ["Integrated timeline card", "Sibling connection system", "All-in-one profile summary"]
      },
      {
        name: "Class Allocator",
        icon: Grid,
        description: "Manual or auto-assign section rules based on gender ratios or grades.",
        features: ["Balanced auto-allocation", "Manual shift panels", "Gender-ratio filters"]
      },
      {
        name: "Promotion & Transfer",
        icon: ArrowUpRight,
        description: "Year-end promotions, lateral section changes, and branch migrations.",
        features: ["Bulk promotional tool", "Transfer Certificate triggers", "Migration audits"]
      },
      {
        name: "Disciplinary Tracker",
        icon: AlertTriangle,
        description: "Log incidents, counselor sessions, warning files, and suspension alerts.",
        features: ["Disciplinary action filing", "Counselor logs", "Suspension notifications"]
      },
      {
        name: "Alumni Portal",
        icon: Sprout,
        description: "Database auto-conversion, event updates, and digital achievement vaults.",
        features: ["Alumni base conversions", "Alumni meet coordination", "Achievement display pages"]
      }
    ]
  },
  {
    id: "02",
    name: "Forms & Admissions",
    icon: ClipboardSignature,
    stage: 1,
    description: "Dynamic form creations, file attachments, and RTE-based seats reservations.",
    submodules: [
      {
        name: "Custom Form Builder",
        icon: DraftingCompass,
        description: "Dynamic form creator for admission cycles, field mappings, and file slots.",
        features: ["Custom form designer", "Flexible drag-drop fields", "File attachment fields"]
      },
      {
        name: "Seat Matrix Configuration",
        icon: Award,
        description: "CBSE registration mappings, reservation categories, and RTE 25% quotas.",
        features: ["RTE 25% quota setups", "Reservation matrix mappings", "CBSE compliance reporting"]
      }
    ]
  },

  // Stage 2: Academic Design
  {
    id: "03",
    name: "Academic Management",
    icon: GraduationCap,
    stage: 2,
    description: "Syllabus mapping, elective mappings, and lesson tracking approved by department HODs.",
    submodules: [
      {
        name: "Session Management",
        icon: Clock,
        description: "Define academic sessions, start/end dates, term durations, and archives.",
        features: ["Academic session creator", "Term durations management", "Archived session records"]
      },
      {
        name: "Class & Section Setup",
        icon: Layers,
        description: "Class grades, capacity ceilings, sections, and class teacher allocations.",
        features: ["Grade capacity ceilings", "Class-teacher mappings", "Class section overrides"]
      },
      {
        name: "Subject Setup",
        icon: BookOpen,
        description: "Compulsory and elective mappings, practical weightage, and medium.",
        features: ["Elective registration rules", "Practical vs Theory weights", "Instruction medium logs"]
      },
      {
        name: "Curriculum & Syllabus",
        icon: FileText,
        description: "Digital syllabus uploads, chapter tracking, and status boards.",
        features: ["Syllabus upload dashboards", "Chapter tracking timelines", "Departmental syllabus checklists"]
      },
      {
        name: "Lesson Planner",
        icon: Compass,
        description: "Teaching objectives, resource sheets (PPT/PDF/YouTube), and HOD approvals.",
        features: ["Lesson objective trackers", "Multimedia resource attachments", "HOD sign-off gates"]
      }
    ]
  },
  {
    id: "04",
    name: "Timetable & Scheduling",
    icon: CalendarClock,
    stage: 2,
    description: "Dynamic timetable compiler, conflict checks, class allocations, and absent substitutes.",
    submodules: [
      {
        name: "Timetable Builder",
        icon: CalendarRange,
        description: "Drag-and-drop builder, collision checkers, and teacher/room constraints.",
        features: ["Drag-and-drop timetable grid", "Collision alert engine", "Teacher constraint mappings"]
      },
      {
        name: "Substitution Finder",
        icon: Shuffle,
        description: "Detect absent staff, recommend free-period substitutes, and notify instantly.",
        features: ["Absentee auto-detection", "Recommendation search", "Instant notification alerts"]
      },
      {
        name: "Special Schedules",
        icon: Activity,
        description: "Event calendars, sports periods, exam seating arrangements, and PTM slots.",
        features: ["Event timetabling", "Seating alignment logs", "PTM appointments scheduler"]
      },
      {
        name: "Room Management",
        icon: DoorOpen,
        description: "Register classrooms, computer/science labs, and auditorium utilization logs.",
        features: ["Classroom registration index", "Auditorium booking system", "Lab usage trackers"]
      }
    ]
  },

  // Stage 3: Daily School Operations
  {
    id: "05",
    name: "Attendance Management",
    icon: CheckSquare,
    stage: 3,
    description: "Period-wise check-ins, automated absentee queues, and staff biometric sync.",
    submodules: [
      {
        name: "Student Roll Call",
        icon: UserCheck,
        description: "Period-wise or day-wise mobile app marking, RFID badge card integrations.",
        features: ["Period-wise attendance lists", "Mobile app roll-calls", "RFID scan logs"]
      },
      {
        name: "Attendance Analytics",
        icon: BarChart3,
        description: "Absentee tracking, low attendance warnings (<75%), and monthly reports.",
        features: ["Absentee tracking matrices", "Critical low alerts (<75%)", "Monthly analytics boards"]
      },
      {
        name: "Parent Notifications",
        icon: BellRing,
        description: "Automated real-time SMS/WhatsApp notifications to parents of absentees.",
        features: ["Real-time WhatsApp alerts", "Automated SMS queue", "Delivery success tallies"]
      },
      {
        name: "Biometric Staff Registry",
        icon: Fingerprint,
        description: "Biometric fingerprint/face scans, late grace periods, and regularizations.",
        features: ["Biometric integration", "Grace period tracking", "Attendance regularizations"]
      }
    ]
  },

  // Stage 4: Evaluation & Progression
  {
    id: "06",
    name: "Examination & Grading",
    icon: Award,
    stage: 4,
    description: "Date sheet builders, CBSE & ICSE grading calculators, report layouts, and fail rate analytics.",
    submodules: [
      {
        name: "Exam Planner",
        icon: Calendar,
        description: "Date sheet schedules, invigilator duty allocations, and seating plans.",
        features: ["Date-sheet grids", "Invigilator duty registers", "Seating plan designers"]
      },
      {
        name: "Grading Engine",
        icon: Calculator,
        description: "Board-compliant grading scales, internal assessments, and grace marks.",
        features: ["CBSE/ICSE scale maps", "Internal marks compute", "Grace marks rules builder"]
      },
      {
        name: "Digital Report Cards",
        icon: FileSpreadsheet,
        description: "CBSE/ICSE template generator, digital signatures, and PDF downloads.",
        features: ["Report card layouts creator", "Digital signature boxes", "PDF report downloads"]
      },
      {
        name: "Rechecking Desk",
        icon: Edit3,
        description: "Re-evaluation applications, workflow tracking, and updated marksheets.",
        features: ["Re-evaluation portals", "Change workflow logs", "Marksheet updates"]
      },
      {
        name: "Exam Analytics",
        icon: LineChart,
        description: "Topper listings, subject failure analytics, and teacher efficiency indexes.",
        features: ["Topper list metrics", "Fail rate maps", "Teaching efficiency analytics"]
      }
    ]
  },
  {
    id: "07",
    name: "Document & Certificates",
    icon: FileBadge,
    stage: 4,
    description: "QR-validated Bonafide letters, Transfer Certificates, and cloud repository logs.",
    submodules: [
      {
        name: "Document Repository",
        icon: FolderGit,
        description: "Cloud-based document storage with tag filter search and expiry monitors.",
        features: ["Cloud tags organizer", "Document expiration trackers", "Advanced filters search"]
      },
      {
        name: "Certificate Generator",
        icon: BadgeCheck,
        description: "Transfer Certificates (TC), Study/Bonafide letters with QR codes.",
        features: ["TC generator sheets", "Study/Bonafide template tools", "QR-code generator"]
      },
      {
        name: "Document Desk",
        icon: FileClock,
        description: "Requests for certificates, SLAs, and hardcopy dispatch trackers.",
        features: ["Service ticket tracker", "SLA milestone warnings", "Hardcopy dispatch updates"]
      },
      {
        name: "QR Verification",
        icon: QrCode,
        description: "Public secure QR verification links without login to prevent tampering.",
        features: ["Public validation link", "Tamper proof audit data", "Instant QR checkouts"]
      }
    ]
  },

  // Stage 5: Financial Operations
  {
    id: "08",
    name: "Fees & Finance",
    icon: Wallet,
    stage: 5,
    description: "Class term structures, discount waivers, payment gateway triggers, and refund ledger keys.",
    submodules: [
      {
        name: "Structure Configurator",
        icon: Settings2,
        description: "Term-based structures, class/category pricing, and sibling discount schemes.",
        features: ["Dynamic fee grids", "Category specific pricing", "Sibling discounts"]
      },
      {
        name: "Payment Gateway (PG)",
        icon: CreditCard,
        description: "UPI, cards, net banking integrations; real-time digital receipts.",
        features: ["Razorpay & PayU SDKs", "UPI & Instant net banking", "Real-time receipt builder"]
      },
      {
        name: "Concessions / Waivers",
        icon: Percent,
        description: "Scholarship approvals, staff child fee waivers, and verification files.",
        features: ["Scholarship logs", "Waiver verification", "Approval checklists"]
      },
      {
        name: "Dues & Defaulters",
        icon: AlertCircle,
        description: "Automated reminders, late fee penalties, and due list extractions.",
        features: ["Automated due reminders", "Late fee auto-calculations", "Defaulter reports"]
      },
      {
        name: "Refund Ledger",
        icon: RefreshCw,
        description: "Withdrawal processing, adjustments, and multi-level approvals.",
        features: ["Withdrawal refund engines", "Adjustment ledger entries", "Multi-role approval flows"]
      }
    ]
  },
  {
    id: "09",
    name: "HRM & Payroll",
    icon: Users,
    stage: 5,
    description: "Employee onboarding kit, workload capacity indexes, PF/ESIC calculators, and KPI cycle trackers.",
    submodules: [
      {
        name: "Staff Profiles",
        icon: UserPlus,
        description: "Digital onboarding kit, Aadhaar/PAN validation, joining agreements.",
        features: ["Digital onboarding", "Aadhaar & PAN auto-validations", "Employment agreement storage"]
      },
      {
        name: "Workload Balancer",
        icon: Award,
        description: "Weekly period capacity planning per teacher to avoid burnout.",
        features: ["Workload limit alerts", "Weekly capacity monitors", "Period mapping visualizers"]
      },
      {
        name: "Leave Desk",
        icon: CalendarCheck,
        description: "CL, EL, ML, Maternity requests, approval trees, and payroll sync.",
        features: ["Multi-tier leave requests", "Leave balance calculators", "Direct payroll integrations"]
      },
      {
        name: "Payroll Processor",
        icon: IndianRupee,
        description: "Basic, HRA, PF, ESIC, Professional Tax, TDS auto-computations, and payslips.",
        features: ["Automated PF & ESIC", "TDS calculations", "Digital payslip generators"]
      },
      {
        name: "Appraisal Cycle",
        icon: TrendingUp,
        description: "KPI appraisals, self-ratings, HOD comments, and increment sync.",
        features: ["Annual KPI reviews", "Self-appraisal portals", "Incremental adjustments sync"]
      }
    ]
  },
  {
    id: "10",
    name: "Inventory & Stationery",
    icon: Package,
    stage: 5,
    description: "SKU registers, damage logs, requisition routing, and vendor quotation comparisons.",
    submodules: [
      {
        name: "Item Catalog",
        icon: ListCollapse,
        description: "Category SKU catalogs, uniform sizes, lab chemicals, furniture assets.",
        features: ["SKU catalog organizer", "Uniform size charts", "Lab inventory logs"]
      },
      {
        name: "Stock Ledger",
        icon: Boxes,
        description: "Goods Receipt Notes (GRN), damage claims, and low stock alarms.",
        features: ["GRN receipt logs", "Damage registry", "Low-stock alarm prompts"]
      },
      {
        name: "Indent Requisitions",
        icon: FileSignature,
        description: "Teacher requests, HOD approvals, issue vouchers, and return receipts.",
        features: ["Digital indent forms", "HOD approval trees", "Return receipt records"]
      },
      {
        name: "Vendor & Purchase (PO)",
        icon: Truck,
        description: "RFQs, quotation tables, purchase orders, and 3-way invoice matching.",
        features: ["RFQ comparison tools", "PO automatic creators", "Three-way match checking"]
      },
      {
        name: "Physical Audit",
        icon: ClipboardCheck,
        description: "Discrepancy checks, damage write-offs, and stock reconciliation logs.",
        features: ["Audit checklist logs", "Damage write-off records", "Reconciliation reports"]
      }
    ]
  },

  // Stage 6: Logistical Support
  {
    id: "11",
    name: "Library Management",
    icon: Library,
    stage: 6,
    description: "ISBN catalogue tools, barcode circulations, late fine Waiver controls, and replacement logs.",
    submodules: [
      {
        name: "Cataloging (ISBN)",
        icon: BookOpen,
        description: "ISBN catalog lookup, barcode generation, and OPAC search desks.",
        features: ["ISBN auto-search", "Barcode generator engine", "OPAC search desk panels"]
      },
      {
        name: "Circulations",
        icon: ArrowLeftRight,
        description: "Scan-based issue/return, limits check, and book reservations.",
        features: ["Barcode scan issues", "Borrower limit check", "Reservation pipelines"]
      },
      {
        name: "Fines Desk",
        icon: DollarSign,
        description: "Automated late return fine accumulation and waiver requests.",
        features: ["Late returns calculator", "Fine waiver checklists", "Payment receipts sync"]
      },
      {
        name: "Stock Auditing",
        icon: ClipboardList,
        description: "Physical book counts, lost book replacement penalties, and weeding.",
        features: ["Physical book counts", "Lost book replacements", "Book weeding logs"]
      }
    ]
  },
  {
    id: "12",
    name: "Transport Management",
    icon: Bus,
    stage: 6,
    description: "RC and insurance registers, route stop allocations, and live map geofences.",
    submodules: [
      {
        name: "Fleet & Vehicle",
        icon: Car,
        description: "RC, insurance alerts, fuel logs, and GPS device registry.",
        features: ["RC & Insurance reminders", "Fuel log trackers", "GPS module registries"]
      },
      {
        name: "Route Mapper",
        icon: MapPin,
        description: "Stop orders, drop timings, capacity counts, and distance calculations.",
        features: ["Stop-by-stop routes maker", "Drop timing trackers", "Distance & cost calculators"]
      },
      {
        name: "Route Allocation",
        icon: UserCheck,
        description: "Student assignments, bus pass generation, and boarding check-ins.",
        features: ["Student bus mappings", "Digital bus passes", "Boarding status registers"]
      },
      {
        name: "Live GPS Tracking",
        icon: Navigation,
        description: "Real-time map locations, geofencing (2km alerts), and trip histories.",
        features: ["Live vehicle maps", "2km geofencing triggers", "Trip records database"]
      }
    ]
  },
  {
    id: "13",
    name: "Hostel & Facility",
    icon: Home,
    stage: 6,
    description: "Bed assignment grids, approved guardians visitor registers, and maintenance SLA logs.",
    submodules: [
      {
        name: "Bed Allocation",
        icon: Bed,
        description: "Hostel Block/Floor/Bed allocations and room swap requests.",
        features: ["Block floor layout grids", "Bed allocations logs", "Swap approval desks"]
      },
      {
        name: "Visitors Desk",
        icon: Users,
        description: "Pre-approved guardian visitor listings, logs, and QR gate passes.",
        features: ["Guardian list registers", "Visitor logs sheets", "QR gate passes validator"]
      },
      {
        name: "Mess & Menu",
        icon: Utensils,
        description: "Weekly menu charts, diet restrictions, and mess scanner check-ins.",
        features: ["Weekly menu planner", "Diet restriction flags", "Mess scanner checkins"]
      },
      {
        name: "Maintenance Desk",
        icon: Wrench,
        description: "Maintenance logs (plumbing, IT), SLA tickets, and closure receipts.",
        features: ["SLA ticket pipelines", "IT & Plumbing trackers", "Work closure signatures"]
      }
    ]
  },
  {
    id: "14",
    name: "Health & Wellness",
    icon: Heart,
    stage: 6,
    description: "Student allergy profiles, vaccine schedule trackers, and infirmary logs.",
    submodules: [
      {
        name: "Health Profiles",
        icon: Activity,
        description: "Allergy files, blood groups, height/weight/BMI checkups, emergency consent.",
        features: ["Critical allergy registries", "Annual BMI checkup logs", "Emergency consents"]
      },
      {
        name: "Immunizations",
        icon: Syringe,
        description: "Vaccination cards, schedule alerts, and medical camp archives.",
        features: ["Vaccination logs", "Schedule alerts generator", "Medical camp records"]
      },
      {
        name: "Infirmary First-Aid",
        icon: Stethoscope,
        description: "Incident logs, emergency contacts, ambulance calls, and treatments.",
        features: ["First-aid incident records", "Emergency contacts card", "Ambulance logs"]
      }
    ]
  },

  // Stage 7: Governance & Analytics
  {
    id: "15",
    name: "Organization Management",
    icon: Building2,
    stage: 7,
    description: "Establish structures, configure multi-campus rules, manage department gates, and define global parameters.",
    submodules: [
      {
        name: "School Entity Setup",
        icon: School,
        description: "Register legal details, UDISE code, board affiliation, and digital stamp.",
        features: ["Legal & UDISE registration", "Board affiliation setup", "Digital signature & stamp verification"]
      },
      {
        name: "Branch Management",
        icon: GitFork,
        description: "Unlimited branch control (campuses), timings, overrides, and localized settings.",
        features: ["Multi-branch setup", "Campus-specific timings", "Local configuration overrides"]
      },
      {
        name: "Department Management",
        icon: Briefcase,
        description: "Map academic (Science, Arts) and non-academic (Accounts, HR) departments.",
        features: ["Academic department mapping", "Administrative setups", "Cross-department staffing"]
      },
      {
        name: "Role & Permission (RBAC)",
        icon: Fingerprint,
        description: "Predefined roles, custom roles, and field-level read/write/approve access gates.",
        features: ["Granular RBAC controls", "Field-level read/write permissions", "Custom admin role builders"]
      },
      {
        name: "Academic Calendar",
        icon: CalendarDays,
        description: "Holiday calendars, exam weeks, parent-teacher events, and schedule locks.",
        features: ["Holiday management", "PTM & event schedules", "Session locks"]
      }
    ]
  },
  {
    id: "16",
    name: "Security & Audit",
    icon: Lock,
    stage: 7,
    description: "Row-level data restrictions, immutable actions logging, GDPR compliance, and SSO.",
    submodules: [
      {
        name: "Authentication / SSO",
        icon: Key,
        description: "Secure password, OTP-based login, 2FA, and Google Workspace integrations.",
        features: ["OTP login & 2FA support", "Google Workspace SSO", "Custom security policies"]
      },
      {
        name: "Row-Level Security",
        icon: ShieldCheck,
        description: "Staff scope restricted to their assigned sections or branches.",
        features: ["Section-specific restrictions", "Data compartmentalization", "Branch-scoped visibility"]
      },
      {
        name: "Tamper-Proof Audit Logs",
        icon: History,
        description: "Chronological logs of every user write action, exportable for legal audits.",
        features: ["Immutable trace logs", "Export logs (PDF/Excel)", "System health monitoring"]
      },
      {
        name: "Privacy Compliance",
        icon: EyeOff,
        description: "DPDP Act 2023 / GDPR compliance, data anonymization, and consent tracking.",
        features: ["DPDP Act compliance", "Data anonymization keys", "Parental consent trackers"]
      }
    ]
  },
  {
    id: "17",
    name: "Settings & Configuration",
    icon: Sliders,
    stage: 7,
    description: "Automated daily cloud backups, payment key bindings, SMS configurations, and custom formats.",
    submodules: [
      {
        name: "System Defaults",
        icon: Settings,
        description: "Setup currency (₹), regional number formats, and daily calendar shifts.",
        features: ["INR Currency customizer", "Regional date formats", "Shift timings setup"]
      },
      {
        name: "Branding Customizer",
        icon: Palette,
        description: "Custom theme colors, logos, PDF report card layouts, and certificate templates.",
        features: ["Custom color themes", "Logo & watermark uploads", "Dynamic PDF layout engine"]
      },
      {
        name: "Integration Settings",
        icon: Plug,
        description: "Payment Gateway (Razorpay/PayU) keys, SMS/WhatsApp APIs, biometric registers.",
        features: ["Razorpay/PayU Gateway integrations", "SMS & WhatsApp API configurations", "Biometric device APIs"]
      },
      {
        name: "Disaster Recovery",
        icon: Database,
        description: "Automated daily cloud backup, point-in-time recovery, and redundancy.",
        features: ["Daily cloud backup triggers", "Point-in-Time Recovery (PITR)", "Multi-region fallback stores"]
      }
    ]
  },
  {
    id: "18",
    name: "Communication Hub",
    icon: MessageSquare,
    stage: 7,
    description: "PDF attachment circular boards, WhatsApp message templates, and parent scheduling grids.",
    submodules: [
      {
        name: "Notice Board",
        icon: Megaphone,
        description: "Circular notifications with PDF/image attachments and read tallies.",
        features: ["Digital circular posters", "Media files support", "Read/Unread status sheets"]
      },
      {
        name: "Message Centre",
        icon: Send,
        description: "SMS and WhatsApp template triggers, newsletters, and emails.",
        features: ["WhatsApp message triggers", "SMS queue controls", "Newsletter mailers"]
      },
      {
        name: "Parent-Teacher Chat",
        icon: MessagesSquare,
        description: "Managed 1-on-1 portal messaging, meeting calendars, and slot bookings.",
        features: ["1-on-1 portal chats", "PTM slot calendars", "Privacy gate controls"]
      },
      {
        name: "Emergency Alerts",
        icon: AlertTriangle,
        description: "Instant multi-channel emergency messages to all staff and parents.",
        features: ["Panic broadcast controls", "Multi-channel alerts", "Emergency alerts dashboard"]
      }
    ]
  },
  {
    id: "19",
    name: "Dashboard & Analytics",
    icon: LayoutDashboard,
    stage: 7,
    description: "Revenue charts, ratio dashboards, custom query report builders.",
    submodules: [
      {
        name: "Custom Report Builder",
        icon: FileDown,
        description: "Multi-filter builders, scheduled excel reports, and PDF downloads.",
        features: ["Custom filter metrics", "Excel reports scheduling", "PDF formatting tools"]
      },
      {
        name: "Analytics Panels",
        icon: PieChart,
        description: "Revenue charts, student/staff ratio dashboards, and collection views.",
        features: ["Vibrant revenue graphs", "Student-to-Staff charts", "Fee collections dashboards"]
      }
    ]
  },
  {
    id: "20",
    name: "Approval Workflows",
    icon: FileCheck,
    stage: 7,
    description: "Leave triggers, concessions lists, mark exception gates, and requisition approvals.",
    submodules: [
      {
        name: "Multi-Stage approvals",
        icon: CheckCircle2,
        description: "Leave requests, inventory indents, concessions, and mark lock exceptions.",
        features: ["Custom approval chains", "Leave approval trees", "Mark exception overrides"]
      }
    ]
  }
];

// Branch Specific Stateful Datasets
const BRANCH_REGISTRY = {
  "Delhi NCR Campus": {
    students: "1,420",
    attendance: "94.6%",
    fees: "₹14.8L / 15L",
    gps: "8 / 8",
    attendanceWeekly: [
      { day: "Mon", val: 96 },
      { day: "Tue", val: 92 },
      { day: "Wed", val: 95 },
      { day: "Thu", val: 97 },
      { day: "Fri", val: 94 },
    ],
    studentList: [
      { name: "Aarav Sharma", id: "REG-DEL-094", class: "Class 10A", siblings: "Yes (Kriti - Class 6)", status: "Present" },
      { name: "Ananya Iyer", id: "REG-DEL-112", class: "Class 10A", siblings: "No", status: "Present" },
      { name: "Ishaan Verma", id: "REG-DEL-004", class: "Class 9B", siblings: "Yes (Rohan - Class 12)", status: "Present" },
      { name: "Kriti Sen", id: "REG-DEL-061", class: "Class 6A", siblings: "Yes (Aarav - Class 10)", status: "Present" },
      { name: "Rohan Patel", id: "REG-DEL-218", class: "Class 12C", siblings: "Yes (Ishaan - Class 9)", status: "Present" },
    ],
    gpsBusSpeed: "38 km/h",
    gpsRoute: "North NCR Ring",
    gpsDriver: "Mr. K. Singh",
  },
  "Mumbai Central Campus": {
    students: "980",
    attendance: "91.2%",
    fees: "₹9.2L / 10L",
    gps: "5 / 5",
    attendanceWeekly: [
      { day: "Mon", val: 88 },
      { day: "Tue", val: 90 },
      { day: "Wed", val: 91 },
      { day: "Thu", val: 93 },
      { day: "Fri", val: 94 },
    ],
    studentList: [
      { name: "Karan Johar", id: "REG-BOM-102", class: "Class 10B", siblings: "No", status: "Present" },
      { name: "Siddharth Malhotra", id: "REG-BOM-045", class: "Class 10B", siblings: "No", status: "Present" },
      { name: "Alia Bhatt", id: "REG-BOM-002", class: "Class 11A", siblings: "Yes (Shaheen - Class 12)", status: "Present" },
      { name: "Varun Dhawan", id: "REG-BOM-088", class: "Class 9C", siblings: "No", status: "Present" },
      { name: "Kiara Advani", id: "REG-BOM-154", class: "Class 12A", siblings: "No", status: "Present" },
    ],
    gpsBusSpeed: "22 km/h",
    gpsRoute: "Mumbai Marine Drive",
    gpsDriver: "Mr. S. Rao",
  },
  "Bengaluru South Campus": {
    students: "1,150",
    attendance: "96.1%",
    fees: "₹12.1L / 12.5L",
    gps: "6 / 6",
    attendanceWeekly: [
      { day: "Mon", val: 95 },
      { day: "Tue", val: 96 },
      { day: "Wed", val: 97 },
      { day: "Thu", val: 95 },
      { day: "Fri", val: 97 },
    ],
    studentList: [
      { name: "Nikhil Kamath", id: "REG-BLR-021", class: "Class 12A", siblings: "Yes (Nitin - Class 11)", status: "Present" },
      { name: "Nitin Kamath", id: "REG-BLR-022", class: "Class 11A", siblings: "Yes (Nikhil - Class 12)", status: "Present" },
      { name: "Kiran Mazumdar", id: "REG-BLR-001", class: "Class 10C", siblings: "No", status: "Present" },
      { name: "Nandan Nilekani", id: "REG-BLR-005", class: "Class 10A", siblings: "No", status: "Present" },
      { name: "Sudha Murty", id: "REG-BLR-009", class: "Class 8B", siblings: "No", status: "Present" },
    ],
    gpsBusSpeed: "30 km/h",
    gpsRoute: "Electronic City Expressway",
    gpsDriver: "Mr. M. Swamy",
  },
  "Hyderabad Campus": {
    students: "1,290",
    attendance: "95.2%",
    fees: "₹13.4L / 14L",
    gps: "7 / 7",
    attendanceWeekly: [
      { day: "Mon", val: 94 },
      { day: "Tue", val: 95 },
      { day: "Wed", val: 96 },
      { day: "Thu", val: 95 },
      { day: "Fri", val: 96 },
    ],
    studentList: [
      { name: "Sai Praneeth", id: "REG-HYD-044", class: "Class 10A", siblings: "No", status: "Present" },
      { name: "Shravan Reddy", id: "REG-HYD-082", class: "Class 10A", siblings: "Yes (Kavya - Class 7)", status: "Present" },
      { name: "Kavya Reddy", id: "REG-HYD-083", class: "Class 7C", siblings: "Yes (Shravan - Class 10)", status: "Present" },
      { name: "Venkat Rao", id: "REG-HYD-119", class: "Class 11B", siblings: "No", status: "Present" },
      { name: "Sania Mirza", id: "REG-HYD-001", class: "Class 12A", siblings: "No", status: "Present" },
    ],
    gpsBusSpeed: "42 km/h",
    gpsRoute: "Gachibowli Outer Ring",
    gpsDriver: "Mr. B. Reddy",
  }
};

// Premium Floating 3D Spheres Component
function ThreeDSphere({ size = "150px", colorStart = "#FF8A8C", colorMid = "#A92427", colorEnd = "#3B0506", style = {} }) {
  return (
    <motion.div
      animate={{
        y: [0, -22, 0],
        rotate: [0, 35, 0],
      }}
      transition={{
        duration: 7 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 30% 30%, ${colorStart}, ${colorMid} 55%, ${colorEnd} 100%)`,
        boxShadow: `inset -12px -12px 35px rgba(0,0,0,0.85), 10px 10px 30px rgba(169,36,39,0.22)`,
        pointerEvents: "none",
        zIndex: 1,
        ...style,
      }}
    />
  );
}

// Reusable Bobbing 3D Torus (Glowing Ring)
function ThreeDTorus({ size = "120px", color = BRAND.primaryGlow, style = {} }) {
  return (
    <motion.div
      animate={{
        y: [0, 18, -12, 0],
        rotate: [0, 360],
      }}
      transition={{
        y: { duration: 6 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
      }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `12px solid ${color}25`,
        boxShadow: `inset 0 0 20px ${color}35, 0 0 25px ${color}15`,
        pointerEvents: "none",
        zIndex: 1,
        ...style,
      }}
    />
  );
}

// Reusable High-Tech Rotating 3D SVG Wireframe Cube
function WireframeCube({ size = 150, color = BRAND.primaryGlow, style = {} }) {
  return (
    <motion.div
      animate={{
        rotateY: 360,
        rotateX: 360,
        y: [0, -15, 0],
      }}
      transition={{
        rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 24, repeat: Infinity, ease: "linear" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 1,
        transformStyle: "preserve-3d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <polygon points="50,15 85,35 50,55 15,35" fill="none" stroke={color} strokeWidth="1.5" opacity="0.35" />
        <polygon points="15,35 50,55 50,90 15,70" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <polygon points="85,35 50,55 50,90 85,70" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
        <line x1="50" y1="55" x2="50" y2="90" stroke={color} strokeWidth="2" opacity="0.45" />
      </svg>
    </motion.div>
  );
}

// Light Weight Drifting Background Particles
function BackgroundParticles({ count = 20 }) {
  const particles = Array.from({ length: count });
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
      {particles.map((_, i) => {
        const size = (i % 3) * 2 + 3; // 3px to 7px
        const initialX = (i * 7) % 100;
        const initialY = (i * 11) % 100;
        const driftX = (i * 3) % 40 - 20;
        const driftY = (i * 5) % 40 - 20;
        const duration = 12 + (i % 5) * 4;
        return (
          <motion.div
            key={i}
            animate={{
              x: [0, driftX, 0],
              y: [0, driftY, 0],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              backgroundColor: BRAND.primaryGlow,
              left: `${initialX}%`,
              top: `${initialY}%`,
              boxShadow: `0 0 10px ${BRAND.primaryGlow}`,
            }}
          />
        );
      })}
    </div>
  );
}

// Custom Hook for Viewport Responsiveness
function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 990);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet };
}

// Interactive Live Console Component
function InteractiveConsole() {
  const { isMobile } = useResponsive();
  const [activeConsoleTab, setActiveConsoleTab] = useState("overview");
  const [selectedBranch, setSelectedBranch] = useState("Delhi NCR Campus");
  const [attendanceOverrides, setAttendanceOverrides] = useState({});
  const [selectedClassFee, setSelectedClassFee] = useState("Class 10");
  const [hasConcession, setHasConcession] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [substituteStaff, setSubstituteStaff] = useState(null);
  const [isSubScanRunning, setIsSubScanRunning] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [busProgress, setBusProgress] = useState(0);

  const activeBranchData = BRANCH_REGISTRY[selectedBranch];

  // Trigger Toast Notification Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // GPS Bus Simulation ticks
  useEffect(() => {
    const timer = setInterval(() => {
      setBusProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 250);
    return () => clearInterval(timer);
  }, []);

  const calculateFees = () => {
    let base = selectedClassFee === "Class 12" ? 75000 : selectedClassFee === "Class 10" ? 68000 : 52000;
    if (hasConcession) base = base * 0.85; // 15% concession
    return base;
  };

  const handleAttendanceToggle = (id, name) => {
    const currentStatus = attendanceOverrides[id] || activeBranchData.studentList.find(s => s.id === id)?.status || "Present";
    const nextStatus = currentStatus === "Present" ? "Absent" : "Present";
    setAttendanceOverrides(prev => ({ ...prev, [id]: nextStatus }));

    if (nextStatus === "Absent") {
      showToast(`WhatsApp alert queued for ${name}'s parent: Absence Alert.`);
    }
  };

  const runSubFinder = () => {
    setIsSubScanRunning(true);
    setSubstituteStaff(null);
    setTimeout(() => {
      setIsSubScanRunning(false);
      setSubstituteStaff({ name: "Dr. R. K. Sen (Physics Dept)", room: "Lab 3B", slot: "Period 4" });
      showToast("Substitute recommendation complete.");
    }, 1500);
  };

  return (
    <div
      style={{
        display: isMobile ? "flex" : "grid",
        flexDirection: isMobile ? "column" : "row",
        gridTemplateColumns: isMobile ? undefined : "180px 1fr",
        height: isMobile ? "auto" : "540px",
        background: "#080B16",
        color: "#E5E7EB",
        textAlign: "left",
        fontSize: "0.9rem",
        position: "relative",
      }}
      className="dashboard-console-panel"
    >
      {/* Toast popup alerts */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: 15,
              right: 15,
              zIndex: 9999,
              background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
              border: `1px solid ${BRAND.primaryGlow}`,
              borderRadius: "10px",
              padding: "12px 20px",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "0.82rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Panel */}
      <div
        style={{
          background: "#05070F",
          borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.04)",
          borderBottom: isMobile ? "1px solid rgba(255,255,255,0.04)" : "none",
          padding: isMobile ? "12px 16px" : "16px 8px",
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          gap: 6,
          overflowX: isMobile ? "auto" : "visible",
          whiteSpace: isMobile ? "nowrap" : "normal",
        }}
      >
        {!isMobile && (
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: BRAND.primaryGlow, padding: "0 12px 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Operations
          </div>
        )}
        {[
          { id: "overview", label: "Overview Metrics", icon: LayoutDashboard },
          { id: "sis", label: "Student Profile", icon: Contact },
          { id: "timetable", label: "Timetable Grid", icon: CalendarRange },
          { id: "rollcall", label: "Daily Attendance", icon: CheckSquare },
          { id: "fees", label: "UPI Fees Desk", icon: Wallet },
          { id: "gps", label: "Live GPS Fleet", icon: MapPin },
          { id: "security", label: "Security Audit", icon: Lock },
        ].map((item) => {
          const Icon = item.icon;
          const isSel = activeConsoleTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveConsoleTab(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: isSel ? BRAND.primarySoft : "transparent",
                border: "none",
                color: isSel ? "#FFFFFF" : BRAND.textMuted,
                padding: "10px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "0.82rem",
                fontWeight: isSel ? 600 : 500,
                transition: "background-color 0.2s, color 0.2s",
              }}
            >
              <Icon size={16} style={{ color: isSel ? BRAND.primaryGlow : BRAND.textMutedDark }} />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Main Console Content Body */}
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, overflowY: "auto" }} className="console-scrollbar">
        {/* Header Strip inside Dashboard console */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: 14 }}>
          <div>
            <span style={{ fontSize: "0.78rem", color: BRAND.textMutedDark, fontWeight: 700, textTransform: "uppercase" }}>
              Active Environment
            </span>
            <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF", marginTop: 2 }}>
              Edops Management Console
            </div>
          </div>

          {/* Switcher selector */}
          <select
            value={selectedBranch}
            onChange={(e) => {
              setSelectedBranch(e.target.value);
              setSelectedStudent(null);
              showToast(`Switched active data stream to ${e.target.value}.`);
            }}
            style={{
              background: "#0E1122",
              border: `1px solid ${BRAND.border}`,
              color: "#FFFFFF",
              padding: "6px 12px",
              borderRadius: "8px",
              fontSize: "0.8rem",
              fontWeight: 500,
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="Delhi NCR Campus">Delhi NCR Campus</option>
            <option value="Mumbai Central Campus">Mumbai Central Campus</option>
            <option value="Bengaluru South Campus">Bengaluru South Campus</option>
            <option value="Hyderabad Campus">Hyderabad Campus</option>
          </select>
        </div>

        {/* Dynamic Tab Contents */}
        {activeConsoleTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Widget Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 14 }}>
              {[
                { title: "Total Students", val: activeBranchData.students, change: "+12% Enquiry", clr: BRAND.primaryGlow },
                { title: "Roll-Call Attendance", val: activeBranchData.attendance, change: "Today's log synced", clr: "#10B981" },
                { title: "Fees Collected", val: activeBranchData.fees, change: "98% compliance", clr: "#F59E0B" },
                { title: "Active GPS Fleet", val: activeBranchData.gps, change: "Geofences active", clr: BRAND.primary },
              ].map((w, idx) => (
                <div key={idx} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "10px", padding: 16 }}>
                  <div style={{ fontSize: "0.78rem", color: BRAND.textMuted }}>{w.title}</div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#FFFFFF", margin: "6px 0 2px" }}>{w.val}</div>
                  <span style={{ fontSize: "0.74rem", color: w.clr, fontWeight: 600 }}>{w.change}</span>
                </div>
              ))}
            </div>

            {/* Custom SVG Data Bar Chart */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontWeight: 700, fontSize: "0.85rem" }}>Daily Attendance Ratios (Weekly Log)</span>
                <span style={{ fontSize: "0.76rem", color: BRAND.textMuted }}>Target: 95.0%</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", height: "120px", gap: 20, paddingTop: 10 }}>
                {activeBranchData.attendanceWeekly.map((d, i) => (
                  <div key={i} style={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ position: "relative", width: "100%", height: "100px", display: "flex", alignItems: "flex-end" }}>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${d.val}%` }}
                        transition={{ duration: 0.8 }}
                        style={{
                          width: "100%",
                          background: `linear-gradient(0deg, ${BRAND.primaryDark} 0%, ${BRAND.primaryGlow} 100%)`,
                          borderRadius: "4px 4px 0 0",
                        }}
                      />
                      <span style={{ position: "absolute", bottom: `${d.val + 2}%`, left: "50%", transform: "translateX(-50%)", fontSize: "0.75rem", fontWeight: 700 }}>
                        {d.val}%
                      </span>
                    </div>
                    <span style={{ fontSize: "0.76rem", color: BRAND.textMuted }}>{d.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeConsoleTab === "sis" && (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 220px", gap: 20 }}>
            {/* Student list */}
            <div>
              <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 12px", gap: 8, marginBottom: 14 }}>
                <Search size={16} style={{ color: BRAND.textMutedDark }} />
                <input
                  placeholder="Search students directory..."
                  style={{ background: "transparent", border: "none", color: "#FFFFFF", outline: "none", fontSize: "0.82rem", width: "100%" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {activeBranchData.studentList.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => {
                      setSelectedStudent(st);
                      showToast(`Selected Profile: ${st.name}`);
                    }}
                    style={{
                      background: "rgba(255,255,255,0.01)",
                      border: `1px solid ${selectedStudent?.id === st.id ? BRAND.borderGlow : "rgba(255,255,255,0.04)"}`,
                      borderRadius: "8px",
                      padding: "12px 16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: "#FFFFFF" }}>{st.name}</div>
                      <span style={{ fontSize: "0.75rem", color: BRAND.textMuted }}>ID: {st.id} // {st.class}</span>
                    </div>
                    <ArrowRight size={16} style={{ color: BRAND.textMutedDark }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Profile Card */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: "0.76rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase" }}>
                360° Profile Details
              </span>
              {selectedStudent ? (
                <>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF" }}>{selectedStudent.name}</div>
                    <span style={{ fontSize: "0.75rem", color: BRAND.textMuted }}>{selectedStudent.id}</span>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 10, display: "flex", flexDirection: "column", gap: 6, fontSize: "0.78rem" }}>
                    <div>
                      <span style={{ color: BRAND.textMutedDark }}>Active Class:</span>
                      <div style={{ color: "#FFFFFF", fontWeight: 500 }}>{selectedStudent.class}</div>
                    </div>
                    <div>
                      <span style={{ color: BRAND.textMutedDark }}>Sibling Connections:</span>
                      <div style={{ color: "#FFFFFF", fontWeight: 500 }}>{selectedStudent.siblings}</div>
                    </div>
                    <div>
                      <span style={{ color: BRAND.textMutedDark }}>DPDP Privacy Flag:</span>
                      <div style={{ color: "#10B981", fontWeight: 600 }}>SECURE</div>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ color: BRAND.textMutedDark, fontSize: "0.8rem", textAlign: "center", padding: "40px 0" }}>
                  Select a student profile from the registry directory.
                </div>
              )}
            </div>
          </div>
        )}

        {activeConsoleTab === "timetable" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Substitution Finder */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 700 }}>Timetable Collision Substitution Finder</h4>
                  <span style={{ fontSize: "0.76rem", color: BRAND.textMuted }}>Scans open periods, room capacity, and course credentials.</span>
                </div>
                <button
                  onClick={runSubFinder}
                  disabled={isSubScanRunning}
                  style={{
                    background: BRAND.primary,
                    border: "none",
                    color: "#FFFFFF",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {isSubScanRunning ? "Scanning Grid..." : "Find Substitute"}
                </button>
              </div>

              {/* Scan outcome */}
              {isSubScanRunning && (
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: BRAND.primaryGlow, padding: "10px 0" }}>
                  <RotateCw size={16} className="spin-element" />
                  <span style={{ fontSize: "0.8rem" }}>Analyzing 20 teacher schedules for Period 4 overlaps...</span>
                </div>
              )}

              {substituteStaff && (
                <div style={{ display: "flex", alignItems: "center", gap: 14, background: `${BRAND.primarySoft}`, border: `1px solid ${BRAND.borderGlow}`, borderRadius: "8px", padding: 14 }}>
                  <Users size={20} style={{ color: BRAND.primaryGlow }} />
                  <div>
                    <div style={{ fontWeight: 700, color: BRAND.textMain }}>{substituteStaff.name} Recommended</div>
                    <span style={{ fontSize: "0.78rem", color: BRAND.textMuted }}>
                      Available for: {substituteStaff.slot} in {substituteStaff.room}. Conflict checks complete.
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Static visual schedule */}
            <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: 18 }}>
              <div style={{ fontWeight: 700, fontSize: "0.82rem", marginBottom: 12 }}>Period Slots (Class 10A - Thursday)</div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 10 }}>
                {[
                  { p: "Period 1 (08:30)", sub: "Mathematics", teacher: "M. Kumar" },
                  { p: "Period 2 (09:30)", sub: "English Lit", teacher: "P. Sharma" },
                  { p: "Period 3 (10:45)", sub: "Chemistry", teacher: "Dr. S. Roy" },
                  { p: "Period 4 (11:45)", sub: "Physics (ABSENT)", teacher: "Pending Alloc" },
                ].map((item, idx) => (
                  <div key={idx} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${item.teacher === "Pending Alloc" ? BRAND.primary : "rgba(255,255,255,0.04)"}`, borderRadius: "8px", padding: 12 }}>
                    <div style={{ fontSize: "0.75rem", color: BRAND.textMuted }}>{item.p}</div>
                    <div style={{ fontWeight: 700, margin: "4px 0 2px" }}>{item.sub}</div>
                    <span style={{ fontSize: "0.74rem", color: BRAND.textMutedDark }}>{item.teacher}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeConsoleTab === "rollcall" && (
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <div>
                <h4 style={{ margin: 0, fontWeight: 700 }}>Real-Time Class Attendance Roll-Call</h4>
                <span style={{ fontSize: "0.76rem", color: BRAND.textMuted }}>Toggling status triggers automated parent WhatsApp alert logs.</span>
              </div>
              <span style={{ fontSize: "0.78rem", background: BRAND.primarySoft, border: `1px solid ${BRAND.border}`, padding: "4px 10px", borderRadius: "6px", color: BRAND.textMain }}>
                Today: Class 10A
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {activeBranchData.studentList.map((st) => {
                const currentStatus = attendanceOverrides[st.id] || st.status;
                return (
                  <div
                    key={st.id}
                    style={{
                      background: "rgba(255, 255, 255, 0.01)",
                      border: "1px solid rgba(255, 255, 255, 0.04)",
                      borderRadius: "8px",
                      padding: "12px 18px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "#FFFFFF" }}>{st.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <button
                        onClick={() => handleAttendanceToggle(st.id, st.name)}
                        style={{
                          background: currentStatus === "Present" ? "#10B981" : "#EF4444",
                          border: "none",
                          color: "#FFFFFF",
                          padding: "6px 14px",
                          borderRadius: "6px",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {currentStatus}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeConsoleTab === "fees" && (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 220px", gap: 20 }}>
            {/* Fees Selector structure */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ fontSize: "0.75rem", color: BRAND.textMuted, display: "block", marginBottom: 6 }}>Class Pricing Structure</label>
                <div style={{ display: "flex", gap: 8 }}>
                  {["Class 6", "Class 10", "Class 12"].map((cOption) => (
                    <button
                      key={cOption}
                      onClick={() => {
                        setSelectedClassFee(cOption);
                        showToast(`Recalculated ledger for ${cOption}`);
                      }}
                      style={{
                        background: selectedClassFee === cOption ? BRAND.primary : "rgba(255,255,255,0.03)",
                        border: `1px solid ${selectedClassFee === cOption ? BRAND.primaryGlow : "rgba(255,255,255,0.08)"}`,
                        borderRadius: "8px",
                        padding: "10px 16px",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: "0.82rem",
                        cursor: "pointer",
                        flexGrow: 1,
                      }}
                    >
                      {cOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concessions */}
              <div
                onClick={() => {
                  setHasConcession(!hasConcession);
                  showToast(hasConcession ? "Concession removed." : "Staff Child 15% Waiver applied.");
                }}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${hasConcession ? BRAND.borderGlow : "rgba(255,255,255,0.04)"}`,
                  borderRadius: "10px",
                  padding: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <div>
                  <h5 style={{ margin: 0, fontWeight: 700 }}>Staff Child Fee Waiver</h5>
                  <span style={{ fontSize: "0.76rem", color: BRAND.textMuted }}>Apply 15% waiver discount concession.</span>
                </div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "4px",
                    border: `2px solid ${hasConcession ? BRAND.primaryGlow : BRAND.textMutedDark}`,
                    backgroundColor: hasConcession ? BRAND.primary : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {hasConcession && <span style={{ color: "#FFFFFF", fontSize: "0.7rem", fontWeight: 900 }}>✓</span>}
                </div>
              </div>
            </div>

            {/* Price Checkout summary card */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: 18, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 14 }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: BRAND.textMutedDark, fontWeight: 700, textTransform: "uppercase" }}>
                  Waiver Summary Ledger
                </span>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 10, paddingTop: 10, display: "flex", flexDirection: "column", gap: 8, fontSize: "0.8rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: BRAND.textMuted }}>Base Term Fee:</span>
                    <span style={{ color: "#FFFFFF", fontWeight: 600 }}>
                      ₹{selectedClassFee === "Class 12" ? "75,000" : selectedClassFee === "Class 10" ? "68,000" : "52,000"}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: BRAND.textMuted }}>Waiver Concession:</span>
                    <span style={{ color: BRAND.primaryGlow, fontWeight: 600 }}>{hasConcession ? "-15%" : "0%"}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 8, fontSize: "0.86rem", fontWeight: 700 }}>
                    <span>Total Fee:</span>
                    <span style={{ color: "#FFFFFF" }}>₹{calculateFees().toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => showToast("Razorpay UPI gateway checkout window initialized.")}
                style={{
                  background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                  border: "none",
                  color: "#FFFFFF",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                Pay via Razorpay
              </button>
            </div>
          </div>
        )}

        {activeConsoleTab === "gps" && (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "200px 1fr", gap: 20 }}>
            {/* Bus Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "10px", padding: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Bus size={18} style={{ color: BRAND.primaryGlow }} />
                  <span style={{ fontWeight: 700 }}>School Bus 01</span>
                </div>
                <div style={{ fontSize: "0.76rem", color: BRAND.textMuted, marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
                  <span>Route: {activeBranchData.gpsRoute}</span>
                  <span>Driver: {activeBranchData.gpsDriver}</span>
                  <span>Speed: {activeBranchData.gpsBusSpeed}</span>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", padding: 12 }}>
                <span style={{ fontSize: "0.75rem", color: BRAND.textMutedDark, fontWeight: 700, textTransform: "uppercase" }}>Geofencing Checkpoint</span>
                <div style={{ color: "#10B981", fontWeight: 700, fontSize: "0.8rem", marginTop: 4 }}>
                  {busProgress > 80 ? "Arriving at Gate (2km Trigger)" : "En-route to Gate"}
                </div>
              </div>
            </div>

            {/* Map simulator */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "12px", padding: 14, height: "180px", position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: "0.76rem", color: BRAND.textMuted, marginBottom: 10 }}>Live Vector GPS Path Simulator</div>
              <svg width="100%" height="110px" style={{ background: "#05070F", borderRadius: 8 }}>
                {/* Simulated Road Grid */}
                <path d="M 20 50 Q 150 10, 240 80 T 420 40" fill="none" stroke="#1E293B" strokeWidth="12" strokeLinecap="round" />
                <path d="M 20 50 Q 150 10, 240 80 T 420 40" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6, 6" strokeLinecap="round" />

                {/* Animated Bus Node along path */}
                <svg x={`${20 + (busProgress / 100) * 380}`} y={`${30 + Math.sin(busProgress * 0.1) * 20}`} width="30" height="30">
                  <circle cx="15" cy="15" r="10" fill={BRAND.primary} stroke={BRAND.primaryGlow} strokeWidth="2" />
                  <Bus size={12} color="#FFFFFF" x="9" y="9" />
                </svg>

                {/* Stop flags */}
                <circle cx="20" cy="50" r="3" fill="#10B981" />
                <text x="25" y="55" fill="#6B7280" fontSize="8px">Stop 1</text>
                <circle cx="420" cy="40" r="3" fill="#EF4444" />
                <text x="375" y="32" fill="#6B7280" fontSize="8px">Active Campus</text>
              </svg>
            </div>
          </div>
        )}

        {activeConsoleTab === "security" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontSize: "0.76rem", color: BRAND.primaryGlow, fontWeight: 700, textTransform: "uppercase" }}>
              DPDP Act 2023 / Row-Level Security Ledger Logs
            </span>

            {/* Audit log listing */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "monospace", fontSize: "0.76rem", background: "#05070F", borderRadius: "10px", padding: 16, border: "1px solid rgba(255,255,255,0.03)" }}>
              <div style={{ display: "flex", gap: 8, color: "#10B981" }}>
                <span>[11:14:02 UTC]</span>
                <span>AUDIT_RLS: Scope verified. User principal@kernn.ai restricted to {selectedBranch} data.</span>
              </div>
              <div style={{ display: "flex", gap: 8, color: BRAND.primaryGlow }}>
                <span>[11:14:24 UTC]</span>
                <span>DPDP_GATE: Aadhaar/PAN fields masked for Student ID. Consent flags OK.</span>
              </div>
              <div style={{ display: "flex", gap: 8, color: BRAND.textMuted }}>
                <span>[11:14:55 UTC]</span>
                <span>LEDGER_LOCK: Fee transaction id TXN_Razor_8892 locked. Immutable logs sync: COMPLETE.</span>
              </div>
              <div style={{ display: "flex", gap: 8, color: "#10B981" }}>
                <span>[11:15:10 UTC]</span>
                <span>AUDIT_RBAC: Admin user config settings audit trail compiled. 0 errors found.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Graphical Multi-Campus Security Visualizer (Central Gateway node linking branches)
function MultiCampusVisualizer() {
  const { isTablet } = useResponsive();

  if (isTablet) {
    return (
      <div
        style={{
          width: "100%",
          background: "rgba(11, 15, 25, 0.5)",
          border: `1px solid ${BRAND.border}`,
          borderRadius: "20px",
          padding: "28px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Central Gateway Hub Card */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            background: "#0F1122",
            border: `3px solid ${BRAND.primary}`,
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            maxWidth: "320px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Lock size={20} style={{ color: BRAND.primaryGlow }} />
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.05em" }}>AUDIT GATEWAY HUB</span>
        </motion.div>

        {/* Connection text */}
        <div style={{ textTransform: "uppercase", fontSize: "0.7rem", color: BRAND.textMutedDark, fontWeight: 700, textAlign: "center", letterSpacing: "0.1em" }}>
          Secure Connected Edge Campuses
        </div>

        {/* 4 branches in a grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {/* Delhi NCR */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px 16px" }}>
            <School size={16} style={{ color: BRAND.primaryGlow }} />
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>Delhi Branch</div>
              <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>SYNCED // 94.6% Attd</span>
            </div>
          </div>

          {/* Mumbai */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px 16px" }}>
            <GitFork size={16} style={{ color: BRAND.primaryGlow }} />
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>Mumbai Campus</div>
              <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>SYNCED // Local Shift</span>
            </div>
          </div>

          {/* Mess Scanner */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px 16px" }}>
            <Utensils size={16} style={{ color: BRAND.primaryGlow }} />
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>Mess Scanner</div>
              <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>LIVE // Diet Checked</span>
            </div>
          </div>

          {/* GPS active transport */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px 16px" }}>
            <Navigation size={16} style={{ color: BRAND.primaryGlow }} />
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>GPS Transport</div>
              <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>8/8 ACTIVE // Geofence</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "380px",
        background: "rgba(11, 15, 25, 0.5)",
        border: `1px solid ${BRAND.border}`,
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow effect lines using SVG animation stroke-dashoffset */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={BRAND.primaryGlow} stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Hub Glow */}
        <circle cx="50%" cy="50%" r="120" fill="url(#hubGlow)" />

        {/* Connection Paths to branches */}
        <path d="M 120 80 Q 220 80, 275 190" fill="none" stroke={BRAND.primary} strokeWidth="1.5" strokeDasharray="5, 5" className="flowing-path-stroke" />
        <path d="M 120 300 Q 220 300, 275 190" fill="none" stroke={BRAND.primary} strokeWidth="1.5" strokeDasharray="5, 5" className="flowing-path-stroke" />
        <path d="M 440 80 Q 340 80, 275 190" fill="none" stroke={BRAND.primary} strokeWidth="1.5" strokeDasharray="5, 5" className="flowing-path-stroke" />
        <path d="M 440 300 Q 340 300, 275 190" fill="none" stroke={BRAND.primary} strokeWidth="1.5" strokeDasharray="5, 5" className="flowing-path-stroke" />
      </svg>

      {/* Network Nodes overlay */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Central Gateway Hub node */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], boxShadow: [`0 0 15px ${BRAND.primaryGlow}40`, `0 0 30px ${BRAND.primaryGlow}70`, `0 0 15px ${BRAND.primaryGlow}40`] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#0F1122",
            border: `3px solid ${BRAND.primary}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Lock size={24} style={{ color: BRAND.primaryGlow }} />
          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.05em" }}>AUDIT HUB</span>
        </motion.div>

        {/* Delhi NCR Campus Node (Top Left) */}
        <div style={{ position: "absolute", top: "50px", left: "40px", display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "8px 14px" }}>
          <School size={16} style={{ color: BRAND.primaryGlow }} />
          <div>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>Delhi Branch</div>
            <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>SYNCED // 94.6% Attd</span>
          </div>
        </div>

        {/* Mumbai Campus Node (Bottom Left) */}
        <div style={{ position: "absolute", bottom: "50px", left: "40px", display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "8px 14px" }}>
          <GitFork size={16} style={{ color: BRAND.primaryGlow }} />
          <div>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>Mumbai Campus</div>
            <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>SYNCED // Local Shift</span>
          </div>
        </div>

        {/* Mess & Cafeteria Scanner (Top Right) */}
        <div style={{ position: "absolute", top: "50px", right: "40px", display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "8px 14px" }}>
          <Utensils size={16} style={{ color: BRAND.primaryGlow }} />
          <div>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>Mess Scanner</div>
            <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>LIVE // Diet Checked</span>
          </div>
        </div>

        {/* GPS Active Transport Node (Bottom Right) */}
        <div style={{ position: "absolute", bottom: "50px", right: "40px", display: "flex", alignItems: "center", gap: 10, background: "#05070F", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "8px 14px" }}>
          <Navigation size={16} style={{ color: BRAND.primaryGlow }} />
          <div>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#FFFFFF" }}>GPS Transport</div>
            <span style={{ fontSize: "0.65rem", color: BRAND.textMutedDark }}>8/8 ACTIVE // Geofenced</span>
          </div>
        </div>
      </div>

      {/* Styled connection stroke keyframe */}
      <style>{`
        .flowing-path-stroke {
          animation: dashoffset-run 3s linear infinite;
        }
        @keyframes dashoffset-run {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
}

export default function EdopsProductPage() {
  const { isMobile, isTablet } = useResponsive();
  const [activeStage, setActiveStage] = useState(1);
  const [selectedExploreStage, setSelectedExploreStage] = useState(1);
  const [activeModule, setActiveModule] = useState(null);

  const stageRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer to update active stage in the story timeline
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-28% 0px -38% 0px",
      threshold: 0.15,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stageId = parseInt(entry.target.getAttribute("data-stage-id"), 10);
          if (stageId) {
            setActiveStage(stageId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    stageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Filter modules based on selected stage
  const filteredModules = modulesData.filter((m) => m.stage === selectedExploreStage);

  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          overflowX: "hidden",
          backgroundColor: BRAND.bgDeep,
          color: BRAND.textMain,
          fontFamily: "Inter, system-ui, sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* ================= 1. HERO SECTION ================= */}
        <section
          data-hero
          style={{
            position: "relative",
            padding: "160px 24px 90px",
            background: `radial-gradient(circle at 50% 0%, ${BRAND.primaryDark}40 0%, ${BRAND.bgDeep} 65%)`,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Reusable Particles Overlay */}
          <BackgroundParticles count={25} />

          {/* Big Bobbing 3D Sphere in Hero background */}
          <ThreeDSphere
            size="240px"
            colorStart="#FF8A8C"
            colorMid="#A92427"
            colorEnd="#2B0304"
            style={{
              position: "absolute",
              top: "12%",
              right: "-80px",
              opacity: 0.22,
            }}
          />

          {/* Bobbing 3D Torus in Hero background (Left side) */}
          <ThreeDTorus
            size="140px"
            color={BRAND.primaryGlow}
            style={{
              position: "absolute",
              top: "22%",
              left: "-60px",
              opacity: 0.18,
            }}
          />

          {/* Ambient background blur blobs */}
          <motion.div
            animate={{
              x: [0, 45, -20, 0],
              y: [0, -35, 15, 0],
              scale: [1, 1.12, 0.95, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "550px",
              height: "550px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.primary}18 0%, transparent 70%)`,
              top: "-180px",
              left: "calc(50% - 275px)",
              filter: "blur(90px)",
              pointerEvents: "none",
            }}
          />

          {/* Grid Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              opacity: 0.05,
              backgroundImage: `
                linear-gradient(${BRAND.primaryGlow} 1px, transparent 1px),
                linear-gradient(90deg, ${BRAND.primaryGlow} 1px, transparent 1px)
              `,
              backgroundSize: "75px 75px",
            }}
          />

          <div style={{ maxWidth: 1200, position: "relative", zIndex: 10, width: "100%", display: "flex", flexDirection: "column", gap: "60px" }}>
            {/* Top Half: Grid with Info and Floating Logo Card */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "48px",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              {/* Left Column: Hero Copy and Actions */}
              <div>
                {/* Tagline Capsule */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(169, 36, 39, 0.08)",
                    border: `1px solid ${BRAND.primary}40`,
                    padding: "8px 22px",
                    borderRadius: "9999px",
                    marginBottom: "28px",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      backgroundColor: BRAND.primaryGlow,
                      boxShadow: `0 0 10px ${BRAND.primaryGlow}`,
                    }}
                  />
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#FCA5A5", letterSpacing: "0.08em" }}>
                    EDOPS ERP: DIGITAL-FIRST school administrative console
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    fontSize: "clamp(2.6rem, 5.2vw, 4.4rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: "-0.05em",
                    margin: "0 0 24px",
                    background: `linear-gradient(135deg, #FFFFFF 50%, #FECACA 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  The DevOps Platform for Next-Gen School Operations
                </motion.h1>

                {/* Subtitle Description */}
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    fontSize: "clamp(1.05rem, 1.8vw, 1.28rem)",
                    color: BRAND.textMuted,
                    maxWidth: 820,
                    margin: "0 0 44px",
                    lineHeight: 1.75,
                  }}
                >
                  Translating complex educational ecosystems—multi-branch governance, CBSE/ICSE compliance grading, UPI finance flows, and GPS fleets—into automated, secure operations.
                </motion.p>

                {/* Action CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    display: "flex",
                    gap: "18px",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Connected Schedule Live Demo to dispatch open-contact-popup custom event */}
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("open-contact-popup"));
                    }}
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                      color: "#FFFFFF",
                      border: "none",
                      padding: "16px 38px",
                      borderRadius: "9999px",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      cursor: "pointer",
                      boxShadow: `0 12px 28px -5px ${BRAND.primary}50`,
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 16px 32px -4px ${BRAND.primary}80`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 12px 28px -5px ${BRAND.primary}50`;
                    }}
                  >
                    Schedule Live Demo
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById("lifecycle-story");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      color: BRAND.textMain,
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      padding: "16px 38px",
                      borderRadius: "9999px",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      cursor: "pointer",
                      transition: "background-color 0.2s, border-color 0.2s, transform 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.09)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Explore Storyline
                  </button>
                </motion.div>
              </div>

              {/* Right Column: Floating Glass Logo narrative card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  style={{
                    borderRadius: 28,
                    padding: 26,
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(15,23,42,0.6))",
                    border: `1px solid ${BRAND.borderGlow}`,
                    maxWidth: 420,
                    width: "100%",
                    boxShadow:
                      "0 22px 60px rgba(15,23,42,0.95), 0 0 0 1px rgba(255,255,255,0.08)",
                    backdropFilter: "blur(18px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    textAlign: "left",
                  }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        padding: 10,
                        borderRadius: 18,
                        border: `1px solid ${BRAND.borderGlow}`,
                        backgroundColor: "rgba(15,23,42,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={EdopsLogo}
                        alt="Edops Logo"
                        style={{ height: 32, width: "auto" }}
                      />
                    </div>
                    <div style={{ fontSize: 13, color: "#E5E7EB" }}>
                      <div
                        style={{
                          fontWeight: 600,
                          marginBottom: 2,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        Edops ERP Portal
                      </div>
                      <div style={{ opacity: 0.7 }}>
                        DevOps Platform for K-12 Administration.
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(229,231,235,0.86)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Edops unifies multi-campus setups, board grading systems, Razorpay payment flows, and school fleets under a row-level-secure administration console.
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      paddingTop: 16,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 11, color: BRAND.textMuted }}>STATUS: SYNCED</span>
                    <span style={{ fontSize: 11, color: "#10B981", fontWeight: 700 }}>● SECURE ENVIRONMENT</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Half: Full-Width INTERACTIVE ADMIN CONSOLE FRAME */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 1040,
                margin: "0 auto",
                borderRadius: "20px",
                border: `1px solid ${BRAND.border}`,
                boxShadow: `0 35px 75px -15px rgba(0, 0, 0, 0.85), 0 0 50px -10px ${BRAND.primary}18`,
                overflow: "hidden",
                background: BRAND.bgDark,
                zIndex: 10,
              }}
            >
              {/* Window Frame Bar */}
              <div
                style={{
                  height: "46px",
                  background: "rgba(5, 7, 15, 0.95)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  gap: "7px",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#EF4444" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#10B981" }} />
                <span style={{ marginLeft: "auto", fontSize: "0.76rem", color: BRAND.textMuted, letterSpacing: "0.06em", fontWeight: 700 }}>
                  EDOPS K-12 ADMINISTRATOR PORTAL (LIVE ENVIRONMENT INTERACTIVE WIDGET)
                </span>
              </div>
              <InteractiveConsole />
            </motion.div>
          </div>
        </section>

        {/* ================= 2. THE PROBLEM SECTION ================= */}
        <section
          data-problem
          style={{
            position: "relative",
            padding: "110px 24px",
            background: BRAND.lightBg,
            borderTop: `1px solid ${BRAND.lightBorder}`,
            borderBottom: `1px solid ${BRAND.lightBorder}`,
            overflow: "hidden",
          }}
        >
          {/* Reusable Particles Overlay */}
          <BackgroundParticles count={15} />

          {/* Big Maroon 3D Sphere floating bottom-left */}
          <ThreeDSphere
            size="170px"
            colorStart="#FECACA"
            colorMid="#7E1C1E"
            colorEnd="#1F0405"
            style={{
              position: "absolute",
              bottom: "8%",
              left: "-90px",
              opacity: 0.1,
            }}
          />

          {/* Bobbing 3D Torus in Problem section (Top Right) */}
          <ThreeDTorus
            size="130px"
            color={BRAND.primaryGlow}
            style={{
              position: "absolute",
              top: "10%",
              right: "-70px",
              opacity: 0.08,
            }}
          />

          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 50,
              alignItems: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
                The Administrative Puzzle
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  marginBottom: 20,
                  lineHeight: 1.2,
                  color: BRAND.lightTextMain,
                }}
              >
                Before Edops, school management was locked in disconnected silos.
              </h2>
              <p style={{ fontSize: "1.05rem", color: BRAND.lightTextMuted, lineHeight: 1.8, marginBottom: 20 }}>
                Admissions entries live in one system, timetables conflict on offline boards, staff punch-in cards remain unlinked to payroll sheets, and fee collection receipts are stitched manually in month-end loops.
              </p>
              <p style={{ fontSize: "1.02rem", color: BRAND.lightTextMuted, lineHeight: 1.8 }}>
                The results are severe: lost registrations, manual coordination errors, security audit vulnerabilities, and late-fee compliance gaps that stall administrative operations.
              </p>
            </motion.div>

            {/* Interactive Chaos Visualizer */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              style={{
                background: "#FAFAFB",
                border: `1px solid ${BRAND.lightBorder}`,
                borderRadius: "20px",
                padding: "36px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Chaos Card 1 */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(239, 68, 68, 0.04)", border: "1px solid rgba(239, 68, 68, 0.15)", borderRadius: "12px", padding: "16px" }}>
                  <ShieldAlert style={{ color: "#EF4444", flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "#991B1B" }}>Timetable Conflict Warning</h4>
                    <span style={{ fontSize: "0.8rem", color: "#7F1D1D" }}>Teacher assigned to Class 10A and Lab simultaneously.</span>
                  </div>
                </div>

                {/* Chaos Card 2 */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.15)", borderRadius: "12px", padding: "16px" }}>
                  <Unplug style={{ color: "#F59E0B", flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "#92400E" }}>Unsynced Payment Warning</h4>
                    <span style={{ fontSize: "0.8rem", color: "#78350F" }}>Bank transaction completed but not registered in Student Profile.</span>
                  </div>
                </div>

                {/* Chaos Card 3 */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(243, 244, 246, 0.5)", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", opacity: 0.8 }}>
                  <RotateCw style={{ color: BRAND.lightTextMuted, flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: BRAND.lightTextMain }}>Biometric Registry Sync Delay</h4>
                    <span style={{ fontSize: "0.8rem", color: BRAND.lightTextMuted }}>Late-grace rules waiting for manual shift upload.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= 3. THE VISION SECTION ================= */}
        <section
          data-vision
          style={{
            position: "relative",
            padding: "110px 24px",
            background: BRAND.lightBgSoft,
            overflow: "hidden",
          }}
        >
          {/* Animated decorative glow blobs */}
          <motion.div
            animate={{
              scale: [1, 1.15, 0.9, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "480px",
              height: "480px",
              background: `radial-gradient(circle, ${BRAND.primary}08, transparent 65%)`,
              top: "-15%",
              left: "-10%",
              filter: "blur(90px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: 12 }}>
                The Unified Flow
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.06em",
                  marginBottom: 20,
                  color: BRAND.lightTextMain,
                }}
              >
                One Single Source of Truth
              </h2>
              <p style={{ fontSize: "1.1rem", color: BRAND.lightTextMuted, maxWidth: 760, margin: "0 auto 54px", lineHeight: 1.8 }}>
                Edops brings all stages—from admissions to governance compliance audits—into a single, secure, synchronized flow, making school administration operate like a high-performance system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= 4. WORKFLOW PIPELINE CHART ================= */}
        <section
          data-workflow
          style={{
            position: "relative",
            padding: "0 24px 110px",
            background: BRAND.lightBg,
            borderBottom: `1px solid ${BRAND.lightBorder}`,
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 10 }}>
            <h3 style={{ fontSize: "1.40rem", fontWeight: 700, color: BRAND.lightTextMain, textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", marginBottom: "40px" }}>
              Student Data Operations Workflow Pipeline
            </h3>

            {/* Workflow Flex/Grid Nodes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                position: "relative",
              }}
            >
              {[
                { name: "Enquiry Form", desc: "Admissions capture and online data verification", icon: FileText },
                { name: "Allocations Desk", desc: "Biometric indexing, profile generation & section allocation", icon: UserCheck },
                { name: "Timetable Grid", desc: "Conflict-free class assignments & schedules", icon: CalendarClock },
                { name: "Daily Operations", desc: "Roll-call registry, RFID logs & parent notices", icon: CheckSquare },
                { name: "Evaluations Desk", desc: "Mark sheets mapping & CBSE digital cards", icon: Award },
                { name: "Fees & Ledger", desc: "UPI Gateway auto-receipts & concessions sync", icon: Wallet },
                { name: "Transport Tracker", desc: "Live vehicle mapping & bus geofences", icon: Bus },
                { name: "Compliance Log", desc: "DPDP access flags & immutable security audits", icon: Lock },
              ].map((node, index) => {
                const NodeIcon = node.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.5 } }
                    }}
                    whileHover={{ scale: 1.03, borderColor: BRAND.primaryGlow }}
                    style={{
                      background: "#FAFAFB",
                      border: `1px solid ${BRAND.lightBorder}`,
                      borderRadius: "14px",
                      padding: "24px",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.01)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: `${BRAND.primary}12`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <NodeIcon style={{ width: 18, height: 18, color: BRAND.primaryGlow }} />
                      </div>
                      <span style={{ fontSize: "0.78rem", color: BRAND.lightTextMutedDark, fontWeight: 700 }}>
                        STEP 0{index + 1}
                      </span>
                    </div>

                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: BRAND.lightTextMain }}>
                      {node.name}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: BRAND.lightTextMuted, margin: 0, lineHeight: 1.5 }}>
                      {node.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= 5. STORY TIMELINE: SCHOOL LIFECYCLE STORY ================= */}
        <section
          id="lifecycle-story"
          style={{
            position: "relative",
            padding: "110px 24px",
            background: BRAND.bgDark,
            borderTop: `1px solid ${BRAND.border}`,
            borderBottom: `1px solid ${BRAND.border}`,
            overflow: "hidden",
          }}
        >
          {/* Animated decorative glow blobs */}
          <motion.div
            animate={{
              x: [0, 40, -10, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              background: `radial-gradient(circle, ${BRAND.primaryDark}15, transparent 65%)`,
              bottom: "5%",
              left: "-10%",
              filter: "blur(90px)",
              pointerEvents: "none",
            }}
          />

          {/* Added a floating 3D Sphere in Timeline background */}
          <ThreeDSphere
            size="150px"
            colorStart="#FFC1C2"
            colorMid="#A92427"
            colorEnd="#2B0506"
            style={{
              position: "absolute",
              top: "15%",
              right: "-70px",
              opacity: 0.22,
            }}
          />

          {/* Added a floating 3D Torus in Timeline background */}
          <ThreeDTorus
            size="110px"
            color={BRAND.primaryGlow}
            style={{
              position: "absolute",
              bottom: "20%",
              left: "-50px",
              opacity: 0.18,
            }}
          />

          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 10 }}>
            <div style={{ textAlign: "center", marginBottom: "88px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
                Operational Roadmap
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  marginBottom: "16px",
                  background: "linear-gradient(135deg, #FFFFFF 60%, #FECACA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The 7 Stages of K-12 Student Lifecycle
              </h2>
              <p style={{ color: BRAND.textMuted, fontSize: "1.1rem", maxWidth: 620, margin: "0 auto", lineHeight: 1.6 }}>
                A continuous, automated flow mapping the journey of a school administrative setup.
              </p>
            </div>

            {/* Timeline Layout */}
            <div
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "24px",
                maxWidth: 820,
                margin: "0 auto",
              }}
            >
              {/* Glowing Crimson Line */}
              <div
                style={{
                  position: "absolute",
                  left: "39px",
                  top: "24px",
                  bottom: "24px",
                  width: "2px",
                  background: `linear-gradient(180deg, ${BRAND.primary} 0%, ${BRAND.primaryGlow} 50%, rgba(169, 36, 39, 0.08) 100%)`,
                  zIndex: 1,
                  boxShadow: `0 0 10px ${BRAND.primary}40`,
                }}
              />

              {/* Steps */}
              {lifecycleStages.map((stage, idx) => {
                const isActive = activeStage === stage.id;
                return (
                  <React.Fragment key={stage.id}>
                    {/* Left Timeline Node */}
                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? [1, 1.22, 1] : 1,
                          boxShadow: isActive
                            ? `0 0 20px ${BRAND.primaryGlow}, inset 0 0 10px ${BRAND.primaryGlow}80`
                            : "none",
                        }}
                        transition={{
                          repeat: isActive ? Infinity : 0,
                          duration: 2.2,
                        }}
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          backgroundColor: isActive ? BRAND.primary : "#1A1D2B",
                          border: `2px solid ${isActive ? BRAND.primaryGlow : "rgba(255,255,255,0.08)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.95rem",
                          fontWeight: "bold",
                          color: isActive ? "#FFFFFF" : BRAND.textMuted,
                          cursor: "pointer",
                          transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
                        }}
                        onClick={() => {
                          const el = stageRefs.current[idx];
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }}
                      >
                        {stage.id}
                      </motion.div>
                    </div>

                    {/* Right Timeline Card */}
                    <div
                      ref={(el) => (stageRefs.current[idx] = el)}
                      data-stage-id={stage.id}
                      style={{
                        marginBottom: idx === lifecycleStages.length - 1 ? 0 : "60px",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-12%" }}
                        transition={{ duration: 0.6 }}
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${BRAND.primary}12 0%, rgba(15, 23, 42, 0.45) 60%)`
                            : "rgba(15, 23, 42, 0.25)",
                          border: `1px solid ${isActive ? BRAND.borderGlow : "rgba(255, 255, 255, 0.05)"}`,
                          borderRadius: "18px",
                          padding: "32px",
                          backdropFilter: "blur(12px)",
                          boxShadow: isActive ? `0 12px 35px ${BRAND.primary}05` : "none",
                          cursor: "pointer",
                          transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                        }}
                        whileHover={{
                          scale: 1.025,
                          borderColor: BRAND.borderGlow,
                          boxShadow: `0 0 28px ${BRAND.primary}1a`,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: isActive ? BRAND.primaryGlow : BRAND.textMutedDark,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          Stage 0{stage.id}
                        </span>
                        <h3
                          style={{
                            fontSize: "1.55rem",
                            fontWeight: 800,
                            margin: "0 0 16px",
                            color: isActive ? BRAND.textMain : "#E5E7EB",
                          }}
                        >
                          {stage.title}
                        </h3>
                        <p
                          style={{
                            color: BRAND.textMuted,
                            lineHeight: 1.75,
                            fontSize: "0.96rem",
                            margin: "0 0 24px",
                          }}
                        >
                          {stage.description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          {stage.benefits.map((b, bIdx) => (
                            <div key={bIdx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <CheckCircle2 style={{ width: 16, height: 16, color: BRAND.primaryGlow }} />
                              <span style={{ color: "#D1D5DB", fontSize: "0.9rem" }}>{b}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= 6. REDESIGNED MODULES SPLIT-DASHBOARD REGISTRY ================= */}
        <section
          data-suites
          style={{
            position: "relative",
            padding: "110px 24px",
            background: BRAND.bgDeep,
            overflow: "hidden",
            borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
          }}
        >
          {/* Ambient Particles in Registry background */}
          <BackgroundParticles count={20} />

          {/* Medium floating sphere next to stages menu */}
          <ThreeDSphere
            size="140px"
            colorStart="#FFC2C4"
            colorMid="#A92427"
            colorEnd="#2B0506"
            style={{
              position: "absolute",
              bottom: "12%",
              right: "-60px",
              opacity: 0.2,
            }}
          />

          {/* Animated decorative blob */}
          <motion.div
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 40, -10, 0],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "440px",
              height: "440px",
              background: `radial-gradient(circle, ${BRAND.primaryDark}10, transparent 65%)`,
              top: "10%",
              right: "-5%",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 10 }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
                Registry Explorer
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  marginBottom: "16px",
                  background: "linear-gradient(135deg, #FFFFFF 60%, #FECACA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Module & Feature Registry
              </h2>
              <p style={{ color: BRAND.textMuted, fontSize: "1.1rem", maxWidth: 620, margin: "0 auto" }}>
                Explore Edops' 20 core educational system modules mapped to their school lifecycle.
              </p>
            </div>

            {/* Split Screen Layout Container */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1.2fr 3fr",
                gap: "32px",
                alignItems: "start",
              }}
              className="split-registry-grid"
            >
              {/* Left Column: Vertical Stepper stages */}
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  gap: "12px",
                  background: "#080B18",
                  border: `1px solid ${BRAND.border}`,
                  padding: "16px",
                  borderRadius: "20px",
                  position: isMobile ? "static" : "sticky",
                  top: "100px",
                  zIndex: 20,
                  overflowX: isMobile ? "auto" : "visible",
                  whiteSpace: isMobile ? "nowrap" : "normal",
                }}
                className="stages-left-stepper"
              >
                {!isMobile && (
                  <div style={{ fontSize: "0.76rem", color: BRAND.textMutedDark, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 8px 8px" }}>
                    School Lifecycle Stages
                  </div>
                )}
                {lifecycleStages.map((stage) => {
                  const isSelected = selectedExploreStage === stage.id;
                  return (
                    <div
                      key={stage.id}
                      onClick={() => setSelectedExploreStage(stage.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        background: isSelected ? BRAND.primarySoft : "transparent",
                        border: `1px solid ${isSelected ? BRAND.borderGlow : "transparent"}`,
                        padding: "14px 18px",
                        borderRadius: "14px",
                        cursor: "pointer",
                        color: isSelected ? "#FFFFFF" : BRAND.textMuted,
                        transition: "all 0.25s ease",
                        flexShrink: 0,
                      }}
                      onMouseOver={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                          e.currentTarget.style.color = "#FFFFFF";
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = BRAND.textMuted;
                        }
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: isSelected ? BRAND.primary : "rgba(255, 255, 255, 0.05)",
                          border: `1px solid ${isSelected ? BRAND.borderGlow : "rgba(255,255,255,0.08)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: isSelected ? "#FFFFFF" : BRAND.textMutedDark,
                          transition: "all 0.25s ease",
                        }}
                      >
                        0{stage.id}
                      </div>
                      <span style={{ fontSize: "0.92rem", fontWeight: isSelected ? 700 : 500 }}>
                        {stage.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Active modules listings */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "20px",
                }}
                className="modules-right-grid"
              >
                <AnimatePresence mode="popLayout">
                  {filteredModules.map((mod) => {
                    const IconComponent = mod.icon;
                    return (
                      <motion.div
                        layout
                        key={mod.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        whileHover={{
                          y: -3,
                          borderColor: BRAND.borderGlow,
                          boxShadow: `0 8px 30px ${BRAND.primary}08`,
                        }}
                        // Redesigned with custom CSS sweeping highlight shine effect
                        className="glowing-shine-card"
                        style={{
                          background: "#0D1121",
                          border: `1px solid rgba(255, 255, 255, 0.05)`,
                          borderRadius: "18px",
                          padding: "28px",
                          cursor: "pointer",
                          backdropFilter: "blur(12px)",
                          display: "grid",
                          gridTemplateColumns: "auto 1fr",
                          gap: "24px",
                          alignItems: "start",
                          transition: "border-color 0.25s, box-shadow 0.25s",
                        }}
                        onClick={() => setActiveModule(mod)}
                      >
                        {/* Icon Node */}
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: `${BRAND.primary}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent style={{ width: 20, height: 20, color: BRAND.primaryGlow }} />
                        </div>

                        {/* Details */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                            Module {mod.id}
                          </span>
                          <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "0 0 10px", color: BRAND.textMain }}>
                            {mod.name}
                          </h3>
                          <p style={{ color: BRAND.textMuted, fontSize: "0.93rem", lineHeight: 1.6, margin: "0 0 20px" }}>
                            {mod.description}
                          </p>

                          {/* Submodules previews tags */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                            {mod.submodules.map((sub, sIdx) => (
                              <span
                                key={sIdx}
                                style={{
                                  fontSize: "0.74rem",
                                  background: "rgba(255, 255, 255, 0.02)",
                                  border: "1px solid rgba(255, 255, 255, 0.04)",
                                  borderRadius: "6px",
                                  padding: "4px 8px",
                                  color: BRAND.textMuted,
                                }}
                              >
                                {sub.name}
                              </span>
                            ))}
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                              paddingTop: "14px",
                              fontSize: "0.82rem",
                              color: BRAND.textMutedDark,
                            }}
                          >
                            <span>{mod.submodules.length} submodules available</span>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: BRAND.primaryGlow, fontWeight: 700 }}>
                              <span>Explore Details</span>
                              <ArrowRight style={{ width: 14, height: 14 }} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 7. TECHNICAL ARCHITECTURE SECTION ================= */}
        <section
          data-architecture
          style={{
            position: "relative",
            padding: "110px 24px",
            background: BRAND.bgDark,
            borderTop: `1px solid ${BRAND.border}`,
            borderBottom: `1px solid ${BRAND.border}`,
            overflow: "hidden",
          }}
        >
          {/* Big Glowing Crimson Orb behind Architecture Visualizer */}
          <ThreeDSphere
            size="200px"
            colorStart="#FFC1C2"
            colorMid="#C94043"
            colorEnd="#300102"
            style={{
              position: "absolute",
              top: "-90px",
              right: "-60px",
              opacity: 0.2,
            }}
          />

          {/* Rotating 3D Wireframe Cube (High-tech element in background) */}
          <WireframeCube
            size={180}
            color={BRAND.primaryGlow}
            style={{
              position: "absolute",
              bottom: "10%",
              left: "3%",
            }}
          />

          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 50,
              alignItems: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* CENTRAL NETWORK SECURITY COMPLIANCE FLOW DESIGN */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <MultiCampusVisualizer />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
                Technical Foundation
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  marginBottom: 20,
                  color: BRAND.textMain,
                }}
              >
                Engineered for Multi-Campus Governance & Compliance
              </h2>
              <p style={{ fontSize: "1.05rem", color: BRAND.textMuted, lineHeight: 1.8, marginBottom: 20 }}>
                Edops architecture is built to serve multi-branch setups securely. Each campus can define custom calendar overrides and timing shifts while drawing academic policies from a centralized governance module.
              </p>

              {/* Bullet Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "start", gap: 12 }}>
                  <ShieldCheck style={{ color: BRAND.primaryGlow, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: "0.98rem", color: BRAND.textMain }}>Row-Level Security Gates</h4>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: BRAND.textMuted }}>Staff data permissions are restricted precisely to their assigned campuses.</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "start", gap: 12 }}>
                  <ShieldCheck style={{ color: BRAND.primaryGlow, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: "0.98rem", color: BRAND.textMain }}>DPDP Act Compliance Audit</h4>
                    <p style={{ margin: 0, fontSize: "0.88rem", color: BRAND.textMuted }}>Consent flags and PII data anonymization engines map to legal privacy acts.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= 8. ROADMAP JOURNEY ================= */}
        <section
          data-journey
          style={{
            position: "relative",
            padding: "110px 24px",
            background: BRAND.lightBgSoft,
            overflow: "hidden",
            borderTop: `1px solid ${BRAND.lightBorder}`,
            borderBottom: `1px solid ${BRAND.lightBorder}`,
          }}
        >
          {/* Animated decorative glow blobs */}
          <motion.div
            animate={{
              x: [0, 30, -10, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ duration: 18, repeat: Infinity }}
            style={{ position: "absolute", width: "400px", height: "400px", background: `radial-gradient(circle, ${BRAND.primary}08, transparent 65%)`, bottom: "-10%", left: "-10%", filter: "blur(90px)", pointerEvents: "none" }}
          />

          <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 10 }}>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>
                Integration Path
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 900, color: BRAND.lightTextMain, letterSpacing: "-0.05em" }}>
                The Implementation Roadmap
              </h2>
              <p style={{ color: BRAND.lightTextMuted, fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                A structured roadmap to initialize Edops ERP across branches in 4 simple phases.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px" }}>
              {[
                { phase: "PHASE 01", title: "Configuration", desc: "Setting legal entities, branches, mapping curriculum templates and roles." },
                { phase: "PHASE 02", title: "Device Hookups", desc: "Connecting biometric machinery, payment gateways, and WhatsApp SMS channels." },
                { phase: "PHASE 03", title: "Staff Rollout", desc: "Opening student profile allocator databases and timetabling tools." },
                { phase: "PHASE 04", title: "Live Governance", desc: "Deploying portal applications to parents, running fee cycles & audits." },
              ].map((step, index) => (
                <div
                  key={index}
                  style={{
                    background: BRAND.lightBg,
                    border: `1px solid ${BRAND.lightBorder}`,
                    borderRadius: "18px",
                    padding: "32px",
                    position: "relative",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.01)",
                  }}
                >
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: BRAND.primaryGlow, letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                    {step.phase}
                  </span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0 0 12px", color: BRAND.lightTextMain }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "0.93rem", color: BRAND.lightTextMuted, margin: 0, lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 9. FINAL CTA SECTION ================= */}
        <section
          id="cta-section"
          data-cta
          style={{
            position: "relative",
            padding: "110px 24px",
            background: `linear-gradient(135deg, ${BRAND.primaryDark} 0%, ${BRAND.bgDeep} 100%)`,
            borderTop: `1px solid ${BRAND.border}`,
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Background flows */}
          <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${BRAND.primaryGlow}18, transparent 70%)`, top: "-180px", left: "-80px" }} />
          <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${BRAND.primary}18, transparent 70%)`, bottom: "-180px", right: "-80px" }} />

          <div style={{ maxWidth: 740, margin: "0 auto", position: "relative", zIndex: 10 }}>
            <GraduationCap style={{ width: 52, height: 52, color: BRAND.primaryGlow, marginBottom: "28px", display: "inline-block" }} />

            <h2
              style={{
                fontSize: "clamp(2.1rem, 4.2vw, 2.9rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                marginBottom: "20px",
                color: BRAND.textMain,
              }}
            >
              Ready to architect your school operations?
            </h2>

            <p
              style={{
                fontSize: "1.12rem",
                color: BRAND.textMuted,
                marginBottom: "44px",
                lineHeight: 1.7,
              }}
            >
              Get in touch to schedule a personalized walkthrough of the Edops ERP platform customized for your institution board standards.
            </p>

            {/* Connected Request a Live Demo to dispatch open-contact-popup custom event */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-contact-popup"));
              }}
              style={{
                backgroundColor: BRAND.textMain,
                color: BRAND.primaryDark,
                border: "none",
                padding: "18px 46px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 15px 35px -8px rgba(0, 0, 0, 0.45)",
                transition: "background-color 0.2s, color 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = BRAND.primaryGlow;
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = BRAND.textMain;
                e.currentTarget.style.color = BRAND.primaryDark;
              }}
            >
              Request a Live Demo
            </motion.button>
          </div>
        </section>

        {/* ================= 10. REDESIGNED SLIDE-OUT DETAIL DRAWER ================= */}
        <AnimatePresence>
          {activeModule && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 9990,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {/* Backdrop Overlay with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(3, 7, 18, 0.65)",
                  backdropFilter: "blur(6px)",
                }}
                onClick={() => setActiveModule(null)}
              />

              {/* Right Sliding Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 32, stiffness: 240 }}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "540px",
                  height: "100vh",
                  background: "rgba(11, 13, 23, 0.96)",
                  borderLeft: `1px solid ${BRAND.primary}45`,
                  padding: "40px 36px 36px",
                  boxShadow: `-12px 0 45px rgba(0, 0, 0, 0.8), 0 0 50px ${BRAND.primary}12`,
                  backdropFilter: "blur(24px)",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 9995,
                  boxSizing: "border-box",
                }}
              >
                {/* Close Button (Bulletproof SVG Path Cross) */}
                <button
                  onClick={() => setActiveModule(null)}
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "none",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background-color 0.2s, transform 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND.primary;
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                    <line x1="1" y1="1" x2="13" y2="13"></line>
                    <line x1="13" y1="1" x2="1" y2="13"></line>
                  </svg>
                </button>

                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px", paddingBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: `${BRAND.primary}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {React.createElement(activeModule.icon, { style: { width: 24, height: 24, color: BRAND.primaryGlow } })}
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: BRAND.primaryGlow, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Module {activeModule.id}
                    </span>
                    <h2 style={{ fontSize: "1.55rem", fontWeight: 900, margin: "0", color: BRAND.textMain, letterSpacing: "-0.02em" }}>
                      {activeModule.name}
                    </h2>
                  </div>
                </div>

                {/* Scrollable Submodule List */}
                <div
                  style={{
                    flexGrow: 1,
                    overflowY: "auto",
                    paddingRight: "8px",
                    marginBottom: "8px",
                  }}
                  className="drawer-scroll-container"
                >
                  <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: BRAND.textMutedDark, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 20px" }}>
                    Submodules ({activeModule.submodules.length})
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    {activeModule.submodules.map((sub, sIdx) => {
                      const SubIcon = sub.icon;
                      return (
                        <div
                          key={sIdx}
                          style={{
                            background: "rgba(255, 255, 255, 0.01)",
                            border: "1px solid rgba(255, 255, 255, 0.04)",
                            borderRadius: "14px",
                            padding: "20px",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                            <SubIcon style={{ width: 16, height: 16, color: BRAND.primaryGlow }} />
                            <h5 style={{ fontSize: "1.02rem", fontWeight: 700, margin: 0, color: BRAND.textMain }}>
                              {sub.name}
                            </h5>
                          </div>
                          <p style={{ color: BRAND.textMuted, fontSize: "0.88rem", lineHeight: 1.55, margin: "0 0 16px" }}>
                            {sub.description}
                          </p>

                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {sub.features.map((feat, fIdx) => (
                              <span
                                key={fIdx}
                                style={{
                                  background: BRAND.primarySoft,
                                  border: `1px solid ${BRAND.primary}25`,
                                  borderRadius: "6px",
                                  padding: "4px 8px",
                                  fontSize: "0.74rem",
                                  color: BRAND.textMain,
                                  fontWeight: 500,
                                }}
                              >
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <Footer />
      </div>

      {/* CSS Styles overrides */}
      <style>{`
        /* Polished custom drawer scrollbar */
        .drawer-scroll-container::-webkit-scrollbar {
          width: 4px !important;
        }
        .drawer-scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01) !important;
          border-radius: 2px !important;
        }
        .drawer-scroll-container::-webkit-scrollbar-thumb {
          background: rgba(169, 36, 39, 0.3) !important;
          border-radius: 2px !important;
        }
        .drawer-scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(169, 36, 39, 0.6) !important;
        }

        /* Console scrollbar styling */
        .console-scrollbar::-webkit-scrollbar {
          width: 6px !important;
          height: 6px !important;
        }
        .console-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01) !important;
          border-radius: 3px !important;
        }
        .console-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05) !important;
          border-radius: 3px !important;
        }
        .console-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }

        /* Premium sweeping highlight shine card styling */
        .glowing-shine-card {
          position: relative;
          overflow: hidden;
        }
        .glowing-shine-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.06),
            rgba(201, 64, 67, 0.18),
            rgba(255, 255, 255, 0.06),
            transparent
          );
          transition: all 0.75s ease;
          pointer-events: none;
        }
        .glowing-shine-card:hover::before {
          left: 150%;
        }

        /* Responsive grid collapses for split-registry explorer */
        @media (max-width: 900px) {
          .split-registry-grid {
            grid-template-columns: 1fr !important;
          }
          .stages-left-stepper {
            position: relative !important;
            top: 0 !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
            ms-overflow-style: none !important;
          }
          .stages-left-stepper::-webkit-scrollbar {
            display: none !important;
          }
          .stages-left-stepper > div {
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
          .modules-right-grid {
            grid-column: span 1 !important;
          }
        }

        /* Keyframes for spinning loader */
        @keyframes spin-element-anim {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-element {
          animation: spin-element-anim 1.2s linear infinite;
        }
      `}</style>
    </>
  );
}
