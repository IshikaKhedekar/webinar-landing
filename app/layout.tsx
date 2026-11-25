import type { Metadata } from "next";
import { Great_Vibes, Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const script = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2X Your Team Efficiency in 22 Days | 22-Minute Masterclass",
  description:
    "Discover where your team is losing time, productivity and revenue — and how to fix the gaps that are holding your growth back. A 22-minute masterclass for business owners & leaders.",
  openGraph: {
    title: "2X Your Team Efficiency in 22 Days",
    description:
      "Live 22-minute masterclass with Mr. Parmeshawar Patidar · 15 September, 11:00 AM · Seats at ₹499 (worth ₹999) with a 100% money-back guarantee.",
    type: "website",
    images: [{ url: "/speaker.jpg", width: 800, height: 1000 }],
  },
  verification: {
    google: "6LXHV6MCEAcixoN7LBJiRqdm24G--ZoopAWS8WUCweE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
