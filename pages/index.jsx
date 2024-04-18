import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <main
        className={`items-center px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem] ${inter.className}`}
      >
        <h1 className="text-4xl font-bold text-center mb-10">Blogs (SSR)</h1>
        <div>
          {props.data.map((blog) => (
            <div key={blog._id} className="my-5">
              <h2 className="text-2xl font-bold text-[#d0d0d0]">
                {blog.title.slice(0, 100)}
              </h2>
              <p className="text-justify text-[#969696] line-clamp-2 my-2">
                {blog.content}
              </p>
              <span className="text-[#c5c5c5]">Readmore...</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://techlog-tech-585621892456.herokuapp.com/api/v1/blogs");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
