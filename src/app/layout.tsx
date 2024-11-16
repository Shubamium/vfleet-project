import type { Metadata } from "next";
import localFont from "next/font/local";
import { Oxanium } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Loading from "./component/loading/Loading";
import FooterTextProvider from "./component/footer/FooterTextProvider";

const norfolk = localFont({
  src: "./fonts/norfolk.otf",
  variable: "--font-nf",
  weight: "100 200 300 400 500 600 700 800",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const title = "VFLEET PROJECT";

const description = "";
const banner = "https://google.com";
const url = "https://google.com";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  description: description,
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
        style={
          {
            "--fontH": norfolk.style.fontFamily,
            "--fontP": oxanium.style.fontFamily,
          } as CSSProperties
        }
      >
        <Loading />
        <Header />
        {children}
        <FooterTextProvider />
      </body>
    </html>
  );
}
