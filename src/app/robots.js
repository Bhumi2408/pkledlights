export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/",
          "/_next/image",
          "/blogs/",
        ],
        disallow: [
          "/api/",
          "/404",
          "/500",
          "/cdn-cgi/",
        ],
      },
    ],
    sitemap: "https://www.ledlightsmanufacturer.in/sitemap.xml",
  };
}