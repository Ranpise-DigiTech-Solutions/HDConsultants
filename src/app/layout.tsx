import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/global/navbar";
import FooterComponent from "@/components/global/footer";
import { SheetProvider } from "./providers/sheet-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H & D Consultants",
  description:
    "H & D Group Mangalore is a trusted name offering diverse services, including manpower placement and outsourcing, finance consultancy, property management, and stock broking. With a focus on professionalism and excellence, we deliver tailored solutions to meet your unique needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SheetProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full flex flex-col items-center justify-start gap-0`}
        >
          <NavbarComponent />
          {children}
          <FooterComponent />
        </body>
      </SheetProvider>
    </html>
  );
}
