import React from "react";

const articles = [
  {
    date: "12 APRIL, 2026",
    category: "LED TECHNOLOGY",
    title: "Top LED Panel Light Manufacturers in Delhi — What to Look For",
    description:
      "Upgrade your space with energy-efficient LED panel lights from a trusted Delhi manufacturer. Stylish, durable, and ideal for homes and offices alike.",
  },
  {
    date: "28 MAY, 2026",
    category: "LIGHTING TIPS",
    title: "LED Street Lights vs Flood Lights — Which One Do You Need?",
    description:
      "Choosing between street lighting and flood lighting for your project? Here's how to decide based on coverage area, brightness, and application.",
  },
];

const Blog = () => {
  return (
    <section className="relative overflow-hidden bg-[#252525] py-32 px-5 md:px-10 lg:px-40" id="blog">
      {/* Background Text */}
      <div className="absolute right-0 top-1/3 lg:top-1/2 -translate-y-1/2 pointer-events-none">
        <h1
          className="text-[100px] lg:text-[200px] font-bold leading-none text-white/[0.07]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          BLOGS
        </h1>
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-7 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ NEWS & ARTICLES \
            </p>

            <h2 className="text-[62px] font-semibold leading-[0.95] text-white">
              News & Articles
            </h2>

            <p className="mt-6 text-[19px] text-white/80">
              Read more about lighting trends, innovations, and design
              inspiration.
            </p>

            <div className="mt-10 space-y-12">
              {articles.map((article, index) => (
                <div key={index}>
                  <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-primary">
                    {article.date} | {article.category}
                  </p>

                  <h3 className="text-[24px] font-medium leading-tight text-white underline underline-offset-4 transition duration-300 hover:text-primary">
                    {article.title}
                  </h3>

                  <p className="mt-5 max-w-[700px] leading-relaxed text-white/70">
                    {article.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-tl-[220px]">
              <img
                src="/images/blog.png"
                alt="Led light manufacturer in Delhi"
                className="h-[650px] w-full object-cover object-top-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
