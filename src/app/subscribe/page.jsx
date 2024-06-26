"use client";
import React, { useState, useEffect } from "react";

const Subscribe = () => {
  const [showModel, setShowModel] = useState(false);
  const [btnName, setBtnName] = useState("Subscribe");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedBtnName = localStorage.getItem("subscribed");
        if (storedBtnName) {
          setBtnName(storedBtnName);
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    }
  }, []);

  const showModelHandler = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("subscribed", "Subscribed");
        setBtnName("Subscribed");
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    }
    setShowModel(true);
    setTimeout(() => {
      setShowModel(false);
    }, 2500);
  };

  return (
    <div className="items-center px-8 mt-5">
      <h1 className="text-4xl font-bold text-center mb-10">Subscribe</h1>
      <div className="flex items-center justify-center relative">
        <button
          className="text-xl text-zinc-200 hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 px-4 py-2 rounded-lg transition-all"
          onClick={showModelHandler}
        >
          {btnName}
        </button>
      </div>
      {showModel && (
        <div className="w-96 h-40 border border-zinc-900 rounded-lg px-5 py-10 mt-10">
          <p className="text-center text-2xl">
            Thanking You <br /> for Subscribing ... 😊
          </p>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
