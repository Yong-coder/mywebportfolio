export const profile = {
    name: "Ian Lemuel G. De Guzman",
    nameShort: "Ian De Guzman",
    role: "IT Support | System Administrator",
    tagline:
        "7+ years managing IT operations in corporate and educational environments, specializing in Windows Server, Microsoft 365, Azure services, and IT service management.",
    location: "Doha, Qatar",
    email: "careers@ianportfolio.work",
    phone: "+974 7093 6479",
    summary: [
        "IT SUPPORT SPECIALIST | SYSTEM ADMINISTRATOR ",
        "IT Support Specialist with 7+ years of experience managing IT operations in educational and corporate environments in Qatar and the Philippines.",
        "Skilled in Windows Server administration, Microsoft 365, LAN/WAN networking, endpoint management, and IT service management. Proven ability to deliver reliable IT operations, resolve incidents efficiently, and maintain secure and stable systems aligned with organizational standards and SLAs.",
        
        "Currently expanding skills in Azure, Linux administration, and networking."
        
    ],
    stats: [
        { value: "7+", label: "Years Experience" },
        { value: "5", label: "Organizations" },
        { value: "99%", label: "SLA Compliance" },
    ],
    personal: [
        { label: "Nationality", value: "Filipino" },
        { label: "Residence", value: "Doha, Qatar" },
        { label: "Visa Status", value: "Transferable" },
        { label: "Marital Status", value: "Married" },
        { label: "Email", value: "careers@ianportfolio.work" },
        { label: "Phone", value: "+974 7093 6479" },
    ],
};

export const skillCategories = [
    {
        code: "01",
        title: "Infrastructure",
        items: [
            "Windows Server 2019/2022",
            "Active Directory",
            "DNS, DHCP, GPO",
            "File Servers",
            

        ],
    },
    {
        code: "02",
        title: "Endpoint",
        items: [
            "Microsoft Intune",
            "JAMF",
            "Imaging & Deployment",
            "Asset Management",
        ],
    },
    {
        code: "03",
        title: "Cloud",
        items: ["Azure (AZ-900 – AZ-104)", "Microsoft 365", "Exchange"],
    },
    {
        code: "04",
        title: "ITSM",
        items: ["L1/L2 Support", "Freshdesk", "SLA Management", "SOPs"],
    },
];

export const otherTech = [
    "Classera LMS",
    "Biometric Systems",
    "AV Equipment",
    "HTML/CSS",
    "LAN/WAN",
    "Network Security",
];

export const experience = [
    {
        period: "Jan 2025 — Present",
        title: "IT Helpdesk Support",
        company: "Education City High School",
        location: "Doha, Qatar",
        bullets: [
            "Provide Level 1 & 2 IT support to staff and students",
            "Maintain servers, networks, desktops, laptops, printers, projectors, PA systems, and AV equipment",
            "Support video conferencing systems, LCD screens, smart boards, and classroom technology",
            "Create and maintain technical and procedural documentation",
            "Reset user passwords and manage account access",
            "Perform OS imaging, software installation, data migration, and system backups",
            "Manage IT asset inventory and recommend upgrades or replacements",
            "Coordinate with Qatar Foundation IT for system upgrades and security compliance",
            "Enroll and manage devices using JAMF (Apple) and Microsoft Intune (HP & Dell)",
            "Provide on-site, email, and phone support while adhering to SLA requirements",
        ],
    },
    {
        period: "Aug 2022 — Dec 2024",
        title: "IT Supervisor",
        company: "Eadad International Academy",
        location: "Doha, Qatar",
        bullets: [
            "Supervised daily IT operations and provided technical support to staff and students",
            "Administered Windows Server 2019/2022 environments and Active Directory",
            "Managed Microsoft Exchange and other email platforms, including user account setup and password resets",
            "Troubleshot LAN/WAN connectivity issues and ensured network stability",
            "Supported Classera LMS platform for academic operations",
            "Managed printers and biometric devices",
            "Performed basic front-end administration using HTML & CSS",
            "Maintained technical documentation and standard operating procedures (SOPs)",
        ],
    },
    {
        period: "Sep 2021 — Jul 2022",
        title: "IT Support (Part-Time)",
        company: "Techno Qatar",
        location: "Doha, Qatar",
        bullets: [
            "Installed, configured, and repaired hardware and software components",
            "Administered Active Directory, DHCP, GPO, and File Server",
            "Installed and upgraded antivirus solutions and ensured endpoint security",
            "Configured Microsoft Exchange email using domain-based accounts",
            "Performed LAN/WAN troubleshooting and printer support",
            "Maintained IT documentation and standard operating procedures",
        ],
    },
    {
        period: "Aug 2019 — Jul 2021",
        title: "IT Support",
        company: "Alashbal International Academy",
        location: "Doha, Qatar",
        bullets: [
            "Provided first-level IT support to staff and students",
            "Administered Windows Server environments and Microsoft products",
            "Supported email systems, printers, and network infrastructure",
            "Managed fingerprint attendance systems",
            "Assisted with software updates, troubleshooting, and endpoint management",
        ],
    },
    {
        period: "Jan 2017 — Jan 2019",
        title: "IT Helpdesk",
        company: "Prosync / San Miguel Corporation",
        location: "Philippines",
        bullets: [
            "Managed helpdesk tickets for Toll Collection Systems",
            "Coordinated technician schedules and daily IT operations",
            "Troubleshot WAN/LAN connectivity and Microsoft systems",
            "Provided support for printers, email, and biometric devices",
            "Updated ticket records and maintained technical documentation",
        ],
    },
];

export const education = [
    {
        degree: "Bachelor of Science in Information Technology",
        school: "AMA Computer College",
        location: "Lucena City, Philippines",
        period: "June 2014 — April 2017",
    },
];

export const navLinks = [
    { id: "about", label: "About", type: "section" },
    { id: "skills", label: "Skills", type: "section" },
    { id: "experience", label: "Experience", type: "section" },
    { id: "education", label: "Education", type: "section" },
    { id: "certifications", label: "Certifications", type: "route", path: "/certifications" },
    { id: "contact", label: "Contact", type: "section" },
];
