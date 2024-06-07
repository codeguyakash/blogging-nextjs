import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem]">
      <h1 className="text-4xl font-bold text-center">About</h1>
      <h2 className="text-2xl font-bold">Who am I 🧑💻</h2>
      <p className="text-zinc-300">
        Hey, My name is Akash. I'm a Software Development Engineer. <br /> I
        have been a Frontend Web developer since 2020, and I love React.
        <br /> I didn't even know what React was when I landed my first job, but
        once I discovered it,
        <br /> I immediately fell in love.
      </p>
      <h2 className="text-xl font-semibold">💡 Specialization</h2>
      <ul className=" text-zinc-300 list-disc list-inside">
        <li>JavaScript & React</li>
        <li>JavaScript is my playground</li>
        <li>React is my go-to toolkit</li>
        <li>
          I believe in the power of user-friendly interfaces and seamless user
          experiences
        </li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">📚 Current Learning</h2>
      <ul className="mt-2 text-zinc-300 list-disc list-inside">
        <li>I'm currently learning Full Stack Development</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">🤝 Let's Connect </h2>
      <ul className="mt-2 text-zinc-300 gap-4 flex">
      <li>
          <a
            href="https://twitter.com/codeguyakash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codeguyakash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @Github
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/codeguyakash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @Youtube
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/codeguyakash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@codeguyakash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @Medium
          </a>
        </li>
        <li>
          <a
            href="mailto:codeguyakash@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @e-Mail
          </a>
        </li>
      </ul>
    </div>
  );
};

export default page;
