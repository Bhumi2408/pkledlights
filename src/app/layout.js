import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Best LED Light Manufacturer in Delhi | Pk Led Light",
  description: "Pk Led Light is a trusted LED light manufacturer in Delhi offering premium indoor, outdoor, industrial & decorative LED lighting solutions. Energy-efficient, durable & affordable. Contact Us today!",
   icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {children}
      </body>
    </html>
  );
}