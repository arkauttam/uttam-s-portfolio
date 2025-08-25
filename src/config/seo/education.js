import { baseMetadata } from "./base";

export const educationMetadata = {
  ...baseMetadata,
  title: "Education – Uttam | Mern Stack Developer Learning Path",
  description: "Explore Uttam's educational background, certifications, and relevant academic achievements in computer science and Mern Stack development.",
  alternates: {
    canonical: "https://Uttams-portfolio.vercel.app/education",
  },
  openGraph: {
    title: "Education – Uttam",
    description: "Uttam's academic background and learning journey as a Mern Stack developer.",
    url: "https://Uttams-portfolio.vercel.app/education",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://Uttams-portfolio.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Uttam Education",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};
