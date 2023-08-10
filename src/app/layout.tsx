import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./(index)/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-fill-available">
      <body className={`dark grid h-full grid-rows-[auto_1fr] ${inter.className}`}>
        <Navbar />
        <main className="scrollbar-rounded-md overflow-auto scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black/80">
          {children}
        </main>
      </body>
    </html>
  );
}
