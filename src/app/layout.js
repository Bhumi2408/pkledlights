import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Best LED Light Manufacturer in Delhi | Pk Led Light",
  description:
    "Pk Led Light is a trusted LED light manufacturer in Delhi offering premium indoor, outdoor, industrial & decorative LED lighting solutions. Energy-efficient, durable & affordable. Contact Us today!",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "OYaRVIW92_o5MhdD57Kb5gHKONF1iUjD2QVJ6CZ_yh4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}