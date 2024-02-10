import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { VercelToolbar } from "@vercel/toolbar/next";
import Nav from "./nav";
import Footer from "../footer";

const inter = localFont({
  src: "../../fonts/InterVariable.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jeeho Ahn - Aspiring developer / designer ",
  description: "Jeeho Ahn - Aspiring developer / designer based in Seoul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" dark ">
      <body
        className={cn(
          inter.variable,
          "flex flex-col min-h-screen font-sans   bg-gray-1 dark:text-white"
        )}
      >
        {/* <Nav /> */}
        <div className="w-full grow overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
