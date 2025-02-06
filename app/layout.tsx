import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const FakePearl = localFont({
  src: [
    {
      path: "../public/assets/fonts/FakePearl-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/FakePearl-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/FakePearl-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/FakePearl-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/FakePearl-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-fake-pearl",
});

const Syncopate = localFont({
  src: [
    {
      path: "../public/assets/fonts/Syncopate-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Syncopate-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: "Owndays T&M",
  description: "owndays landing page testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FakePearl.variable} ${Syncopate.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
