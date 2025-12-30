import type { Metadata } from "next";
import { Caveat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abhijeet Singh",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // added className dark to make the theme only dark as default
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
