"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/v1/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(blogs);
  return (
    <div className="items-center px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem]">
      <h1 className="text-4xl font-bold text-center mb-10">Blogs</h1>
      {isLoading ? (
        <h1 className="text-2xl text-center mb-10">Fetching... </h1>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="my-5">
            <h2 className="text-2xl font-bold ">
              {blog.title.slice(0, 160)}...
            </h2>
            <p
              className="text-zinc-300 my-2"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></p>
            <div className="flex justify-between">
              <div className="text-white font-semibold">
                {new Date(blog?.createdAt).toLocaleString("en-IN", {
                  weekday: "short",
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </div>
              <Link href={`blogs/${blog._id}`}>
                <div className="text-white font-semibold">read more</div>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
