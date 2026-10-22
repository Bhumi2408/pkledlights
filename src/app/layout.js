import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const SITE_NAME = "PK LED Lights";
const SITE_URL = "https://www.ledlightsmanufacturer.in";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: ["PK LED Light", "Pk Led Lights", "pkledlights"],
  url: `${SITE_URL}/`,
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: "/",
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M57KEPR5BV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M57KEPR5BV');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}