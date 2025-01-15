import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Common/Header";
import Nav from "@/components/Common/Nav";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Handcrafted Haven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* placeholder code */}
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
