import { baseMetadata } from "./base";

export const aboutMetadata = {
  ...baseMetadata,
  title: "About – Uttam | Mern Stack Developer (Node.js, Express, React, Next.js & MongoDB)",
  description: "Learn more about Uttam, a Mern Stack Developer with expertise in building scalable server-side applications using Node.js, Express, React, Next.js and MongoDB.",
  alternates: {
    canonical: "https://uttam-portfolio-jade.vercel.app/about",
  },
  openGraph: {
    title: "About – Uttam | Mern Stack Developer",
    description: "Get to know Uttam, a Mern Stack developer focused on Node.js, Express.js, React, Next.js and MongoDB.",
    url: "https://uttam-portfolio-jade.vercel.app/about",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://uttam-portfolio-jade.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "About Uttam – Mern Stack Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};
