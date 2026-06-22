"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { blogs } from "@/app/data/blogs";
import Link from "next/link";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return notFound();

  return (
    <section className="bg-[#191919] pt-40 pb-24">
      {/* HERO */}
      <div className="container-custom px-5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-primary text-sm uppercase tracking-[0.25em]">
            {blog.category}
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white lg:text-6xl">
            {blog.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
            {blog.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/50">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
            <span>•</span>
            <span>SCOOT Lighting</span>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="container-custom mt-16 px-5">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[35px]">
          <img
            src={blog.image}
            alt={blog.alt}
            className="h-[500px] w-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto mt-16 max-w-4xl px-5">
        <div className="space-y-8">
          {blog.content?.map((block, index) => {
            // Plain string = simple paragraph (keeps old blogs working as-is)
            if (typeof block === "string") {
              return (
                <p key={index} className="text-lg leading-[2] text-white/80">
                  {block}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="mt-4 text-2xl font-semibold text-white md:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="list-disc space-y-3 pl-6 text-lg leading-[1.8] text-white/80"
                >
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "table") {
              return (
                <div
                  key={index}
                  className="overflow-x-auto rounded-2xl border border-white/10"
                >
                  <table className="w-full text-left text-white/80">
                    <thead className="bg-[#111]">
                      <tr>
                        {block.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-5 py-3 text-sm uppercase tracking-wide text-primary"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri} className="border-t border-white/10">
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-5 py-3">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* FAQ */}
        {blog.faq && blog.faq.length > 0 && <FAQSection faq={blog.faq} />}

        {/* CTA */}
        <div className="mt-20 rounded-[30px] border border-primary/20 bg-[#111] p-10 text-center">
          <h3 className="text-3xl font-semibold text-white">
            Looking For Premium LED Lighting Solutions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Contact SCOOT Lighting for panel lights, flood lights,
            street lights, COB lights, spot lights and complete
            lighting solutions.
          </p>

        
        </div>

        {/* Related Blogs */}
        <div className="mt-24">
          <h2 className="mb-10 text-3xl font-semibold text-white">
            Related Articles
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {blogs
              .filter((item) => item.slug !== blog.slug)
              .slice(0, 2)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/blogs/${item.slug}`}
                  className="overflow-hidden rounded-[25px] border border-white/10 bg-[#111]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-[220px] w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ faq }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-20">
      <h2 className="mb-8 text-3xl font-semibold text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
          >
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-medium text-white">{item.question}</span>
              <span className="text-primary text-2xl">
                {active === index ? "-" : "+"}
              </span>
            </button>

            {active === index && (
              <div className="px-6 pb-6 text-white/70">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}