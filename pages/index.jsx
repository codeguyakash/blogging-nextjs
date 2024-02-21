import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const [developer, setDeveloper] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await (await fetch("/api/hello")).json();
      setDeveloper(res);
    }
    fetchData();
  }, []);
  console.log("OK!");
  return (
    <>
      <main className={`items-center p-24 ${inter.className} h-[100vh]`}>
        <div className="flex justify-center ">
          <div>
            <h1 className="text-4xl font-semibold rounded-md text-center inline px-10 py-4">
              {props.data && props.data.projectName}
            </h1>
            <p className="text-center text-yellow-500 mt-6">
              {props.data && props.data.description}
            </p>
            <p className="text-center text-green-500 mt-1">
              {developer && developer.name}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await (await fetch("https://api.techlogs.tech/")).json();
  return {
    props: {
      data,
    },
  };
};
