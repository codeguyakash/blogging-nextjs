import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <meta
        name="google-site-verification"
        content="Cvv464XYmbWGDUozX_mRq5NYiK_pB6KlsjY0oLU-25Q"
      />
      <Head />
      <body className="py-10">
        <nav className="flex items-center justify-center">
          <div className=" flex align-center justify-center w-[55%] py-2">
            <div className="text-[14px] font-semibold flex gap-5">
              <Link href="/">HOME</Link>
              <Link href="/blogs">BLOGS</Link>
              <Link href="/staticside">STATICSIDE</Link>
            </div>
          </div>
        </nav>
        <Main />
        <NextScript />
        <div className="font-semibold w-full mt-10 md:px-8 lg:px-20 xl:px-96 2xl:[30rem] flex items-center justify-center">
          <div className="max-w-max-content text-2xl">
            <a href="https://github.com/codeguyakash" target="_blank">
              made with ❤️ by codeguyakash
            </a>
          </div>
        </div>
      </body>
    </Html>
  );
}
