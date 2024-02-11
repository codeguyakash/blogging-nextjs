import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const UserInfo = () => {
  const router = useRouter();
  const [users, setUsers] = useState();
  useEffect(() => {
    const id = router.query.id;
    if (id == undefined) {
      return;
    }
    async function getUserById(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUsers(await data.json());
    }
    getUserById(id);
  }, [router.query.id]);

  return (
    <div className="items-center p-24">
      <h1 className="text-3xl text-center">User id </h1>
      <h1 className="text-3xl text-center">User id : {users?.id}</h1>
      <h1 className="text-3xl text-center">Username : {users?.firstName}</h1>
      <h1 className="text-3xl text-center">Email : {users?.email}</h1>
    </div>
  );
};

export default UserInfo;
