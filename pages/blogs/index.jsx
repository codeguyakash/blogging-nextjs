import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const dummyArray = new Array(3).fill(undefined);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://techlog-tech-585621892456.herokuapp.com/api/v1/blogs/")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="items-center px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem]">
      <h1 className="text-4xl font-bold text-center mb-10">Blogs</h1>
      {isLoading
        ? dummyArray.map((_, index) => <Loader key={index} />)
        : data?.map((blog) => (
            <div key={blog._id} className="my-5">
              <h2 className="text-2xl font-bold text-[#d0d0d0]">
                {blog.title.slice(0, 100)}...
              </h2>
              <div
                className="text-justify text-[#969696] my-2"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
              <Link href={`blogs/${blog._id}`} className="flex justify-between">
                <div className="text-white font-semibold">Read more...</div>
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
