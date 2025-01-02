import Link from "next/link";

export default function BlogList() {
  const blogs = [
    { slug: "first-post", title: "First Post", excerpt: "This is the first blog post." },
    { slug: "second-post", title: "Second Post", excerpt: "This is the second blog post." },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <p className="text-gray-500">{blog.excerpt}</p>
            <Link href={`/blogsingle/${blog.slug}`} className="text-[#FB2E86] underline mt-2 block">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
