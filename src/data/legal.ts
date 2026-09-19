export type LegalDocument = {
  slug: string;
  path: string;
  title: string;
  description: string;
  status: string;
  sections: { heading: string; paragraphs: string[]; items?: string[] }[];
};

export const legalDocuments: LegalDocument[] = [
  {
    slug: "legal-notice",
    path: "/legal/legal-notice/",
    title: "Legal Notice",
    description: "Legal notice and ownership information for Robin Kali's website.",
    status: "Legal Information",
    sections: [
      {
        heading: "Website Ownership",
        paragraphs: [
          "This personal website is owned and operated by Robin Kali. For business inquiries, bespoke web development, and client projects, visit kaliwebworks.nl.",
          "All intellectual property, portfolio presentations, and custom design implementations are protected under applicable copyright laws.",
        ],
      },
      {
        heading: "Contact & Inquiries",
        paragraphs: [
          "For questions regarding this website, reach out directly via email at info@kaliwebworks.nl or connect via LinkedIn and GitHub.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    path: "/legal/privacy/",
    title: "Privacy Policy",
    description: "Privacy policy and data handling information for Robin Kali's website.",
    status: "Privacy Policy",
    sections: [
      {
        heading: "Data Protection Overview",
        paragraphs: [
          "We take your privacy seriously. This personal website does not collect personal identification data, run third-party tracking cookies, or sell data to advertisers.",
          "Any communication sent via email or contact links is handled strictly for direct communication purposes.",
        ],
      },
      {
        heading: "Local Storage & Preferences",
        paragraphs: [
          "This site may store minimal technical preference tokens locally in your browser (such as cookie consent acknowledgement) to ensure a seamless experience across page loads.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    path: "/legal/cookies/",
    title: "Cookie Policy",
    description: "Cookie policy and consent details for Robin Kali's website.",
    status: "Cookie Policy",
    sections: [
      {
        heading: "Use of Cookies",
        paragraphs: [
          "This website operates primarily as a static site and uses only essential functional storage mechanisms to preserve user consent and render WebGL/3D visual graphics.",
        ],
        items: [
          "robinkali-consent: remembers your privacy preferences.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    path: "/legal/terms/",
    title: "Terms of Use",
    description: "Terms of use for Robin Kali's website and associated digital properties.",
    status: "Terms of Use",
    sections: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          "By accessing and exploring this website, you agree to respect the copyright and open-source licenses governing the code and visual assets presented herein.",
          "Portions of 3D shaders and experimental libraries are licensed under open-source licenses; consult the Attributions page for complete upstream notices.",
        ],
      },
    ],
  },
];
