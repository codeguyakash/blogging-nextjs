"use client";
import React, { useState } from "react";

const page = () => {
  const [showModel, setShowModel] = useState(false);
  let btnName = localStorage.getItem("subscribed");
  const showModelHandler = () => {
    localStorage.setItem("subscribed", "Subscribed");
    setShowModel(true);
    setTimeout(() => {
      setShowModel(false);
    }, 2500);
  };
  return (
    <div className="items-center px-8 mt-5 md:px-8 lg:px-20 xl:px-96 2xl:[30rem]">
      <h1 className="text-4xl font-bold text-center mb-10">Subscribe</h1>
      <div className="flex items-center justify-center relative">
        <button
          className="text-xl text-zinc-200 hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 px-4 py-2 rounded-lg transition-all"
          onClick={showModelHandler}
        >
          {btnName}
        </button>
      </div>
      {showModel ? (
        <div className="w-96 h-40 border border-zinc-900 rounded-lg px-5 py-10 mt-10">
          <p className="text-center text-2xl">
            Thanking You <br /> for Subscribing ... 😊
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default page;
