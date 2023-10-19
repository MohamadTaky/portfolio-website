import QueryClientProvider from "@/components/QueryClientProvider";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mohamad Taky",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-fill-available">
      <body className={`grid h-full ${inter.className}`}>
        <QueryClientProvider>
          <Header />
          <div className="scrollbar-rounded-md overflow-auto scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black/80">
            <main>{children}</main>
            <Footer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
