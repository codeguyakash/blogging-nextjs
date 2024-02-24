import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loader from "./Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    `https://api.techlogs.tech/api/v1/blogs`,
    fetcher
  );
  const [isLoading, setIsLoading] = useState(false);
  const dummyArray = new Array(20).fill(undefined);

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
    }
    if (error) {
      setIsLoading(true);
    }
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="items-center px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem]">
      <h1 className="text-4xl font-bold text-center mb-10">Blogs</h1>
      <h6 className="text-2xl font-bold text-center mb-10">
        {error ? "Error... :-(" : ""}
      </h6>
      {isLoading
        ? dummyArray.map((_, index) => <Loader key={index} />)
        : data?.map((blog) => (
            <div key={blog._id} className="my-5">
              <h2 className="text-2xl font-bold text-[#d0d0d0]">
                {blog.title.slice(0, 100)}...
              </h2>
              <p className="text-justify text-[#969696] my-2 line-clamp-2">
                {blog.content}
              </p>
              <Link href={`blogs/${blog._id}`} className="flex justify-between">
                <div className="text-white font-semibold">Readmore...</div>
                <div className="text-white font-semibold">
                  {new Date(blog?.createdAt).toLocaleString("en-IN", {
                    weekday: "short",
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
}
