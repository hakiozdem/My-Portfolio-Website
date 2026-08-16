// ─────────────────────────────────────────────────────────────
//  PORTFOLIO DATA  –  Edit this file to update your portfolio
// ─────────────────────────────────────────────────────────────

export const personal = {
  name:       "Haktan Özdemir",
  title:      "Identity Governance Analyst",
  bio:        "I started in Materials Science, switched to Computer Engineering, and somewhere between an internship and a Kubernetes certification I fell into Identity Governance — the part of security that decides who gets to do what, and why. Today I'm an Analyst at Garanti BBVA, where I design RBAC models, risk-score entitlement changes, and write the Python and SQL that make access reviews actually reviewable. I'm based in Istanbul, certified across Cisco, Microsoft and the Linux Foundation, and most interested in the place where governance, automation, and cloud security meet.",
  location:   "Istanbul, Türkiye",
  email:      "haktanozdem@gmail.com",
  linkedin:   "https://www.linkedin.com/in/haktanozdemir",
  github:     "https://github.com/hakiozdem",
  available:  true,
};

export const skills: string[] = [
  "Identity Governance",
  "Information Security",
  "Advanced Data Analytics",
  "Python/SQL",
  "Advanced Excel Techniques (Macros, PowerQuery, PowerPivot)",
  "DevOps",
  "Cloud Security",
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
    title:   "Authorization Process and Management - Associate",
    company: "Garanti BBVA",
    type:    "Full-time · Hybrid",
    period:  "January 2026 — present",
    bullets: [
      "Designed a risk scoring form to quantify the risk of bulk entitlement distributions across multiple roles, enabling data-driven evaluation before high-impact provisioning operations",
      "Built Excel VBA macros to streamline repetitive email operations, applying scripting solutions within constraints of business-user tooling.",
    ],
  },
  {
    title:   "Authorization Process and Management - Analyst",
    company: "Garanti BBVA",
    type:    "Full-time · Hybrid",
    period:  "August 2024 — December 2025",
    bullets: [
      "Implemented and maintaining role-based access control (RBAC) models and role matrices",
      "Managed user authorization processes in a secure and sustainable way",
      "Engineered a Python-based data pipeline to consolidate access review inputs from multiple upstream systems, eliminating manual data wrangling and cutting preparation time by 80% (10 days → 2 days)",
      "Detected 10M+ data discrepancies between two source systems through a single cross-database SQL reconciliation query, exposing a significant synchronization gap impacting downstream governance processes"
    ],
  },
  {
    title:   "Cyber Security Project Assistant",
    company: "KoçSistem",
    type:    "Full-time · Remote",
    period:  "December 2023 — June 2024",
    bullets: [
      "Worked at two different teams: InfoSec and Network Security",
      "In Information Security team I worked with ForcePoint DLP solution, IBM Guardium Data Protection and ProofPoint Security Awareness Training Platform",
      "In Network Security team, I have handled tickets for various products such as firewalls and VPNs",
      "Automated DNS query operations using Python, reducing manual processing time from 4 hours to 5 minutes (~98% efficiency gain)",
      "Participated in the Cybersecurity training prepared by the Boğaziçi Cybersecurity Community and KoçSistem."
    ],
  },
  {
    title:   "System Engineer Intern",
    company: "WGuard",
    type:    "Internship · Remote",
    period:  "July 2023 — September 2023",
    bullets: [
      "Received training on topics such as Active Directory, Windows Server, Linux Server, Backup Technologies (Veeam, Acronis), Monitoring Technologies (ManageEngine, Zabbix), Virtualization (VMWare, VirtualBox, HyperV)",
      "Installed Veeam and Zabbix on virtual machines and reviewed their documentation.",
      "Attended sales meetings to learn about other products"
    ],
  },
  {
    title:   "Intern",
    company: "Garanti BBVA",
    type:    "Internship · Hybrid",
    period:  "July 2022 — September 2022",
    bullets: [
      "I did a short-term internship in the Authorization Processes and Management team.",
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
  blog2?:   string;
  writeup?: string;
}

export const projects: Project[] = [
  {
    index:  "[01]",
    name:   "My Portfolio Website and Deployment Pipeline",
    desc:   "A website that deployed on AWS automatically with Github Actions. And holds visitor count via AWS Lambda and API-Gateway. Blog articles are included.",
    github: "https://github.com/hakiozdem/My-Portfolio-Website",
    blog: "https://medium.com/@haktanozdem/building-my-resume-site-on-aws-part-1-manual-deployment-to-s3-ae570b2040ae",
    blog2: "https://medium.com/@haktanozdem/building-my-resume-site-on-aws-part-2-github-workflow-and-visitor-counter-803f810eb3dd",
    stack:  ["Astro", "AWS", "GitHub Actions"],
  },
  {
    index:  "[02]",
    name:   "Open-Source and Cheap CI/CD Pipeline for Small Companies",
    desc:   "Completely automated CI/CD Pipeline and deployed a website which contains its own authorization system. Besides, IaC practices are applied via Vagrant.",
    github: "https://github.com/hakiozdem/Graduation-Project-2",
    stack:  ["Python-Flask", "Vagrant", "Jenkins","SonarQube","Kubernetes","Docker"],
  },
  {
    index:  "[03]",
    name:   "Container Image Security Scanner Pipeline",
    desc:   "A demonstration of container security scanning with Aqua Security Trivy for Dockerfiles and images, integrated into a GitHub Actions workflow.",
    stack:  ["Trivy","GitHub Actions","FastAPI"],
    github: "https://github.com/hakiozdem/Container-Image-Security-Scanner-Pipeline",
  },
  {
    index:  "[04]",
    name:   "Secret Management with SOPS & age",
    desc:   "Git-native secrets management using SOPS and age — encrypted secrets live in version control, plaintext never does.",
    stack:  ["SOPS","age","GitHub Actions","FastAPI","Pre-commit"],
    github: "https://github.com/hakiozdem/sops-secret-management"
  },
  {
    index:  "[05]",
    name:   "Türk Telekom Cloud Computing Camp Final Project",
    desc:   "Manuel deployment of a website with Docker & Kubernetes",
    stack:  ["Python-Flask","Kubernetes","Docker"],
    github: "https://github.com/hakiozdem/bbk-final-project",
  }
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
    period:      "2026–2027",
    degree:      "Cyber Security (Masters Degree without Thesis)",
    institution: "Marmara University",
    note:        "Started this year",
  },
  {
    period:      "2020–2024",
    degree:      "Bachelor of Computer Engineering",
    institution: "Manisa Celal Bayar University",
    note:        "Graduated as Honor Student. GPA: 3.12",
  },
  {
    period:      "2022–2024",
    degree:      "Human Resources Management",
    institution: "Anadolu University",
  },
  {
    period:      "2018–2020",
    degree:      "Bachelor of Materials Science and Engineering",
    institution: "İzmir Institute of Technology",
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
  { badge: "CCNA",  name: "Cisco Certified Network Associate",     issuer: "Cisco", year: "2023" },
  { badge: "KCNA", name: "Kuberneted and Cloud Native Associate", issuer: "Linux Foundation",          year: "2025" },
  { badge: "SC-900",   name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",                      issuer: "Microsoft",         year: "2025" },
  {badge: "KCSA", name: "Kubernetes and Cloud Native Security Associate", issuer: "Linux Foundation", year:"in progress"}
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
    role:   "Project Representative",
    org:    "IEEE Türkiye Twin Student Branches Project",
    period: "2021 — 2022",
    desc:   "Served as Student Liaison of IEEE Turkey's largest networking project, leading a 12-person team to build, monitor, and grow inter-university partnerships — including international outreach to expand the project globally.",
  },
  {
    role:   "Member",
    org:    "Artificial Intelligence Security and Defence Lab (AISECLAB)",
    period: "2023 — 2024",
    desc:   "Participating in an organization at the intersection of AI and Cybersecurity, where I attend training sessions on cybersecurity, artificial intelligence, and cloud computing while volunteering on ongoing project development.",
  },
  {
    role:   "Volunteer",
    org:    "IEEE",
    period: "2018 — 2024",
    desc:   "Five years of IEEE leadership across two student branches and the national Twin Student Branches Project, leading inter-branch collaboration and blog content."
  },
  
];
