"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [appName, setAppName] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      axios
        .get("/api/v1/name")
        .then((res) => {
          setAppName(res.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(true);
    }
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 text-center">
        TECHLOGS.TECH
      </h1>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">
            {appName.projectName}
          </h3>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center inline-block w-2/3">
            {appName.description}
          </p>
        </div>
      )}
    </div>
  );
}
