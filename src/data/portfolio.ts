// ─────────────────────────────────────────────────────────────
//  PORTFOLIO DATA  –  Edit this file to update your portfolio
// ─────────────────────────────────────────────────────────────

export const personal = {
  name:       "John Doe",
  title:      "Penetration Tester & Security Engineer",
  bio:        "I break things so others can't. With 6+ years securing enterprise infrastructure, I specialize in offensive security, red team operations, and helping organizations understand their real attack surface before adversaries do.",
  location:   "City, Country",
  email:      "john@example.com",
  linkedin:   "https://linkedin.com/in/johndoe",
  github:     "https://github.com/johndoe",
  available:  true,
};

export const skills: string[] = [
  "Penetration Testing",
  "Red Team Ops",
  "Threat Intelligence",
  "SIEM / SOC",
  "Malware Analysis",
  "Cloud Security",
  "Python / Bash",
];

// highlight the first N skills with the accent color
export const highlightedSkillCount = 3;

// ─── WORK EXPERIENCE ──────────────────────────────────────────
export interface Job {
  title:    string;
  company:  string;
  type:     string;   // e.g. "Full-time · Remote"
  period:   string;
  bullets:  string[];
}

export const experience: Job[] = [
  {
    title:   "Senior Penetration Tester",
    company: "CyberGuard Solutions",
    type:    "Full-time · Remote",
    period:  "2022 — present",
    bullets: [
      "Led external and internal network penetration tests for Fortune 500 clients, identifying critical vulnerabilities and reducing average risk score by 40%.",
      "Developed custom exploit scripts and post-exploitation tooling for red team engagements using Python and PowerShell.",
      "Authored comprehensive technical reports and executive summaries for C-suite stakeholders.",
    ],
  },
  {
    title:   "Security Analyst II",
    company: "FinSecure Bank",
    type:    "Full-time · On-site",
    period:  "2020 — 2022",
    bullets: [
      "Monitored SIEM alerts across a hybrid cloud environment, triaging and escalating high-severity incidents within SLA windows.",
      "Conducted vulnerability assessments of internal web applications using Burp Suite and OWASP methodology.",
      "Collaborated with DevOps to integrate SAST/DAST tools into CI/CD pipelines, reducing production vulnerabilities by 60%.",
    ],
  },
  {
    title:   "Junior Security Analyst",
    company: "NetSafe Corp",
    type:    "Full-time · On-site",
    period:  "2018 — 2020",
    bullets: [
      "Performed first-line triage of security alerts and participated in incident response exercises.",
      "Maintained and tuned IDS/IPS rulesets, reducing false positive rate by 35%.",
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────
export interface Project {
  index:   string;   // e.g. "[01]"
  name:    string;
  desc:    string;
  stack:   string[];
  github?: string;
  demo?:   string;
  blog?:   string;
  writeup?: string;
}

export const projects: Project[] = [
  {
    index:  "[01]",
    name:   "PhishNet Detector",
    desc:   "ML-powered phishing URL classification engine with 97.3% accuracy, trained on a dataset of 500k URLs.",
    stack:  ["Python", "scikit-learn", "FastAPI"],
    github: "https://github.com/johndoe/phishnet",
    demo:   "#",
  },
  {
    index:  "[02]",
    name:   "RedOps C2 Framework",
    desc:   "Lightweight command-and-control framework for red team operations with encrypted comms over DNS tunnelling.",
    stack:  ["Go", "DNS", "AES-256"],
    github: "https://github.com/johndoe/redops",
  },
  {
    index:  "[03]",
    name:   "CloudEnum",
    desc:   "Automated S3/Azure Blob/GCS bucket enumeration and misconfiguration scanner used in cloud security assessments.",
    stack:  ["Python", "AWS SDK", "Azure"],
    github: "https://github.com/johndoe/cloudenum",
  },
  {
    index:  "[04]",
    name:   "CTF Writeups",
    desc:   "Collection of 40+ detailed write-ups from HackTheBox, TryHackMe, and CTF competitions covering web, pwn, crypto, and forensics.",
    stack:  ["HackTheBox", "CTF", "Web / Pwn"],
    writeup: "#",
  },
  {
    index:  "[05]",
    name:   "SIEM Rule Engine",
    desc:   "Sigma-based detection rule converter and testing harness for Splunk, Elastic, and Microsoft Sentinel.",
    stack:  ["Python", "Sigma", "Splunk"],
    github: "https://github.com/johndoe/siem-rules",
  },
  {
    index:  "[06]",
    name:   "AD Attack Mapper",
    desc:   "Interactive Active Directory attack path visualizer that maps BloodHound data to MITRE ATT&CK techniques.",
    stack:  ["Neo4j", "BloodHound", "D3.js"],
    blog:   "#",
  },
];

// ─── EDUCATION ────────────────────────────────────────────────
export interface Degree {
  period:      string;
  degree:      string;
  institution: string;
  note?:       string;
}

export const education: Degree[] = [
  {
    period:      "2016–2018",
    degree:      "M.Sc. Information Security",
    institution: "Royal Holloway, University of London",
    note:        "Dissertation: Adversarial Machine Learning Attacks on Intrusion Detection Systems. Graduated with Distinction.",
  },
  {
    period:      "2012–2016",
    degree:      "B.Sc. Computer Science",
    institution: "University of [City]",
    note:        "Major in Networks & Systems Security. First Class Honours. Final year project: Port knocking implementation on Linux.",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────
export interface Cert {
  badge:  string;   // short acronym shown large
  name:   string;
  issuer: string;
  year:   string;
}

export const certifications: Cert[] = [
  { badge: "OSCP",  name: "Offensive Security Certified Professional",     issuer: "Offensive Security", year: "2021" },
  { badge: "CISSP", name: "Certified Information Systems Security Professional", issuer: "ISC²",          year: "2022" },
  { badge: "CEH",   name: "Certified Ethical Hacker",                      issuer: "EC-Council",         year: "2020" },
  { badge: "AWS",   name: "AWS Security Specialty",                        issuer: "Amazon Web Services", year: "2023" },
  { badge: "SC+",   name: "CompTIA Security+",                             issuer: "CompTIA",            year: "2019" },
  { badge: "eJPT",  name: "eLearnSecurity Junior Penetration Tester",      issuer: "eLearnSecurity",     year: "2018" },
];

// ─── VOLUNTEER ────────────────────────────────────────────────
export interface VolunteerRole {
  role:    string;
  org:     string;
  period:  string;
  desc:    string;
}

export const volunteer: VolunteerRole[] = [
  {
    role:   "CTF Organizer & Challenge Author",
    org:    "BSides [City]",
    period: "2020 — present",
    desc:   "Designed and authored 12+ CTF challenges across web exploitation, binary exploitation, and cryptography categories for the annual BSides security conference. Mentored first-time participants through workshops.",
  },
  {
    role:   "Security Awareness Trainer",
    org:    "CyberFirst NGO",
    period: "2019 — 2021",
    desc:   "Delivered free cybersecurity awareness sessions to local small businesses and nonprofits, covering phishing, password hygiene, and social engineering defence. Reached 200+ participants.",
  },
  {
    role:   "Open Source Contributor",
    org:    "OWASP Foundation",
    period: "2018 — present",
    desc:   "Contributing member of the OWASP Testing Guide project — authored sections on API security testing and contributed code review checklist items adopted in the v4.2 release.",
  },
];
