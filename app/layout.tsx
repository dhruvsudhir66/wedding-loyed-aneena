import type { Metadata, Viewport } from "next";
import { Allura, Cormorant_Garamond, DM_Sans } from "next/font/google";
import { weddingConfig } from "@/config/wedding";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const script = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: weddingConfig.seo.title,
  description: weddingConfig.seo.description,

  openGraph: {
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    type: "website",
  },

  twitter: {
    card: "summary",
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#30352B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${script.variable} ${sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
