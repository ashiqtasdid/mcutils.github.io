import React from "react";

import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroCentral = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "0.7 0"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const x = useTransform(scrollYProgress, [0, 0.7], [490, 0]);

  return (
    <div className="flex h-screen text-center justify-center mx-auto items-center">
      <m.div
        ref={targetRef}
        style={{
          scale: scale,
          opacity: opacity,
          x: x,
        }}
      >
        <div className="w-[500px] shadow-md ring-1 text-black dark:text-white ring-slate-200 dark:ring-slate-900 rounded-lg">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-md">
            <div className="py-3 dark:bg-zinc-900 bg-gray-50 rounded-lg">
              <span className="font-medium text-md dark:text-white text-black">
                /java
              </span>{" "}
              {"  "}
              <span className="dark:text-gray-200 text-gray-800">
                Get Real-Time info about a Minecraft: Java Edition Server
              </span>
            </div>
            <span className="flex pt-3 pb-3">
              <span className="font-medium text-md dark:text-white text-gray-700 px-2">
                /java
              </span>{" "}
              <span className="flex ring-blue-500 ring-1 rounded-md">
                <span className="font-medium text-md px-3 rounded-l-md text-gray-700 dark:bg-zinc-950 dark:text-white bg-gray-200">
                  server-ip
                </span>{" "}
                <span className="font-medium text-md px-3 rounded-r-md text-gray-700 dark:text-white dark:bg-zinc-900 bg-white">
                  mc.hypixel.net
                </span>
              </span>
            </span>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default HeroCentral;
