import React from "react";

const index = (props) => {
  return (
    <main className={`items-center p-24 h-[100vh]`}>
      <h1 className="text-3xl text-center">
        Profile Page of
        <span className=" text-red-700 mx-4">{props.data?.firstName}</span>
      </h1>
    </main>
  );
};
export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  const allUserId = data.users.map((user) => user.id);
  return {
    paths: allUserId.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: {
      data,
    },
  };
};

export default index;
