/* eslint-disable camelcase */
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotext = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotext",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for askink and answering programming questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotext.variable}`}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
