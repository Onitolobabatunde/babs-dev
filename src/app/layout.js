import React from "react";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Fullstack Developer & Designer",
  description: "Minimalist portfolio showcasing web development, apps, motion graphics, and design.",
  openGraph: {
    title: "Portfolio | Fullstack Developer & Designer",
    description: "Minimalist portfolio showcasing web development, apps, motion graphics, and design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Fullstack Developer & Designer",
    description: "Minimalist portfolio showcasing web development, apps, motion graphics, and design.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
