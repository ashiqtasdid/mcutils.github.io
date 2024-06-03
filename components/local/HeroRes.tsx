import React from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const HeroRes = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["0 1", "0.7 0"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const x = useTransform(scrollYProgress, [0, 0.6], [-490, 0]);

  return (
    <div className="h-screen mx-auto flex justify-center items-center align-middle">
      <m.div
        ref={target}
        style={{
          scale: scale,
          opacity: opacity,
            x: x,
        }}
      >
        <m.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView="animate"
          transition={{ duration: 0.5 }}
          whileHover={{
            rotate: "2.5deg",
            scale: 1.1,
          }}
          className="w-[400px] border-2 h-[500px] border-gray-400 dark:border-black px-5 py-5 rounded-xl dark:bg-blue-1000 bg-white"
        >
          <div className="text-blue-500 font-semibold flex justify-between hover:cursor-pointer">
            <div>Minecraft Utilities</div>
            <div>
              <Image
                src={"https://i.postimg.cc/WFh5c9xy/icon.png"}
                className="rounded-md"
                height={50}
                width={50}
                alt="image"
              />
            </div>
          </div>
          <div className="text-black dark:text-white font-medium">
            Here is the requested server status
          </div>
          <div className="text-black dark:text-white font-semibold pb-1 pt-2">
            Numeric IP
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">209.222.115.51</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            Server IP
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">mc.hypixel.net</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            Players Online - [Online / Max]
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">43838 / 200000</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            Version
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">Requires MC 1.8 / 1.20</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            EULA
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">True</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            MOTD
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">
              {" "}
              Hypixel Network [1.8-1.20], NEW PTL GAME: SHEEP WARS | SB 0.20.1
            </span>
          </div>
        </m.div>
      </m.div>
    </div>
  );
};

export default HeroRes;
