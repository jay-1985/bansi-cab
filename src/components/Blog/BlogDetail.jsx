import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs.json";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog)
    return <div className="text-center text-xl py-20">Blog not found!</div>;

  return (
    <div className="dark:bg-black dark:text-white py-4 lg:py-8">
      <div className="container max-w-4xl mx-auto">
        <img
          src={blog.image}
          alt={blog.keywords}
          className="rounded-lg mb-4 w-full"
        />
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3">
          {blog.title}
        </h1>
        <p className="text-gray-400 mb-5">{blog.createdAt}</p>
        <p className="leading-relaxed text-lg whitespace-pre-line text-justify">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
