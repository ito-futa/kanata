// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "彩雲カナタ公式サイト",
  description: "vTuber彩雲カナタの公式サイトです♪",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className={`${inter.className} mt-24`}>{children}</main>
      <Footer />
    </>
  );
}
