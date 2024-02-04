import { Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Tech-Log",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="bg-slate-600 w-auto">
          <nav className="text-white bg-slate-600 h-20 flex items-center justify-between w-[90%] m-auto">
            <div>
              <ul className="flex gap-5">
                <li>
                  <Link href="/">All article</Link>
                </li>
                <li>
                  <Link href="/category/technology">Technology</Link>
                </li>
                <li>
                  <Link href="/dashboard/">Dashboard</Link>
                </li>
                <li>
                  <Link href="/dashboard/user"> User</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="hidden md:flex items-center gap-5">
                <li>
                  <Link href="/"> About</Link>
                </li>
                <li>
                  <button className="border-2 px-2 py-1 rounded-md">
                    SUBSCRIBE
                  </button>
                </li>
              </ul>
              <div className="md:hidden">
                <a className="text-4xl" href="#">
                  &#8801;
                </a>
              </div>
            </div>
          </nav>
        </div>
        <main className="h-auto w-[90%] m-auto mt-5">{children}</main>
        <footer >
          <div className="h-48 flex items-center justify-center">
            <ul className="flex items-center justify-center gap-10">
              <li>youtube</li>
              <li>gmail</li>
              <li>instgram</li>
              <li>facebook</li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
