import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EJ Tech Solutions | IT Support & Web Services in Langley & Surrey BC",
  description:
    "EJ Tech Solutions provides affordable IT support, custom websites, and device installations for small businesses and individuals in Langley and Surrey, BC. Free consultation available.",
  keywords: [
    "IT support Langley",
    "IT support Surrey",
    "computer repair Langley",
    "computer repair Surrey",
    "web design Langley",
    "web design Surrey",
    "small business IT support BC",
    "dashcam installation Surrey",
    "security camera installation Langley",
    "custom website Surrey",
    "Google Business Profile setup",
    "EJ Tech Solutions",
  ],
  authors: [{ name: "EJ Tech Solutions", url: "https://ejtechno.com" }],
  creator: "EJ Tech Solutions",
  metadataBase: new URL("https://ejtechno.com"),
  alternates: {
    canonical: "https://ejtechno.com",
  },
  openGraph: {
    type: "website",
    url: "https://ejtechno.com",
    title: "EJ Tech Solutions | IT Support & Web Services in Langley & Surrey BC",
    description:
      "Affordable IT support, custom websites, and device installations for small businesses and individuals in Langley and Surrey, BC.",
    siteName: "EJ Tech Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EJ Tech Solutions — IT & Web Services in Langley & Surrey BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EJ Tech Solutions | IT Support & Web Services in Langley & Surrey BC",
    description:
      "Affordable IT support, custom websites, and device installations in Langley and Surrey, BC.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/ej-tech.ico",
    apple: "/ej-tech.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}