import type { Metadata } from "next";
import { Caveat, Hanken_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/core/theme-provider";
import { Navbar } from "@/components/core/navbar";
import { StarButton } from "@/components/core/star-button";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhijeet Singh",
  description: "My Portfolio",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", // Defines the base URL for resolving metadata image and link URLs
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${caveat.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StarButton />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
