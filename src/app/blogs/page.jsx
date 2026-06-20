import Link from "next/link";
import { blogs } from "@/app/data/blogs";

export default function BlogsPage() {
  const featured = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <>
      <section className="relative overflow-hidden bg-[#191919] pt-44 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,140,67,0.15),transparent_60%)]" />

        <div className="container-custom relative z-10 text-center">
          <p className="text-primary text-sm uppercase tracking-[0.1em]">
            \ BLOG \
          </p>

          <h1 className="mt-6 text-[60px] font-semibold leading-none text-white">
            Lighting Insights
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Explore modern lighting trends, design inspiration, LED innovations
            and expert advice for residential and commercial spaces.
          </p>
        </div>
      </section>

      <section className="bg-[#191919] pb-32 px-2 md:px-10 lg:px-24">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary">
                    {blog.category}
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold leading-tight text-white transition group-hover:text-primary">
                    {blog.title}
                  </h2>

                  <p className="mt-4 line-clamp-2 text-white/60">
                    {blog.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm text-white/40">{blog.date}</span>

                    <span className="text-primary font-medium">
                      Read More →
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
