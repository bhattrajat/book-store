import StoreProvider from "@/app/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description:
    "A simple book store app which lets you add, modify or delete books",
  title: "Book Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-700 p-4 lg:p-12`}>
        <header className="mb-4">
          <h1 className="text-3xl font-bold text-blue-50">
            <Link href="/">Book Store</Link>
          </h1>
        </header>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
