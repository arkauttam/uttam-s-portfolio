import { baseMetadata } from "./base";

export const projectsMetadata = {
  ...baseMetadata,
  title: "Projects – Uttam | Mern Stack Portfolio with Next.js & APIs",
  description: "Browse Mern projects built by Uttam using Node.js, Express.js, and MongoDB. Includes real-time apps, REST APIs, and production-level backend systems.",
  alternates: {
    canonical: "https://Uttams-portfolio.vercel.app/projects",
  },
  openGraph: {
    title: "Projects – Uttam",
    description: "Uttam's Mern Stack development portfolio including real-world REST APIs and full-stack applications.",
    url: "https://Uttams-portfolio.vercel.app/projects",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://Uttams-portfolio.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Projects by Uttam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
