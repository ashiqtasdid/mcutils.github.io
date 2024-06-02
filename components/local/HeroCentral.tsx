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

  return (
    <div className="flex h-screen text-center justify-center mx-auto items-center">
      <m.div
        ref={targetRef}
        style={{
          scale: scale,
          opacity: opacity,
        }}
      >
        <div className="w-[500px] shadow-md ring-1 ring-slate-200 rounded-lg">
          <div className="bg-zinc-100 rounded-md">
            <div className="py-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-md text-black">/java</span>{" "}
              {"  "}
              <span className="text-gray-800">
                Get Real-Time info about a Minecraft: Java Edition Server
              </span>
            </div>
            <span className="flex pt-3 pb-3">
              <span className="font-medium text-md text-gray-700 px-2">
                /java
              </span>{" "}
              <span className="flex ring-blue-500 ring-1 rounded-md">
                <span className="font-medium text-md px-3 rounded-l-md text-gray-700 bg-gray-200">
                  server-ip
                </span>{" "}
                <span className="font-medium text-md px-3 rounded-r-md text-gray-700 bg-white">
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
