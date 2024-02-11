import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
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
            <p className="text-center text-green-500 mt-1">
              {props.data2 && props.data2.name}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await (await fetch("https://api.codeguyakash.me/")).json();
  const data2 = await (await fetch("http://localhost:3000/api/hello/")).json();
  return {
    props: {
      data,
      data2,
    },
  };
};
