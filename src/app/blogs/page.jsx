import Link from "next/link";
import { blogs } from "../data/blogs";

export default function BlogsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#191919] pt-44 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,140,67,0.15),transparent_60%)]" />

        <div className="container-custom relative z-10 text-center">
          <p className="text-primary text-sm uppercase tracking-[0.1em]">
            \ BLOGS \
          </p>

          <h1 className="mt-6 text-5xl font-semibold text-white lg:text-7xl">
            Lighting Insights
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/60">
            Explore expert guides, LED lighting trends, energy-saving tips,
            product knowledge, and modern lighting solutions for homes,
            commercial spaces, and industrial projects.
          </p>
        </div>
      </section>

      <section className="bg-[#191919] px-5 pb-28 md:px-10 lg:px-20">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111]"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary">
                    {blog.category}
                  </p>

                  <h2 className="mt-4 line-clamp-2 text-2xl font-semibold text-white transition group-hover:text-primary">
                    {blog.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-white/60">
                    {blog.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-sm text-white/40">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}