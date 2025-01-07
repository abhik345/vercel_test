import "./globals.css";

import Footer from "@/components/Footer";
import Loading from "./loading";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import localFont from "next/font/local";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SmoothScrolling>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
