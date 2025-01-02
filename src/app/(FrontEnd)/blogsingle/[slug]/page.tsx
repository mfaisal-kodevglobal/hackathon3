"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const blogs = [
  { slug: "first-post", title: "First Post", content: "Content of the first post." },
  { slug: "second-post", title: "Second Post", content: "Content of the second post." },
];

export default function BlogSingle({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blogPost = blogs.find((blog) => blog.slug === slug);

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!blogPost) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4">
      {/* Top Section */}
      <div className="bg-[#F1F0FF] py-8">
        <div className="text-center lg:text-left lg:ml-[300px]">
          <h2 className="text-[#101750] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            {blogPost.title}
          </h2>
          <p className="text-sm text-gray-600">
            Home. Blog. <span className="text-[#FB2E86]">{slug}</span>
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-6">
        <p>{blogPost.content}</p>
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Comments</h3>
        <ul className="mt-4 space-y-2">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded-md">
                {comment}
              </li>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </ul>

        {/* Add Comment */}
        <form onSubmit={handleAddComment} className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-[#FB2E86] text-white px-4 py-2 rounded-md"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}
