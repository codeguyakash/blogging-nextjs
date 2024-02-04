import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="text-white font-extralight bg-slate-600 h-20 flex items-center justify-between px-10">
          <div>
            <ul className="flex gap-5">
              <li>All article</li>
              <li>Technology</li>
              <li>Lifestyle</li>
              <li>People</li>
            </ul>
          </div>
          <div>
            <ul className="hidden md:flex gap-5">
              <li>About</li>
              <li>Subscribe</li>
            </ul>
            <div className="md:hidden">
              <a className="text-4xl" href="#">
                &#8801;
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
