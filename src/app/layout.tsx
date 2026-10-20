import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elijah Mwaba | Software Developer Portfolio",
  description:
    "Full-stack software developer specializing in React, Next.js, Node.js, and modern web technologies. Crafting elegant digital experiences with clean code and creative vision.",
  keywords: [
    "software developer",
    "full stack developer",
    "react developer",
    "next.js",
    "portfolio",
    "web developer",
    "Elijah Mwaba",
  ],
  authors: [{ name: "Elijah Mwaba" }],
  openGraph: {
    title: "Elijah Mwaba | Software Developer",
    description:
      "Full-stack developer crafting elegant digital experiences with clean code & creative vision.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Mwaba | Software Developer",
    description:
      "Full-stack developer crafting elegant digital experiences with clean code & creative vision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
