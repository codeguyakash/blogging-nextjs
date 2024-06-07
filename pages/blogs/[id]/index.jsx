import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Link from "next/link";
import Image from "next/image";

export default function BlogInfo() {
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
  const router = useRouter();
  const [blog, setBlog] = useState();
  useEffect(() => {
    const id = router.query.id;
    if (id == undefined) {
      return;
    }
    async function getUserById(id) {
      const res = await fetch(
        `https://techlog-tech-585621892456.herokuapp.com/api/v1/blog/${id}`
      );
      const data = await res.json();
      setBlog(data);
    }
    getUserById(id);
  }, [router.query.id]);

  return (
    <div className="items-center px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem]">
      <div className="border-b-[1px] py-2 my-5 space-y-4">
        <h1 className="text-4xl font-bold text-justify">{blog?.title}</h1>
        <div className="flex justify-between items-center text-white font-semibold">
          <h3>ID : {blog?._id.slice(15, 50).toUpperCase()}</h3>
          <h3>
            {new Date(blog?.createdAt)
              .toLocaleString("en-IN", timeOptions)
              .toUpperCase()}
          </h3>
        </div>
      </div>
      <Image
        src={blog?.blogImage}
        width={1200}
        height={630}
        className="my-5 block mx-auto"
        alt="blogPost"
      />
      <p className="text-justify text-[18px]">{blog?.content}</p>
    </div>
  );
}
