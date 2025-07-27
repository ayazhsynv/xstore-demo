import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XStore Painting Studio",
  description:
    "XStore Painting Studio - A place to explore and purchase beautiful paintings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`} suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
