import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./(index)/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-fill-available">
      <body className={`dark grid h-full grid-rows-[auto_1fr] bg-gray-900 text-white ${inter.className}`}>
        <Navbar />
        <main className="scrollbar-rounded-md overflow-auto scrollbar-thin scrollbar-thumb-indigo-600">
          {children}
        </main>
      </body>
    </html>
  );
}
