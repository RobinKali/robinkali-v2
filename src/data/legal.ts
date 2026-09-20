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
    description: "Legal notice, ownership details, and regulatory disclosure for Robin Kali's website.",
    status: "Legal Information",
    sections: [
      {
        heading: "Website Ownership & Studio",
        paragraphs: [
          "This personal website is designed, owned, and operated by Robin Kali, based in the Netherlands. It serves as an experimental portfolio showcasing modern web engineering, interactive 3D, and digital design.",
          "For web development, design consultations, and client commissions, services are operated under Kali Web Works (kaliwebworks.nl).",
        ],
      },
      {
        heading: "Contact & Electronic Inquiries",
        paragraphs: [
          "Direct communication can be initiated via email at info@kaliwebworks.nl or through verified channels on LinkedIn, GitHub, and WhatsApp.",
          "To safeguard personal data against automated scrapers and spam harvesting bots, direct contact links across this site employ client-side obfuscation tokens.",
        ],
      },
      {
        heading: "Intellectual Property Rights",
        paragraphs: [
          "All original content, custom design layouts, animations, visual media, branding elements, and codebase on robinkali.nl are protected under applicable copyright and intellectual property laws.",
          "Reproduction, redistribution, or modification of proprietary assets without prior written consent is prohibited. Open-source assets and third-party WebGL experiments are utilized under their respective upstream licenses as detailed on the Credits & Attributions page.",
        ],
      },
      {
        heading: "Applicable Law & Jurisdiction",
        paragraphs: [
          "Any disputes or legal inquiries arising from the use of this website shall be governed by and construed in accordance with the laws of the Netherlands and applicable European Union regulations.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    path: "/legal/privacy/",
    title: "Privacy Policy",
    description: "Privacy policy and GDPR/AVG data protection disclosures for Robin Kali's website.",
    status: "Privacy Policy",
    sections: [
      {
        heading: "Privacy Commitment & Data Minimization",
        paragraphs: [
          "Privacy and digital respect are core tenets of this website. We operate strictly under the General Data Protection Regulation (GDPR / AVG) principles of data minimization and purpose limitation.",
          "This website does not track your online activity across other domains, does not run invasive analytics suites, does not maintain user tracking profiles, and does not sell or monetize personal data.",
        ],
      },
      {
        heading: "Direct Communications",
        paragraphs: [
          "When you contact Robin Kali via email, telephone, or WhatsApp, any personal details you provide (such as your name, email address, or phone number) are used exclusively to process and respond to your inquiry.",
          "Your communication data is never shared with third parties or added to marketing mailing lists without your explicit, unambiguous consent.",
        ],
      },
      {
        heading: "External Links & Third-Party Platforms",
        paragraphs: [
          "This website provides external links to third-party platforms including GitHub, LinkedIn, and WhatsApp. Following these links navigates you to external services operated under their own respective privacy terms and security practices.",
          "All external links are configured with noopener and noreferrer attributes to prevent unintended referral data leakage.",
        ],
      },
      {
        heading: "Your Rights Under GDPR (AVG)",
        paragraphs: [
          "As an EU citizen or visitor, you retain full rights regarding your personal information, including:",
        ],
        items: [
          "The right to request access to any personal communication records held.",
          "The right to request rectification of inaccurate or outdated information.",
          "The right to request erasure ('right to be forgotten') of communication history.",
          "The right to object to or restrict processing of your communication data.",
        ],
      },
      {
        heading: "Data Protection Inquiries",
        paragraphs: [
          "To exercise any of your privacy rights or submit questions regarding data handling, reach out directly via email at info@kaliwebworks.nl.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    path: "/legal/cookies/",
    title: "Cookie Policy",
    description: "Information regarding functional cookies and local browser storage mechanisms on Robin Kali's website.",
    status: "Cookie Policy",
    sections: [
      {
        heading: "Cookie & Storage Overview",
        paragraphs: [
          "Robin Kali's website operates as an optimized static website. We prioritize user control and do not utilize third-party advertising, retargeting, or invasive tracking cookies.",
          "We use only strictly necessary, functional client-side storage mechanisms essential to preserve your interface preferences and visual states.",
        ],
      },
      {
        heading: "Active Functional Storage Mechanisms",
        paragraphs: [
          "The table below outlines the functional storage tokens utilized on this website:",
        ],
        items: [
          "robinkali-consent (localStorage): Stores your acknowledgement of our privacy & cookie banner so you are not repeatedly prompted on future visits.",
          "Temporary session state: Maintains seamless state transitions between the interactive 3D space scene and portfolio pages.",
        ],
      },
      {
        heading: "How to Manage Your Preferences",
        paragraphs: [
          "You can reset your consent choice at any time using the button below. You may also configure your browser to block or alert you about cookies; however, note that some interactive WebGL features may rely on local browser capabilities to render smoothly.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    path: "/legal/terms/",
    title: "Terms of Use",
    description: "Terms and conditions governing the access and exploration of Robin Kali's digital experiences.",
    status: "Terms of Use",
    sections: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          "By accessing and navigating robinkali.nl, you acknowledge and agree to comply with these Terms of Use. If you do not agree with any part of these terms, please discontinue use of this site.",
          "This site is designed as a creative showcase, technological experiment, and developer portfolio.",
        ],
      },
      {
        heading: "Permitted Use & Prohibited Actions",
        paragraphs: [
          "You are permitted to browse the site, test interactive 3D demonstrations, and explore portfolio content for personal, non-commercial, and evaluation purposes.",
          "You may not engage in automated scraping of contact information, denial-of-service attacks, injection of malicious payloads, or unauthorized reproduction of proprietary visual branding.",
        ],
      },
      {
        heading: "Open-Source & Upstream Licenses",
        paragraphs: [
          "Portions of the interactive 3D visual effects and shader pipelines incorporate open-source libraries (such as Three.js). These components are licensed under their respective open-source terms (primarily the MIT License).",
          "Consult the Credits & Attributions page for comprehensive author acknowledgments, repository links, and full license text.",
        ],
      },
      {
        heading: "Disclaimer of Warranties & Limitation of Liability",
        paragraphs: [
          "This website is provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied. Robin Kali does not warrant that the website will always be uninterrupted, error-free, or compatible with all hardware and legacy browser environments.",
          "In no event shall Robin Kali or Kali Web Works be held liable for any damages resulting from the use of or inability to use this website.",
        ],
      },
      {
        heading: "Modifications to Terms",
        paragraphs: [
          "These terms may be updated periodically to reflect changes in project capabilities, third-party integrations, or legal standards. Continued use of the website following updates signifies acceptance of the revised terms.",
        ],
      },
    ],
  },
];
