import { baseMetadata } from "./base";

export const contactMetadata = {
  ...baseMetadata,
  title: "Contact – Uttam | Hire Mern Stack Developer & Next.js Developer",
  description: "Get in touch with Uttam — a Mern Stack Developer available for projects, internships, or job opportunities in web development.",
  alternates: {
    canonical: "https://uttam-portfolio-jade.vercel.app/contact",
  },
  openGraph: {
    title: "Contact – Uttam",
    description: "Reach out to Uttam for Mern Stack Developer development roles or collaborations.",
    url: "https://uttam-portfolio-jade.vercel.app/contact",
    siteName: "Uttam's Portfolio",
    images: [
      {
        url: "https://uttam-portfolio-jade.vercel.app/assets/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Contact Uttam – Mern Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
