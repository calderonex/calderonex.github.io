// app/layout.tsx
import { prefix } from "@/utils/utils";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google"; // Puedes cambiar por otra fuente más adelante

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Calderon Excavation",
    template: "%s | Calderon Excavation",
  },
  description: "Excavation and concrete services with precision and reliability.",
  keywords: [
    "excavation",
    "concrete",
    "construction",
    "Calderon Excavation",
    "foundation",
    "land work",
  ],
  authors: [{ name: "Calderon Excavation", url: "https://calderonexcavation.com" }],
  creator: "Calderon Excavation",
  metadataBase: new URL("https://calderonexcavation.com"), // reemplaza con tu dominio real
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Calderon Excavations",
    description: "Excavation and concrete services with precision and reliability.",
    url: "https://calderonexcavation.com",
    siteName: "Calderon Excavations",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calderon Excavation logo and machinery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: `${prefix}/favicon.ico`,
    shortcut: `${prefix}/favicon-32x32.png`,
    apple: `${prefix}/apple-touch-icon.png`,
  },
  manifest: `${prefix}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: "--color-primary", // tu color primario (naranja)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable}`}>

      <body className="antialiased bg-white text-black dark:bg-black dark:text-white">
        {children}

      </body>
    </html>
  );
}
