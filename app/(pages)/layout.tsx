import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils"; 
import { Suspense } from "react";
import { VercelToolbar } from "@vercel/toolbar/next";
import Nav from "./nav";
import { LenisProvider } from "./lenis";
import Footer from "../footer";

const wantedSans = localFont({
  src: "../../fonts/WantedSansVariable.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" dark ">
      <body
        className={cn(wantedSans.variable, " font-sans bg-gray-1 text-gray-12")}
      >
        <LenisProvider>
          <Nav />
          <div className="w-full  overflow-x-hidden">{children}</div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}