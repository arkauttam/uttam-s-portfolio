import { SearchBar } from "@/components/global/SearchBar";
import "./globals.css";
import { Toaster } from "@/components/global/Toaster";
import { ThemeProvider } from "@/theme/ThemeContext";
import { Inter } from "next/font/google";
import { Tabs } from "@/components/global/Tabs";
import { layoutMetadata } from "@/config/seo/layout";

export const metadata = layoutMetadata;

export const viewport = "width=device-width, initial-scale=1.0";
export const themeColor = "#ffffff";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={inter.className}>
      <body className="min-h-screen antialiased scroll-smooth">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Uttam Ghosh",
                url: "https://kuntals-portfolio.vercel.app",
                image:
                  "https://kuntals-portfolio.vercel.app/assets/images/Kuntal's_Photo.jpg",
                jobTitle: "Mern Stack Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Online Savaari",
                  url: "https://www.onlinesavaari.com",
                },
                sameAs: [
                  "https://github.com/arkauttam",
                  "https://www.linkedin.com/in/uttam-ghosh-7187a2258/",
                  "https://www.linkedin.com/in/uttam-ghosh-7187a2258/",
                  "https://www.linkedin.com/in/uttam-ghosh-7187a2258/",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Uttam's Portfolio",
                url: "https://kuntals-portfolio.vercel.app",
                alternateName: "Online Savaari",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://kuntals-portfolio.vercel.app/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "CodeSena",
                url: "https://www.onlinesavaari.com",
                logo: "https://res.cloudinary.com/dnr5rs7ij/image/upload/v1745468263/social-clubs/posts/logo.webp",
                sameAs: [
                  "https://www.linkedin.com/in/uttam-ghosh-7187a2258/",
                  "https://www.linkedin.com/in/uttam-ghosh-7187a2258/",
                ],
              },
            ]),
          }}
        />
        <ThemeProvider>
          <SearchBar />
          <Tabs />
          <main className="flex-grow">{children}</main>
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
