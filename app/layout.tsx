import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import OnLoad from "@/components/common/OnLoad";
import Loading from "@/components/common/Loading";

export const metadata: Metadata = {
  title: "Xbarat | When you are enough",
  description: "Exchange & Transfer platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Xbarat | Exchange & Transfer your money</title>
      </Head>
      <body>
        <OnLoad />
        <Loading />
        {children}
      </body>
    </html>
  );
}
