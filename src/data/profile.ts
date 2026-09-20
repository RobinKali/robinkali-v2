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
  role: "Developer & Designer",
  tagline: "Exploring modern web engineering ai development and bespoke digital experiences.",
  avatar: "/media/robin-kali-avatar.svg",
  avatarAlt: "Robin Kali - Developer & Creator",
  bio: [
    "Hi, I'm Robin Kali. I build modern, fast, and visually engaging web applications with an eye for detail, clean architecture, and dynamic user interfaces.",
    "I also have severe experience in AV installations, video editing, motion graphics and all things creative.",
  ],
  skills: [
    {
      category: "Frontend & Web",
      items: ["Astro", "TypeScript", "JavaScript", "HTML5", "Vite", "React", "Vue", "next.js", "TailwindCSS"],
    },
    {
      category: "Design & Digital Media",
      items: [
        "Figma",
        "Canva",
        "Photoshop",
        "Illustrator",
        "UI/UX Design",
        "Motion Graphics",
        "Video Editing",
        "Brand Identity",
      ],
    },
    {
      category: "Ecosystem & Architecture",
      items: ["Git & GitHub", "Node.js", "Static Site Generation", "Headless CMS", "Performance & SEO"],
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
