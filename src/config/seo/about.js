import { baseMetadata } from "./base";

export const aboutMetadata = {
  ...baseMetadata,
  title: "About – Uttam | Backend Developer (Node.js, Express, MongoDB)",
  description: "Learn more about Uttam, a backend developer with expertise in building scalable server-side applications using Node.js, Express, and MongoDB.",
  alternates: {
    canonical: "https://Uttams-portfolio.vercel.app/about",
  },
  openGraph: {
    title: "About – Uttam | Backend Developer",
    description: "Get to know Uttam, a backend developer focused on Node.js, Express.js, and MongoDB.",
    url: "https://Uttams-portfolio.vercel.app/about",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://Uttams-portfolio.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "About Uttam – Backend Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};
