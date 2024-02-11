const index = (props) => {
  return (
    <main className={`items-center p-24`}>
      <h1 className="text-3xl text-center">Static Side</h1>
      <div>
        {props.data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </div>
    </main>
  );
};
export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};
export default index;
