const waitFor = (sec) => new Promise((res, rej) => setTimeout(res, sec * 1000));
const UserPage = async () => {
  await waitFor(5);
  return <h1>User</h1>;
};

export default UserPage;
