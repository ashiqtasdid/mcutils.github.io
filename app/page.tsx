"use client";
import Hero from "@/components/local/Hero";
import Nav from "@/components/local/Nav";
import Image from "next/image";
import HeroNext from "@/components/local/HeroNext";
import { motion as m } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import HeroMid from "@/components/local/HeroMid";
import HeroCentral from "@/components/local/HeroCentral";
import HeroRes from "@/components/local/HeroRes";
import Reviews from "@/components/local/Reviews";
import HeroBlockCMD from "@/components/local/HeroBlockCMD";
import HeroBlockRes from "@/components/local/HeroBlockRes";
import FooterMain from "@/components/local/FooterMain";

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroNext />
      <div className="md:hidden">
        <m.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView="animate"
          transition={{ duration: 0.5 }}
          whileHover={{
            rotate: "-2.5deg",
            scale: 1.1,
          }}
          className=" mx-2 border-2 h-[455px] border-gray-400 dark:border-black px-5 py-5 rounded-xl dark:bg-blue-1000 bg-white"
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
            <span className="mx-2">[999/9999]</span>
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
      <Separator />
      <Hero />
      <Separator />
      <HeroMid />
      <Separator />
      <HeroCentral />
      <HeroRes />
      <HeroBlockCMD />
      <HeroBlockRes />
      <Reviews />
      <hr className="my-4 mx-4 dark:hidden"/>
      <FooterMain />
    </main>
  );
}
