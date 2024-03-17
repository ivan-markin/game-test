import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const mainFont = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Games",
  description: "Test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
