"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { animate, delay, motion as m } from "framer-motion";
import { Separator } from "@radix-ui/react-separator";

const HeroNext = () => {
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
    <div className="flex z-0 h-screen justify-center items-center">
      <div className="mx-10 hidden md:flex m-auto justify-between">
        <m.div
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5 }}
          className="w-[65%] pt-10"
        >
          <div className="flex justify-center py-2 items-center">
            <Badge>Minecraft Utilities</Badge>
          </div>
          <div className="space-y-7">
            <div className="font-bold justify-center text-center items-center flex text-6xl">
              Serving {data?.users.toLocaleString()} users across{" "}
              {data?.servers.toLocaleString()} servers
            </div>
            <div className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam numquam itaque ex minus iusto repellendus quidem
              excepturi, voluptatibus, nesciunt placeat accusantium! Odio earum
              saepe eveniet officia quam vero deleniti quia! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolore maiores obcaecati
              sint animi perspiciatis totam sed commodi nesciunt laboriosam et
              non dolor tempora accusamus laudantium quos, rerum aliquid
              veritatis illo.
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
        <div className="hidden md:block">
          <m.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView="animate"
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: "-2.5deg",
              scale: 1.1,
            }}
            className="w-[400px] border-2 h-[455px] border-gray-400 dark:border-black px-5 py-5 rounded-xl dark:bg-blue-1000 bg-white"
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
        </div>
      </div>

    </div>
  );
};

export default HeroNext;
