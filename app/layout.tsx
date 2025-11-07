import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Bitter, Work_Sans } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bitter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} ${bitter.variable} antialiased`}
        style={{
          color: siteConfig.colors.text
        }}
      >
        {children}
      </body>
    </html>
  );
}
