"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";

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
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  useEffect(() => {
    if (id == undefined) {
      return;
    }
    async function getUserById(id) {
      const res = await fetch(`/api/v1/blog/${id}`);
      const data = await res.json();
      setBlog(data);
    }
    getUserById(id);
  }, [id]);
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
      {blog?.blogImage ? <p>image</p> : <p>no image</p>}
      {/* <Image
        src={blog?.blogImage}
        width={1200}
        height={630}
        className="my-5 block mx-auto"
        alt="blogPost"
      /> */}
      <p className="text-justify text-[18px]">{blog?.content}</p>
    </div>
  );
};

export default BlogContent;
