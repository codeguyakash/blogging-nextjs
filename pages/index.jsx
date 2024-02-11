import { Inter } from "next/font/google";
// import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  // const [dataInfo, setDataInfo] = useState();
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("https://api.codeguyakash.me/");

  //     setDataInfo(await response.json());
  //   }
  //   fetchData();
  // }, []);
  // console.log(dataInfo);
  return (
    <>
      <main className={`items-center p-24 ${inter.className} h-[100vh]`}>
        <div className="flex justify-center ">
          <div>
            <h1 className="text-4xl font-semibold rounded-md text-center bg-gray-50 inline px-10 py-4">
              {props.data && props.data.projectName}
            </h1>
            <p className="text-center text-yellow-500 mt-6">
              {props.data && props.data.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await (await fetch("https://api.codeguyakash.me/")).json();
  return {
    props: {
      data,
    },
  };
};
