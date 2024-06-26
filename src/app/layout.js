import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akash | Blogs",
  description: "A blog Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <nav className="flex items-center justify-center backdrop-blur-lg fixed w-full border-b-2 border-zinc-900 py-5">
            <div className=" flex align-center justify-center w-[55%] py-2">
              <div className="text-[14px] font-semibold flex gap-5">
                <Link href="/">Home</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/about">About</Link>
                <Link href="/subscribe">Subscribe</Link>
              </div>
            </div>
          </nav>
          <div className="mt-24">{children}</div>
          <div className="font-semibold w-full mt-10 md:px-8 lg:px-20 xl:px-96 2xl:[30rem] flex items-center justify-center">
            <h3 className="max-w-max-content text-center text-[14px] font-semibold mb-6">
              <a href="https://github.com/codeguyakash" target="_blank">
                Made with ❤️ by codeguyakash
              </a>
            </h3>
          </div>
        </div>
      </body>
    </html>
  );
}
