import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/header/Footer";
import Header from "@/components/header/Header";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shofy website",
  description: "Test application for education purpose",
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
        <Layout>
          <Header></Header>
          {children}
          <Footer></Footer>
          <Toaster position="bottom-right" toastOptions={{
            duration: 3000,
            style: {background: '#000000', color: '#ffffff'},
          }}></Toaster>
        </Layout>
      </body>
    </html>
  );
}
