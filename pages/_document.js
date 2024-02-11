import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className="pt-5 flex items-center">
          <div className="m-auto text-2xl flex gap-5">
            <Link href="/">home</Link>
            <Link href="/serverside">serverside</Link>
            <Link href="/users">clientside</Link>
            <Link href="/users/1">userinfo</Link>
            <Link href="/users/profile/2">userprofile</Link>
            <Link href="/staticside">staticside</Link>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
