"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image"; // Uncommented for use

const BlogContent = () => {
  const timeOptions = {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const [blog, setBlog] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (!id) {
      return;
    }

    async function getUserById(blogId) {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/v1/blog/${blogId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getUserById(id);
  }, [id]);

  if (isLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="items-center mt-5 px-4 w-full md:px-0 md:w-2/3 mx-auto min-h-full">
      <div
        onClick={() => router.back()}
        className="text-white font-semibold cursor-pointer"
      >
        GO BACK
      </div>
      <div className="border-b-[1px] py-2 my-5 space-y-4">
        <h1 className="text-2xl font-bold">{blog?.title}</h1>
        <div className="flex justify-between items-center text-white font-semibold">
          <h3>ID : {blog?._id}</h3>
          <p>
            {new Date(blog?.createdAt)
              .toLocaleString("en-IN", timeOptions)
              .toUpperCase()}
          </p>
        </div>
      </div>
      {blog?.blogImage ? (
        <Image
          src={blog.blogImage}
          width={1200}
          height={630}
          className="my-5 block mx-auto"
          alt="blogPost"
        />
      ) : (
        <p className="text-center">No image available</p>
      )}
      <p className="text-zinc-300 my-2 text-justify">{blog?.content}</p>
    </div>
  );
};

export default BlogContent;
