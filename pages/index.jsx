import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <main className={`items-center p-24 ${inter.className}`}>
        <h1 className="text-3xl text-center">Next.Js</h1>
      </main>
    </>
  );
}
