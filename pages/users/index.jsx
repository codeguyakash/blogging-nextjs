import { Inter } from "next/font/google";
import Link from "next/link";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(`https://dummyjson.com/users`, fetcher);
  if (error) {
    return <div className="text-center text-2xl pt-24 h-[100vh]">Error ☹</div>;
  }
  if (!data) {
    return <div className="text-center text-2xl pt-24 h-[100vh]">Loading...</div>;
  }

  return (
    <div className={`items-center p-24 ${inter.className} h-[100vh]`}>
      <h1 className="text-3xl text-center">Client Side</h1>
      <div className="h-[100%]">
        {data &&
          data.users &&
          data.users.map((user) => (
            <div key={user.id}>
              <Link href={`users/${user.id}`}>
                <li>{user.firstName}</li>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
