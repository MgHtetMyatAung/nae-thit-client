import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import PreLoading from "@/components/common/PreLoading";
import BaseUserInterface from "@/components/common/BaseUserInterface";

const geistSans = localFont({
  src: "./fonts/gro-regular.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/gro-bold.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nae Thit Kyan Mar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BaseUserInterface>
          <Header />
          <main className=" min-h-screen">{children}</main>
          <PreLoading />
          <Footer />
        </BaseUserInterface>
      </body>
    </html>
  );
}
