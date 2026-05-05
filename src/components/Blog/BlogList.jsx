import React from "react";
import blogs from "../../data/blogs.json";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div className="dark:bg-black dark:text-white py-4 lg:py-8">
      <div className="container">
        <h1
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4 lg:mb-9"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
            Our Blogs
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              className="bg-dark rounded-lg p-4 hover:bg-primary duration-300 text-white hover:text-black group"
            >
              <img
                src={blog.image}
                alt={blog.metaDescription}
                className="rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="line-clamp-3">
                {blog.description.length > 50
                  ? blog.description.substring(0, 50) + "..."
                  : blog.description}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block text-lg font-semibold mt-3 text-primary group-hover:text-black duration-300"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogList;
