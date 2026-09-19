export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  avatar: string;
  avatarAlt: string;
  bio: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  callout: {
    text: string;
    linkText: string;
    url: string;
  };
  blog: {
    title: string;
    description: string;
    status: string;
  };
}

export const profile: ProfileData = {
  name: "Robin Kali",
  role: "Developer & Creator",
  tagline: "Exploring modern web engineering, interactive 3D, and bespoke digital experiences.",
  avatar: "/media/robin-kali-avatar.svg",
  avatarAlt: "Robin Kali - Developer & Creator",
  bio: [
    "Hi, I'm Robin Kali. I build modern, fast, and visually engaging web applications with an eye for detail, clean architecture, and dynamic user interfaces.",
    "Driven by curiosity and craftsmanship, I explore the intersections of modern frontend technologies, WebGL, and elegant digital products.",
    "When I'm not coding or exploring new tech stacks, I'm working with clients through KaliWebWorks to build standout websites tailored to their vision.",
  ],
  skills: [
    {
      category: "Frontend & Web",
      items: ["Astro", "TypeScript", "JavaScript", "HTML5 & Modern CSS", "Vite", "Responsive Design"],
    },
    {
      category: "Interactive & 3D",
      items: ["Three.js", "WebGL Shaders", "Canvas Animations", "Micro-interactions"],
    },
    {
      category: "Ecosystem & Architecture",
      items: ["Git & GitHub", "Node.js", "Static Site Generation", "Headless CMS (Upcoming)", "Performance & SEO"],
    },
  ],
  socials: {
    github: "https://github.com/RobinKali",
    linkedin: "https://www.linkedin.com/in/robinkali/",
    email: "mailto:info@kaliwebworks.nl",
  },
  callout: {
    text: "Need a cool website?",
    linkText: "Visit kaliwebworks.nl!",
    url: "https://kaliwebworks.nl",
  },
  blog: {
    title: "Journal & Insights",
    description: "A space where I'll soon be sharing thoughts on web development, 3D graphics, and modern tooling.",
    status: "Headless CMS blog integration in progress.",
  },
};
