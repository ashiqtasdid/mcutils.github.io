"use client";

import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [counter, setCounter] = useState(5); // Initial countdown value

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      window.location.href =
        "https://discord.com/oauth2/authorize?client_id=810192936472936480&scope=bot&permissions=7168"; // Replace with your target URL
    }, 5000);
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className="h-screen mx-auto flex justify-center items-center align-middle text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
          <p className="text-xl">
            You will be redirected in {counter} seconds.
          </p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default Page;
