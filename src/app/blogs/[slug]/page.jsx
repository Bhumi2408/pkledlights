import { blogs } from "@/app/data/blogs";
import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return notFound();

  return (
    <section className="bg-[#191919] pt-40 pb-24">

      {/* HERO */}
      <div className="container-custom">

        <div className="mx-auto max-w-[750px] text-center">

          <p className="text-primary text-sm uppercase tracking-[0.25em]">
            {blog.category}
          </p>

          <h1 className="mt-6 text-3xl font-semibold leading-tight text-white lg:text-5xl">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[750px] text-xl leading-relaxed text-white/60">
            {blog.description}
          </p>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-sm text-white/50">
            <span>{blog.date}</span>
          </div>

        </div>

      </div>

      {/* FEATURED IMAGE */}
      <div className="container-custom mx-auto mt-24 max-w-[850px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-[450px] w-full rounded-[40px] object-cover"
        />
      </div>

      {/* ARTICLE */}
      <div className="mx-auto mt-10 max-w-[850px] px-6">

        <div className="space-y-8">

          {blog.content?.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-white/80"
            >
              {paragraph}
            </p>
          ))}

        </div>

        {/* FAQ */}
        {blog.faq?.length > 0 && (
          <div className="mt-14">

            <h2 className="mb-10 text-3xl font-semibold text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">

              {blog.faq.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.question}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </div>
              ))}

            </div>

          </div>
        )}

      </div>
    </section>
  );
}