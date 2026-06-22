import React from "react";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";

function parseBlogDate(dateStr) {
  // expects format: "12 April, 2026"
  const months = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
  ];

  const cleaned = dateStr.replace(",", "").trim();
  const [day, month, year] = cleaned.split(" ");
  const monthIndex = months.indexOf(month.toLowerCase());

  return new Date(Number(year), monthIndex, Number(day));
}

const Blog = () => {
  const articles = [...blogs]
    .sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date))
    .slice(0, 2);

  return (
    <section
      className="relative overflow-hidden bg-[#252525] py-32 px-5 md:px-10 lg:px-40"
      id="blog"
    >
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
              {articles.map((article) => (
                <div key={article.slug}>
                  <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-primary">
                    {article.date} | {article.category.toUpperCase()}
                  </p>

                  <Link href={`/blogs/${article.slug}`}>
                    <h3 className="text-[24px] font-medium leading-tight text-white underline underline-offset-4 transition duration-300 hover:text-primary">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="mt-5 max-w-[700px] leading-relaxed text-white/70">
                    {article.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/blogs"
              className="mt-10 inline-flex text-sm font-semibold uppercase tracking-[0.1em] text-primary underline underline-offset-4"
            >
              View All Blogs →
            </Link>
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