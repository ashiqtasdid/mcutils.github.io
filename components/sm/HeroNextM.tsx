"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { motion as m } from "framer-motion";

const HeroNextM = () => {
  const [data, setData] = useState<{ users: number; servers: number } | null>(
    null
  );

  useEffect(() => {
    axios.get("http://157.230.225.56:6005/stats").then((res) => {
      setData(res.data);
    });
  }, []);

  const animationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <m.div>
      <div className="flex z-0 py-20 h-screen justify-center items-center">
        <m.div
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center py-2 items-center">
            <Badge>Minecraft Utilities</Badge>
          </div>
          <div className="space-y-7 mx-2">
            <h1 className="font-black justify-center text-center items-center flex text-3xl">
              Serving {data?.users.toLocaleString()} users across{" "}
              {data?.servers.toLocaleString()} servers
            </h1>
            <div className="text-justify">
              <p>
              A feature-rich bot for Minecraft tools & utilities. Easily get
              real-time information about a Minecraft server, player skin, UUID,
              and much more! We are proudly serving{" "}
              {data?.users.toLocaleString()} users across{" "}
              {data?.servers.toLocaleString()} servers. You can check{" "}
              <span className="font-bold">real-time</span> Minecraft Java
              Edition / Minecraft Bedrock Edition servers. Also, you can check
              out a player&apos;s{" "}
              <span className="font-bold">Minecraft profile</span> by their
              username. Get detailed information about{" "}
              <span className="font-bold">Minecraft items & mobs</span> to
              expand your skills and knowledge about Minecraft.{" "}
              <span className="">Invite</span>{" "}
              <span className="font-bold underline">Minecraft Utilities</span>{" "}
              to your Discord server using the button below and elevate your
              Minecraft experience.
              </p>
            </div>
          </div>
          <div className="justify-center items-center flex pt-5">
            <div className="flex justify-between space-x-3">
              <button className="rounded-sm border-2 border-black bg-white px-3 py-1.5 font-normal text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none">
                Invite
              </button>
              <button className="rounded-sm border-2 border-zinc-800 bg-zinc-800 px-3 py-1.5 font-normal text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none">
                Documentation
              </button>
            </div>
          </div>
        </m.div>
      </div>
      <m.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView="animate"
        transition={{ duration: 0.5 }}
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="w-[400px] mx-2 border-2 h-[455px] border-gray-400 dark:border-black px-5 py-5 rounded-xl dark:bg-blue-1000 bg-white"
      >
        <div className="text-blue-500 font-semibold hover:cursor-pointer">
          Minecraft Utilities
        </div>
        <div className="text-black dark:text-white font-medium">
          Here is the requested server status
        </div>
        <div className="text-black dark:text-white font-semibold pb-1 pt-2">
          Numeric IP
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">123.456.789.101</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Server IP
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">mc.yourserver.net</span>
        </div>
        <div className="text-black dark:text-white font-semibold pt-1">
          Players Online - [Online / Max]
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
          <span className="mx-2">999 / 9999</span>
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
          <span className="mx-2">Your Network [1.8 - 1.20]</span>
        </div>
      </m.div>
    </m.div>
  );
};

export default HeroNextM;
