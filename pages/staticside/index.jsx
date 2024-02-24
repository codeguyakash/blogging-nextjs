import Image from "next/image";
import Link from "next/link";
const index = (props) => {
  return (
    <main
      className={`items-center px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem]`}
    >
      <h1 className="text-4xl font-bold text-center mb-10">Blogs (SSR)</h1>
      <div>
        {props?.data?.map((blog) => (
          <div
            key={blog._id}
            className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-6xl my-5"
          >
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  src={blog.blogImage}
                  width={250}
                  height={250}
                  className="w-full object-cover md:h-full "
                  alt="Modern building architecture"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {blog._id}
                </div>
                <Link
                  href={`/blogs/${blog._id}`}
                  className="block mt-1 text-lg leading-tight font-medium hover:underline"
                >
                  {blog.title.slice(0, 100)}
                </Link>
                <p className="mt-2 text-slate-500 line-clamp-2">
                  {blog.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export const getStaticProps = async () => {
  const data = await (
    await fetch("https://api.techlogs.tech/api/v1/blogs")
  ).json();

  return {
    props: {
      data,
    },
  };
};
export default index;
