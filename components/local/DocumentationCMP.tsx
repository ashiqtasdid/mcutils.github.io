"use client";
import React, { useEffect } from "react";

const Documentation = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href =
        "https://minecraftutilities.github.io/documentation/";
    });
    return () => {
      clearTimeout(redirectTimeout);
    };
  });

  return <div></div>;
};

export default Documentation;
