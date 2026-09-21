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
  ogImage?: string;
  bio: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
  callout: {
    text: string;
    linkText: string;
    url: string;
  };
  blog: {
    title: string;
    description: string;
    status?: string;
  };
}

export const profile: ProfileData = {
  name: "Robin Kali",
  role: "Developer & Designer",
  tagline: "Exploring modern web engineering, AI integrations, and interactive digital experiences.",
  avatar: "/media/robin-kali-avatar.svg",
  avatarAlt: "Robin Kali - Developer & Creator",
  ogImage: "/media/og-image.png",
  bio: [
    "Hi, I'm Robin Kali. I build and maintain modern, fast, and visually engaging web applications with an eye for detail, clean architecture, dynamic user interfaces and perfect SEO and Lightspeed scores.",
    "I also have severe experience in Audiovisual engineering, photo/video editing, to bring you mind-blowing visual experiences through hard- and software."],
  skills: [
    {
      category: "Frontend & Web",
      items: ["Astro", "TypeScript", "JavaScript", "HTML5", "Vite", "React", "Vue", "Next.js", "TailwindCSS"],
    },
    {
      category: "Design & Digital Media",
      items: [
        "Figma",
        "Photoshop",
        "Davinci Resolve",
        "Canva",
        "Gimp",
        "OBS Studio",
      ],
    },
    {
      category: "Ecosystem & Architecture",
      items: ["Git & GitHub", "Node.js", "Static Site Generation", "SEO", "Headless CMS"],
    },
  ],
  socials: {
    github: "https://github.com/RobinKali",
    linkedin: "https://www.linkedin.com/in/robin-kalaykhan-4b2443153/",
    email: "mailto:info@kaliwebworks.nl",
    whatsapp: "https://wa.me/31611594549",
  },
  callout: {
    text: "Need a cool website?",
    linkText: "Visit Kali Web Works!",
    url: "https://kaliwebworks.nl",
  },
  blog: {
    title: "Journal & Insights",
    description: "Coming soon...",
  },
};
