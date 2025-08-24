import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

import "./globals.css";
// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "IIT KGP MME Conference | Advanced Materials for Sustainable Energy",
  description:
    "Exploring Advanced Materials and Critical Minerals for Sustainable Energy Transformation - IIT Kharagpur Metallurgical & Materials Engineering Conference",
  keywords:
    "conference, materials engineering, metallurgical engineering, IIT Kharagpur, sustainable energy, advanced materials, critical minerals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefin.className}>
      <body>{children}</body>
    </html>
  );
}
