import { blogs } from "@/app/data/blogs";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {
      title: "Blog",
      description: "Lighting Blog",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description:
      blog.metaDescription || blog.description,

    keywords: blog.focusKeyword,

    openGraph: {
      title: blog.metaTitle || blog.title,
      description:
        blog.metaDescription || blog.description,
      images: [blog.image],
    },
  };
}

export default function Layout({ children }) {
  return children;
}