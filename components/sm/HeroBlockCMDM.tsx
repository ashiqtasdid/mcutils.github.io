import React from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroBlockCMDM = () => {
  
  return (
    <m.div
      className="flex justify-center h-screen items-center align-middle"
    >
      <div className="w-[400px] shadow-md mx-2 ring-1 text-black dark:text-white ring-slate-200 dark:ring-slate-900 rounded-lg">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-md">
          <div className="py-3 dark:bg-zinc-900 bg-gray-50 rounded-lg">
            <span className="font-medium mx-3 text-md dark:text-white text-black">
              block-name
            </span>{" "}
            {"  "}
            <span className="dark:text-gray-200 text-gray-800">
              eg: bedrick, oak_wood, obsidian, coal_block
            </span>
          </div>
          <span className="flex pt-3 pb-3">
            <span className="font-medium text-md dark:text-white text-gray-700 px-2">
              /block
            </span>{" "}
            <span className="flex ring-blue-500 ring-1 rounded-md">
              <span className="font-medium text-md px-3 rounded-l-md text-gray-700 dark:bg-zinc-950 dark:text-white bg-gray-200">
                block-name
              </span>{" "}
              <span className="font-medium text-md px-3 rounded-r-md text-gray-700 dark:text-white dark:bg-zinc-900 bg-white">
                obsidian
              </span>
            </span>
          </span>
        </div>
      </div>
    </m.div>
  );
};

export default HeroBlockCMDM;
