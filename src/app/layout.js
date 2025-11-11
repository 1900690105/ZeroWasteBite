import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZeroWasteBite | Save Food, Feed People",
  description:
    "Join the movement to end food wastage. Donate surplus food, volunteer, or connect with NGOs via ZeroWasteBite.",
  openGraph: {
    title: "ZeroWasteBite | Save Food, Feed People",
    description:
      "ZeroWasteBite connects donors, volunteers, and NGOs to fight food waste and hunger.",
    url: "https://zerowastebite.org",
    siteName: "ZeroWasteBite",
    images: [
      {
        url: "/logo.png", // add your social preview image
        width: 1200,
        height: 630,
        alt: "ZeroWasteBite – Save Food, Feed People",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
