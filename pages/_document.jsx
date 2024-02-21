import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className="pt-5 flex items-center">
          <div className="m-auto text-[14px] flex gap-5">
            <Link href="/">HOME</Link>
            <Link href="/serverside">BLOGS</Link>
            <Link href="/users">CLIENTSIDE</Link>
            <Link href="/users/1">USERINFO</Link>
            <Link href="/users/profile/2">USERPROFILE</Link>
            <Link href="/staticside">STATICSIDE</Link>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
