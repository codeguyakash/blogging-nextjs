export default function serverside(props) {
  //   console.log("Props", props.data.users);
  return (
    <main className="items-center p-24">
      <h1 className="text-3xl text-center">Server Side (SSR)</h1>
      <div>
        {props.data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  //   console.log(data);
  return {
    props: {
      data,
    },
  };
};
