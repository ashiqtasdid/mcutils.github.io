import React from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroBlockRes = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["0 1", "0.7 0"],
  });
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const x = useTransform(scrollYProgress, [0, 0.6], [-490, 0]);

  return (
    <m.div 
        ref={target}
        style={{
            scale: scale,
            opacity: opacity,
            x: x,
        }}
    className="flex justify-center items-center align-middle h-screen">
      <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView="animate"
        transition={{ duration: 0.5 }}
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="w-[400px] border-2 h-[570px] border-gray-400 dark:border-black px-5 py-5 rounded-xl dark:bg-blue-1000 bg-white"
      >
        <div className="text-blue-500 font-semibold flex justify-between hover:cursor-pointer">
          <div>Minecraft Utilities</div>
        </div>
        <div className="text-black dark:text-white font-medium">
          Here are the info rmations about the block
        </div>
        <div className="text-black dark:text-white font-semibold pb-1 pt-2">
          Block Name
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">Obsidian</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Mineable
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">true</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Stack Size
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">64</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Mineable with (Default = Not Mineable)
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">mineable/pickaxe</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Object Type
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">block</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Does it emit light? ( {">"}0 (greater than 0), means it emits light)
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">0</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Hardness (Higher Means, It takes more time to mine)
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">50</span>
        </div>
      </m.div>
    </m.div>
  );
};

export default HeroBlockRes;
