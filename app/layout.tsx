import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const customFont = localFont({
  src: "../public/fonts/Sakana.ttf",
  variable: "--font-sakana",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NiTRO - Energy Drink",
  description: "Boost your energy!",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfitFont.variable} ${customFont.variable} h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col mx-auto">{children}</body>
    </html>
  );
}
