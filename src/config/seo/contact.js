import { baseMetadata } from "./base";

export const contactMetadata = {
  ...baseMetadata,
  title: "Contact – Uttam | Hire Backend Developer",
  description: "Get in touch with Uttam — a Node.js backend developer available for projects, internships, or job opportunities in web development.",
  alternates: {
    canonical: "https://Uttams-portfolio.vercel.app/contact",
  },
  openGraph: {
    title: "Contact – Uttam",
    description: "Reach out to Uttam for backend development roles or collaborations.",
    url: "https://Uttams-portfolio.vercel.app/contact",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://Uttams-portfolio.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Contact Uttam – Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
