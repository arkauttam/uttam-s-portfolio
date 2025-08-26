import { baseMetadata } from "./base";

export const skillsMetadata = {
  ...baseMetadata,
  title: "Skills – Uttam | Next.js & Mern Stack",
  description: "Discover Uttam's technical skillset — Node.js, Express.js, MongoDB, REST APIs, Git, and more tools used for backend development.",
  alternates: {
    canonical: "https://uttam-portfolio-jade.vercel.app/skills",
  },
  openGraph: {
    title: "Skills – Uttam",
    description: "Explore backend technologies and tools that Uttam uses, including Node.js, Express.js, MongoDB, and more.",
    url: "https://uttam-portfolio-jade.vercel.app/skills",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://uttam-portfolio-jade.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Uttam's Skills – Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
