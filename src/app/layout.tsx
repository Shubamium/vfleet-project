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

const title = "VFleet Project - A VTuber Company sailing the Virtual Seas";

const description =
  "A virtual entertainment company Sailing the virtual seas with the goal of supporting museum ship and aerospace museums around the world!";
const banner = "https://i.ibb.co.com/3WwKxmJ/We-Are-VFleet.png";
const url = "https://vfleetproject.com";

export const metadata: Metadata = {
  title: {
    default: "VFleet Project - A VTuber Company sailing the Virtual Seas",
    template: "%s - VFleet Project",
  },

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
  keywords: [
    "vtuber",
    "vtuber talent agency",
    "vtuber agency audition",
    "Vtuber Website",
    "Vtuber Agency",
    "Vtuber Group",
    "Streamer",
    "Anime",
    "Shipgirl",
    "Battelshipgirl",
    "Jetgirl",
    "VTuber",
    "Battleship",
    "Aircraft",
    "Carrier",
    "Virtual",
    "History",
    "Naval",
    "Fleet",
    "Navy",
  ],
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
