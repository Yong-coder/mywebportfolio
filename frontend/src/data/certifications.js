// Certifications data — load from a plain JS array. Supports future add/edit/delete.
// Each item: { id, name, organization, issueDate, expiryDate (nullable), credentialId, verificationUrl, category }

export const certifications = [
    {
        id: "az-900",
        name: "Microsoft Certified: Azure Fundamentals",
        organization: "Microsoft",
        issueDate: "2023-04-15",
        expiryDate: null,
        credentialId: "AZ900-IDG-2023-0415",
        verificationUrl: "https://learn.microsoft.com/en-us/users/",
        category: "Cloud",
    },
    {
        id: "az-104",
        name: "Microsoft Certified: Azure Administrator Associate",
        organization: "Microsoft",
        issueDate: "2024-02-10",
        expiryDate: "2027-02-10",
        credentialId: "AZ104-IDG-2024-0210",
        verificationUrl: "https://learn.microsoft.com/en-us/users/",
        category: "Cloud",
    },
    {
        id: "ms-365",
        name: "Microsoft 365 Fundamentals (MS-900)",
        organization: "Microsoft",
        issueDate: "2022-08-22",
        expiryDate: null,
        credentialId: "MS900-IDG-2022-0822",
        verificationUrl: "https://learn.microsoft.com/en-us/users/",
        category: "Productivity",
    },
    {
        id: "itil-4",
        name: "ITIL® 4 Foundation",
        organization: "PeopleCert / AXELOS",
        issueDate: "2023-11-05",
        expiryDate: null,
        credentialId: "ITIL4-IDG-7382910",
        verificationUrl: "https://www.peoplecert.org/Verify-a-Certificate",
        category: "ITSM",
    },
    {
        id: "comptia-net",
        name: "CompTIA Network+ (N10-008)",
        organization: "CompTIA",
        issueDate: "2021-06-18",
        expiryDate: "2024-06-18",
        credentialId: "COMP-NET-IDG-118273",
        verificationUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
        category: "Networking",
    },
    {
        id: "jamf-200",
        name: "Jamf Certified Associate",
        organization: "Jamf",
        issueDate: "2025-01-20",
        expiryDate: null,
        credentialId: "JCA-IDG-2025-01",
        verificationUrl: "https://www.jamf.com/training/certification/",
        category: "Endpoint",
    },
];

export const certCategories = ["All", "Cloud", "Productivity", "ITSM", "Networking", "Endpoint"];
