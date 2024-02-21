export default function serverside(props) {
  console.log("Props", props.data);
  return (
    <main className="items-center p-20">
      <h1 className="text-3xl text-center mb-10">Blogs (SSR)</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {props.data.map((blog) => (
          <div
            className="border-[1px] border-gray-900 rounded-md p-5 border-t-red-800"
            key={blog._id}
          >
            <h2 className="text-2xl">{blog.title}</h2>
            <br />
            <p className="text-justify text-[#969696]">{blog.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const data = await (
    await fetch("https://api.techlogs.tech/api/v1/blogs")
  ).json();
  // console.log(data);
  return {
    props: {
      data,
    },
  };
};
