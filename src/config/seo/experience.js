import { baseMetadata } from "./base";

export const experienceMetadata = {
  ...baseMetadata,
  title: "Experience – Uttam | Mern Stack Developer Internships & Projects",
  description: "View Uttam’s Mern Stack development experience, including internships and real-world projects using Node.js, Express.js, React.js, Next.js, and MongoDB.",
  alternates: {
    canonical: "https://Uttams-portfolio.vercel.app/experience",
  },
  openGraph: {
    title: "Experience – Uttam",
    description: "Uttam's Mern Stack development experience, projects, and internships.",
    url: "https://Uttams-portfolio.vercel.app/experience",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://Uttams-portfolio.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Mern Stack Developer Experience",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};
